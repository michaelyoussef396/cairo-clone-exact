import { pt } from '../lib/pt'
import { img } from './site'

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking'

const welcomeBody = [
  "Step into Cairo By Nights and experience the magic of authentic Egyptian dining in the heart of Carlton, Melbourne. Since our opening, we've been Melbourne's destination for genuine Egyptian cuisine, bringing centuries-old culinary traditions to Australia's most celebrated dining precinct on Lygon Street.",
  "As a family-owned, halal-certified Egyptian restaurant, we take immense pride in every dish that leaves our kitchen. Our expert Egyptian chefs bring generations of culinary knowledge and traditional cooking techniques, preparing each meal with the same authentic methods used in Cairo's finest restaurants. From our signature slow-cooked tagens to perfectly charcoal-grilled kofta, every dish tells the story of Egypt's rich culinary heritage.",
  'What sets Cairo By Nights apart is our commitment to delivering not just a meal, but a complete Egyptian cultural experience. Beyond our exceptional food, we offer live belly dancing performances every Friday, Saturday, and Sunday night at 9 PM, filling our restaurant with the energy and artistry of traditional Egyptian entertainment. Our premium shisha lounge, featuring an outdoor terrace with views of bustling Lygon Street, provides the perfect setting for relaxed evening gatherings.',
  'Experience [live belly dancing](/events) every Friday, Saturday, and Sunday, relax in our premium [shisha lounge](/events#shisha), or book our [private function room](/function-room) for your next celebration.',
  "Whether you're celebrating a romantic dinner for two, gathering with family and friends, hosting a corporate event in our private function room, or simply craving authentic halal Egyptian cuisine, Cairo By Nights welcomes you with the warm hospitality Egypt is famous for. Our extended hours—open until 11:30 PM Sunday through Thursday and 12:30 AM on weekends—make us Carlton's go-to destination for late-night dining and entertainment.",
  "Located in the heart of Carlton, just moments from the University of Melbourne and Carlton Gardens, we're easily accessible whether you're a local resident, university student, or visitor exploring Melbourne's cultural landmarks. Join the 5,000+ satisfied guests who have discovered why Cairo By Nights is Carlton's favorite Egyptian restaurant.",
].join('\n\n')

