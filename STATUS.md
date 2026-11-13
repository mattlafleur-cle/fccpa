# Migration status (as of November 13, 2026)

Goal: move forestcity.pro (and the forestcitycpa.com redirect) off Hostinger Horizons to free Cloudflare Pages hosting.

## Done
- Site converted from the Horizons export; builds and all pages render (`apps/web`).
- Forms email hello@forestcity.pro via `apps/web/functions/api/submit.js` (Resend). Referral form fixed; scorecard requests now notify Forest City.
- Broken Fantastical iframe and dead Privacy/Terms links fixed.
- Sitemap submitted to Bing (live Horizons sitemap); new sitemap drops /admin/login and /landing-point-welcome.

## Next, in order (owner: Matt unless noted)
1. hPanel: check renewal dates, auto-renew and renewal prices for forestcity.pro and forestcitycpa.com.
2. Screenshot DNS records for both domains (hPanel > Domains > DNS / Nameservers); Claude marks the Google Workspace records to keep.
3. Save the 4 Hostinger-hosted images (URLs in `content/INVENTORY.md`), including the headshot; add to repo.
4. Create free Cloudflare and Resend accounts.
5. Move nameservers to Cloudflare, connect repo to Cloudflare Pages (settings in README), test preview and all four forms.
6. Point domains at the new site, add forestcitycpa.com -> forestcity.pro/cpa 301 redirect, turn on Crawler Hints. Cancel Horizons one week later.

## Optional (Claude, no input needed)
- Prerender pages so search engines get full HTML without running JavaScript.
