/// <reference path="../pb_data/types.d.ts" />

// Scorecard email — sent after a scorecard_requests record is created.
//
// Robust data handling: json fields in the PocketBase JSVM can be returned by
// record.get() as a raw byte sequence (json.RawMessage / []byte) that goja
// exposes as an array of byte-numbers. Iterating that directly produced one
// garbage row per byte. normalizeArray() reconstructs the real structured
// value from any of: a raw JSON string, a byte-number array, a plain JS array,
// or a goja-wrapped Go slice.

// Convert a possibly-malformed json field value into a plain JS array.
function normalizeArray(val) {
  if (val == null) return [];

  // Raw JSON text — parse it.
  if (typeof val === "string") {
    return tryParseArray(val);
  }

  // Byte array (json.RawMessage exposed as numbers) — reconstruct the string
  // it represents, then parse that as JSON.
  if (Array.isArray(val) && val.length > 0 && typeof val[0] === "number") {
    let s = "";
    for (let i = 0; i < val.length; i++) {
      s += String.fromCharCode(val[i]);
    }
    return tryParseArray(s);
  }

  // Already a proper JS array of objects.
  if (Array.isArray(val)) {
    return val;
  }

  // Go-backed slice/object — clone through JSON.
  try {
    const cloned = JSON.parse(JSON.stringify(val));
    return Array.isArray(cloned) ? cloned : [];
  } catch (_) {
    return [];
  }
}

