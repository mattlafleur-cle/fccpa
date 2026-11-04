# forestcity.pro

Static rebuild of the Forest City site (forestcity.pro, with forestcitycpa.com redirecting to /cpa), moved off Hostinger Horizons.

- `apps/web/`: the site. React + Vite, exported from Horizons, with the Horizons editor tooling and PocketBase backend removed.
- `apps/web/functions/api/submit.js`: Cloudflare Pages Function that emails the four site forms through Resend.
- `content/`: archive of the live site's text and an inventory of its forms and images, captured November 4, 2026.

## Local development

```
cd apps/web
npm install
npm run dev        # site at http://localhost:3000
npm run build      # static output in apps/web/dist
```

## Hosting: Cloudflare Pages

Connect this GitHub repo in Cloudflare (Workers & Pages > Create > Pages > Connect to Git):

| Setting | Value |
|---|---|
| Production branch | `main` |
| Root directory | `apps/web` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Environment variables (Settings > Variables and Secrets, Production):

| Name | Value |
|---|---|
| `RESEND_API_KEY` | API key from resend.com (mark as Secret) |
| `MAIL_FROM` | `Forest City <forms@send.forestcity.pro>` (must be on a domain verified in Resend) |
| `NOTIFY_TO` | optional, comma-separated; defaults to `hello@forestcity.pro` |

Any unknown path falls back to the app, which shows its own 404 page. Redirects live in `apps/web/public/_redirects`.

## Forms

All forms POST JSON to `/api/submit`. Nothing is stored; each submission is emailed.

| Form | Page | Emails |
|---|---|---|
| `contact` | /contact | notification to NOTIFY_TO |
| `review` | /cpa/review-services | notification to NOTIFY_TO |
| `referral` | /cpa/referral-rewards | notification to NOTIFY_TO |
| `scorecard` | /cpa/financial-visibility-check | scorecard to the visitor, plus a notification to NOTIFY_TO |
