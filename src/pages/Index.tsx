import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { MenuPreview } from '@/components/MenuPreview';
import { TestimonialSection } from '@/components/TestimonialSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ScrollProgress } from '@/components/ScrollProgress';
import { faqSchema } from '@/components/FAQSchema';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import egyptianDishes from '@/assets/egyptian-dishes.webp';

const Index = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cairo By Nights Restaurant & Bar",
    "url": "https://www.caironightsrestaurant.com.au",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.caironightsrestaurant.com.au/menu?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "name": "Cairo By Nights Restaurant & Bar",
    "alternateName": ["Cairo Nights", "Cairo Nights Restaurant", "Cairo By Nights Carlton", "Cairo Nights Melbourne"],
    "description": "Authentic halal Egyptian restaurant in Carlton Melbourne featuring live belly dancing, premium shisha lounge, and traditional Middle Eastern cuisine. Experience the magic of Cairo on Lygon Street.",
    "image": "https://www.caironightsrestaurant.com.au/images/hero.jpg",
    "servesCuisine": ["Egyptian", "Middle Eastern", "Mediterranean", "Halal"],
    "acceptsReservations": true,
    "priceRange": "$$",
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
    },
    "telephone": "+61396541005",
    "email": "contactus@cairobynightsrestaurant.com.au",
    "url": "https://www.caironightsrestaurant.com.au",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "17:00",
        "closes": "23:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "17:00",
        "closes": "00:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200"
    },
    "sameAs": [
      "https://www.facebook.com/caironights",
      "https://www.instagram.com/caironights"
    ],
    "hasMenu": "https://www.caironightsrestaurant.com.au/menu",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "AUD",
    "founder": {
      "@type": "Person",
      "name": "Sonny",
      "description": "Founder of Cairo By Nights with deep Egyptian culinary heritage"
    },
    "slogan": "Authentic Egyptian Nights in Carlton Melbourne",
    "knowsAbout": [
      "Egyptian cuisine",
      "Halal food",
      "Belly dancing",
      "Shisha lounge",
      "Middle Eastern entertainment",
      "Traditional Arabic music",
      "Egyptian hospitality"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Live Belly Dancing",
        "value": "Professional belly dancing shows every Friday, Saturday, and Sunday at 9PM"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Premium Shisha Lounge",
        "value": "Authentic Egyptian shisha with premium tobacco blends"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Live Arabic Music",
        "value": "Traditional Arabic music performances on Friday and Sunday evenings"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Function Room",
        "value": "Private event space available for birthdays, corporate events, and celebrations"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Halal Certified",
        "value": "All meat is halal and kitchen follows strict halal guidelines"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <ScrollProgress />
      <SEO
        title="Egyptian Restaurant Carlton | Cairo By Nights Lygon St"
        description="Best Egyptian restaurant in Carlton, Melbourne. Authentic halal cuisine, live belly dancing, shisha lounge. 5/252 Lygon Street. Book now! ⭐ 4.8/5"
        canonical="https://www.caironightsrestaurant.com.au/"
        ogType="restaurant"
      />
      <Helmet>
        <link rel="preload" as="image" href={egyptianDishes} />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(restaurantSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />

        {/* Welcome Section */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                Welcome to Cairo By Nights
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Known locally as Cairo Nights, we're Melbourne's Premier Egyptian Restaurant Experience
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Step into Cairo By Nights and experience the magic of authentic Egyptian dining in the heart of Carlton, Melbourne. Since our opening, we've been Melbourne's destination for genuine Egyptian cuisine, bringing centuries-old culinary traditions to Australia's most celebrated dining precinct on Lygon Street.
              </p>

              <p>
                As a family-owned, halal-certified Egyptian restaurant, we take immense pride in every dish that leaves our kitchen. Our expert Egyptian chefs bring generations of culinary knowledge and traditional cooking techniques, preparing each meal with the same authentic methods used in Cairo's finest restaurants. From our signature slow-cooked tagens to perfectly charcoal-grilled kofta, every dish tells the story of Egypt's rich culinary heritage.
              </p>

              <p>
                What sets Cairo By Nights apart is our commitment to delivering not just a meal, but a complete Egyptian cultural experience. Beyond our exceptional food, we offer live belly dancing performances every Friday, Saturday, and Sunday night at 9 PM, filling our restaurant with the energy and artistry of traditional Egyptian entertainment. Our premium shisha lounge, featuring an outdoor terrace with views of bustling Lygon Street, provides the perfect setting for relaxed evening gatherings.
              </p>

              <p className="text-muted-foreground mb-4">
                Experience <Link to="/events" className="text-egyptian-gold hover:underline">live belly dancing</Link> every Friday, Saturday, and Sunday, relax in our premium <Link to="/events#shisha" className="text-egyptian-gold hover:underline">shisha lounge</Link>, or book our <Link to="/function-room" className="text-egyptian-gold hover:underline">private function room</Link> for your next celebration.
              </p>

              <p>
                Whether you're celebrating a romantic dinner for two, gathering with family and friends, hosting a corporate event in our private function room, or simply craving authentic halal Egyptian cuisine, Cairo By Nights welcomes you with the warm hospitality Egypt is famous for. Our extended hours—open until midnight Sunday through Thursday and 1 AM on weekends—make us Carlton's go-to destination for late-night dining and entertainment.
              </p>

              <p>
                Located in the heart of Carlton, just moments from the University of Melbourne and Carlton Gardens, we're easily accessible whether you're a local resident, university student, or visitor exploring Melbourne's cultural landmarks. Join the 5,000+ satisfied guests who have discovered why Cairo By Nights is Carlton's favorite Egyptian restaurant.
              </p>
            </div>
          </div>
        </section>

        <StatsSection />
        <MenuPreview />

        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                Why Choose Cairo By Nights
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the Difference of Authentic Egyptian Excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">Expert Egyptian Chefs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our kitchen is led by experienced Egyptian chefs who bring generations of culinary tradition from Cairo to Carlton. Each chef has mastered the art of authentic Egyptian cooking, ensuring every dish captures the true flavors and techniques of traditional Egyptian cuisine. From perfecting the blend of seven spices in our kofta to achieving the ideal slow-cooked tenderness in our tagens, our chefs' expertise shines in every bite.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">100% Halal Certified</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We take pride in our complete halal certification, ensuring that every ingredient and dish meets the highest standards of halal preparation. Our commitment to authentic Egyptian ingredients means we source premium halal meats, import traditional Egyptian spices, and prepare everything fresh daily in our Carlton kitchen. Dine with complete confidence knowing that authenticity and halal compliance go hand-in-hand at Cairo By Nights.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">Live Entertainment Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your dinner into an unforgettable evening with our professional belly dancing performances every Friday, Saturday, and Sunday at 9 PM. Our talented dancers bring the artistry and energy of traditional Egyptian entertainment, accompanied by authentic Arabic music. Combine your meal with premium shisha from our outdoor terrace lounge, and experience the complete Cairo nightlife atmosphere right here in Melbourne.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">Perfect Carlton Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conveniently located on iconic Lygon Street in Carlton, we're easily accessible by tram (routes 1 & 96), with free street parking Sunday all day and after 7 PM weekdays. Just 2 minutes from the University of Melbourne and 10 minutes from Carlton Gardens, our location makes us the perfect choice for students, locals, and visitors. Plus, with extended hours until 1 AM on weekends, we're Carlton's premier destination for late-night Egyptian dining.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Join 5,000+ satisfied guests</strong> who have rated us 4.8/5 stars. Experience the Cairo By Nights difference today.
              </p>
            </div>
          </div>
        </section>

        <TestimonialSection />
        <FAQSection />

        {/* Visit Us Section */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                Visit Us in Carlton
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Easy to Find on Lygon Street, Melbourne's Iconic Dining Precinct
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Our Address</h3>
                <p className="text-muted-foreground">
                  5/252 Lygon Street, Carlton VIC 3053<br/>
                  Just 2 minutes from University of Melbourne<br/>
                  10 minutes from Carlton Gardens
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚊</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Public Transport</h3>
                <p className="text-muted-foreground">
                  Tram routes 1 & 96 stop nearby<br/>
                  Lygon St/Grattan St stop (2 min walk)<br/>
                  15 minutes from Melbourne CBD
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🅿️</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Free Parking</h3>
                <p className="text-muted-foreground">
                  Sunday: Free all day<br/>
                  Monday-Saturday: Free after 7pm<br/>
                  Metered parking available before 7pm
                </p>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <p className="text-lg text-muted-foreground mb-6">
                First time visiting Carlton? Our comprehensive location guide includes detailed parking information, tram routes from across Melbourne, nearby attractions to explore before or after dinner, and everything you need to plan your visit to Lygon Street's premier Egyptian restaurant.
              </p>
              <a
                href="/location"
                className="inline-block px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                View Complete Location Guide →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
