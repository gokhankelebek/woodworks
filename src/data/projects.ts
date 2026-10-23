export type ProjectCategory =
  | 'kitchens'
  | 'closets'
  | 'feature-walls'
  | 'furniture'
  | 'offices'
  | 'commercial';

export interface Project {
  slug: string;
  title: string;
  location: string;
  region: 'las-vegas' | 'los-angeles' | 'other';
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  imageAlts?: string[];
  summary: string;
  body: string[];
  details?: string[];
  video?: string;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  kitchens: 'Custom Kitchens',
  closets: 'Walk-In Closets',
  'feature-walls': 'Feature Walls',
  furniture: 'Custom Furniture',
  offices: 'Offices & Built-Ins',
  commercial: 'Commercial',
};

export const PROJECTS: Project[] = [
  {
    slug: 'laguna-beach-whole-home',
    title: 'Laguna Beach — A Home in Warm Oak',
    location: 'Laguna Beach, CA',
    region: 'los-angeles',
    category: 'kitchens',
    additionalCategories: ['closets', 'feature-walls'],
    featured: true,
    video: '/videos/laguna-beach-whole-home.mp4',
    summary:
      'Custom cabinetry and millwork across a Laguna Beach home: a kitchen, walk-in closet, bathroom cabinetry, fireplace wall, and illuminated bar storage.',
    body: [
      'Warm oak finishes connect the rooms in this Laguna Beach residence. The custom cabinetry brings a consistent material palette to the kitchen, walk-in closet, bathroom, and bar, while each space has its own storage layout and details.',
      'In the walk-in closet, open hanging space and illuminated shelving surround a glass-topped drawer island. Brass-toned pulls and bathroom cabinetry carry the same warmth into the adjoining suite, where vertical wood slats frame the fireplace.',
      'The kitchen combines paneled cabinet fronts with open shelves and integrated lighting. Glass-front bar cabinets and display shelving extend that cabinetry into the entertaining spaces. Explore the finished rooms in the photos and short walkthrough below.',
    ],
    details: [
      'Custom kitchen and bar cabinetry',
      'Walk-in closet with a glass-topped island',
      'Bathroom cabinetry with brass-toned hardware',
      'Vertical wood slat fireplace surround',
      'Integrated shelf and cabinet lighting',
    ],
    imageAlts: [
      'Warm oak walk-in closet with illuminated shelves and a glass-topped island in Laguna Beach',
      'Full view of the custom walk-in closet with hanging rails and island drawers',
      'Custom oak bathroom vanity beneath a stone countertop and wall mirrors',
      'Bathroom cabinet fronts and brass-toned pulls continuing into the walk-in closet',
      'Vertical wood slat fireplace wall and matching console in the bedroom',
      'Glass-topped closet island with accessory display and storage drawers',
      'Illuminated closet shelving with dedicated shoe storage',
      'Custom kitchen cabinetry beside a stone island and stainless steel appliances',
      'Close-up of kitchen cabinet drawers with dark handles and vertical wood grain',
      'Glass-front bar cabinetry with integrated lighting beside the dining area',
      'Custom bar shelves and lower cabinets with integrated lighting',
      'Kitchen display cabinet with glass doors, open shelves, and warm lighting',
    ],
  },
  {
    slug: 'laguna-beach-kitchen',
    title: 'Sleek, Warm & Functional Kitchen',
    location: 'Laguna Beach, CA',
    region: 'los-angeles',
    category: 'kitchens',
    featured: true,
    summary:
      'A full custom walnut kitchen in Laguna Beach — floor-to-ceiling bookmatched cabinetry, integrated appliances, and a dramatic stone waterfall island.',
    body: [
      'This Laguna Beach kitchen strikes the balance every luxury kitchen aims for: sleek enough to feel modern, warm enough to feel like home. We designed, built, and installed every cabinet you see — floor-to-ceiling walnut panels with continuous, bookmatched grain that wraps the entire room.',
      'The appliances disappear into the millwork. Wall ovens, refrigeration, and even the water dispenser sit flush within the walnut field, so nothing interrupts the lines. A honed black marble island with a full waterfall edge anchors the space, paired with hand-blown glass pendants.',
      'Every panel was veneer-matched in our Las Vegas workshop, finished, and installed by our own team — no subcontractors, no compromises.',
    ],
    details: [
      'Floor-to-ceiling bookmatched walnut cabinetry',
      'Fully integrated Miele appliance suite',
      'Continuous-grain panel matching across 3 walls',
      'Designed, fabricated & installed in-house',
    ],
  },
  {
    slug: 'laguna-beach-master-suite',
    title: 'Master Suite, Crafted Inch by Inch',
    location: 'Laguna Beach, CA',
    region: 'los-angeles',
    category: 'closets',
    featured: true,
    video: '/videos/laguna-beach-master-suite-video.mp4',
    summary:
      'A warm, modern master suite — custom nightstands, a full-wall closet system, and a floating vanity, every piece built to the millimeter.',
    body: [
      'We had the pleasure of crafting every inch of this warm, modern Laguna Beach master suite. Custom floating nightstands, a full wall of wardrobe storage, and a floating double vanity — all cut from the same palette so the room reads as one continuous piece of furniture.',
      'The wall-to-wall closet swallows an entire wardrobe behind flat, handle-less fronts. Interior fittings — drawers, dividers, lighting — were configured around how the clients actually dress, not around a catalog.',
      'This is what full-suite custom work looks like: one workshop, one design language, zero off-the-shelf boxes.',
    ],
    details: [
      'Full-wall wardrobe with push-to-open fronts',
      'Floating nightstands & vanity',
      'Integrated LED lighting',
      'Single-species material palette throughout',
    ],
  },
  {
    slug: 'newport-beach-walk-in-closet',
    title: 'A Tailored Walk-In Dream',
    location: 'Newport Beach, CA',
    region: 'los-angeles',
    category: 'closets',
    featured: true,
    summary:
      'A boutique-style walk-in closet in Newport Beach — smoked-glass wardrobe doors, brass-lit shelving, and white-oak interiors worthy of a Rodeo Drive salon.',
    body: [
      'For this Newport Beach client we designed a walk-in closet that feels less like storage and more like a private boutique. Smoked-glass doors in slim black frames run floor to ceiling on both sides, turning the wardrobe itself into display.',
      'Behind the glass: rift white-oak interiors with integrated LED strips that wash every shelf in warm light. A central island of drawers, glass-topped display shelving for accessories, and a crystal chandelier finish the room.',
      'Every elevation was modeled in 3D and approved by the client before a single panel was cut. The result blends couture-level presentation with everyday practicality.',
    ],
    details: [
      'Floor-to-ceiling smoked-glass wardrobe fronts',
      'Rift white-oak interiors with LED shelf lighting',
      'Velvet-lined accessory drawers',
      'Full 3D design approval before fabrication',
    ],
  },
  {
    slug: 'walnut-feature-wall',
    title: 'Parametric Walnut Feature Wall',
    location: 'Los Angeles, CA',
    region: 'los-angeles',
    category: 'feature-walls',
    featured: true,
    summary:
      'A sculptural, wave-form walnut feature wall — hundreds of individually cut fins forming a three-dimensional ripple, delivered and installed as functional art.',
    body: [
      'Just delivered and installed: a fully custom walnut feature wall built from hundreds of individually profiled fins. Together they form a three-dimensional ripple that shifts with the light and the viewer’s angle — furniture-grade sculpture at architectural scale.',
      'Each fin was CNC-profiled, hand-sanded, and finished before assembly, then mounted over a concealed cabinet base that provides real storage beneath the art.',
      'Pieces like this are where our workshop shines: parametric design software up front, old-world hand finishing at the end.',
    ],
    details: [
      'Hundreds of individually CNC-profiled walnut fins',
      'Integrated base cabinetry with concealed storage',
      'Hand-sanded and finished before assembly',
      'Engineered mounting system for a seamless install',
    ],
  },
  {
    slug: 'coastal-living-kitchen',
    title: 'A Kitchen for Coastal Living',
    location: 'Southern California',
    region: 'los-angeles',
    category: 'kitchens',
    summary:
      'Elegance built for real life — a custom coastal kitchen pairing light-toned cabinetry with clean lines and generous, hidden storage.',
    body: [
      'This custom kitchen was designed around coastal living: bright, calm, and effortless. Light-toned custom cabinetry keeps the space airy while deep drawers and full-height pantry walls hide the practical life of a busy home.',
      'We engineered the layout around the clients’ routines — coffee station here, glassware there, landing space beside every appliance. Beauty first, but never at the cost of function.',
    ],
    details: [
      'Full-height pantry wall with internal drawers',
      'Soft-close hardware throughout',
      'Custom range hood surround',
    ],
  },
  {
    slug: 'modern-minimalist-kitchen',
    title: 'Sleek. Minimal. Built to Last.',
    location: 'Los Angeles, CA',
    region: 'los-angeles',
    category: 'kitchens',
    summary:
      'A fully custom minimalist kitchen — handle-less fronts, perfect reveals, and hardware engineered to outlive trends.',
    body: [
      'Minimalism is the least forgiving style there is: no trim, no hardware, nowhere for a flaw to hide. This fully custom kitchen is built on perfect reveals — every gap identical, every front dead flat.',
      'Push-to-open mechanisms and interior organization systems keep the surfaces untouched. What you can’t see is the point.',
    ],
    details: [
      'Handle-less, push-to-open fronts',
      'Millimeter-consistent reveals throughout',
      'Premium European hardware',
    ],
  },
  {
    slug: 'palos-verdes-residence',
    title: 'A Refined Finish in Palos Verdes',
    location: 'Palos Verdes, CA',
    region: 'los-angeles',
    category: 'kitchens',
    video: '/videos/palos-verdes-residence-video.mp4',
    summary:
      'Whole-home custom millwork for a Palos Verdes residence — a refined, unified finish carried through every room.',
    body: [
      'For this Palos Verdes home we delivered a refined finish across the residence — cabinetry and millwork designed as one continuous language rather than a room-by-room patchwork.',
      'One material story, one hardware standard, one level of finish — from the kitchen to the quietest hallway cabinet. That consistency is what separates a custom home from a customized one.',
    ],
    details: [
      'Whole-home cabinetry package',
      'Unified materials & finishes across rooms',
      'Design-to-install handled by one team',
    ],
  },
  {
    slug: 'closet-home-office',
    title: 'Walk-In Closet Meets Home Office',
    location: 'Las Vegas, NV',
    region: 'las-vegas',
    category: 'offices',
    summary:
      'A dual-purpose dream space — a custom walk-in closet and integrated home office designed for style and function in equal measure.',
    body: [
      'Two rooms’ worth of function in one seamless space: a full walk-in wardrobe system on one side, a built-in desk and workspace on the other, unified by shared materials and lighting.',
      'Cable management, task lighting, and closed storage keep the office side disciplined; glass-front wardrobes and display shelving give the closet side its boutique feel.',
    ],
    details: [
      'Integrated desk with concealed cable routing',
      'Glass-front wardrobe wall',
      'Shared material palette across both zones',
    ],
  },
  {
    slug: 'record-player-console',
    title: 'Bespoke Record Player Console',
    location: 'Las Vegas, NV',
    region: 'las-vegas',
    category: 'furniture',
    summary:
      'A fully custom vinyl console — designed and built around the client’s turntable, amplifier, and record collection.',
    body: [
      'Bringing vinyl dreams to life: this record player console was designed around the client’s exact equipment — turntable deck at the perfect height, ventilated amplifier bay, and record storage sized to the collection.',
      'One-of-a-kind pieces like this are pure furniture-making: proportion, grain selection, and joinery you’ll never find in a showroom.',
    ],
    details: [
      'Ventilated equipment bays',
      'Vinyl storage sized to the collection',
      'Solid wood construction, hand finished',
    ],
  },
  {
    slug: 'custom-office-built-ins',
    title: 'Custom Office Perfection',
    location: 'Las Vegas, NV',
    region: 'las-vegas',
    category: 'offices',
    summary:
      'A built-in bookshelf and cabinet wall designed for both function and elegance — a home office that means business.',
    body: [
      'Designed for both function and elegance: a full-wall built-in combining open bookshelves, closed cabinets, and an integrated work surface.',
      'Built-ins like this turn a spare room into the most-used room in the house — and they appraise like architecture, not furniture.',
    ],
    details: [
      'Full-wall bookshelf & cabinet system',
      'Integrated task lighting',
      'Adjustable shelving on concealed hardware',
    ],
  },
  {
    slug: 'climate-controlled-tv-console',
    title: 'Climate-Controlled Media Console',
    location: 'Denver, CO',
    region: 'other',
    category: 'furniture',
    summary:
      'A one-of-a-kind sculpted media console with built-in climate control — carved wave doors in a custom lacquer finish.',
    body: [
      'This one-of-a-kind piece was designed for a client who wanted their media console to be art. Three sculpted door panels — each carved with a different wave pattern — finished in a custom turquoise lacquer over a walnut case.',
      'Inside, active ventilation and climate control protect the electronics. Outside, it’s a statement piece that holds its own against a bold wallpapered wall.',
    ],
    details: [
      'CNC-carved sculptural door fronts',
      'Custom color lacquer finish',
      'Active ventilation & climate control',
      'Brass hardware & legs',
    ],
  },
  {
    slug: 'custom-arches-oversized-frame',
    title: 'Custom Arches & Oversized Frame',
    location: 'Las Vegas, NV',
    region: 'las-vegas',
    category: 'feature-walls',
    additionalCategories: ['commercial'],
    summary:
      'Handcrafted architectural arches and a custom oversized frame for a Thai restaurant in Las Vegas — curved woodwork that defines the dining space.',
    body: [
      'These arches and the custom oversized frame were handcrafted for a Thai restaurant in Las Vegas. The curved woodwork frames the dining booths and brings a warm, intimate rhythm to the restaurant interior.',
      'Curved work is the true test of a shop’s skill: every radius here was formed, faired, and finished by hand.',
    ],
    details: [
      'Hand-formed architectural arches',
      'Custom oversized frame fabrication',
      'Installed flush to existing architecture',
    ],
  },
  {
    slug: 'custom-seating-set',
    title: 'Fully Custom Seating Set',
    location: 'Aurora, CO',
    region: 'other',
    category: 'furniture',
    summary:
      'A fully custom seating set designed to complement the client’s existing interior — built from scratch, upholstered to spec.',
    body: [
      'For this client we created a fully custom seating set designed to perfectly complement the room it lives in — frames built in our workshop, finished and upholstered to the client’s specification.',
      'When the furniture is designed for the room instead of bought for it, everything fits: scale, tone, and comfort.',
    ],
    details: [
      'Custom-built hardwood frames',
      'Client-specified upholstery',
      'Proportioned to the room’s architecture',
    ],
  },
  {
    slug: 'newport-beach-gallery-console',
    title: 'A Gallery Piece for a Gallery Home',
    location: 'Newport Beach, CA',
    region: 'los-angeles',
    category: 'furniture',
    summary:
      'For a client whose home feels like a private art gallery — a bespoke display piece built to museum standards.',
    body: [
      'For a distinguished client in Newport Beach — whose home feels more like a private art gallery — we crafted a bespoke piece designed to live among serious art without apologizing.',
      'Commissions like this are conversations: sketches, samples, and mockups until the piece belongs to the house.',
    ],
    details: [
      'Museum-grade finish work',
      'Designed around the client’s art collection',
    ],
  },
  {
    slug: 'istanbul-mediterranean-restaurant',
    title: 'Custom Restaurant Millwork & Interior Build-Out',
    location: 'Fremont Street, Las Vegas, NV',
    region: 'las-vegas',
    category: 'commercial',
    featured: true,
    video: '/videos/istanbul-mediterranean-restaurant-video.mp4',
    summary:
      'Commercial restaurant millwork by Vegas Vogue Woodworks: service counters, wall paneling, and seating for Istanbul Mediterranean’s downtown Las Vegas location — a complete interior package, shop drawings to opening day.',
    body: [
      'We designed, fabricated, and installed the complete interior millwork package for this high-volume restaurant on Fremont Street: service counters, wall paneling, seating millwork, and brand moments throughout — commercial woodwork engineered for brutal daily wear while reading as hospitality design, not casework.',
      'The client, Istanbul Mediterranean, is one of the most popular Mediterranean restaurants in Las Vegas — and when they opened their downtown location, they trusted our workshop with the entire interior.',
      'Commercial work runs on deadlines. Our in-house team took this from shop drawings to opening day on schedule, coordinating directly with the GC and trades.',
    ],
    details: [
      'Full restaurant millwork package',
      'High-traffic commercial-grade construction',
      'Brand-integrated design moments',
      'Delivered on schedule for grand opening',
    ],
  },
  {
    slug: 'cherry-creek-salon',
    title: 'Custom Salon Millwork — 18 Stylist Stations',
    location: 'Cherry Creek, Denver, CO',
    region: 'other',
    category: 'commercial',
    summary:
      'For a well-known beauty salon in the heart of Cherry Creek — 18 bespoke stylist stations, matched, wired, and installed as one flowing interior.',
    body: [
      'For a well-known beauty salon in the heart of Cherry Creek, Denver, we crafted 18 bespoke stylist stations — each one integrating storage, tool management, power, and lighting into a single sculpted piece.',
      'Repeatable precision is its own discipline: eighteen identical stations, every reveal and every cable pass-through in exactly the same place. That’s what a real production workshop delivers.',
    ],
    details: [
      '18 identical custom stylist stations',
      'Integrated power & tool storage',
      'Commercial-grade finishes for daily salon use',
    ],
  },
];

export const featuredProjects = () => PROJECTS.filter((p) => p.featured);
export const projectsByCategory = (c: ProjectCategory) =>
  PROJECTS.filter((p) => p.category === c || p.additionalCategories?.includes(c));
export const projectsByRegion = (r: Project['region']) =>
  PROJECTS.filter((p) => p.region === r);
