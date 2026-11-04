// Sends a site form to the Cloudflare Pages Function at /api/submit,
// which emails it (see functions/api/submit.js). Throws on failure.
export async function submitForm(form, data) {
  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form, data }),
  });
  let body = null;
  try {
    body = await res.json();
  } catch {
    // non-JSON error page
  }
  if (!res.ok || !body?.ok) {
    throw new Error(body?.error || `Submission failed (${res.status})`);
  }
  return body;
}
