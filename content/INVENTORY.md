# forestcity.pro content inventory

Captured 2026-11-04 with Firecrawl (`formats: markdown, links`, `onlyMainContent: false`, `waitFor: 3000`). The site is a Hostinger Horizons build: a Vite/React single-page app (`/assets/index-C9-tk1U9.js`, `/assets/index-BLTG8eAb.css`) with a PocketBase backend proxied at `/hcgi/platform`. Firecrawl renders the JS, so every page below returned real content (HTTP 200). No page returned an error or an empty SPA shell.

- Page files: `content/pages/<slug>.md`. Front matter holds `url`, `title`, `description` (meta description), `og_image`, plus `robots`, `footer_tagline` or `note` where relevant.
- The shared header nav and footer were removed from every page. One copy is in `content/pages/_footer.md`. Two pages have a different footer tagline (recorded as `footer_tagline` in their front matter). `/admin/login` has no header or footer.
- The minified site bundle is saved as `content/_source/index-C9-tk1U9.js`. It is the only source for text that the live page doesn't render until someone clicks. That text includes the accordion answers, the quiz, form handlers and the admin UI. Recovered text was appended to the affected page files under a `## [Recovered ...]` heading with an HTML comment marking it.
- `/` and `/cpa` were captured separately and are not in this folder.

## Pages

| URL | File | Title | H1 | Purpose |
|---|---|---|---|---|
| https://forestcity.pro/ | (captured separately) | | | Umbrella home |
| https://forestcity.pro/cpa | (captured separately) | Cleveland CPA & Accounting Firm \| Forest City CPA | Absolute financial clarity. | CPA practice hub |
| https://forestcitycpa.com | (none, same content as /cpa) | Cleveland CPA & Accounting Firm \| Forest City CPA | Absolute financial clarity. | Redirects to **https://forestcity.pro/cpa**. Final URL reported as `https://forestcity.pro/cpa`, status 200, content identical to /cpa. |
| https://forestcity.pro/ai | ai.md | Forest City AI \| Practical AI Implementation & Strategy | Intelligence applied. | AI services practice |
| https://forestcity.pro/consulting | consulting.md | Forest City Consulting \| Strategy, Operations & Leadership | Direction and momentum. | Management consulting practice |
| https://forestcity.pro/faq | faq.md | FAQ \| Forest City CPA, AI & Consulting | Questions before we begin. | Firm-wide FAQ (accordion) |
| https://forestcity.pro/contact | contact.md | Contact Forest City \| CPA, Tax & Consulting in Cleveland, OH | (none; H2 "Start a conversation.") | Contact details + inquiry form |
| https://forestcity.pro/individual-tax-preparation | individual-tax-preparation.md | Individual Tax Preparation in Northeast Ohio \| Forest City CPA | Individual & Family Tax Preparation in Northeast Ohio | Personal 1040 prep service |
| https://forestcity.pro/landing-point-welcome | landing-point-welcome.md | Welcome, Landing Point Clients \| Forest City CPA | A personal welcome to Landing Point clients | Unlisted (noindex) welcome for transferred Landing Point Financial Group clients; YouTube video |
| https://forestcity.pro/admin/login | admin__login.md | Admin Login - Forest City | Forest City | Admin sign-in (noindex, nofollow) |
| https://forestcity.pro/cpa/about | cpa__about.md | About Forest City CPA & Matt LaFleur, CPA — Cleveland, Ohio | Trusted financial leadership, built on real credentials. | Owner bio, credentials, name change from Cleveland CPAs and More |
| https://forestcity.pro/cpa/nonprofit | cpa__nonprofit.md | Church and Nonprofit Accounting \| Forest City CPA \| Cleveland, OH | Financial clarity for ministries and nonprofits. | Short church/nonprofit service page (linked in nav) |
| https://forestcity.pro/cpa/nonprofit-religious-organizations | cpa__nonprofit-religious-organizations.md | Nonprofit & Religious Organization Accounting — Forest City CPA | Financial clarity for mission-driven organizations. | Long nonprofit/religious service page, open FAQ (not linked from nav) |
| https://forestcity.pro/cpa/tax-planning | cpa__tax-planning.md | Tax Strategy and Planning for Business Owners \| Forest City CPA \| Cleveland, OH | Planning happens before December. | Quarterly tax planning service |
| https://forestcity.pro/cpa/review-services | cpa__review-services.md | Reviewed Financial Statements \| Forest City CPA Ohio | Your lender needs reviewed financial statements. We can help. | SSARS review engagements + inquiry form |
| https://forestcity.pro/cpa/financial-health | cpa__financial-health.md | Bookkeeping, Structure, and Financial Cleanup \| Forest City CPA \| Cleveland, OH | Get the fundamentals right. | Cleanup/bookkeeping fixed-fee projects |
| https://forestcity.pro/cpa/financial-visibility | cpa__financial-visibility.md | Financial Visibility & Health Check \| Forest City CPA Cleveland, OH | Financial Visibility & Health Check | Health-check marketing page with testimonials |
| https://forestcity.pro/cpa/financial-visibility-check | cpa__financial-visibility-check.md | Financial Visibility Health Check \| Forest City CPA \| Cleveland, OH | Do your numbers give you clarity or more questions? | Interactive 10-question self-assessment quiz |
| https://forestcity.pro/cpa/tax-strategy-diagnosis | cpa__tax-strategy-diagnosis.md | Free Tax Strategy Diagnosis \| Forest City CPA Cleveland | Free Tax Strategy Diagnosis | Lead-gen landing page with embedded booking iframe |
| https://forestcity.pro/cpa/referral-rewards | cpa__referral-rewards.md | Referral Rewards \| Forest City CPA | A Simple Introduction Could Turn Into Your Next Guardians Suite Night. | Referral program + referral form |

