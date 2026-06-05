import { ChevronDown } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { PortableTextContent } from '@/components/PortableTextContent';
import { useBanquets } from '@/hooks/useBanquets';
import { usePage } from '@/hooks/usePage';
import fullTable from '@/assets/full-table.webp';
import restaurantInterior from '@/assets/restaurant-interior.webp';
import egyptianDishes from '@/assets/egyptian-dishes.webp';
import mainDish1 from '@/assets/main-dish-1.webp';
import mainDish2 from '@/assets/main-dish-2.webp';

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking';

const FunctionRoom = () => {
  const { data: banquetPackages = [] } = useBanquets();
  const { data: page } = usePage('functionRoomPage');

  const seo = page?.seo || {};
  const hero = page?.hero || {};
  const experience = page?.experience || {};
  const banquetSection = page?.banquetSection || {};
  const features = page?.privateEventFeatures || {};
  const contactCta = page?.contactCta || {};

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={seo.title || 'Function Room Carlton | Private Events | Cairo By Nights'}
        description={
          seo.description ||
          'Private function room hire Carlton. Birthday parties, corporate events, engagements. Banquet packages from $60pp. Book your event now!'
        }
        canonical={seo.canonical || 'https://www.caironightsrestaurant.com.au/function-room'}
        ogImage="/images/og-function-room.webp"
      />
      <Helmet>
        <link rel="preload" as="image" href={fullTable} />
        <link rel="preload" as="image" href={restaurantInterior} />
        <link rel="preload" as="image" href={egyptianDishes} />
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="relative">
            <img src={fullTable} alt="Private function room setup at Cairo By Nights Carlton - Perfect for birthday parties and corporate events" width={600} height={400} className="w-full h-full object-cover rounded-lg" loading="eager" />
          </div>
          <div className="relative">
            <img src={restaurantInterior} alt="Cairo By Nights function room interior Carlton - Authentic Egyptian decor and private event space" width={600} height={400} className="w-full h-full object-cover rounded-lg" loading="eager" />
          </div>
          <div className="relative">
            <img src={egyptianDishes} alt="Traditional Egyptian cuisine spread at Cairo By Nights - Halal banquet packages from $60pp" width={800} height={600} className="w-full h-full object-cover rounded-lg" loading="eager" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 egyptian-gold">
            {hero.heading || 'Function Room Hire Carlton | Private Events at Cairo By Nights'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {hero.subheading ||
              'Our function room in Carlton offers an immersive Egyptian experience, ideal for birthdays, corporate dinners, engagements, and private celebrations. With authentic Middle Eastern cuisine, vibrant décor, and live entertainment options like singers or belly dancers, Cairo By Nights is the perfect venue for a memorable event.'}
          </p>
          <a href={hero.ctaButton?.href || RESERVATION} className="hero-button inline-block" target="_blank" rel="noopener noreferrer">
            {hero.ctaButton?.label || 'Plan Your Event'}
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                {experience.heading || 'An Experience Beyond Just Dining'}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {experience.body ||
                  "Transform your celebration into a sensory journey with Cairo By Nights. Our event space in Melbourne is designed for memorable moments — from bespoke Egyptian catering to live Arabic performances. Whether it's an intimate dinner or a festive gathering, our team curates every detail to deliver elegance, flavour, and unforgettable atmosphere."}
              </p>
              <a href={experience.ctaButton?.href || RESERVATION} className="reserve-button inline-block" target="_blank" rel="noopener noreferrer">
                {experience.ctaButton?.label || 'Make Reservation'}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={mainDish2} alt="Elegant Egyptian dining setup at Cairo By Nights - Premium banquet service" width={400} height={300} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
              <img src={restaurantInterior} alt="Authentic Middle Eastern restaurant ambiance - Cairo By Nights Carlton venue" width={400} height={300} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
              <img src={egyptianDishes} alt="Traditional Egyptian dishes - Authentic halal cuisine at Cairo By Nights Melbourne" width={800} height={600} className="w-full h-48 object-cover rounded-lg col-span-2" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Banquet Packages Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 egyptian-gold">
              {banquetSection.heading || 'Banquet Packages'}
            </h2>
            <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {banquetSection.intro || 'Perfect for groups and special occasions. Minimum 8 people. 48-hour advance booking required.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {banquetPackages.map((pkg, index) => (
              <div key={index} className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full"></div>
                <div className="text-center mb-6 md:mb-8 relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold egyptian-gold mb-1 group-hover:scale-110 transition-transform duration-300">{pkg.price}</div>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">{pkg.perPerson}</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {pkg.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                      {item.label && !item.value && (
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.label}</p>
                      )}
                      {item.label && item.value && (
                        <div>
                          <p className="font-semibold text-primary text-sm md:text-base mb-1">{item.label}:</p>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base pl-2">{item.value}</p>
                        </div>
                      )}
                      {!item.label && item.value && (
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base pl-2">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={RESERVATION} className="hero-button inline-block group-hover:scale-110 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
              {banquetSection.ctaButton?.label || 'Book Your Banquet'}
            </a>
          </div>
        </div>
      </section>

      {/* Private Event Features */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              {features.heading || 'Private Event Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(features.cards || DEFAULT_FEATURES).map((card: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">{card.title}</h3>
                <p className="text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>

          <PortableTextContent
            value={features.linkParagraph}
            paragraphClassName="text-muted-foreground mb-4 text-center mt-8 max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
            {contactCta.heading || 'Ready to Plan Your Event?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {contactCta.body ||
              'Contact us today to discuss your private event requirements and create an unforgettable Egyptian dining experience for you and your guests.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={RESERVATION} className="hero-button" target="_blank" rel="noopener noreferrer">
              {contactCta.bookButtonLabel || 'Book Your Event'}
            </a>
            <a href="tel:03 9654 1005" className="reserve-button">
              {contactCta.callButtonLabel || 'Call Us: 03 9654 1005'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const DEFAULT_FEATURES = [
  { emoji: '🎭', title: 'Live Entertainment', body: 'Belly dancers, Arabic singers, and traditional music' },
  { emoji: '🍽️', title: 'Authentic Cuisine', body: 'Traditional Egyptian dishes made by expert chefs' },
  { emoji: '🏺', title: 'Egyptian Décor', body: 'Immersive atmosphere with authentic Middle Eastern design' },
  { emoji: '🎉', title: 'Custom Events', body: 'Birthdays, corporate dinners, engagements, and more' },
];

export default FunctionRoom;
