import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { PortableTextContent } from '@/components/PortableTextContent';
import { usePage } from '@/hooks/usePage';
import restaurantInterior from '@/assets/restaurant-interior.webp';
import fullTable from '@/assets/full-table.webp';
import mainDish1 from '@/assets/main-dish-1.webp';
import bellyDancer from '@/assets/belly-dancer.webp';
import happyGuests from '@/assets/happy-guests.webp';
import barDrinks from '@/assets/bar-drinks.webp';
import egyptianDishes from '@/assets/egyptian-dishes.webp';
import { Users, Star } from 'lucide-react';

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking';
const ACCENT_LINK = 'text-primary hover:text-accent transition-colors duration-300';

const DEFAULT_STATS = [
  { value: '8+', label: 'Events Monthly' },
  { value: '5', label: 'Expert Chefs' },
  { value: '5000+', label: 'Served Customers' },
  { value: '15000+', label: 'Served Dishes' },
];

const AboutUs = () => {
  const { data: page } = usePage('aboutPage');
  const seo = page?.seo || {};
  const hero = page?.hero || {};
  const roots = page?.roots || {};
  const chefs = page?.chefs || {};
  const stats = page?.stats?.length ? page.stats : DEFAULT_STATS;
  const feedback = page?.feedback || {};
  const mission = page?.mission || {};
  const experience = page?.experience || {};

  // Review Schema for customer testimonials (left untouched for byte-identical JSON-LD)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Cairo By Nights",
    "url": "https://www.caironightsrestaurant.com.au",
    "address": { "@type": "PostalAddress", "streetAddress": "5/252 Lygon Street", "addressLocality": "Carlton", "addressRegion": "VIC", "postalCode": "3053", "addressCountry": "AU" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5", "worstRating": "5" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Abrar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "name": "Incredible Food from Start to Dessert", "reviewBody": "Amazing food. Highly recommend the mix grill. Dessert was also great, had the hazelnut egyptian traditional pudding." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Saif Abdulrahman" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "name": "Authentic Dining, Shisha & Live Music", "reviewBody": "Excellent authentic Egyptian food and superb service. Egyptian cuisine is well known for its hospitality, and they excel at shisha (try the Fruit Fever). The singer was an amazing bonus." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Masi Hashemi" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "name": "A Hidden Gem with Cozy Vibes", "reviewBody": "Flavorful Tagine, friendly staff, and cozy vibes. Try the BBQ Quail - it's a hidden gem! Highly recommend for authentic Egyptian cuisine" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seo.title || 'About Cairo By Nights | Egyptian Restaurant Carlton'}
        description={seo.description || 'Family-owned halal Egyptian restaurant in Carlton. Expert Egyptian chefs, traditional recipes, cultural authenticity. Discover our story.'}
        canonical={seo.canonical || 'https://www.caironightsrestaurant.com.au/about-us'}
      />
      <Helmet>
        <link rel="preload" as="image" href={restaurantInterior} />
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark">
        <div className="absolute inset-0">
          <img src={restaurantInterior} alt="Cairo By Nights restaurant interior - Authentic Egyptian decor and dining atmosphere" width={1920} height={1080} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto section-padding">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8">
            {hero.headingPart1 || 'Our '}<span className="egyptian-gold">{hero.headingPart2 || 'Story'}</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 max-w-3xl mx-auto whitespace-pre-line">
            {hero.subheading || "Melbourne's Home of Authentic\nEgyptian Cuisine & Culture"}
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 whitespace-pre-line">
            <strong>{hero.description || "Cairo By Nights isn't just a restaurant — it's a cultural journey\nthrough the flavours, music, and soul of Egypt."}</strong>
          </p>
        </div>
      </section>

      {/* Our Egyptian Roots Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white whitespace-pre-line">
                {roots.heading || 'Our Egyptian Roots –\nFrom Cairo to Carlton'}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <PortableTextContent value={roots.body} strongClassName="text-white" linkClassName={ACCENT_LINK} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={barDrinks} alt="Premium bar selection at Cairo By Nights Carlton - Egyptian cocktails and beverages" width={600} height={400} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
                <img src={happyGuests} alt="Happy guests dining at Cairo By Nights - Authentic Egyptian restaurant experience Carlton" width={600} height={400} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
              </div>
              <div className="space-y-4 mt-8">
                <img src={bellyDancer} alt="Live belly dancing performance at Cairo By Nights Carlton - Every Friday, Saturday, Sunday 9PM" width={600} height={400} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
                <img src={fullTable} alt="Authentic Egyptian dining table spread - Traditional mezze and mains at Cairo By Nights" width={600} height={400} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-primary italic font-light tracking-widest uppercase">{roots.footerText || 'INSPIRED BY THE STREETS OF EGYPT'}</p>
          </div>
        </div>
      </section>

      {/* Authentic Egyptian Chefs Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={egyptianDishes} alt="Authentic Egyptian dishes - Halal kofta, rice, and traditional sides at Cairo By Nights" width={600} height={400} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
                <img src={mainDish1} alt="Traditional Egyptian cuisine - Expert Egyptian chefs at Cairo By Nights Carlton Melbourne" width={600} height={400} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
              </div>
              <div className="space-y-4 mt-8">
                <img src={restaurantInterior} alt="Cairo By Nights restaurant interior - Traditional Egyptian decor and authentic dining atmosphere" width={600} height={400} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
                <img src={barDrinks} alt="Egyptian beverages and premium bar drinks at Cairo By Nights Carlton Melbourne" width={600} height={400} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white whitespace-pre-line">
                {chefs.heading || 'Authentic Egyptian\nChefs in Melbourne –\nTradition on Every Plate'}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300 mb-8">
                <PortableTextContent value={chefs.body} strongClassName="text-white" linkClassName={ACCENT_LINK} />
              </div>
              <a href={chefs.ctaButton?.href || RESERVATION} className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-colors duration-300 font-semibold tracking-wider" target="_blank" rel="noopener noreferrer">
                {chefs.ctaButton?.label || 'Make Reservation 🍽️'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Background */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${barDrinks})` }}>
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-4xl font-bold egyptian-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-white">{feedback.heading || "Our Clientele's Feedback"}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(feedback.reviews || []).map((rev: any, i: number) => (
              <div key={i} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4"><Users className="w-6 h-6 text-white" aria-hidden="true" /></div>
                  <div>
                    <p className="font-semibold text-white">{rev.author}</p>
                    <div className="flex" role="img" aria-label="Rated 5 out of 5 stars">
                      {[...Array(5)].map((_, j) => (<Star key={j} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />))}
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-white whitespace-pre-line">{rev.title}</h3>
                <p className="text-gray-300 leading-relaxed">{rev.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={restaurantInterior} alt="Cairo By Nights restaurant exterior at night - 5/252 Lygon Street Carlton VIC 3053" width={800} height={600} className="w-full h-96 object-cover rounded-lg" loading="lazy" />
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-white">{mission.heading || 'Our Mission – Celebrating Egyptian Culture Through Cuisine & Hospitality'}</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300 mb-8">
                <PortableTextContent value={mission.body} strongClassName="text-white" />
              </div>
              <p className="text-lg italic text-gray-400">{mission.founderAttribution || '— Sonny, Founder of Cairo By Nights'}</p>
            </div>
          </div>

          <PortableTextContent value={mission.bottomNote} paragraphClassName="text-center text-muted-foreground max-w-2xl mx-auto mb-8 mt-12" />
        </div>
      </section>

      {/* Explore More Section - Internal Links */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{experience.heading || 'Experience Cairo By Nights'}</h2>
            <p className="text-lg text-muted-foreground">{experience.subheading || "Discover what makes us Melbourne's premier Egyptian restaurant"}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(experience.cards || []).map((card: any, i: number) => (
              <a key={i} href={card.href} className="group testimonial-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="font-playfair font-semibold text-xl mb-2 text-primary group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="text-muted-foreground">{card.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