Other routes defined in the bundle (not scraped separately):
- `/admin`: the protected admin dashboard. It redirects to `/admin/login` when the visitor isn't signed in.
- `/referral-rewards`: client-side redirect to `/cpa/referral-rewards`.
- `/tax-strategy-diagnosis`: client-side redirect to `/cpa/tax-strategy-diagnosis`.
- `*`: a 404 component.

Not linked from the main nav or footer: `/landing-point-welcome`, `/cpa/about` (linked only from body copy), `/cpa/nonprofit-religious-organizations`, `/cpa/financial-visibility`, `/cpa/financial-visibility-check` (linked from /cpa body), `/cpa/tax-strategy-diagnosis`, `/cpa/referral-rewards`, `/admin/login`.

## Capture caveats

- **Collapsed accordions (answers not in the rendered DOM).** The live pages use Radix accordions, which mount answer text only when a question is opened. The scraped markdown therefore has questions only on these pages: `/faq` (7), `/individual-tax-preparation` (7), `/landing-point-welcome` (6) and `/cpa/review-services` (6). All 26 answers were recovered verbatim from the JS bundle and appended to those files. The `/faq` answers also match the page's FAQPage JSON-LD. The FAQ on `/cpa/nonprofit-religious-organizations` is rendered open, so it was captured normally.
- **Quiz.** `/cpa/financial-visibility-check` rendered only its intro and "sample results" card. The questions, scoring and results copy were recovered from the bundle and appended.
- **Iframe error text.** On `/cpa/tax-strategy-diagnosis` the scrape contains "fantastical.app is blocked … ERR_BLOCKED_BY_RESPONSE". That text is the browser error shown inside the booking iframe, because fantastical.app refuses to be framed. It is not site copy.
- **YouTube embed residue.** On `/landing-point-welcome` the lines "Matt Greeting 10-07-26 - YouTube", "Tap to unmute", "Forest City ProNo subscribers" and the yt3.ggpht.com avatar come from the YouTube player chrome inside the embed. They are not authored copy.
- **Footer links.** "Privacy Policy" and "Terms of Service" both point to `https://forestcity.pro/`. No privacy or terms pages exist.

## Dynamic / backend-dependent features

### Backend

- **PocketBase** via the Hostinger Horizons proxy: the JS SDK is instantiated as `new PocketBase('/hcgi/platform')`. Collections used by the front end:
  - `inquiries`: create (contact form); getFullList sorted `-created`, update `{read: bool}`, delete (admin dashboard).
  - `review_inquiries`: create (review-services form).
  - `scorecard_requests`: create (quiz email capture).
  - `admin`: auth collection, `authWithPassword` (admin login).
  - `_externalAuths`: SDK helpers only.
