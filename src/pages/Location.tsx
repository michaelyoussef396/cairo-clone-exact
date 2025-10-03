import { MapPin, Clock, Navigation, Car, ParkingCircle, Accessibility, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import restaurantInterior from '@/assets/restaurant-interior.webp';
import egyptianDishes from '@/assets/egyptian-dishes.webp';

const Location = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Cairo By Nights",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5/252 Lygon Street",
      "addressLocality": "Carlton",
      "addressRegion": "VIC",
      "postalCode": "3053",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.8014",
      "longitude": "144.9672"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cairo By Nights Location | Lygon Street Carlton Melbourne"
        description="Find Cairo By Nights at 5/252 Lygon Street, Carlton. Tram 1 & 96. Free parking after 6pm. Near University of Melbourne. Best Egyptian dining Carlton!"
        canonical="https://www.caironightsrestaurant.com.au/location"
      />
      <Helmet>
        <link rel="preload" as="image" href={restaurantInterior} />
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={restaurantInterior}
            alt="Cairo By Nights location on Lygon Street Carlton Melbourne"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 egyptian-gold">
            Visit Cairo By Nights in Carlton, Melbourne
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover Melbourne's finest Egyptian restaurant in the heart of Carlton's vibrant Lygon Street dining precinct
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </section>

      {/* Section 1 - Find Us */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                Find Us on Lygon Street
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">5/252 Lygon Street, Carlton VIC 3053</p>
                    <p>
                      Cairo By Nights is perfectly positioned on the iconic Lygon Street, right in the heart of Carlton's celebrated dining precinct. We're just a 2-minute walk from the University of Melbourne and a pleasant 10-minute stroll from the UNESCO World Heritage-listed Carlton Gardens and Royal Exhibition Building.
                    </p>
                  </div>
                </div>
                <p>
                  Look for our distinctive Egyptian-inspired façade with warm golden lighting on Lygon Street. Our location makes us an ideal dining destination whether you're a university student, local resident, or visitor exploring Melbourne's cultural landmarks.
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative">
              <div className="bg-muted/50 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8277165143247!2d144.96789931531915!3d-37.80015054202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ca46c6f4c7%3A0x5a6fb5d0c5f7e6!2s252%20Lygon%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sau!4v1634567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cairo By Nights Restaurant Location - 5/252 Lygon Street Carlton"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - How to Get Here */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center egyptian-gold">
            How to Get to Cairo By Nights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* By Tram */}
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Navigation className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary">By Tram</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Routes 1 and 96</strong> stop at Lygon Street/Grattan Street, just a 2-minute walk from Cairo By Nights. This is the most convenient way to reach us from Melbourne's CBD.
                </p>
                <p>
                  <strong className="text-foreground">From Melbourne CBD:</strong> Catch tram 96 from Bourke Street Mall. The journey takes approximately 15 minutes. Alight at the Lygon St/Grattan St stop directly opposite the University of Melbourne.
                </p>
                <p>
                  Both tram routes run frequently and are wheelchair accessible with low-floor trams.
                </p>
              </div>
            </div>

            {/* By Car */}
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary">By Car</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">From Melbourne CBD:</strong> Head north on Elizabeth Street, turn right onto Grattan Street, then left onto Lygon Street. The drive takes approximately 5 minutes from the city center.
                </p>
                <p>
                  <strong className="text-foreground">Walking from University of Melbourne:</strong> Just a 2-minute walk via Grattan Street gate. From Carlton Gardens, it's a pleasant 10-minute stroll west on Grattan Street.
                </p>
                <p>
                  Bike racks are available on Lygon Street near the restaurant for cyclists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Parking Guide */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <ParkingCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Parking Guide - Where to Park in Carlton
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Convenient parking options near Cairo By Nights on Lygon Street
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Street Parking */}
            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🅿️</div>
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">Street Parking</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Metered parking is available on Lygon Street and surrounding side streets including Faraday Street, Grattan Street, and Drummond Street.
                </p>
                <p className="font-semibold text-foreground">
                  Tip: Side streets like Faraday and Drummond often have better availability than Lygon Street itself!
                </p>
              </div>
            </div>

            {/* Free Parking Times */}
            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">Free Parking Times</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Weekdays:</strong> Free after 6:00pm</p>
                <p><strong className="text-foreground">Saturdays:</strong> Free after 12:30pm</p>
                <p><strong className="text-foreground">Sundays:</strong> Free all day</p>
                <p className="text-sm italic text-accent">
                  Perfect timing for dinner! Arrive after 6pm weekdays for free street parking.
                </p>
              </div>
            </div>

            {/* Accessible Parking */}
            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">♿</div>
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">Accessible Parking</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Designated accessible parking spots are available on Lygon Street near the restaurant.
                </p>
                <p>
                  Our ground floor entrance is wheelchair accessible with no steps from street level to the dining area.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <h3 className="font-playfair font-semibold text-2xl mb-6 text-primary">Nearby Car Parks</h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">University of Melbourne Car Parks</h4>
                <p className="mb-4">
                  Several car parks located within a 5-minute walk. Evening and weekend rates are typically lower. Entry via Grattan Street or Swanston Street.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Carlton Gardens Car Park</h4>
                <p className="mb-4">
                  Enter from Nicholson Street. Approximately 10-minute walk to Lygon Street. Great option if combining dinner with a visit to Carlton Gardens or Melbourne Museum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Why Carlton & Lygon Street */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                Experience Carlton's Iconic Lygon Street
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Carlton's Heritage:</strong> Carlton is Melbourne's historic cultural and dining precinct, renowned for its European café culture and diverse international cuisine. Since the mid-20th century, Carlton has been a melting pot of cultures, each contributing their culinary traditions to this vibrant neighborhood.
                </p>
                <p>
                  <strong className="text-foreground">Lygon Street History:</strong> Lygon Street became Melbourne's "Little Italy" in the 1950s and 1960s when Italian immigrants established trattorias and cafés along this tree-lined boulevard. Today, while celebrating its Italian heritage, Lygon Street embraces culinary diversity from around the world—including authentic Egyptian cuisine at Cairo By Nights.
                </p>
                <p>
                  <strong className="text-foreground">University Atmosphere:</strong> The University of Melbourne brings an energetic, international atmosphere to Carlton. Students and academics from around the world create vibrant street life that extends well into the evening, particularly during the academic year.
                </p>
              </div>
            </div>

            <div>
              <img
                src={egyptianDishes}
                alt="Authentic Egyptian dishes at Cairo By Nights Carlton"
                width={800}
                height={600}
                className="w-full aspect-video object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">UNESCO Heritage:</strong> Carlton Gardens, just minutes from our restaurant, is a UNESCO World Heritage site featuring the magnificent Royal Exhibition Building—a stunning example of Victorian architecture built for the 1880 Melbourne International Exhibition.
            </p>
            <p>
              At Cairo By Nights, we're proud to contribute to Carlton's rich dining tapestry by bringing authentic Egyptian cuisine to this historic neighborhood. We honor the tradition of culinary excellence while introducing Melbourne diners to the incredible flavors of Egypt.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Things to Do */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center egyptian-gold">
            Things to Do in Carlton Before or After Dinner
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Dinner */}
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-primary">Before Dinner</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌳</span>
                  <div>
                    <strong className="text-foreground">Carlton Gardens (10 min walk)</strong>
                    <p>Stunning 19th-century gardens perfect for a pre-dinner stroll. UNESCO World Heritage site with beautiful pathways, fountains, and mature trees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <strong className="text-foreground">Royal Exhibition Building</strong>
                    <p>Magnificent Victorian-era building. Tours available on selected days. One of Melbourne's most photographed landmarks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <strong className="text-foreground">Readings Bookstore</strong>
                    <p>Iconic independent Melbourne bookshop on Lygon Street. Browse for hours among new releases and classic literature.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏫</span>
                  <div>
                    <strong className="text-foreground">University of Melbourne Campus</strong>
                    <p>Explore beautiful Gothic Revival architecture. The grounds feature historic buildings, sculptures, and peaceful courtyards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Dinner */}
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-primary">After Dinner</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <strong className="text-foreground">La Mama Theatre</strong>
                    <p>Experimental theatre and Carlton institution. Catch avant-garde performances in an intimate setting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <strong className="text-foreground">Cinema Nova (5 min walk)</strong>
                    <p>Arthouse cinema showing independent films, documentaries, and international cinema. Multiple screens with late-night sessions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍦</span>
                  <div>
                    <strong className="text-foreground">Gelato on Lygon Street</strong>
                    <p>A Carlton tradition! Sample authentic Italian gelato from multiple gelaterias along Lygon Street.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <strong className="text-foreground">Melbourne Museum & IMAX</strong>
                    <p>15-minute walk via Carlton Gardens. Natural history, cultural exhibitions, and Australia's largest IMAX screen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 text-center mt-8 max-w-3xl mx-auto">
            After exploring Carlton, dine with us for{" "}
            <Link to="/menu" className="text-egyptian-gold hover:underline">
              authentic Egyptian cuisine
            </Link>,{" "}
            <Link to="/events" className="text-egyptian-gold hover:underline">
              live weekend entertainment
            </Link>,
            and our famous{" "}
            <Link to="/events#shisha" className="text-egyptian-gold hover:underline">
              shisha lounge
            </Link>.
          </p>
        </div>
      </section>

      {/* Section 6 - Carlton Dining Experience */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center egyptian-gold">
            The Carlton Dining Experience
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Dining in Carlton offers something truly special that distinguishes it from Melbourne's CBD restaurant scene. While the city center caters to business lunches and pre-theater dinners, Carlton restaurants—including Cairo By Nights—are family-owned establishments where hospitality is personal and the atmosphere is genuinely welcoming.
            </p>
            <p>
              <strong className="text-foreground">Lygon Street's Dining Tradition:</strong> Dining on Lygon Street isn't just about the food—it's about the experience. Long, leisurely dinners. Sidewalk café culture. The joy of discovery as you explore diverse cuisines from around the world.
            </p>
            <p>
              Our outdoor terrace captures the essence of Lygon Street dining. On warm evenings, watching the world go by while enjoying authentic Egyptian mezze and premium shisha is an experience that defines Carlton's restaurant culture.
            </p>
            <p>
              <strong className="text-foreground">Weekend Nights:</strong> Friday, Saturday, and Sunday nights bring an extra dimension with our live belly dancing performances at 9 PM. The combination of authentic entertainment, exceptional food, and Carlton's vibrant atmosphere creates an unforgettable evening.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Local Tips */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center egyptian-gold">
            Carlton Insider Tips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-playfair font-semibold text-lg mb-3 text-primary">Best Time to Visit</h3>
              <p className="text-muted-foreground text-sm">
                Weekday evenings offer a relaxed atmosphere. Friday-Saturday nights are lively with our belly dancing shows at 9pm. We recommend booking ahead for weekends.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <ParkingCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-playfair font-semibold text-lg mb-3 text-primary">Parking Strategy</h3>
              <p className="text-muted-foreground text-sm">
                Arrive after 6pm for free street parking—perfect timing for dinner reservations. Check side streets (Faraday, Drummond) for better availability.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <span className="text-4xl mb-4 block">🎓</span>
              <h3 className="font-playfair font-semibold text-lg mb-3 text-primary">University Calendar</h3>
              <p className="text-muted-foreground text-sm">
                During university semester, Carlton buzzes with students. Quieter during semester breaks (July, December-February). Both periods offer unique atmospheres.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
              <span className="text-4xl mb-4 block">🎉</span>
              <h3 className="font-playfair font-semibold text-lg mb-3 text-primary">Carlton Festa</h3>
              <p className="text-muted-foreground text-sm">
                Each October, Lygon Street hosts the annual Carlton Festa—a massive street festival celebrating Italian culture with food, music, and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Accessibility */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Accessibility className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Accessibility Information
            </h2>
            <p className="text-lg text-muted-foreground">
              Cairo By Nights is committed to welcoming all guests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-primary">Physical Access</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Wheelchair accessible entrance from street level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Ground floor dining with no steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Accessible restrooms available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Wide aisles for wheelchair navigation</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-primary">Public Transport & Parking</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Tram routes 1 and 96 are wheelchair accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Accessible parking spots on Lygon Street nearby</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Staff available to assist with accessibility needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Please call ahead: 03 9654 1005</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
            Ready to Visit Us in Carlton?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience authentic Egyptian cuisine in the heart of Melbourne's historic Lygon Street dining precinct
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
              className="hero-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Make a Reservation
            </a>
            <a href="/menu" className="reserve-button">
              View Our Menu
            </a>
            <a href="/contact-us" className="reserve-button">
              Contact Us
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Address:</strong> 5/252 Lygon Street, Carlton VIC 3053
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Phone:</strong> <a href="tel:0396541005" className="text-primary hover:text-accent">03 9654 1005</a>
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Hours:</strong> Sun-Thu 5pm-12am | Fri-Sat 5pm-1am
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;
