import { pt } from '../lib/pt'

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking'

export const contactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  seo: {
    title: 'Contact Cairo By Nights | Lygon St Carlton | 03 9654 1005',
    description:
      'Cairo By Nights: 5/252 Lygon Street, Carlton 3053. Ph: 03 9654 1005. Open Sun-Thu 5pm-12am, Fri-Sat 5pm-1am. Reserve online!',
    canonical: 'https://www.caironightsrestaurant.com.au/contact-us',
  },
  hero: {
    heading: 'Contact Us',
    subheading:
      'Get in touch with Cairo By Nights for reservations, events, or any inquiries about our authentic Egyptian dining experience.',
  },
  contactInfo: {
    heading: 'Visit Cairo By Nights',
    intro:
      "Experience authentic Egyptian cuisine in the heart of Carlton, Melbourne. We're open seven days a week, ready to transport you to the flavors of Egypt.",
    mapsLinkText: 'View on Google Maps →',
    linkParagraph: pt(
      'Open 7 days a week with [live belly dancing entertainment](/events) every Friday, Saturday, and Sunday from 9PM. View our [full menu](/menu) online.',
    ),
  },
  terracePolicy: {
    heading: 'Weekend Terrace Minimum Spend Policy',
    subheading: 'Important Information for Our Valued Guests',
    boxHeading: 'Crafting a Premium Experience',
    applicableAreaLabel: 'Applicable Area',
    applicableArea: 'Front Terrace Area (Tables 10-23)',
    timePeriodLabel: 'Time Period',
    timePeriod: 'Weekends between 5:00 PM - 11:00 PM',
    minSpendLabel: 'Minimum Spend',
    minSpend: '$40 per person',
    quote:
      '"This policy helps us preserve the exclusive feel of our Front Terrace, ensuring every guest can enjoy the best of Cairo By Nights during our busiest hours. We appreciate your understanding and cooperation."',
  },
  mapSection: {
    heading: 'Find Us in Carlton',
    body: pt(
      "Located on bustling Lygon Street, we're easily accessible by public transport and car. First time visiting Carlton? [Check our location guide](/location) for parking tips, tram routes, and nearby attractions.",
    ),
    mapTitle: 'Cairo By Nights Restaurant Location',
  },
  quickActions: {
    heading: 'Ready to Experience Egypt?',
    body: 'Book your table today or contact us for special events and private dining arrangements.',
    cards: [
      {
        _key: 'a1',
        title: 'Online Booking',
        body: 'Reserve your table instantly through our online booking system.',
        buttonLabel: 'Book Now',
        href: RESERVATION,
      },
      {
        _key: 'a2',
        title: 'Call Us',
        body: 'Speak directly with our team for bookings and special requests.',
        buttonLabel: '03 9654 1005',
        href: 'tel:03 9654 1005',
      },
      {
        _key: 'a3',
        title: 'Private Events',
        body: 'Planning a special celebration? Let us create an unforgettable experience.',
        buttonLabel: 'View Function Room Details',
        href: '/function-room',
      },
    ],
  },
  reviews: {
    heading: 'What Our Guests Say',
    rating: '4.8/5 on Google Reviews',
    items: [
      {
        _key: 'rv1',
        author: 'Sarah M.',
        body: '"Absolutely fantastic dining experience! The authentic Egyptian flavors transported us straight to Cairo. The belly dancing show was mesmerizing!"',
        source: 'Google Review',
      },
      {
        _key: 'rv2',
        author: 'Michael & Lisa K.',
        body: '"Perfect venue for our anniversary dinner. The staff were incredibly welcoming and the food was exceptional. Will definitely be back!"',
        source: 'Google Review',
      },
      {
        _key: 'rv3',
        author: 'Ahmed R.',
        body: '"Great atmosphere and delicious food. The mixed grill was outstanding and the shisha was perfect. Highly recommended for a unique dining experience."',
        source: 'Google Review',
      },
    ],
  },
  exploreMore: {
    heading: 'Explore More',
    subheading: 'Discover everything Cairo By Nights has to offer',
    cards: [
      {
        _key: 'x1',
        emoji: '🍽️',
        title: 'Our Menu',
        body: 'Explore our authentic Egyptian dishes, from traditional tagens to premium grills and desserts.',
        href: '/menu',
      },
      {
        _key: 'x2',
        emoji: '💃',
        title: 'Live Events',
        body: 'Experience belly dancing shows, live Arabic music, and our premium shisha lounge every weekend.',
        href: '/events',
      },
      {
        _key: 'x3',
        emoji: '🎉',
        title: 'Private Events',
        body: 'Host your birthday, corporate event, or celebration with our exclusive banquet packages.',
        href: '/function-room',
      },
    ],
  },
}