- An inline script in `index.html` whitelists errors from `/hcgi/platform/api/collections/*auth-with-password*` and `/hcgi/api/*` ("Insufficient credits", "INTEGRATION_NOT_CONFIGURED"). This is Horizons sandbox boilerplate. Other inline scripts post runtime errors and navigation events to the parent Horizons editor frame. The static rebuild doesn't need them.
- Any email notification for new records, such as actually emailing the quiz scorecard, would be a server-side PocketBase hook or Horizons integration. The front end shows none, and it can't be verified from outside.

### Forms

1. **Contact inquiry form** (`/contact`) submits to PocketBase `inquiries.create`.
   - Fields: `fullName` ("Full Name"), `email` ("Email Address"), `phone` ("Phone Number"), `practiceArea` (select "Area of Interest", default `Other`), `message` ("How can we help?"). Submit button: "Submit Inquiry".
   - `practiceArea` options (value / label): `Forest City AI` / Forest City AI; `Forest City CPA` / Forest City CPA; `Forest City Consulting` / Forest City Consulting; `Other` / Other / General Inquiry.
   - Success toast: "Inquiry submitted successfully." / "A member of our team will be in touch shortly." Error toast: "Submission failed." / "Please try again or contact us directly via phone or email."
   - Mismatch: the admin dashboard filter offers "Forest City Advisory" instead of "Forest City Consulting", so Consulting inquiries likely don't match that filter.
2. **Financial statement review inquiry** (`/cpa/review-services`, anchor `#inquiry`) submits to PocketBase `review_inquiries.create`.
   - Fields: `fullName` ("Full name"), `email`, `phone`, `organizationName`, `organizationType` (Business / Nonprofit or ministry / Other, default Business), `requestedBy` ("Who asked for the review?"), `deadline` ("Deadline if any"), `message` ("Anything we should know"). Button: "Send inquiry".
   - Success toast: "Inquiry sent." / "A member of our team will be in touch shortly."
   - The admin dashboard reads only `inquiries`, so review inquiries are not visible in `/admin`. They are visible only in PocketBase itself.
3. **Referral form** (`/cpa/referral-rewards`) **does not submit anywhere.**
   - The handler is `e.preventDefault(); console.log('Referral submission:', data); setSubmitted(true)`, so submissions are logged to the browser console and lost.
   - Fields: `yourName` (required), `yourEmail` (required), `referralName`, `referralBusiness`, `referralEmail` (required), `why`. Button: "Submit Referral →".
4. **Quiz scorecard email capture** (`/cpa/financial-visibility-check`, results screen) submits to PocketBase `scorecard_requests.create`.
   - Payload: `{email, organization, concern, totalScore, categoryScores, answers:[{step, question, answer}], priorities, sourcePage}`.
   - The UI promises "Your scorecard is on the way. Check your inbox", which depends on an unseen server hook (see Backend).
5. **Admin login** (`/admin/login`): fields "Email Address" and "Password", button "Sign In". Calls PocketBase `admin.authWithPassword`.

### Quiz / scoring tool

`/cpa/financial-visibility-check` is a client-side 10-question assessment:
- 5 categories (Reporting, Cash, Systems, Controls, Decisions) with 2 questions each.
- Answers are Yes / No / Not sure, scored 1 / 0 / 0, for a total of 0–10.
- Score bands: Build the foundation (0–4), Close the gaps (5–7), Strengthen your decision-making (8–10).
- It shows up to 3 priorities, each with a recommendation and a "why" sentence, plus strengths.
- The score is shown without an email; an email is optional, to receive the scorecard.

All copy and logic are in `cpa__financial-visibility-check.md` (recovered section) and in the bundle. Fully rebuildable client-side; only the email step needs a backend.

### Login / admin

- `/admin/login` leads to `/admin`, the "Admin Dashboard" for the PocketBase `inquiries` collection.
- Dashboard features: search by name or email, filter by practice area, columns (Name & Contact, Practice Area, Message, Received, Actions), mark read/unread, and delete with a confirmation dialog.
- There is no other authenticated area. A static rebuild must replace this with an email or form-service inbox.

### Referral program

