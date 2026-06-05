import { pt } from '../lib/pt'
import { img } from './site'

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking'

export const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  seo: {
    title: 'About Cairo By Nights | Egyptian Restaurant Carlton',
    description:
      'Family-owned halal Egyptian restaurant in Carlton. Expert Egyptian chefs, traditional recipes, cultural authenticity. Discover our story.',
    canonical: 'https://www.caironightsrestaurant.com.au/about-us',
  },
  hero: {
    headingPart1: 'Our ',
    headingPart2: 'Story',
    subheading: "Melbourne's Home of Authentic\nEgyptian Cuisine & Culture",
    description:
      "Cairo By Nights isn't just a restaurant — it's a cultural journey\nthrough the flavours, music, and soul of Egypt.",
    image: img('restaurant-interior.webp'),
  },
  roots: {
    heading: 'Our Egyptian Roots –\nFrom Cairo to Carlton',
    body: pt(
      [
        "Cairo By Nights was born from a dream to bring the heart of Egypt to the vibrant streets of Melbourne. Founded by an Egyptian-Australian family with deep culinary traditions, the vision was to recreate the experience of Cairo's famous night markets — where sizzling street food, soulful Arabic music, and warm hospitality come together.",
        "From our first service, we set out to become more than just a restaurant. Cairo By Nights is a **halal Egyptian restaurant in Carlton** that celebrates tradition, flavour, and performance. What began as a humble idea is now one of Melbourne's most unique dining destinations — where every plate tells a story, and every night leaves a memory. [Discover our weekly live entertainment and belly dancing shows](/events).",
      ].join('\n\n'),
    ),
    footerText: 'INSPIRED BY THE STREETS OF EGYPT',
  },
  chefs: {
    heading: 'Authentic Egyptian\nChefs in Melbourne –\nTradition on Every Plate',
    body: pt(
      [
        'At Cairo By Nights, the heart of our kitchen beats with generations of Egyptian culinary tradition. Our chefs are experts in halal Egyptian cuisine, blending timeless flavours with modern flair. From fire-grilled kofta to creamy molokhia, every dish is crafted with heritage, precision, and passion.',
        "Whether you're a first-time visitor or a returning guest, our food tells the story of Egypt — bold, soulful, and unforgettable. This is **authentic Egyptian dining in Carlton**, led by chefs who bring more than recipes — they bring legacy. [Explore our full menu of traditional Egyptian dishes](/menu).",
      ].join('\n\n'),
    ),
    ctaButton: { label: 'Make Reservation 🍽️', href: RESERVATION, style: 'reserve' },
  },
  stats: [
    { _key: 's1', value: '8+', label: 'Events Monthly' },
    { _key: 's2', value: '5', label: 'Expert Chefs' },
    { _key: 's3', value: '5000+', label: 'Served Customers' },
    { _key: 's4', value: '15000+', label: 'Served Dishes' },
  ],
  feedback: {
    heading: "Our Clientele's Feedback",
    reviews: [
      {
        _key: 'r1',
        author: 'Abrar',
        title: 'Incredible Food from\nStart to Dessert',
        body: 'Amazing food. Highly recommend the mix grill. Dessert was also great, had the hazelnut egyptian traditional pudding.',
      },
      {
        _key: 'r2',
        author: 'Saif Abdulrahman',
        title: 'Authentic Dining,\nShisha & Live Music',
        body: 'Excellent authentic Egyptian food and superb service. Egyptian cuisine is well known for its hospitality, and they excel at shisha (try the Fruit Fever). The singer was an amazing bonus.',
      },
      {
        _key: 'r3',
        author: 'Masi Hashemi',
        title: 'A Hidden Gem with\nCozy Vibes',
        body: "Flavorful Tagine, friendly staff, and cozy vibes. Try the BBQ Quail - it's a hidden gem! Highly recommend for authentic Egyptian cuisine👌",
      },
    ],
  },
  mission: {
    heading: 'Our Mission – Celebrating Egyptian Culture Through Cuisine & Hospitality',
    body: pt(
      [
        "At Cairo By Nights, we don't just serve food — we create experiences. Our mission is to celebrate the rich culture of Egypt through authentic cuisine, live Arabic music, and warm hospitality. Whether you're joining us for dinner, a function, or a show, every visit is designed to immerse you in the soul of Egypt.",
        'From traditional dishes to ambient shisha lounges and vibrant performances, we aim to make every moment unforgettable — just as Cairo itself would.',
      ].join('\n\n'),
    ),
    founderAttribution: '— Sonny, Founder of Cairo By Nights',
    bottomNote: pt(
      'Visit us at our [Carlton location](/location) on Lygon Street any day of the week, or join us for [weekend entertainment](/events) with live belly dancing and shisha.',
    ),
  },
  experience: {
    heading: 'Experience Cairo By Nights',
    subheading: "Discover what makes us Melbourne's premier Egyptian restaurant",
    cards: [
      {
        _key: 'e1',
        emoji: '🍽️',
        title: 'Explore Our Menu',
        body: 'Authentic Egyptian dishes crafted with traditional recipes and the finest ingredients.',
        href: '/menu',
      },
      {
        _key: 'e2',
        emoji: '💃',
        title: 'Weekend Entertainment',
        body: 'Live belly dancing Friday, Saturday, Sunday at 9PM. Live Arabic music Friday & Sunday at 8PM. Premium shisha lounge.',
        href: '/events',
      },
      {
        _key: 'e3',
        emoji: '📍',
        title: 'Visit Us',
        body: 'Find us at 5/252 Lygon Street Carlton. Open Sun-Thu 5pm-12am, Fri-Sat 5pm-1am.',
        href: '/contact-us',
      },
    ],
  },
}
