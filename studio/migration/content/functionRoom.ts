import { pt } from '../lib/pt'
import { img } from './site'

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking'

export const functionRoomPage = {
  _id: 'functionRoomPage',
  _type: 'functionRoomPage',
  seo: {
    title: 'Function Room Carlton | Private Events | Cairo By Nights',
    description:
      'Private function room hire Carlton. Birthday parties, corporate events, engagements. Banquet packages from $60pp. Book your event now!',
    canonical: 'https://www.caironightsrestaurant.com.au/function-room',
  },
  hero: {
    heading: 'Function Room Hire Carlton | Private Events at Cairo By Nights',
    subheading:
      'Our function room in Carlton offers an immersive Egyptian experience, ideal for birthdays, corporate dinners, engagements, and private celebrations. With authentic Middle Eastern cuisine, vibrant décor, and live entertainment options like singers or belly dancers, Cairo By Nights is the perfect venue for a memorable event.',
    ctaButton: { label: 'Plan Your Event', href: RESERVATION, style: 'hero' },
    image: img('full-table.webp'),
  },
  experience: {
    heading: 'An Experience Beyond Just Dining',
    body: "Transform your celebration into a sensory journey with Cairo By Nights. Our event space in Melbourne is designed for memorable moments — from bespoke Egyptian catering to live Arabic performances. Whether it's an intimate dinner or a festive gathering, our team curates every detail to deliver elegance, flavour, and unforgettable atmosphere.",
    ctaButton: { label: 'Make Reservation', href: RESERVATION, style: 'reserve' },
  },
  banquetSection: {
    heading: 'Banquet Packages',
    intro:
      'Perfect for groups and special occasions. Minimum 8 people. 48-hour advance booking required.',
    ctaButton: { label: 'Book Your Banquet', href: RESERVATION, style: 'hero' },
  },
  privateEventFeatures: {
    heading: 'Private Event Features',
    cards: [
      { _key: 'p1', emoji: '🎭', title: 'Live Entertainment', body: 'Belly dancers, Arabic singers, and traditional music' },
      { _key: 'p2', emoji: '🍽️', title: 'Authentic Cuisine', body: 'Traditional Egyptian dishes made by expert chefs' },
      { _key: 'p3', emoji: '🏺', title: 'Egyptian Décor', body: 'Immersive atmosphere with authentic Middle Eastern design' },
      { _key: 'p4', emoji: '🎉', title: 'Custom Events', body: 'Birthdays, corporate dinners, engagements, and more' },
    ],
    linkParagraph: pt(
      'Enhance your event with [live belly dancing performances](/events) every Friday, Saturday, and Sunday. View our full [banquet menu options](/menu#banquet) to customize your celebration menu.',
    ),
  },
  contactCta: {
    heading: 'Ready to Plan Your Event?',
    body: 'Contact us today to discuss your private event requirements and create an unforgettable Egyptian dining experience for you and your guests.',
    bookButtonLabel: 'Book Your Event',
    callButtonLabel: 'Call Us: 03 9654 1005',
  },
}