- `/cpa/referral-rewards` offers three rewards: a Guardians Club Suite for 2 + Marble Room dinner, a $500 flight credit, or $500 off the next planning cycle.
- Terms: Ohio business owners only, one reward per closed referral, $250K+ revenue qualification, reward issued after first paid engagement.
- No tracking or backend exists, and the form is non-functional (see Forms #3).

### Analytics

- The quiz calls a helper that pushes `assessment_started`, `assessment_completed`, `booking_link_clicked` and `scorecard_requested` to `window.dataLayer` and calls `gtag()` when it exists.
- No GA or GTM script is loaded in `index.html`, so these events currently go nowhere.

### Third-party embeds and links

- **Fantastical booking**: `https://fantastical.app/mattlafleur/forest-city-cpa`.
  - It is the header "Book a Clarity Call" button on every page, and almost every CTA on the CPA pages (Schedule a conversation / consultation, Book a Clarity Call, See availability, and both buttons on /cpa/financial-visibility).
  - It is **embedded as an iframe** on `/cpa/tax-strategy-diagnosis` (title "Book Tax Strategy Diagnosis", 700px tall). Fantastical blocks framing (ERR_BLOCKED_BY_RESPONSE), so the embed is broken. The fallback "Open Booking in New Tab →" link works.
- **YouTube embed** on `/landing-point-welcome`: `https://www.youtube-nocookie.com/embed/FjFYwVi1Q7g` ("Matt Greeting 10-07-26"; watch URL https://www.youtube.com/watch?v=FjFYwVi1Q7g; channel "Forest City Pro" UCldhpdYS1Jr-aLCbrTJqdEg).
- **LinkedIn**: https://www.linkedin.com/in/mattlafleurcleveland/ ("Meet Matt" on /cpa).
- **Contact**: `mailto:hello@forestcity.pro`, `tel:+12165504689`.
- **Fonts**: Google Fonts may be loaded via the CSS bundle (not inspected).
- **Structured data**: per-page JSON-LD injected by react-helmet. Examples: FAQPage on /faq; `#organization`, `#localbusiness`, `#accounting-service`, `#matt-lafleur` and `#faq` ids are referenced in the bundle. A static rebuild should re-emit these.

### Images

| URL | Used on |
|---|---|
| https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png | og:image / twitter:image site-wide; hero and CTA background "Cleveland skyline at dusk across Lake Erie" / "Cleveland waterfront at dusk" (cpa/about, cpa/nonprofit-religious-organizations, cpa/financial-visibility) |
| https://images.hostinger.com/0d6a540f-0f6d-40fe-905e-ee44ae3ed210.png | "Boardroom in a Cleveland high-rise (at night)" (cpa/about, cpa/nonprofit-religious-organizations, cpa/financial-visibility) |
| https://images.hostinger.com/91e13a6c-5ffa-4b27-bb44-e0571a04ced5.png | "Misty Northeast Ohio forest at dawn" (cpa/nonprofit-religious-organizations, cpa/financial-visibility) |
| https://horizons-cdn.hostinger.com/c6c1f45b-a6a0-4e8e-989b-cbba6e4f2541/3c207db40910814d3a53ce68bc3a16f5.png | Headshot "Matt LaFleur, CPA" (landing-point-welcome, /cpa) |
| https://images.unsplash.com/photo-1698435378315-3cf2e03473a4 | Hero "Financial analysis and business architecture" / "Personal tax preparation…" (cpa/nonprofit, cpa/tax-planning, cpa/review-services, cpa/financial-health, individual-tax-preparation, /cpa) |
| https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5 | /ai hero |
| https://images.unsplash.com/photo-1685955011452-2d9cf1cb4081 | /consulting hero |
| https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa | /consulting "Business Strategy" |
| https://images.unsplash.com/photo-1692914274476-0e6920cc80cf | /consulting "Operations Improvement" |
| https://images.unsplash.com/photo-1702547403011-a0f439b50aa8 | /consulting "Organizational Design" |
| https://images.unsplash.com/photo-1681949103006-70066fb25dfe | /consulting "Leadership Development" |
| https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2 | /faq hero |
| https://images.unsplash.com/photo-1702396341404-159617692947 | In bundle only ("Cleveland architecture and forest landscape", full-screen hero, likely the home page) |
| https://images.unsplash.com/photo-1501683567677-568cfd15361c | In bundle only ("Cleveland architecture showcasing the city's industrial heritage", likely the home page) |
| https://forestcity.pro/favicon.png | favicon / apple-touch-icon |
| https://yt3.ggpht.com/WRbL1q…=s68-c-k-c0x00ffffff-no-rj | YouTube channel avatar inside the embed (not site-owned) |

The Unsplash URLs are hot-linked without size parameters, and the Hostinger-hosted images live on Horizons infrastructure. Both should be downloaded and self-hosted before the Horizons site is retired.
