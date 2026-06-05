// Image placeholders are resolved to Sanity asset references by the seed script.
export const img = (name: string) => ({ _img: name })

export const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  restaurantName: 'Cairo By Nights Restaurant & Bar',
  tagline: 'Authentic Egyptian Dining in Melbourne',
  logo: img('cairo-by-nights-logo-new.png'),
  logoAlt: 'Cairo By Nights Restaurant & Bar',
  copyright: '© 2024 Cairo By Nights Restaurant & Bar. All rights reserved.',
  footerDescription:
    'Experience authentic Egyptian cuisine, live belly dancing, and premium shisha in the heart of Carlton, Melbourne.',

  address: '5/252 Lygon Street, Carlton 3053',
  streetAddress: '5/252 Lygon Street',
  locality: 'Carlton',
  region: 'VIC',
  postalCode: '3053',
  country: 'AU',
  phone: '03 9654 1005',
  phoneE164: '+61396541005',
  email: 'contactus@cairobynightsrestaurant.com.au',
  openingHours: {
    weekdays: 'Sunday – Thursday: 5:00pm – 11:30pm',
    weekends: 'Friday & Saturday: 5:00pm – 12:30am',
    structured: [
      {
        _key: 'oh1',
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '17:00',
        closes: '23:30',
      },
      { _key: 'oh2', days: ['Friday', 'Saturday'], opens: '17:00', closes: '00:30' },
    ],
  },
  reservationUrl: 'https://cairo-by-nights-restaurant-bar.resos.com/booking',
  googleMapsUrl: 'https://maps.google.com/search/5%2F252%20Lygon%20Street%2C%20Carlton%203053',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8277165143247!2d144.96789931531915!3d-37.80015054202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ca46c6f4c7%3A0x5a6fb5d0c5f7e6!2s252%20Lygon%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sau!4v1634567890123',
  socialLinks: {
    facebook: 'https://www.facebook.com/caironights',
    instagram: 'https://www.instagram.com/caironights',
  },

  navItems: [
    { _key: 'n1', name: 'About Us', href: '/about-us' },
    { _key: 'n2', name: 'Menu', href: '/menu' },
    { _key: 'n3', name: 'Events', href: '/events' },
    { _key: 'n4', name: 'Function Room', href: '/function-room' },
    { _key: 'n5', name: 'Contact Us', href: '/contact-us' },
  ],
  quickLinks: [
    { _key: 'q1', name: 'About Us', href: '/about-us' },
    { _key: 'q2', name: 'Menu', href: '/menu' },
    { _key: 'q3', name: 'Events', href: '/events' },
    { _key: 'q4', name: 'Function Room', href: '/function-room' },
    { _key: 'q5', name: 'Contact Us', href: '/contact-us' },
    { _key: 'q6', name: 'Visit Us in Carlton', href: '/location' },
  ],
}
