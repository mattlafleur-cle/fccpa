// Cloudflare Pages Function: POST /api/submit
//
// Replaces the Hostinger Horizons PocketBase backend. Every site form posts
// here as JSON: { form: "contact" | "review" | "referral" | "scorecard", data: {...} }.
// Submissions are not stored; they are emailed through Resend (https://resend.com).
//
// Required environment variables (Cloudflare Pages > Settings > Variables and Secrets):
//   RESEND_API_KEY  secret API key from Resend
//   MAIL_FROM       verified sender, e.g. "Forest City <forms@send.forestcity.pro>"
// Optional:
//   NOTIFY_TO       comma-separated inbox list for notifications (default hello@forestcity.pro)

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const FORMS = {
  contact: {
    subject: (d) => `New website inquiry: ${d.fullName || 'unknown'} (${d.practiceArea || 'Other'})`,
    title: 'New Inquiry',
    intro: 'A new inquiry was submitted through the forestcity.pro contact form.',
    required: ['fullName', 'email', 'message'],
    fields: [
      ['fullName', 'Full name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['practiceArea', 'Practice area'],
      ['message', 'Message'],
    ],
  },
  review: {
    subject: (d) => `New financial statement review inquiry: ${d.organizationName || d.fullName || 'unknown'}`,
    title: 'New Financial Statement Review Inquiry',
    intro: 'A new inquiry was submitted through the review form on /cpa/review-services.',
    required: ['fullName', 'email'],
    fields: [
      ['fullName', 'Full name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['organizationName', 'Organization'],
      ['organizationType', 'Organization type'],
      ['requestedBy', 'Who asked for the review'],
      ['deadline', 'Deadline'],
      ['message', 'Anything we should know'],
    ],
  },
  referral: {
    subject: (d) => `New referral from ${d.yourName || 'unknown'}: ${d.referralName || d.referralBusiness || d.referralEmail}`,
    title: 'New Referral',
    intro: 'A new referral was submitted through /cpa/referral-rewards.',
    required: ['yourName', 'yourEmail', 'referralEmail'],
    fields: [
      ['yourName', 'Referred by'],
      ['yourEmail', 'Referrer email'],
      ['referralName', 'Referral name'],
      ['referralBusiness', 'Referral business'],
      ['referralEmail', 'Referral email'],
      ['why', 'Why they would benefit'],
    ],
  },
  scorecard: {
    subject: (d) => `Scorecard requested: ${d.email} (${scorecardTotal(d)}/10)`,
    title: 'Financial Visibility Scorecard Requested',
    intro: 'Someone completed the Financial Visibility Health Check and asked for their scorecard by email. A copy was sent to them.',
    required: ['email'],
    fields: [
      ['email', 'Email'],
      ['organization', 'Organization'],
      ['concern', 'Main concern'],
    ],
  },
};

const MAX_FIELD = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(value) {
  if (value == null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function clean(data) {
  const out = {};
  for (const [k, v] of Object.entries(data || {})) {
    if (typeof v === 'string') out[k] = v.trim().slice(0, MAX_FIELD);
    else out[k] = v;
  }
  return out;
}

function asArray(v) {
  return Array.isArray(v) ? v.slice(0, 20) : [];
}

function scorecardTotal(d) {
  const cats = asArray(d.categoryScores);
  if (cats.length) return cats.reduce((s, c) => s + (Number(c?.score) || 0), 0);
  return Number(d.totalScore) || 0;
}

function notificationHtml(cfg, d) {
  const rows = cfg.fields
    .map(([key, label]) => {
      const raw = d[key];
      const value = raw
        ? key.toLowerCase().includes('email')
          ? `<a href="mailto:${esc(raw)}" style="color:#1a3a52;">${esc(raw)}</a>`
          : `<span style="white-space:pre-wrap;">${esc(raw)}</span>`
        : '<em style="color:#999;">not provided</em>';
      return `<p style="margin:10px 0;"><strong>${esc(label)}:</strong> ${value}</p>`;
    })
    .join('');
  const submitted = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'long', timeStyle: 'short' });
  return `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1a3a52;color:#fff;padding:20px;text-align:center;">
    <h1 style="margin:0;font-size:22px;">Forest City</h1>
    <p style="margin:5px 0 0;font-size:14px;">${esc(cfg.title)}</p>
  </div>
  <div style="padding:20px;background:#f9f9f9;">
    <p style="color:#333;margin-top:0;">${esc(cfg.intro)}</p>
    <div style="background:#fff;padding:15px;border-left:4px solid #1a3a52;">
      ${rows}
      <p style="margin:10px 0;"><strong>Submitted:</strong> ${esc(submitted)} ET</p>
    </div>
  </div>
</div>`;
}

function scorecardSummaryHtml(d) {
  const cats = asArray(d.categoryScores)
    .map((c) => `<li>${esc(c?.name)}: ${Number(c?.score) || 0}/${Number(c?.total) || 2}</li>`)
    .join('');
  const pri = asArray(d.priorities).map((p) => `<li>${esc(p?.category)}: ${esc(p?.recommendation)}</li>`).join('');
  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:12px auto 0;">
  <p><strong>Score:</strong> ${scorecardTotal(d)}/10</p>
  ${cats ? `<p><strong>Categories</strong></p><ul>${cats}</ul>` : ''}
  ${pri ? `<p><strong>Priorities</strong></p><ul>${pri}</ul>` : ''}
</div>`;
}

// Visitor-facing scorecard email, ported from the Horizons PocketBase hook.
function scorecardEmail(d) {
  const categoryScores = asArray(d.categoryScores);
  const priorities = asArray(d.priorities);
  const totalScore = scorecardTotal(d);

  let label;
  let explanation;
  if (totalScore <= 4) {
    label = 'Build the foundation';
    explanation = 'Several core financial practices are not in place yet. The next steps below are the place to start.';
  } else if (totalScore <= 7) {
    label = 'Close the gaps';
    explanation = 'You have a working foundation with specific gaps to close. Focus on the priorities below.';
  } else {
    label = 'Strengthen your decision-making';
    explanation = 'Strong foundation. Keep refining how your numbers drive decisions as the organization grows.';
  }

  const catRows = categoryScores.length
    ? '<table style="width:100%;border-collapse:collapse;">' +
      categoryScores
        .map(
          (c) =>
            '<tr><td style="padding:10px 0;font-size:15px;color:#0F1820;border-bottom:1px solid #ece7dd;">' +
            esc(c?.name || '') +
            '</td><td style="padding:10px 0;text-align:right;font-size:15px;font-weight:600;color:#477956;border-bottom:1px solid #ece7dd;">' +
            (Number(c?.score) || 0) +
            '/' +
            (Number(c?.total) || 2) +
            '</td></tr>',
        )
        .join('') +
      '</table>'
    : '<p style="margin:0;color:#555;font-size:15px;">See your full breakdown on the results page.</p>';

  const priRows = priorities.length
    ? '<table style="width:100%;border-collapse:collapse;">' +
      priorities
        .map(
          (p, i) =>
            '<tr><td style="padding:0 0 16px 0;">' +
            '<p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#0F1820;">' + (i + 1) + '. ' + esc(p?.category || '') + '</p>' +
            (p?.recommendation ? '<p style="margin:0 0 4px 0;font-size:15px;line-height:1.5;color:#333;">' + esc(p.recommendation) + '</p>' : '') +
            (p?.why ? '<p style="margin:0;font-size:13px;line-height:1.5;color:#777;">' + esc(p.why) + '</p>' : '') +
            '</td></tr>',
        )
        .join('') +
      '</table>'
    : '<p style="margin:0;color:#555;font-size:15px;line-height:1.5;">No priority gaps surfaced in your answers. Keep reviewing forecast accuracy, reporting usefulness, and changing needs as the organization grows.</p>';

  const html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">' +
    '<div style="background:#0F1820;color:#ffffff;padding:28px 24px;text-align:center;">' +
    '<h1 style="margin:0 0 4px 0;font-size:22px;font-weight:700;letter-spacing:0.01em;">Forest City CPA</h1>' +
    '<p style="margin:0;color:#F2D09F;font-size:13px;text-transform:uppercase;letter-spacing:0.18em;">Absolute Financial Clarity</p>' +
    '</div>' +
    '<div style="padding:32px 24px 8px 24px;text-align:center;background:#F9F6F0;">' +
    '<p style="margin:0 0 6px 0;color:#7a8a82;font-size:12px;text-transform:uppercase;letter-spacing:0.16em;">Your Financial Visibility Scorecard</p>' +
    '<p style="margin:0 0 8px 0;font-size:44px;font-weight:700;color:#477956;line-height:1;">' + totalScore + '<span style="font-size:22px;color:#0F1820;opacity:0.45;">/10</span></p>' +
    '<p style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#0F1820;">' + label + '</p>' +
    '<p style="margin:0 auto 28px auto;max-width:440px;font-size:15px;line-height:1.55;color:#555;">' + explanation + '</p>' +
    '</div>' +
    '<div style="padding:8px 24px 24px 24px;background:#F9F6F0;"><div style="background:#ffffff;border:1px solid #e5e0d6;padding:20px 22px;">' +
    '<p style="margin:0 0 12px 0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:#7a8a82;">Category breakdown</p>' +
    catRows +
    '</div></div>' +
    '<div style="padding:28px 24px 8px 24px;background:#ffffff;">' +
    '<p style="margin:0 0 14px 0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:#7a8a82;">Recommended next steps</p>' +
    priRows +
    '</div>' +
    '<div style="padding:24px 24px 32px 24px;background:#ffffff;text-align:center;">' +
    '<p style="margin:0 0 16px 0;font-size:15px;line-height:1.5;color:#0F1820;">Want to talk through your results with a CPA?</p>' +
    '<a href="' + BOOKING_URL + '" style="display:inline-block;background:#477956;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 30px;border-radius:3px;">Review my results with Matt</a>' +
    '<p style="margin:14px 0 0 0;font-size:13px;color:#999;">A free 15-minute conversation with Matt LaFleur, CPA.</p>' +
    '</div>' +
    '<div style="padding:22px 24px;background:#0F1820;color:#b9c2c9;font-size:12px;line-height:1.6;text-align:center;">' +
    '<p style="margin:0 0 10px 0;">This scorecard is a brief self-assessment based on your answers. It is not a review of your books or a comprehensive evaluation of financial health.</p>' +
    '<p style="margin:0 0 10px 0;"><a href="mailto:hello@forestcity.pro" style="color:#F2D09F;text-decoration:none;">hello@forestcity.pro</a>&nbsp;&middot;&nbsp;' +
    '<a href="tel:+12165504689" style="color:#F2D09F;text-decoration:none;">216-550-4689</a>&nbsp;&middot;&nbsp;' +
    '<a href="https://forestcitycpa.com" style="color:#F2D09F;text-decoration:none;">forestcitycpa.com</a></p>' +
    "<p style='margin:0;'>&copy; " + new Date().getFullYear() + ' Forest City CPA. All rights reserved.</p>' +
    '</div></div>';

  const lines = [
    'Forest City CPA: Absolute Financial Clarity',
    'Your Financial Visibility Scorecard',
    '',
    `Score: ${totalScore}/10 (${label})`,
    explanation,
    '',
    'Category breakdown:',
    ...(categoryScores.length
      ? categoryScores.map((c) => `- ${c?.name || ''}: ${Number(c?.score) || 0}/${Number(c?.total) || 2}`)
      : ['- See your full breakdown on the results page.']),
    '',
    'Recommended next steps:',
    ...(priorities.length
      ? priorities.flatMap((p, i) => [
          `${i + 1}. ${p?.category || ''}`,
          ...(p?.recommendation ? [`   ${p.recommendation}`] : []),
          ...(p?.why ? [`   ${p.why}`] : []),
        ])
      : ['- No priority gaps surfaced. Keep reviewing forecast accuracy and reporting usefulness as you grow.']),
    '',
    'Review my results with Matt:',
    BOOKING_URL,
    'A free 15-minute conversation with Matt LaFleur, CPA.',
    '',
    'This scorecard is a brief self-assessment based on your answers. It is not a review of your books or a comprehensive evaluation of financial health.',
    '',
    'hello@forestcity.pro',
    '216-550-4689',
    'forestcitycpa.com',
  ];

  return { subject: 'Your Financial Visibility Scorecard from Forest City CPA', html, text: lines.join('\n') };
}

async function sendEmail(env, message) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: env.MAIL_FROM, ...message }),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  const cfg = FORMS[body?.form];
  if (!cfg) return json({ ok: false, error: 'Unknown form.' }, 400);

  const data = clean(body.data);

  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (data.website) return json({ ok: true });

  for (const key of cfg.required) {
    if (!data[key]) return json({ ok: false, error: `Missing ${key}.` }, 400);
  }
  for (const key of ['email', 'yourEmail', 'referralEmail']) {
    if (data[key] && !EMAIL_RE.test(data[key])) {
      return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
    }
  }

  if (!env.RESEND_API_KEY || !env.MAIL_FROM) {
    console.error('Form email is not configured: set RESEND_API_KEY and MAIL_FROM.');
    return json({ ok: false, error: 'Form is temporarily unavailable.' }, 503);
  }

  const notifyTo = (env.NOTIFY_TO || 'hello@forestcity.pro')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const replyTo = data.email || data.yourEmail;

  try {
    if (body.form === 'scorecard') {
      await sendEmail(env, { to: [data.email], reply_to: 'hello@forestcity.pro', ...scorecardEmail(data) });
    }
    await sendEmail(env, {
      to: notifyTo,
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject: cfg.subject(data),
      html: notificationHtml(cfg, data) + (body.form === 'scorecard' ? scorecardSummaryHtml(data) : ''),
    });
  } catch (err) {
    console.error('form email failed', body.form, String(err));
    return json({ ok: false, error: 'We could not send your submission.' }, 502);
  }

  return json({ ok: true });
}
