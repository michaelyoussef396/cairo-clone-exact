export const notFoundPage = {
  _id: 'notFoundPage',
  _type: 'notFoundPage',
  seo: {
    title: 'Page Not Found (404) | Cairo By Nights',
    description:
      'Page not found. Return to Cairo By Nights for authentic Egyptian dining, belly dancing, and shisha in Carlton Melbourne.',
    noindex: true,
  },
  code: '404',
  heading: 'Page Not Found',
  intro:
    "Looks like this page took a wrong turn down Lygon Street. Let's get you back to the authentic Egyptian experience.",
  links: [
    { _key: 'l1', name: 'Home', href: '/' },
    { _key: 'l2', name: 'Menu', href: '/menu' },
    { _key: 'l3', name: 'Events', href: '/events' },
    { _key: 'l4', name: 'Contact', href: '/contact' },
  ],
  ctaButtonLabel: 'Make a Reservation',
}