function tryParseArray(s) {
  try {
    const parsed = JSON.parse(s);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

// Escape user-provided text for safe HTML insertion.
function esc(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

onRecordAfterCreateSuccess((e) => {
  const email = e.record.get("email");
  const totalScoreRaw = e.record.get("totalScore");

  const categoryScores = normalizeArray(e.record.get("categoryScores"));
  const priorities = normalizeArray(e.record.get("priorities"));

  const bookingUrl = "https://fantastical.app/mattlafleur/forest-city-cpa";

  // Reconcile the overall score from the category breakdown so the email
  // always agrees with the on-screen result and the category totals sum up.
  let totalScore;
  if (categoryScores.length > 0) {
    let sum = 0;
    for (let i = 0; i < categoryScores.length; i++) {
      const c = categoryScores[i];
      const s = c && typeof c.score === "number" ? c.score : Number(c && c.score) || 0;
      sum += s;
    }
    totalScore = sum;
  } else if (typeof totalScoreRaw === "number") {
    totalScore = totalScoreRaw;
  } else {
    totalScore = Number(totalScoreRaw) || 0;
  }

  // Classification + brief explanation (mirrors on-screen labels).
  let label;
  let explanation;
  if (totalScore <= 4) {
    label = "Build the foundation";
    explanation =
      "Several core financial practices are not in place yet. The next steps below are the place to start.";
  } else if (totalScore <= 7) {
    label = "Close the gaps";
    explanation =
      "You have a working foundation with specific gaps to close. Focus on the priorities below.";
  } else {
    label = "Strengthen your decision-making";
    explanation =
      "Strong foundation. Keep refining how your numbers drive decisions as the organization grows.";
  }

  // ── Category breakdown ──
  const renderCategories = () => {
    if (categoryScores.length === 0) {
      return '<p style="margin:0;color:#555;font-size:15px;">See your full breakdown on the results page.</p>';
    }
    const rows = categoryScores
      .map((c) => {
        const name = c && c.name ? c.name : "—";
        const score = c && typeof c.score === "number" ? c.score : Number(c && c.score) || 0;
        const max = c && c.total ? c.total : 2;
        return (
          '<tr>' +
            '<td style="padding:10px 0;font-size:15px;color:#0F1820;border-bottom:1px solid #ece7dd;">' +
            esc(name) +
            "</td>" +
            '<td style="padding:10px 0;text-align:right;font-size:15px;font-weight:600;color:#477956;border-bottom:1px solid #ece7dd;">' +
            score +
            "/" +
            max +
            "</td>" +
          "</tr>"
        );
      })
      .join("");
    return '<table style="width:100%;border-collapse:collapse;">' + rows + "</table>";
  };

  // ── Priorities / next steps ──
  const renderPriorities = () => {
    if (priorities.length === 0) {
      return '<p style="margin:0;color:#555;font-size:15px;line-height:1.5;">No priority gaps surfaced in your answers. Keep reviewing forecast accuracy, reporting usefulness, and changing needs as the organization grows.</p>';
    }
    const items = priorities
      .map((p, i) => {
        const cat = p && p.category ? p.category : "";
        const rec = p && p.recommendation ? p.recommendation : "";
        const why = p && p.why ? p.why : "";
        return (
          '<tr>' +
            '<td style="padding:0 0 16px 0;">' +
              '<p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#0F1820;">' +
                (i + 1) + ". " + esc(cat) +
              "</p>" +
              (rec
                ? '<p style="margin:0 0 4px 0;font-size:15px;line-height:1.5;color:#333;">' + esc(rec) + "</p>"
                : "") +
              (why
                ? '<p style="margin:0;font-size:13px;line-height:1.5;color:#777;">' + esc(why) + "</p>"
                : "") +
            "</td>" +
          "</tr>"
        );
      })
      .join("");
    return '<table style="width:100%;border-collapse:collapse;">' + items + "</table>";
  };

  // ── HTML email ──
  const html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">' +
      // Header
      '<div style="background:#0F1820;color:#ffffff;padding:28px 24px;text-align:center;">' +
        '<h1 style="margin:0 0 4px 0;font-size:22px;font-weight:700;letter-spacing:0.01em;">Forest City CPA</h1>' +
        '<p style="margin:0;color:#F2D09F;font-size:13px;text-transform:uppercase;letter-spacing:0.18em;">Absolute Financial Clarity</p>' +
      "</div>" +
      // Score block
      '<div style="padding:32px 24px 8px 24px;text-align:center;background:#F9F6F0;">' +
        '<p style="margin:0 0 6px 0;color:#7a8a82;font-size:12px;text-transform:uppercase;letter-spacing:0.16em;">Your Financial Visibility Scorecard</p>' +
        '<p style="margin:0 0 8px 0;font-size:44px;font-weight:700;color:#477956;line-height:1;">' + totalScore + '<span style="font-size:22px;color:#0F1820;opacity:0.45;">/10</span></p>' +
        '<p style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#0F1820;">' + label + "</p>" +
        '<p style="margin:0 auto 28px auto;max-width:440px;font-size:15px;line-height:1.55;color:#555;">' + explanation + "</p>" +
      "</div>" +
      // Category breakdown
      '<div style="padding:8px 24px 24px 24px;background:#F9F6F0;">' +
        '<div style="background:#ffffff;border:1px solid #e5e0d6;padding:20px 22px;">' +
          '<p style="margin:0 0 12px 0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:#7a8a82;">Category breakdown</p>' +
          renderCategories() +
        "</div>" +
      "</div>" +
      // Next steps
      '<div style="padding:28px 24px 8px 24px;background:#ffffff;">' +
        '<p style="margin:0 0 14px 0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:#7a8a82;">Recommended next steps</p>' +
        renderPriorities() +
      "</div>" +
      // Booking CTA
      '<div style="padding:24px 24px 32px 24px;background:#ffffff;text-align:center;">' +
        '<p style="margin:0 0 16px 0;font-size:15px;line-height:1.5;color:#0F1820;">Want to talk through your results with a CPA?</p>' +
        '<a href="' + bookingUrl + '" style="display:inline-block;background:#477956;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 30px;border-radius:3px;">Review my results with Matt</a>' +
        '<p style="margin:14px 0 0 0;font-size:13px;color:#999;">A free 15-minute conversation with Matt LaFleur, CPA.</p>' +
      "</div>" +
      // Disclaimer + contact footer
      '<div style="padding:22px 24px;background:#0F1820;color:#b9c2c9;font-size:12px;line-height:1.6;text-align:center;">' +
        '<p style="margin:0 0 10px 0;">This scorecard is a brief self-assessment based on your answers. It is not a review of your books or a comprehensive evaluation of financial health.</p>' +
        '<p style="margin:0 0 10px 0;">' +
          '<a href="mailto:hello@forestcity.pro" style="color:#F2D09F;text-decoration:none;">hello@forestcity.pro</a>' +
          "&nbsp;&middot;&nbsp;" +
          '<a href="tel:+12165504689" style="color:#F2D09F;text-decoration:none;">216-550-4689</a>' +
          "&nbsp;&middot;&nbsp;" +
          '<a href="https://forestcitycpa.com" style="color:#F2D09F;text-decoration:none;">forestcitycpa.com</a>' +
        "</p>" +
        "<p style='margin:0;'>&copy; " + new Date().getFullYear() + " Forest City CPA. All rights reserved.</p>" +
      "</div>" +
    "</div>";

  // ── Plain-text version ──
  const textLines = [];
  textLines.push("Forest City CPA — Absolute Financial Clarity");
  textLines.push("Your Financial Visibility Scorecard");
  textLines.push("");
  textLines.push("Score: " + totalScore + "/10 — " + label);
  textLines.push(explanation);
  textLines.push("");
  textLines.push("Category breakdown:");
  if (categoryScores.length === 0) {
    textLines.push("- See your full breakdown on the results page.");
  } else {
    for (let i = 0; i < categoryScores.length; i++) {
      const c = categoryScores[i];
      const name = c && c.name ? c.name : "—";
      const score = c && typeof c.score === "number" ? c.score : Number(c && c.score) || 0;
      const max = c && c.total ? c.total : 2;
      textLines.push("- " + name + ": " + score + "/" + max);
    }
  }
  textLines.push("");
  textLines.push("Recommended next steps:");
  if (priorities.length === 0) {
    textLines.push("- No priority gaps surfaced. Keep reviewing forecast accuracy and reporting usefulness as you grow.");
  } else {
    for (let i = 0; i < priorities.length; i++) {
      const p = priorities[i];
      const cat = p && p.category ? p.category : "";
      const rec = p && p.recommendation ? p.recommendation : "";
      const why = p && p.why ? p.why : "";
      textLines.push((i + 1) + ". " + cat);
      if (rec) textLines.push("   " + rec);
      if (why) textLines.push("   " + why);
    }
  }
  textLines.push("");
  textLines.push("Review my results with Matt:");
  textLines.push(bookingUrl);
  textLines.push("A free 15-minute conversation with Matt LaFleur, CPA.");
  textLines.push("");
  textLines.push("This scorecard is a brief self-assessment based on your answers. It is not a review of your books or a comprehensive evaluation of financial health.");
  textLines.push("");
  textLines.push("hello@forestcity.pro");
  textLines.push("216-550-4689");
  textLines.push("forestcitycpa.com");
  const text = textLines.join("\n");

  const message = new MailerMessage({
    from: { name: "Forest City CPA" },
    to: [{ address: email }],
    subject: "Your Financial Visibility Scorecard — Forest City CPA",
    html: html,
    text: text,
  });

  try {
    $app.newMailClient().send(message);
  } catch (err) {
    $app
      .logger()
      .error("scorecard email failed", "to", email, "err", String(err));
  }

  e.next();
}, "scorecard_requests");
