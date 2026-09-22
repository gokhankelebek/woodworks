# Website updates — September 22, 2026

Website-relevant conclusions from VV SEO and the accessible Mert Kalemci conversation. This note intentionally contains no chat exports or account credentials.

## Applied

- **September 1–2 gallery request:** Added a distinct Laguna Beach whole-home project from the shared “Laguna Beach August 2026” folder, with 12 selected photographs and the September 10 walkthrough video. Existing Laguna Beach projects remain separate. Source: https://drive.google.com/drive/folders/1TZJ5-N9GKozD81KGO_79VZCtNLVhpW_3
- **Project organization:** The new project appears under kitchens, closets, and feature walls. The existing architectural arches project now identifies the Thai restaurant context from the August 18 message and also appears under commercial work.
- **September 10 brand clarification:** Added the relationship with Vegas Vogue Expo on About and in the footer. Exhibition render examples were not presented as completed Woodworks projects.
- **September 21 conversion priorities:** Call, directions, then inquiry are represented in the mobile contact bar and contact-page shortcuts. Directions open a Google Maps route to the existing workshop address.
- **Thank-you page:** Adapted the September 16 Expo tracking suggestion to the Woodworks form. Successful submissions go to `/thank-you/`; failed submissions remain on the contact form. The confirmation page is marked noindex and excluded from the sitemap.

## Measurement handoff

The site sends these events to the existing GTM data layer:

| Event | Trigger | Non-personal parameters |
| --- | --- | --- |
| `phone_click` | Telephone link clicked | `page_path`, `link_placement` |
| `directions_click` | Google Maps directions link clicked | `page_path`, `link_placement` |
| `generate_lead` | Server confirms an AJAX inquiry succeeded | `form_id: project_inquiry` |

These are website hooks. Google Ads conversion actions, GTM tags, attribution, and campaign budgets were not changed. A phone click does not prove a completed call. For form conversion reporting, choose either the successful-submission event or the thank-you URL, rather than counting both. Merely loading or refreshing the thank-you page does not emit `generate_lead`. Native non-JavaScript form submissions redirect to the same confirmation URL but do not emit that JavaScript event.

## Needs clarification

- **Smith Center:** Photos were shared on September 10, but the conversation does not identify Woodworks' scope. The folder is named “Smith Center 10/2026,” which also makes the date unclear. Do not imply that Woodworks fabricated the theater, seating, acoustic panels, or piano from these photos alone. Confirm the specific commission and approved wording before publishing. Source: https://drive.google.com/drive/folders/1qHvhiKiUc76Z1DPAO3Clk37zw8opzpmf
- **Expo-only items:** Email-account changes, Expo phone-number corrections, exhibition renders, and advertising budgets concern separate systems; they were not applied to Woodworks.

Validation: `npm run build`, `node --test tests/contact.test.mjs`, portfolio filter checks, and desktop/mobile browser review. Email delivery is mocked in tests; no test inquiries were sent to the business.
