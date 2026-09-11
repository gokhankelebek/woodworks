# Vegas Vogue Woodworks — Website

Luxury custom furniture & millwork site for [vegasvoguewoodworks.com](https://vegasvoguewoodworks.com).
Built with [Astro](https://astro.build) — fully static, image-optimized, local-SEO-ready.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at localhost:4321
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Structure

- `src/data/business.ts` — single source of truth for phone, address, email, socials, GA id
- `src/data/projects.ts` — portfolio case studies (16 projects). Add a project here + drop images in `src/assets/projects/<slug>/` and pages build automatically
- `src/data/services.ts` — the 6 service pages (copy, features, FAQs w/ FAQ schema)
- `src/data/locations.ts` — Las Vegas & Los Angeles service-area pages
- `images/` — original raw exports (not served; source material only)
- `public/videos/` — project videos used on detail pages

30 pages are generated: home, portfolio + 16 project pages, services index + 6 service pages, 2 location pages, about, contact, 404.

## SEO already wired in

- `LocalBusiness` JSON-LD on every page (NAP, geo, hours, service areas)
- `Service` + `FAQPage` schema on service pages, breadcrumbs on projects
- Per-page titles/descriptions, canonical URLs, OG tags
- Keyword-slugged, responsive, lazy-loaded WebP images with descriptive alt text
- `sitemap-index.xml` (auto) + `robots.txt`
- Existing GA4 property (`G-GY8QBE9BE4`) carried over

## Cutover checklist (WordPress → this site)

The live domain still runs the old WordPress/Elementor site. To transition without losing
rankings or leads:

1. **Contact form backend — Resend** (implemented in `api/contact.js`, a Vercel function):
   - Create a [Resend](https://resend.com) account and **verify the domain**
     `vegasvoguewoodworks.com` (add the DKIM/SPF records Resend shows to Cloudflare DNS) —
     required for the `leads@vegasvoguewoodworks.com` from-address.
   - Create an API key and set it as the `RESEND_API_KEY` environment variable in the
     Vercel project settings.
   - Leads go to mert@vegasvoguewoodworks.com; customers get a branded auto-reply.
   - Spam: honeypot field server-side; add Cloudflare Turnstile later if bots get through.
   - Test a submission before and after go-live.
2. **Deploy — Vercel**: import the GitHub repo at vercel.com/new (framework auto-detects
   Astro; build `npm run build`, output `dist/`). `vercel.json` carries the 301 redirect
   map and `api/contact.js` deploys automatically as a serverless function.
3. **Point DNS** for `vegasvoguewoodworks.com` at the new host. Keep the domain on
   Cloudflare DNS — the existing `www → apex` 301 lives there and should be preserved.
4. **Verify redirects**: every old WordPress URL (pages, 13 blog posts, categories) 301s to
   a mapped page — spot-check `/kitchen-cabinets/`, `/gallery/`, `/about-us/`,
   `/average-cost-of-custom-kitchen-cabinets-las-vegas/` after go-live.
5. **Google Search Console**: verify the property, submit `sitemap-index.xml`, and watch
   Coverage for 404s the first two weeks (add redirects for anything unmapped).
6. **Google Business Profile**: update the website link; keep NAP identical to the footer.
7. **Blog decision**: the old site's 13 posts currently 301 to topic-matched pages. If
   Search Console shows any of them had real traffic, port those posts into the new site
   (an Astro content collection) and change their redirects to the new post URLs.
8. Old WP content gap: `/bathroom-cabinets/` and `/vanity-cabinets/` redirect to
   `/services/` — consider a dedicated Bathroom Vanities service page later.

## Post-launch growth (recommended)

- Collect Google reviews (add Review schema once real reviews exist)
- Post each new project to Instagram + as a new entry in `projects.ts` (fresh content = rankings)
- Consider city-specific landing pages (Henderson, Summerlin, Newport Beach) once traffic data shows demand
