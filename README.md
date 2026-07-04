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

## Before launch — TODO

1. **Contact form backend**: replace `YOUR_FORM_ID` in `src/components/ContactForm.astro`
   with a real [Formspree](https://formspree.io) form ID (free tier works), or any endpoint.
2. **Deploy**: `dist/` is a plain static site — Cloudflare Pages / Vercel / Netlify all work.
   Point the `vegasvoguewoodworks.com` DNS at the new host when ready.
3. **OG image**: add `public/og-default.jpg` (a hero shot, 1200×630) for social sharing cards.
4. Verify the site in **Google Search Console** and submit the sitemap.
5. Update the **Google Business Profile** to link service pages; keep NAP identical to the footer.

## Post-launch growth (recommended)

- Collect Google reviews (add Review schema once real reviews exist)
- Post each new project to Instagram + as a new entry in `projects.ts` (fresh content = rankings)
- Consider city-specific landing pages (Henderson, Summerlin, Newport Beach) once traffic data shows demand
