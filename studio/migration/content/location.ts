import { pt } from '../lib/pt'
import { img } from './site'

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking'

export const locationPage = {
  _id: 'locationPage',
  _type: 'locationPage',
  seo: {
    title: 'Cairo By Nights Location | Lygon Street Carlton Melbourne',
    description:
      'Find Cairo By Nights at 5/252 Lygon Street, Carlton. Tram 1 & 96. Free parking Sunday all day, Mon-Sat after 7pm. Near University of Melbourne. Best Egyptian dining Carlton!',
    canonical: 'https://www.caironightsrestaurant.com.au/location',
  },
  hero: {
    heading: 'Visit Cairo By Nights in Carlton, Melbourne',
    subheading:
      "Discover Melbourne's finest Egyptian restaurant in the heart of Carlton's vibrant Lygon Street dining precinct",
    image: img('restaurant-interior.webp'),
  },
  findUs: {
    heading: 'Find Us on Lygon Street',
    address: '5/252 Lygon Street, Carlton VIC 3053',
    body: pt(
      [
        "Cairo By Nights is perfectly positioned on the iconic Lygon Street, right in the heart of Carlton's celebrated dining precinct. We're just a 2-minute walk from the University of Melbourne and a pleasant 10-minute stroll from the UNESCO World Heritage-listed Carlton Gardens and Royal Exhibition Building.",
        "Look for our distinctive Egyptian-inspired façade with warm golden lighting on Lygon Street. Our location makes us an ideal dining destination whether you're a university student, local resident, or visitor exploring Melbourne's cultural landmarks.",
      ].join('\n\n'),
    ),
    mapTitle: 'Cairo By Nights Restaurant Location - 5/252 Lygon Street Carlton',
  },
  howToGetHere: {
    heading: 'How to Get to Cairo By Nights',
    tram: {
      heading: 'By Tram',
      body: pt(
        [
          "**Routes 1 and 96** stop at Lygon Street/Grattan Street, just a 2-minute walk from Cairo By Nights. This is the most convenient way to reach us from Melbourne's CBD.",
          '**From Melbourne CBD:** Catch tram 96 from Bourke Street Mall. The journey takes approximately 15 minutes. Alight at the Lygon St/Grattan St stop directly opposite the University of Melbourne.',
          'Both tram routes run frequently and are wheelchair accessible with low-floor trams.',
        ].join('\n\n'),
      ),
    },
    car: {
      heading: 'By Car',
      body: pt(
        [
          '**From Melbourne CBD:** Head north on Elizabeth Street, turn right onto Grattan Street, then left onto Lygon Street. The drive takes approximately 5 minutes from the city center.',
          "**Walking from University of Melbourne:** Just a 2-minute walk via Grattan Street gate. From Carlton Gardens, it's a pleasant 10-minute stroll west on Grattan Street.",
          'Bike racks are available on Lygon Street near the restaurant for cyclists.',
        ].join('\n\n'),
      ),
    },
  },
  parkingGuide: {
    heading: 'Parking Guide - Where to Park in Carlton',
    intro: 'Convenient parking options near Cairo By Nights on Lygon Street',
    cards: [
      {
        _key: 'pk1',
        emoji: '🅿️',
        title: 'Street Parking',
        richBody: pt(
          [
            'Metered parking is available on Lygon Street and surrounding side streets including Faraday Street, Grattan Street, and Drummond Street.',
            '**Tip:** Side streets like Faraday and Drummond often have better availability than Lygon Street itself!',
          ].join('\n\n'),
        ),
      },
      {
        _key: 'pk2',
        emoji: '🆓',
        title: 'Free Parking Times',
        richBody: pt(
          [
            '**Sunday:** Free all day',
            '**Monday-Saturday:** Free after 7:00pm',
            '**Before 7pm:** Metered parking available',
            'Perfect timing for dinner! Arrive after 7pm weekdays or anytime Sunday for free street parking.',
          ].join('\n\n'),
        ),
      },
      {
        _key: 'pk3',
        emoji: '♿',
        title: 'Accessible Parking',
        richBody: pt(
          [
            'Designated accessible parking spots are available on Lygon Street near the restaurant.',
            'Our ground floor entrance is wheelchair accessible with no steps from street level to the dining area.',
          ].join('\n\n'),
        ),
      },
    ],
    nearbyCarParks: {
      heading: 'Nearby Car Parks',
      items: [
        {
          _key: 'cp1',
          title: 'University of Melbourne Car Parks',
          body: 'Several car parks located within a 5-minute walk. Evening and weekend rates are typically lower. Entry via Grattan Street or Swanston Street.',
        },
        {
          _key: 'cp2',
          title: 'Carlton Gardens Car Park',
          body: 'Enter from Nicholson Street. Approximately 10-minute walk to Lygon Street. Great option if combining dinner with a visit to Carlton Gardens or Melbourne Museum.',
        },
      ],
    },
  },
  carltonLygon: {
    heading: "Experience Carlton's Iconic Lygon Street",
    body: pt(
      [
        "**Carlton's Heritage:** Carlton is Melbourne's historic cultural and dining precinct, renowned for its European café culture and diverse international cuisine. Since the mid-20th century, Carlton has been a melting pot of cultures, each contributing their culinary traditions to this vibrant neighborhood.",
        '**Lygon Street History:** Lygon Street became Melbourne\'s "Little Italy" in the 1950s and 1960s when Italian immigrants established trattorias and cafés along this tree-lined boulevard. Today, while celebrating its Italian heritage, Lygon Street embraces culinary diversity from around the world—including authentic Egyptian cuisine at Cairo By Nights.',
        '**University Atmosphere:** The University of Melbourne brings an energetic, international atmosphere to Carlton. Students and academics from around the world create vibrant street life that extends well into the evening, particularly during the academic year.',
      ].join('\n\n'),
    ),
    image: img('egyptian-dishes.webp'),
    bodyBelow: pt(
      [
        '**UNESCO Heritage:** Carlton Gardens, just minutes from our restaurant, is a UNESCO World Heritage site featuring the magnificent Royal Exhibition Building—a stunning example of Victorian architecture built for the 1880 Melbourne International Exhibition.',
        "At Cairo By Nights, we're proud to contribute to Carlton's rich dining tapestry by bringing authentic Egyptian cuisine to this historic neighborhood. We honor the tradition of culinary excellence while introducing Melbourne diners to the incredible flavors of Egypt.",
      ].join('\n\n'),
    ),
  },
  thingsToDo: {
    heading: 'Things to Do in Carlton Before or After Dinner',
    beforeDinner: {
      heading: 'Before Dinner',
      activities: [
        { _key: 'b1', emoji: '🌳', title: 'Carlton Gardens (10 min walk)', body: 'Stunning 19th-century gardens perfect for a pre-dinner stroll. UNESCO World Heritage site with beautiful pathways, fountains, and mature trees.' },
        { _key: 'b2', emoji: '🏛️', title: 'Royal Exhibition Building', body: "Magnificent Victorian-era building. Tours available on selected days. One of Melbourne's most photographed landmarks." },
        { _key: 'b3', emoji: '📚', title: 'Readings Bookstore', body: 'Iconic independent Melbourne bookshop on Lygon Street. Browse for hours among new releases and classic literature.' },
        { _key: 'b4', emoji: '🏫', title: 'University of Melbourne Campus', body: 'Explore beautiful Gothic Revival architecture. The grounds feature historic buildings, sculptures, and peaceful courtyards.' },
      ],
    },
    afterDinner: {
      heading: 'After Dinner',
      activities: [
        { _key: 'a1', emoji: '🎭', title: 'La Mama Theatre', body: 'Experimental theatre and Carlton institution. Catch avant-garde performances in an intimate setting.' },
        { _key: 'a2', emoji: '🎬', title: 'Cinema Nova (5 min walk)', body: 'Arthouse cinema showing independent films, documentaries, and international cinema. Multiple screens with late-night sessions.' },
        { _key: 'a3', emoji: '🍦', title: 'Gelato on Lygon Street', body: 'A Carlton tradition! Sample authentic Italian gelato from multiple gelaterias along Lygon Street.' },
        { _key: 'a4', emoji: '🏛️', title: 'Melbourne Museum & IMAX', body: "15-minute walk via Carlton Gardens. Natural history, cultural exhibitions, and Australia's largest IMAX screen." },
      ],
    },
    bottomNote: pt(
      'After exploring Carlton, dine with us for [authentic Egyptian cuisine](/menu), [live weekend entertainment](/events), and our famous [shisha lounge](/events#shisha).',
    ),
  },
  diningExperience: {
    heading: 'The Carlton Dining Experience',
    body: pt(
      [
        "Dining in Carlton offers something truly special that distinguishes it from Melbourne's CBD restaurant scene. While the city center caters to business lunches and pre-theater dinners, Carlton restaurants—including Cairo By Nights—are family-owned establishments where hospitality is personal and the atmosphere is genuinely welcoming.",
        "**Lygon Street's Dining Tradition:** Dining on Lygon Street isn't just about the food—it's about the experience. Long, leisurely dinners. Sidewalk café culture. The joy of discovery as you explore diverse cuisines from around the world.",
        "Our outdoor terrace captures the essence of Lygon Street dining. On warm evenings, watching the world go by while enjoying authentic Egyptian mezze and premium shisha is an experience that defines Carlton's restaurant culture.",
        '**Weekend Nights:** Friday, Saturday, and Sunday nights bring an extra dimension with our live belly dancing performances at 9 PM. The combination of authentic entertainment, exceptional food, and Carlton\'s vibrant atmosphere creates an unforgettable evening.',
      ].join('\n\n'),
    ),
  },
  insiderTips: {
    heading: 'Carlton Insider Tips',
    tips: [
      { _key: 't1', title: 'Best Time to Visit', body: 'Weekday evenings offer a relaxed atmosphere. Friday-Saturday nights are lively with our belly dancing shows at 9pm. We recommend booking ahead for weekends.' },
      { _key: 't2', title: 'Parking Strategy', body: 'Arrive after 7pm for free street parking—perfect timing for dinner reservations. Sunday parking is free all day. Check side streets (Faraday, Drummond) for better availability.' },
      { _key: 't3', emoji: '🎓', title: 'University Calendar', body: 'During university semester, Carlton buzzes with students. Quieter during semester breaks (July, December-February). Both periods offer unique atmospheres.' },
      { _key: 't4', emoji: '🎉', title: 'Carlton Festa', body: 'Each October, Lygon Street hosts the annual Carlton Festa—a massive street festival celebrating Italian culture with food, music, and entertainment.' },
    ],
  },
  accessibility: {
    heading: 'Accessibility Information',
    intro: 'Cairo By Nights is committed to welcoming all guests',
    physicalAccess: {
      heading: 'Physical Access',
      items: [
        'Wheelchair accessible entrance from street level',
        'Ground floor dining with no steps',
        'Accessible restrooms available',
        'Wide aisles for wheelchair navigation',
      ],
    },
    transportParking: {
      heading: 'Public Transport & Parking',
      items: [
        'Tram routes 1 and 96 are wheelchair accessible',
        'Accessible parking spots on Lygon Street nearby',
        'Staff available to assist with accessibility needs',
        'Please call ahead: 03 9654 1005',
      ],
    },
  },
  cta: {
    heading: 'Ready to Visit Us in Carlton?',
    body: "Experience authentic Egyptian cuisine in the heart of Melbourne's historic Lygon Street dining precinct",
    buttons: [
      { _key: 'c1', label: 'Make a Reservation', href: RESERVATION, style: 'hero' },
      { _key: 'c2', label: 'View Our Menu', href: '/menu', style: 'reserve' },
      { _key: 'c3', label: 'Contact Us', href: '/contact-us', style: 'reserve' },
    ],
    hoursLine: 'Sun-Thu 5pm-12am | Fri-Sat 5pm-1am',
  },
}
