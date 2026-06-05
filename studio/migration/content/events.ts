import { pt } from '../lib/pt'
import { img } from './site'

const galleryNames = [
  'belly-dancer.webp',
  'restaurant-interior.webp',
  'full-table.webp',
  'happy-guests.webp',
  'egyptian-dishes.webp',
  'shisha.webp',
  'bar-drinks.webp',
  'beverages.webp',
  'belly-dancer.webp',
  'restaurant-interior.webp',
  'full-table.webp',
  'happy-guests.webp',
]

export const eventsPage = {
  _id: 'eventsPage',
  _type: 'eventsPage',
  seo: {
    title: 'Belly Dancing Melbourne | Live Shows | Cairo By Nights',
    description:
      'Live belly dancing shows every Fri-Sun 9PM. Arabic music, shisha lounge Carlton. Best entertainment venue Melbourne. Reserve your spot!',
    canonical: 'https://www.caironightsrestaurant.com.au/events',
    ogType: 'event',
  },
  hero: {
    heading: 'Belly Dancing Melbourne | Live Entertainment & Shisha at Cairo By Nights',
    subheading:
      'From sizzling dance shows to unforgettable live music and exclusive parties — every night tells a story.',
    tagline: '[Authentic Egyptian Nights in Melbourne]',
    image: img('belly-dancer.webp'),
  },
  gallery: {
    heading: 'Unforgettable Moments at Cairo By Nights',
    intro:
      'From golden veils and Arabic oud to packed-out nights filled with laughter, Cairo By Nights captures the essence of Egyptian hospitality. Each photo tells a story of authentic Egyptian cuisine, belly dancing, and unforgettable cultural experiences in Carlton.',
    images: galleryNames.map((n, i) => ({ _key: `g${i}`, ...img(n) })),
  },
  weeklySchedule: {
    heading: 'Weekly Events Schedule',
    intro: 'Experience the magic every night with our authentic Egyptian entertainment',
    days: [
      {
        _key: 'd1',
        day: 'Friday',
        title: 'Belly Dance & Live Performance',
        description: 'Belly dancer at 9pm followed by live dance performances',
        times: 'Belly Dancer: 9:00 PM\nLive Dancer: 8:00 PM - 11:00 PM',
      },
      {
        _key: 'd2',
        day: 'Saturday',
        title: 'Belly Dance Show',
        description: 'Authentic Egyptian belly dance performance by professional dancers',
        times: 'Belly Dancer: 9:00 PM',
      },
      {
        _key: 'd3',
        day: 'Sunday',
        title: 'Belly Dance & Live Performance',
        description: 'Belly dancer at 9pm followed by live dance performances',
        times: 'Belly Dancer: 9:00 PM\nLive Dancer: 8:00 PM - 11:00 PM',
      },
    ],
  },
  shisha: {
    heading: 'Premium Shisha Lounge in Carlton',
    intro:
      "Unwind in Melbourne's most authentic shisha experience, where traditional Egyptian hospitality meets modern comfort",
    leftHeading: "Melbourne's Best Shisha Lounge Experience",
    leftBody: pt(
      [
        "Step into our premium shisha lounge and discover why Cairo By Nights is Carlton's favorite destination for authentic hookah culture. Our expertly prepared shisha brings the essence of Cairo's famous cafés to the heart of Lygon Street, creating the perfect atmosphere for relaxation and conversation.",
        "Every shisha session is carefully crafted by our experienced staff using premium tobacco blends and traditional Egyptian methods. Whether you're a shisha enthusiast or trying it for the first time, our team ensures a smooth, flavorful experience that transports you to the vibrant streets of Cairo.",
      ].join('\n\n'),
    ),
    featuredFlavorsHeading: 'Featured Flavors',
    flavors: [
      {
        _key: 'fl1',
        emoji: '🍇',
        name: 'Fruit Fever',
        description:
          'Our signature blend of tropical fruits including mango, passion fruit, and guava for a sweet, refreshing experience',
      },
      {
        _key: 'fl2',
        emoji: '🍎',
        name: 'Double Apple',
        description:
          'The classic Middle Eastern favorite combining sweet and tart apple notes with a hint of anise',
      },
      {
        _key: 'fl3',
        emoji: '💙',
        name: 'Lady in Blue',
        description: 'House special mix of Lady Killer, Love 66, and Blueberry - our signature blend',
      },
      {
        _key: 'fl4',
        emoji: '🍋',
        name: 'Lemon Mint',
        description:
          'A zesty blend that combines citrus brightness with cooling mint for the ultimate refreshment',
      },
    ],
    closingParagraph:
      "Our shisha lounge offers comfortable seating, ambient lighting, and the perfect backdrop for an evening with friends. Whether you're celebrating a special occasion or simply unwinding after a long day, our Carlton shisha lounge provides an authentic escape from the everyday.",
    whyChooseHeading: 'Why Choose Our Shisha Lounge?',
    whyChooseFeatures: [
      { _key: 'wc1', title: 'Premium Quality Tobacco', body: 'Imported directly from Egypt and the Middle East for authentic flavor' },
      { _key: 'wc2', title: 'Expert Staff', body: 'Trained in traditional Egyptian shisha preparation techniques' },
      { _key: 'wc3', title: 'Comfortable Atmosphere', body: 'Authentic Egyptian décor creates an immersive lounge experience' },
      { _key: 'wc4', title: 'Convenient Carlton Location', body: 'Easy to reach on Lygon Street in the heart of Carlton' },
      { _key: 'wc5', title: 'Perfect Pairing', body: 'Combine with authentic Egyptian cuisine and live entertainment' },
    ],
    infoBoxText: 'Open 7 Days | Shisha served throughout dinner service',
    infoBoxSubtext: 'Reservations recommended for weekend evenings',
  },
  entertainment: {
    heading: 'Authentic Egyptian Entertainment',
    intro:
      'Immerse yourself in the sights and sounds of Egypt with our world-class performers',
    bellyDancing: {
      heading: 'Professional Belly Dancing Shows',
      body: pt(
        [
          "Every Friday, Saturday, and Sunday at 9:00 PM, our talented belly dancers bring the ancient art of Raqs Sharqi to life. Watch as they perform traditional Egyptian belly dancing with stunning costumes, graceful movements, and captivating choreography that has been perfected over centuries. This isn't just entertainment—it's a glimpse into Egyptian cultural heritage that has mesmerized audiences for generations.",
          'Our performers are professionally trained in classical Egyptian dance styles and bring years of experience to every show. The combination of fluid hip movements, intricate hand gestures, and expressive performance creates an unforgettable spectacle that complements your dining experience perfectly.',
        ].join('\n\n'),
      ),
    },
    bellyDancingNote: pt(
      'Want a belly dancer at your private event? [Book our function room](/function-room) for groups of 20-60 guests or [contact us](/contact-us) to discuss entertainment options for your celebration.',
    ),
    music: {
      heading: 'Live Arabic Music Performances',
      body: pt(
        [
          'On Friday and Sunday evenings from 8:00 PM to 11:00 PM, immerse yourself in the rich sounds of traditional Arabic music. Our live musicians play classic Egyptian melodies on traditional instruments including the oud, tabla, and darbuka, creating an authentic atmosphere that transports you straight to the heart of Cairo.',
          "The music ranges from soulful traditional ballads to upbeat celebratory rhythms, perfectly complementing your meal and creating an energetic yet intimate ambiance. Whether you're enjoying a romantic dinner or celebrating with a group, the live music adds a layer of authenticity that makes Cairo By Nights truly special.",
        ].join('\n\n'),
      ),
    },
    whatToExpect: {
      heading: 'What to Expect',
      body: "Arrive early to secure the best viewing spots. Our entertainment begins promptly at the scheduled times, and the restaurant fills quickly on weekends. We recommend making a reservation to guarantee your table and ensure you don't miss the show. The combination of live entertainment, premium shisha, and authentic Egyptian cuisine creates an unforgettable evening that keeps guests coming back week after week.",
    },
  },
  cta: {
    heading: 'Ready to Experience the Magic?',
    body: '',
    linkText: pt(
      'Book your table now and immerse yourself in an authentic Egyptian night. [Planning a special event? Check our function room](/function-room).',
    ),
    buttonLabel: 'Reserve Your Table',
  },
}
