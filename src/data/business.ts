export const BUSINESS = {
  name: 'Vegas Vogue Woodworks',
  legalName: 'Vegas Vogue Woodworks',
  tagline: 'Custom Woodworking with a Touch of Extravagance',
  phone: '(702) 343-1078',
  phoneHref: 'tel:+17023431078',
  whatsapp: 'https://wa.me/17023431078',
  email: 'mert@vegasvoguewoodworks.com',
  address: {
    street: '2915 Losee Road #107',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
  },
  geo: { lat: 36.2137232, lng: -115.1307684 },
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=2915+Losee+Rd+%23107,+North+Las+Vegas,+NV+89030',
  expoUrl: 'https://www.vegasvogueexpo.com/',
  instagram: 'https://www.instagram.com/vegasvoguewoodworks/',
  facebook: 'https://www.facebook.com/profile.php?id=61563850406096',
  hours: 'Mon–Sat: 8am – 6pm',
  owner: 'Mert',
  serviceAreas: [
    'Las Vegas',
    'Henderson',
    'Summerlin',
    'North Las Vegas',
    'Los Angeles',
    'Orange County',
    'Newport Beach',
    'Laguna Beach',
    'Beverly Hills',
    'Palos Verdes',
  ],
  // GA4 carried over from the previous site; kept so its owner's reporting continues.
  gaId: 'G-GY8QBE9BE4',
  // GA4 owned by us (account "Vegas Vogue Woodworks", property 560672386). Receives page
  // views and the conversion events in lib/analytics.ts.
  ownGaId: 'G-V0YMB8HTEY',
  // Search Console verification for https://vegasvoguewoodworks.com/ (gokhankelebek@gmail.com).
  searchConsoleVerification: 'XJW_BS4cYqKaJa5jpwWUyXCyhRSpcneFwHdJuvcG3bg',
} as const;
