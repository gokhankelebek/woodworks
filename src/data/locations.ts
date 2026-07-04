export interface LocationPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  neighborhoods: string[];
  region: 'las-vegas' | 'los-angeles';
  /** explicit project selection; falls back to region match when omitted */
  projectSlugs?: string[];
  proof: string;
}

export const LOCATIONS: LocationPage[] = [
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    metaTitle:
      'Custom Furniture & Cabinetry Las Vegas | Vegas Vogue Woodworks',
    metaDescription:
      'Las Vegas custom furniture makers and cabinet shop. Bespoke kitchens, closets, feature walls, and commercial millwork for Summerlin, Henderson, The Ridges, and the Strip. Call (702) 343-1078.',
    h1: 'Las Vegas’ custom woodworking studio',
    intro: [
      'Our workshop sits ten minutes from downtown Las Vegas — which means when you commission a piece from us, you can walk the floor, touch the veneers, and watch your project take shape. No overseas containers, no six-month mysteries.',
      'We build for the homes this city is famous for: high-rise residences on the Strip, custom estates in The Ridges and MacDonald Highlands, and family homes in Summerlin and Henderson that deserve better than builder-grade. And when Las Vegas businesses need interiors that work as hard as they do — like Istanbul Mediterranean’s downtown location — they come to us too.',
    ],
    neighborhoods: [
      'Summerlin',
      'The Ridges',
      'Henderson',
      'MacDonald Highlands',
      'Lake Las Vegas',
      'Southern Highlands',
      'Downtown / Fremont East',
      'The Strip',
    ],
    region: 'las-vegas',
    proof:
      'From a complete restaurant build-out on Fremont Street to bespoke home offices and one-of-a-kind furniture, here’s what we’ve built for Las Vegas.',
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    metaTitle:
      'Custom Furniture & Cabinetry Los Angeles | Newport Beach, Laguna Beach | Vegas Vogue Woodworks',
    metaDescription:
      'Custom kitchens, walk-in closets, and bespoke furniture for Los Angeles and Orange County — Newport Beach, Laguna Beach, Beverly Hills, Palos Verdes. Designed and installed by Vegas Vogue Woodworks.',
    h1: 'Custom woodwork for Los Angeles’ finest homes',
    intro: [
      'Some of our proudest work lives an ocean breeze away from our Las Vegas workshop: whole-home millwork in Palos Verdes, sculptural feature walls, and minimalist custom kitchens built for the Los Angeles standard of design.',
      'Los Angeles clients get the same single-team process — design and 3D approval, fabrication in our shop, then our own installers on site. We schedule installation in consolidated trips, protect the site like it’s our own home, and leave nothing behind but the work.',
    ],
    neighborhoods: [
      'Palos Verdes',
      'Beverly Hills',
      'Bel Air',
      'Manhattan Beach',
      'Malibu',
      'Hollywood Hills',
      'Brentwood',
      'Pacific Palisades',
    ],
    region: 'los-angeles',
    projectSlugs: [
      'palos-verdes-residence',
      'walnut-feature-wall',
      'modern-minimalist-kitchen',
      'coastal-living-kitchen',
    ],
    proof:
      'Palos Verdes residences, sculptural feature walls, minimalist kitchens — built in Vegas, installed in Los Angeles.',
  },
  {
    slug: 'orange-county',
    name: 'Orange County',
    metaTitle:
      'Custom Furniture & Cabinetry Orange County | Newport Beach, Laguna Beach | Vegas Vogue Woodworks',
    metaDescription:
      'Custom kitchens, walk-in closets, and bespoke furniture for Orange County — Newport Beach, Laguna Beach, Corona del Mar, Newport Coast. Designed, built, and installed by Vegas Vogue Woodworks. Call (702) 343-1078.',
    h1: 'Custom woodwork for Orange County’s coast',
    intro: [
      'Orange County is where some of our very best work lives: a full bookmatched-walnut kitchen in Laguna Beach, a boutique-style walk-in closet in Newport Beach, a master suite crafted inch by inch above the Pacific. Coastal homes here deserve millwork built to the same standard as the architecture.',
      'From Newport Coast to Dana Point, clients get our single-team process — design and 3D approval up front, fabrication in our own workshop, then our own installers on site in consolidated, white-glove trips. No local subcontractors, no telephone game between designer and builder.',
    ],
    neighborhoods: [
      'Newport Beach',
      'Laguna Beach',
      'Corona del Mar',
      'Newport Coast',
      'Crystal Cove',
      'Dana Point',
      'San Clemente',
      'Irvine',
    ],
    region: 'los-angeles',
    projectSlugs: [
      'laguna-beach-kitchen',
      'newport-beach-walk-in-closet',
      'laguna-beach-master-suite',
      'newport-beach-gallery-console',
      'coastal-living-kitchen',
    ],
    proof:
      'Laguna Beach kitchens and master suites, Newport Beach closets and gallery pieces — this is our Orange County résumé.',
  },
];
