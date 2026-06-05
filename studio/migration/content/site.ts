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
  socialLinks: {
    facebook: 'https://www.facebook.com/caironights',
    instagram: 'https://www.instagram.com/caironights',
  },

  navItems: [
    { _key: 'n1', name: 'About Us', href: '/about-us' },
    { _key: 'n2', name: 'Menu', href: '/menu' },
    { _key: 'n3', name: 'Events', href: '/events' },
    { _key: 'n4', name: 'Function Room', href: '/function-room' },
    { _key: 'n5', name: 'Contact US', href: '/contact-us' },
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
