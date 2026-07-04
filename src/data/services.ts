import type { ProjectCategory } from './projects';

export interface Service {
  slug: string;
  title: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string[];
  features: { title: string; text: string }[];
  category: ProjectCategory;
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'custom-kitchens',
    title: 'Custom Kitchens & Cabinetry',
    navLabel: 'Custom Kitchens',
    metaTitle: 'Custom Kitchen Cabinets Las Vegas & Los Angeles | Vegas Vogue Woodworks',
    metaDescription:
      'Bespoke custom kitchens and cabinetry for luxury homes in Las Vegas and Los Angeles. Bookmatched walnut, integrated appliances, in-house design to installation. Call (702) 343-1078.',
    hero: 'Kitchens built like furniture, engineered like architecture.',
    intro: [
      'The kitchen is the most demanding room in a luxury home — it has to perform daily and still look like the reason you bought the house. We design, fabricate, and install fully custom kitchens: floor-to-ceiling cabinetry, bookmatched veneer work, integrated appliances, and stone-ready islands.',
      'Everything is built in our own Las Vegas workshop and installed by our own craftsmen. No imported boxes, no subcontracted finish work — one team from first sketch to final reveal.',
    ],
    features: [
      { title: 'Bookmatched Veneer Work', text: 'Continuous grain across entire walls of cabinetry — the signature of true custom work.' },
      { title: 'Fully Integrated Appliances', text: 'Refrigeration, ovens, and even water dispensers disappear flush into the millwork.' },
      { title: 'Engineered Storage', text: 'Interiors configured around how you actually cook, not around catalog modules.' },
      { title: 'In-House Everything', text: 'Design, CNC fabrication, finishing, and installation under one roof.' },
    ],
    category: 'kitchens',
    faq: [
      { q: 'How long does a custom kitchen take?', a: 'Most full custom kitchens run 8–14 weeks from approved design to installed, depending on scope and finishes. We give you a firm schedule before fabrication begins.' },
      { q: 'Do you work with our architect or designer?', a: 'Constantly. We produce shop drawings from architectural plans and coordinate directly with your designer, contractor, and stone fabricator.' },
      { q: 'What does a custom kitchen cost?', a: 'Our kitchens typically start in the mid five figures and scale with size and materials. After a consultation we provide a detailed, line-item proposal — no vague allowances.' },
    ],
  },
  {
    slug: 'walk-in-closets',
    title: 'Walk-In Closets & Wardrobes',
    navLabel: 'Walk-In Closets',
    metaTitle: 'Custom Walk-In Closets Las Vegas & Los Angeles | Vegas Vogue Woodworks',
    metaDescription:
      'Boutique-style custom walk-in closets: smoked-glass wardrobe doors, LED-lit oak interiors, islands and vanities. Serving Las Vegas, Henderson, and Los Angeles. Call (702) 343-1078.',
    hero: 'Your wardrobe deserves a room that dresses as well as you do.',
    intro: [
      'We build walk-in closets that feel like private boutiques: floor-to-ceiling glass-front wardrobes, LED-washed shelving, velvet-lined drawers, and center islands that display as beautifully as they store.',
      'Every closet starts with an inventory of what you own — suits, gowns, sneakers, watches — and is engineered around it. Then we model the room in 3D so you approve exactly what will be built.',
    ],
    features: [
      { title: 'Boutique Presentation', text: 'Smoked-glass doors, brass accents, and lighting that treats your wardrobe like retail display.' },
      { title: 'Inventory-Based Design', text: 'Hanging, folded, and accessory storage sized to your actual collection.' },
      { title: 'Integrated Lighting', text: 'LED shelf and rail lighting with motion or app control.' },
      { title: 'Islands & Vanities', text: 'Center islands, seating, and vanity stations built into the same design language.' },
    ],
    category: 'closets',
    faq: [
      { q: 'Can you convert a spare bedroom into a closet?', a: 'Yes — bedroom-to-dressing-room conversions are one of our most requested projects in Las Vegas and Los Angeles.' },
      { q: 'Do closets include lighting and power?', a: 'Yes. We integrate LED lighting, outlets inside drawers for devices, and coordinate any electrical work needed.' },
    ],
  },
  {
    slug: 'feature-walls',
    title: 'Feature Walls & Wall Paneling',
    navLabel: 'Feature Walls',
    metaTitle: 'Custom Wood Feature Walls & Paneling | Vegas Vogue Woodworks',
    metaDescription:
      'Sculptural wood feature walls, slat walls, and architectural paneling for luxury homes and businesses in Las Vegas and Los Angeles. Parametric design, hand finishing.',
    hero: 'Architecture-scale sculpture, in wood.',
    intro: [
      'A feature wall is the fastest way to make a room unforgettable. We design and build sculptural wood walls — parametric wave forms, slat systems, arched paneling — that function as permanent art.',
      'Our process pairs parametric design software with old-world hand finishing: every fin CNC-profiled to a digital model, every surface sanded and finished by hand before installation.',
    ],
    features: [
      { title: 'Parametric Forms', text: 'Three-dimensional wave and ripple walls modeled digitally, cut to the millimeter.' },
      { title: 'Integrated Storage', text: 'Concealed cabinetry built into the base of feature walls — art with function.' },
      { title: 'Arches & Curves', text: 'Hand-formed architectural arches, radius paneling, and custom oversized frames.' },
      { title: 'Concealed Installation', text: 'Engineered mounting systems — no visible fasteners, ever.' },
    ],
    category: 'feature-walls',
    faq: [
      { q: 'Can feature walls include a TV or fireplace?', a: 'Yes — we routinely integrate media, fireplaces, lighting, and hidden storage into feature wall designs.' },
      { q: 'Do you do commercial feature walls?', a: 'Absolutely. Restaurants, salons, and offices use our feature walls as brand statements. See our commercial work.' },
    ],
  },
  {
    slug: 'custom-furniture',
    title: 'Custom Furniture',
    navLabel: 'Custom Furniture',
    metaTitle: 'Custom Furniture Makers Las Vegas & Los Angeles | Vegas Vogue Woodworks',
    metaDescription:
      'One-of-a-kind custom furniture: consoles, tables, seating, and statement pieces designed and handcrafted for luxury homes in Las Vegas and Los Angeles.',
    hero: 'Pieces no showroom will ever have.',
    intro: [
      'Some things shouldn’t be bought off a floor. We design and build one-of-a-kind furniture — record consoles built around your turntable, climate-controlled media cabinets, seating sets proportioned to your room, display pieces worthy of a private gallery.',
      'Each commission is a collaboration: sketches, material samples, and mockups until the piece belongs to your home and no one else’s.',
    ],
    features: [
      { title: 'Designed Around You', text: 'Built for your equipment, your collection, your room — not a market average.' },
      { title: 'Sculpted Surfaces', text: 'CNC-carved door fronts, custom lacquers, and hand-rubbed finishes.' },
      { title: 'Honest Construction', text: 'Solid hardwoods, premium veneers, and joinery built to outlive trends.' },
      { title: 'Functional Engineering', text: 'Ventilation, climate control, cable management — invisible but essential.' },
    ],
    category: 'furniture',
    faq: [
      { q: 'Can you build from a photo or inspiration image?', a: 'From vision to reality is literally our process — bring inspiration images and we’ll design, sample, and build from them.' },
      { q: 'Do you ship or install outside Las Vegas?', a: 'Yes. We deliver and install across Nevada, California, and beyond — recent pieces have gone to Los Angeles, Orange County, and Denver.' },
    ],
  },
  {
    slug: 'home-offices',
    title: 'Home Offices & Built-Ins',
    navLabel: 'Offices & Built-Ins',
    metaTitle: 'Custom Home Office Built-Ins Las Vegas & Los Angeles | Vegas Vogue Woodworks',
    metaDescription:
      'Custom home office built-ins, bookshelf walls, and desk systems for luxury homes in Las Vegas and Los Angeles. Designed, built, and installed in-house.',
    hero: 'The most-used room in the house deserves the best millwork in it.',
    intro: [
      'A proper built-in turns a spare room into the room. We design and build full-wall bookshelf systems, integrated desks, and hybrid spaces — like walk-in closets that double as home offices — with the cable management, lighting, and closed storage that keep work beautiful.',
      'Built-ins appraise like architecture, not furniture. They’re one of the highest-return investments you can make in a luxury home.',
    ],
    features: [
      { title: 'Full-Wall Systems', text: 'Bookshelves, cabinets, and desks composed as one architectural elevation.' },
      { title: 'Disciplined Cabling', text: 'Concealed routing, in-drawer power, and dock stations — no visible wires.' },
      { title: 'Task & Accent Lighting', text: 'Integrated LED lighting for shelves and work surfaces.' },
      { title: 'Hybrid Spaces', text: 'Office + closet, office + media room — dual-purpose rooms that actually work.' },
    ],
    category: 'offices',
    faq: [
      { q: 'Do built-ins add home value?', a: 'Yes — quality built-ins are treated as part of the architecture in appraisals and are a strong selling feature in the luxury market.' },
    ],
  },
  {
    slug: 'commercial-millwork',
    title: 'Commercial Millwork',
    navLabel: 'Commercial',
    metaTitle: 'Commercial Millwork Las Vegas | Restaurants, Salons, Retail | Vegas Vogue Woodworks',
    metaDescription:
      'Commercial millwork and interior build-outs for restaurants, salons, and retail in Las Vegas. Full packages from shop drawings to opening day. Call (702) 343-1078.',
    hero: 'Millwork that survives the rush and sells the brand.',
    intro: [
      'Commercial spaces punish weak millwork. We build restaurant interiors, salon stations, retail fixtures, and office fronts engineered for daily abuse — while looking like hospitality design, not casework.',
      'Our commercial résumé includes the complete interior package for Istanbul Mediterranean’s downtown Las Vegas location and 18 bespoke stylist stations for a Cherry Creek salon in Denver. We work from your architect’s drawings, coordinate with your GC, and hit opening dates.',
    ],
    features: [
      { title: 'Full Packages', text: 'Counters, paneling, seating millwork, fixtures, and brand moments — one contract.' },
      { title: 'Commercial-Grade Build', text: 'Materials and construction specified for high-traffic, high-abuse environments.' },
      { title: 'Repeatable Precision', text: 'Multi-unit fixture runs — 18 identical stations, identical to the millimeter.' },
      { title: 'Deadline Discipline', text: 'Shop drawings to opening day, on schedule, coordinated with your GC.' },
    ],
    category: 'commercial',
    faq: [
      { q: 'Do you handle licensed commercial work?', a: 'We work alongside your general contractor and their licensed trades, delivering and installing the millwork package to spec and schedule.' },
      { q: 'What commercial projects fit you best?', a: 'Restaurants, salons, boutique retail, and offices where the interior is part of the brand. If millwork is the star of the space, we’re the right shop.' },
    ],
  },
];