export const homePage = {
  _id: 'homePage',
  _type: 'homePage',
  seo: {
    title: 'Egyptian Restaurant Carlton | Cairo By Nights Lygon St',
    description:
      'Best Egyptian restaurant in Carlton, Melbourne. Authentic halal cuisine, live belly dancing, shisha lounge. 5/252 Lygon Street. Book now! ⭐ 4.8/5',
    canonical: 'https://www.caironightsrestaurant.com.au/',
    ogType: 'restaurant',
  },
  hero: {
    headingLine1: 'Authentic',
    headingLine2: 'Egyptian',
    headingLine3: 'Restaurant in\nCarlton, Melbourne',
    subheading:
      'Experience the magic of Cairo By Nights with authentic Egyptian cuisine, live belly dancing, Arabic music, and premium shisha in the heart of Carlton.',
    primaryCta: { label: 'Book Your Experience', href: RESERVATION, style: 'hero' },
    secondaryCta: { label: 'View Menu', href: '/menu', style: 'reserve' },
    statNumber: '5000+',
    statText: 'Happy Customers across Melbourne',
    sideHeading1: 'Loved by Melbourne',
    sideHeading2: 'Foodies & Shisha Lovers',
    image: img('egyptian-dishes.webp'),
  },
  welcome: {
    heading: 'Welcome to Cairo By Nights',
    subheading: "Melbourne's Premier Egyptian Restaurant Experience",
    body: pt(welcomeBody),
  },
  stats: [
    { _key: 's1', value: '8+', label: 'EVENTS MONTHLY' },
    { _key: 's2', value: '5', label: 'EXPERT CHEFS' },
    { _key: 's3', value: '5000+', label: 'SERVED CUSTOMERS' },
    { _key: 's4', value: '15000+', label: 'SERVED DISHES' },
  ],
  whyChoose: {
    heading: 'Why Choose Cairo By Nights',
    subheading: 'Experience the Difference of Authentic Egyptian Excellence',
    cards: [
      {
        _key: 'w1',
        title: 'Expert Egyptian Chefs',
        body: "Our kitchen is led by experienced Egyptian chefs who bring generations of culinary tradition from Cairo to Carlton. Each chef has mastered the art of authentic Egyptian cooking, ensuring every dish captures the true flavors and techniques of traditional Egyptian cuisine. From perfecting the blend of seven spices in our kofta to achieving the ideal slow-cooked tenderness in our tagens, our chefs' expertise shines in every bite.",
      },
      {
        _key: 'w2',
        title: '100% Halal Certified',
        body: 'We take pride in our complete halal certification, ensuring that every ingredient and dish meets the highest standards of halal preparation. Our commitment to authentic Egyptian ingredients means we source premium halal meats, import traditional Egyptian spices, and prepare everything fresh daily in our Carlton kitchen. Dine with complete confidence knowing that authenticity and halal compliance go hand-in-hand at Cairo By Nights.',
      },
      {
        _key: 'w3',
        title: 'Live Entertainment Experience',
        body: 'Transform your dinner into an unforgettable evening with our professional belly dancing performances every Friday, Saturday, and Sunday at 9 PM. Our talented dancers bring the artistry and energy of traditional Egyptian entertainment, accompanied by authentic Arabic music. Combine your meal with premium shisha from our outdoor terrace lounge, and experience the complete Cairo nightlife atmosphere right here in Melbourne.',
      },
      {
        _key: 'w4',
        title: 'Perfect Carlton Location',
        body: "Conveniently located on iconic Lygon Street in Carlton, we're easily accessible by tram (routes 1 & 96), with free street parking Sunday all day and after 7 PM weekdays. Just 2 minutes from the University of Melbourne and 10 minutes from Carlton Gardens, our location makes us the perfect choice for students, locals, and visitors. Plus, with extended hours until 1 AM on weekends, we're Carlton's premier destination for late-night Egyptian dining.",
      },
    ],
    bottomTextBold: 'Join 5,000+ satisfied guests',
    bottomTextRest:
      'who have rated us 4.8/5 stars. Experience the Cairo By Nights difference today.',
  },
  menuPreview: {
    sectionHeading: 'Dine, Unwind, and Experience Cairo in Melbourne',
    testimonialText:
      '"The food was just as amazing as always. Ending the night with a warm Om Ali, a glass of mint tea, and a smooth shisha, all while listening to the ambient Egyptian music, truly makes for the perfect evening. Cairo By Nights never disappoints!"',
    testimonialAuthor: 'Irene Izquierdo',
    menuHeading: 'A Menu Crafted with Generations of Flavor',
    menuSubheading: 'Savor the Flavors of Egypt',
    linkText: 'View Full Menu',
    categories: [
      { _key: 'c1', title: 'Entrees', image: img('entree.webp') },
      { _key: 'c2', title: 'Main Dishes', image: img('main-dish-1.webp') },
      { _key: 'c3', title: 'Grills', image: img('main-dish-2.webp') },
      { _key: 'c4', title: 'Drinks', image: img('beverages.webp') },
    ],
  },
  testimonial: {
    label: 'WHAT OUR CUSTOMER SAYS',
    heading: '"What a Live Egyptian Night in the Heart of Melbourne"',
    body: "Had such a fantastic night at Cairo By Nights. Food was delicious and we went on a Saturday night and there was a beautiful lady doing belly dancing which really added to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!",
    author: 'Krystalia T',
    linkText: 'Check Our Story →',
  },
  faq: {
    heading: 'Frequently Asked Questions – Cairo By Nights Carlton',
    intro:
      'Planning your visit? Here are answers to the most common questions about our food, events, bookings, and more.',
    items: [
      {
        _key: 'f1',
        question: 'Do I need to book a table at Cairo By Nights in advance?',
        answer:
          'Yes, we highly recommend booking in advance, especially for weekend evenings and during our live performance nights. You can book through our website or call us directly.',
      },
      {
        _key: 'f2',
        question: 'Is Cairo By Nights a halal restaurant?',
        answer:
          'Yes, Cairo By Nights is a halal-certified restaurant. All our meat is halal and we follow strict halal guidelines in our kitchen preparation.',
      },
      {
        _key: 'f3',
        question: 'Do you have belly dancing or live performances?',
        answer:
          'Yes! We feature live belly dancing performances and traditional Egyptian music on select nights. Check our events calendar or call us to find out about upcoming performances.',
      },
    ],
    stillHaveQuestionsText: 'Still have any questions?',
  },
  visitUs: {
    heading: 'Visit Us in Carlton',
    subheading: "Easy to Find on Lygon Street, Melbourne's Iconic Dining Precinct",
    cards: [
      {
        _key: 'v1',
        emoji: '📍',
        title: 'Our Address',
        body: '5/252 Lygon Street, Carlton VIC 3053\nJust 2 minutes from University of Melbourne\n10 minutes from Carlton Gardens',
      },
      {
        _key: 'v2',
        emoji: '🚊',
        title: 'Public Transport',
        body: 'Tram routes 1 & 96 stop nearby\nLygon St/Grattan St stop (2 min walk)\n15 minutes from Melbourne CBD',
      },
      {
        _key: 'v3',
        emoji: '🅿️',
        title: 'Free Parking',
        body: 'Sunday: Free all day\nMonday-Saturday: Free after 7pm\nMetered parking available before 7pm',
      },
    ],
    ctaBoxIntro:
      "First time visiting Carlton? Our comprehensive location guide includes detailed parking information, tram routes from across Melbourne, nearby attractions to explore before or after dinner, and everything you need to plan your visit to Lygon Street's premier Egyptian restaurant.",
    ctaBoxButton: { label: 'View Complete Location Guide →', href: '/location', style: 'hero' },
  },
}
