import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet-async";
import bellydancerImage from "@/assets/belly-dancer.webp";
import restaurantInterior from "@/assets/restaurant-interior.webp";
import fullTable from "@/assets/full-table.webp";
import happyGuests from "@/assets/happy-guests.webp";
import egyptianDishes from "@/assets/egyptian-dishes.webp";
import shishaImage from "@/assets/shisha.webp";
import barDrinks from "@/assets/bar-drinks.webp";
import beverages from "@/assets/beverages.webp";

const Events = () => {
  const galleryImages = [
    bellydancerImage,
    restaurantInterior,
    fullTable,
    happyGuests,
    egyptianDishes,
    shishaImage,
    barDrinks,
    beverages,
    bellydancerImage,
    restaurantInterior,
    fullTable,
    happyGuests,
  ];

  // Event Schema for weekly belly dancing and live performances
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "Weekly Belly Dancing & Live Entertainment at Cairo By Nights",
    "description": "Experience authentic Egyptian belly dancing and live Arabic music performances every Friday, Saturday, and Sunday evening at Cairo By Nights Carlton.",
    "image": "https://www.caironightsrestaurant.com.au/images/belly-dancer.webp",
    "organizer": {
      "@type": "Restaurant",
      "name": "Cairo By Nights",
      "url": "https://www.caironightsrestaurant.com.au",
      "telephone": "+61396541005",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5/252 Lygon Street",
        "addressLocality": "Carlton",
        "addressRegion": "VIC",
        "postalCode": "3053",
        "addressCountry": "AU"
      }
    },
    "location": {
      "@type": "Restaurant",
      "name": "Cairo By Nights",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5/252 Lygon Street",
        "addressLocality": "Carlton",
        "addressRegion": "VIC",
        "postalCode": "3053",
        "addressCountry": "AU"
      }
    },
    "subEvent": [
      {
        "@type": "Event",
        "name": "Friday Night Belly Dancing & Live Music",
        "description": "Professional belly dancing at 9pm followed by live Arabic music and dance performances from 8pm-11pm",
        "eventSchedule": {
          "@type": "Schedule",
          "byDay": "https://schema.org/Friday",
          "startTime": "20:00",
          "endTime": "23:00"
        },
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": "https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
        }
      },
      {
        "@type": "Event",
        "name": "Saturday Night Belly Dancing Show",
        "description": "Authentic Egyptian belly dance performance by professional dancers at 9pm",
        "eventSchedule": {
          "@type": "Schedule",
          "byDay": "https://schema.org/Saturday",
          "startTime": "21:00",
          "endTime": "22:00"
        },
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": "https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
        }
      },
      {
        "@type": "Event",
        "name": "Sunday Night Belly Dancing & Live Music",
        "description": "Professional belly dancing at 9pm followed by live Arabic music and dance performances from 8pm-11pm",
        "eventSchedule": {
          "@type": "Schedule",
          "byDay": "https://schema.org/Sunday",
          "startTime": "20:00",
          "endTime": "23:00"
        },
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": "https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
        }
      }
    ]
  };

  // Image Gallery Schema for SEO
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Cairo By Nights Event Gallery",
    "description": "Photos of belly dancing performances, shisha lounge, Egyptian cuisine, and authentic Middle Eastern atmosphere at Cairo By Nights Carlton",
    "image": galleryImages.map((image, index) => ({
      "@type": "ImageObject",
      "url": `https://www.caironightsrestaurant.com.au${image}`,
      "name": `Cairo By Nights Event Photo ${index + 1}`,
      "description": "Live belly dancing, shisha lounge, and Egyptian cuisine at Cairo By Nights Carlton Melbourne",
      "encodingFormat": "image/webp"
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Belly Dancing Melbourne | Live Shows | Cairo By Nights"
        description="Live belly dancing shows every Fri-Sun 9PM. Arabic music, shisha lounge Carlton. Best entertainment venue Melbourne. Reserve your spot!"
        canonical="https://www.caironightsrestaurant.com.au/events"
        ogType="event"
        ogImage="/images/og-events.webp"
      />
      <Helmet>
        <link rel="preload" as="image" href={bellydancerImage} />
        <script type="application/ld+json">
          {JSON.stringify(eventSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(imageGallerySchema)}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bellydancerImage})`,
          }}
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight egyptian-gold">
            Belly Dancing Melbourne | Live Entertainment & Shisha at Cairo By Nights
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            From sizzling dance shows to unforgettable live music and exclusive parties — every night tells a story.
          </p>
          <p className="text-lg md:text-xl text-accent/90 font-medium">
            [Authentic Egyptian Nights in Melbourne]
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">
              Unforgettable Moments at Cairo By Nights
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From golden veils and Arabic oud to packed-out nights filled with laughter, Cairo By Nights captures the essence of Egyptian hospitality. Each photo tells a story of authentic Egyptian cuisine, belly dancing, and unforgettable cultural experiences in Carlton.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Cairo By Nights Carlton event gallery - Live belly dancing, shisha lounge, Egyptian cuisine ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Events Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">
              Weekly Events Schedule
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the magic every night with our authentic Egyptian entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Friday */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 egyptian-gold">Friday</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Belly Dance & Live Performance</h4>
                <p className="text-muted-foreground mb-6">
                  Belly dancer at 9pm followed by live dance performances
                </p>
                <div className="text-accent font-medium">
                  Belly Dancer: 9:00 PM<br />
                  Live Dancer: 8:00 PM - 11:00 PM
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 egyptian-gold">Saturday</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Belly Dance Show</h4>
                <p className="text-muted-foreground mb-6">
                  Authentic Egyptian belly dance performance by professional dancers
                </p>
                <div className="text-accent font-medium">
                  Belly Dancer: 9:00 PM
                </div>
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 egyptian-gold">Sunday</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Belly Dance & Live Performance</h4>
                <p className="text-muted-foreground mb-6">
                  Belly dancer at 9pm followed by live dance performances
                </p>
                <div className="text-accent font-medium">
                  Belly Dancer: 9:00 PM<br />
                  Live Dancer: 8:00 PM - 11:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Shisha Lounge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">
                Premium Shisha Lounge in Carlton
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unwind in Melbourne's most authentic shisha experience, where traditional Egyptian hospitality meets modern comfort
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold egyptian-gold">
                  Melbourne's Best Shisha Lounge Experience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Step into our premium shisha lounge and discover why Cairo By Nights is Carlton's favorite destination
                  for authentic hookah culture. Our expertly prepared shisha brings the essence of Cairo's famous cafés
                  to the heart of Lygon Street, creating the perfect atmosphere for relaxation and conversation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every shisha session is carefully crafted by our experienced staff using premium tobacco blends and
                  traditional Egyptian methods. Whether you're a shisha enthusiast or trying it for the first time,
                  our team ensures a smooth, flavorful experience that transports you to the vibrant streets of Cairo.
                </p>

                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <h4 className="text-xl font-bold mb-4 egyptian-gold">Featured Flavors</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">🍇</span>
                      <div>
                        <span className="font-semibold text-foreground">Fruit Fever</span> - Our signature blend of
                        tropical fruits including mango, passion fruit, and guava for a sweet, refreshing experience
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">🍎</span>
                      <div>
                        <span className="font-semibold text-foreground">Double Apple</span> - The classic Middle Eastern
                        favorite combining sweet and tart apple notes with a hint of anise
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">🌿</span>
                      <div>
                        <span className="font-semibold text-foreground">Mint Infusion</span> - Cool, refreshing mint
                        perfect for those seeking a crisp, invigorating shisha session
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">🍋</span>
                      <div>
                        <span className="font-semibold text-foreground">Lemon Mint</span> - A zesty blend that combines
                        citrus brightness with cooling mint for the ultimate refreshment
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our shisha lounge offers comfortable seating, ambient lighting, and the perfect backdrop for an
                  evening with friends. Whether you're celebrating a special occasion or simply unwinding after a long
                  day, our Carlton shisha lounge provides an authentic escape from the everyday.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                  <h4 className="text-2xl font-bold mb-6 egyptian-gold">Why Choose Our Shisha Lounge?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Premium Quality Tobacco</h5>
                        <p className="text-muted-foreground">Imported directly from Egypt and the Middle East for authentic flavor</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Expert Staff</h5>
                        <p className="text-muted-foreground">Trained in traditional Egyptian shisha preparation techniques</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Comfortable Atmosphere</h5>
                        <p className="text-muted-foreground">Authentic Egyptian décor creates an immersive lounge experience</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Convenient Carlton Location</h5>
                        <p className="text-muted-foreground">Easy to reach on Lygon Street in the heart of Carlton</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Perfect Pairing</h5>
                        <p className="text-muted-foreground">Combine with authentic Egyptian cuisine and live entertainment</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-6 border border-primary/30">
                  <p className="text-lg font-medium text-center">
                    <span className="egyptian-gold">Open 7 Days</span> | Shisha served throughout dinner service
                  </p>
                  <p className="text-center text-muted-foreground mt-2">
                    Reservations recommended for weekend evenings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Entertainment Details Section */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">
                Authentic Egyptian Entertainment
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Immerse yourself in the sights and sounds of Egypt with our world-class performers
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                <h3 className="text-3xl font-bold mb-4 egyptian-gold">Professional Belly Dancing Shows</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every Friday, Saturday, and Sunday at 9:00 PM, our talented belly dancers bring the ancient art of
                  Raqs Sharqi to life. Watch as they perform traditional Egyptian belly dancing with stunning costumes,
                  graceful movements, and captivating choreography that has been perfected over centuries. This isn't
                  just entertainment—it's a glimpse into Egyptian cultural heritage that has mesmerized audiences for generations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our performers are professionally trained in classical Egyptian dance styles and bring years of experience
                  to every show. The combination of fluid hip movements, intricate hand gestures, and expressive performance
                  creates an unforgettable spectacle that complements your dining experience perfectly.
                </p>
              </div>

              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Want a belly dancer at your private event?{" "}
                <Link to="/function-room" className="text-egyptian-gold hover:underline">
                  Book our function room
                </Link>{" "}
                for groups of 20-60 guests or{" "}
                <Link to="/contact-us" className="text-egyptian-gold hover:underline">
                  contact us
                </Link>{" "}
                to discuss entertainment options for your celebration.
              </p>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                <h3 className="text-3xl font-bold mb-4 egyptian-gold">Live Arabic Music Performances</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  On Friday and Sunday evenings from 8:00 PM to 11:00 PM, immerse yourself in the rich sounds of traditional
                  Arabic music. Our live musicians play classic Egyptian melodies on traditional instruments including the oud,
                  tabla, and darbuka, creating an authentic atmosphere that transports you straight to the heart of Cairo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The music ranges from soulful traditional ballads to upbeat celebratory rhythms, perfectly complementing
                  your meal and creating an energetic yet intimate ambiance. Whether you're enjoying a romantic dinner or
                  celebrating with a group, the live music adds a layer of authenticity that makes Cairo By Nights truly special.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-primary/30">
                <h3 className="text-2xl font-bold mb-4 text-center egyptian-gold">What to Expect</h3>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  Arrive early to secure the best viewing spots. Our entertainment begins promptly at the scheduled times,
                  and the restaurant fills quickly on weekends. We recommend making a reservation to guarantee your table
                  and ensure you don't miss the show. The combination of live entertainment, premium shisha, and authentic
                  Egyptian cuisine creates an unforgettable evening that keeps guests coming back week after week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 egyptian-gold">
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your table now and immerse yourself in an authentic Egyptian night.
            <a href="/function-room" className="text-primary hover:text-accent transition-colors duration-300 ml-1">
              Planning a special event? Check our function room
            </a>.
          </p>
          <button className="reserve-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
            Reserve Your Table
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;