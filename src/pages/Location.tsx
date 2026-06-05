import { Clock, Navigation, Car, ParkingCircle, Accessibility, ChevronDown } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { PortableTextContent } from '@/components/PortableTextContent';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { usePage } from '@/hooks/usePage';
import restaurantInterior from '@/assets/restaurant-interior.webp';
import egyptianDishes from '@/assets/egyptian-dishes.webp';

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking';
const DEFAULT_MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8277165143247!2d144.96789931531915!3d-37.80015054202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ca46c6f4c7%3A0x5a6fb5d0c5f7e6!2s252%20Lygon%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sau!4v1634567890123';

const Location = () => {
  const { data: site } = useSiteSettings();
  const { data: page } = usePage('locationPage');
  const seo = page?.seo || {};
  const hero = page?.hero || {};
  const findUs = page?.findUs || {};
  const getHere = page?.howToGetHere || {};
  const parking = page?.parkingGuide || {};
  const carlton = page?.carltonLygon || {};
  const things = page?.thingsToDo || {};
  const dining = page?.diningExperience || {};
  const tips = page?.insiderTips || {};
  const access = page?.accessibility || {};
  const cta = page?.cta || {};
  const mapEmbedUrl = site?.mapEmbedUrl || DEFAULT_MAP;

  const locationSchema = {
    "@context": "https://schema.org", "@type": "Restaurant", "name": "Cairo By Nights",
    "address": { "@type": "PostalAddress", "streetAddress": "5/252 Lygon Street", "addressLocality": "Carlton", "addressRegion": "VIC", "postalCode": "3053", "addressCountry": "AU" },
    "geo": { "@type": "GeoCoordinates", "latitude": "-37.8014", "longitude": "144.9672" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={seo.title || "Cairo By Nights Location | Lygon Street Carlton Melbourne"}
        description={seo.description || "Find Cairo By Nights at 5/252 Lygon Street, Carlton. Tram 1 & 96. Free parking Sunday all day, Mon-Sat after 7pm. Near University of Melbourne. Best Egyptian dining Carlton!"}
        canonical={seo.canonical || "https://www.caironightsrestaurant.com.au/location"}
      />
      <Helmet>
        <link rel="preload" as="image" href={restaurantInterior} />
        <script type="application/ld+json">{JSON.stringify(locationSchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={restaurantInterior} alt="Cairo By Nights location on Lygon Street Carlton Melbourne" width={1920} height={1080} className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 egyptian-gold">{hero.heading || "Visit Cairo By Nights in Carlton, Melbourne"}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{hero.subheading || "Discover Melbourne's finest Egyptian restaurant in the heart of Carlton's vibrant Lygon Street dining precinct"}</p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><ChevronDown className="h-8 w-8 text-primary" /></div>
      </section>

      {/* Find Us */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">{findUs.heading || "Find Us on Lygon Street"}</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg"><Navigation className="h-6 w-6 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">{findUs.address || "5/252 Lygon Street, Carlton VIC 3053"}</p>
                    <PortableTextContent value={findUs.body} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted/50 rounded-lg overflow-hidden shadow-lg">
                <iframe src={mapEmbedUrl} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={findUs.mapTitle || "Cairo By Nights Restaurant Location - 5/252 Lygon Street Carlton"}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Here */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center egyptian-gold">{getHere.heading || "How to Get to Cairo By Nights"}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg"><Navigation className="h-8 w-8 text-primary" /></div>
                <h3 className="text-2xl font-playfair font-bold text-primary">{getHere.tram?.heading || "By Tram"}</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <PortableTextContent value={getHere.tram?.body} strongClassName="text-foreground" />
              </div>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg"><Car className="h-8 w-8 text-primary" /></div>
                <h3 className="text-2xl font-playfair font-bold text-primary">{getHere.car?.heading || "By Car"}</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <PortableTextContent value={getHere.car?.body} strongClassName="text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Guide */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <ParkingCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{parking.heading || "Parking Guide - Where to Park in Carlton"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{parking.intro || "Convenient parking options near Cairo By Nights on Lygon Street"}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {(parking.cards || []).map((card: any, i: number) => (
              <div key={i} className="bg-muted/50 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">{card.title}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <PortableTextContent value={card.richBody} strongClassName="text-foreground" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <h3 className="font-playfair font-semibold text-2xl mb-6 text-primary">{parking.nearbyCarParks?.heading || "Nearby Car Parks"}</h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              {(parking.nearbyCarParks?.items || []).map((item: any, i: number) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="mb-4">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carlton & Lygon Street */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">{carlton.heading || "Experience Carlton's Iconic Lygon Street"}</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <PortableTextContent value={carlton.body} strongClassName="text-foreground" />
              </div>
            </div>
            <div>
              <img src={carlton.image?.url || egyptianDishes} alt="Authentic Egyptian dishes at Cairo By Nights Carlton" width={800} height={600} className="w-full aspect-video object-cover rounded-lg shadow-lg" loading="lazy" />
            </div>
          </div>
          <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <PortableTextContent value={carlton.bodyBelow} strongClassName="text-foreground" />
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center egyptian-gold">{things.heading || "Things to Do in Carlton Before or After Dinner"}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[things.beforeDinner, things.afterDinner].map((col: any, ci: number) => (
              <div key={ci} className="bg-muted/50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-primary">{col?.heading || (ci === 0 ? 'Before Dinner' : 'After Dinner')}</h3>
                <div className="space-y-4 text-muted-foreground">
                  {(col?.activities || []).map((a: any, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-2xl">{a.emoji}</span>
                      <div>
                        <strong className="text-foreground">{a.title}</strong>
                        <p>{a.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <PortableTextContent value={things.bottomNote} paragraphClassName="text-muted-foreground mb-4 text-center mt-8 max-w-3xl mx-auto" />
        </div>
      </section>

      {/* Carlton Dining Experience */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center egyptian-gold">{dining.heading || "The Carlton Dining Experience"}</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <PortableTextContent value={dining.body} strongClassName="text-foreground" />
          </div>
        </div>
      </section>

      {/* Insider Tips */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center egyptian-gold">{tips.heading || "Carlton Insider Tips"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(tips.tips || []).map((tip: any, i: number) => (
              <div key={i} className="bg-muted/50 p-6 rounded-lg shadow-lg">
                {i === 0 && <Clock className="h-8 w-8 text-primary mb-4" />}
                {i === 1 && <ParkingCircle className="h-8 w-8 text-primary mb-4" />}
                {i > 1 && <span className="text-4xl mb-4 block">{tip.emoji}</span>}
                <h3 className="font-playfair font-semibold text-lg mb-3 text-primary">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Accessibility className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{access.heading || "Accessibility Information"}</h2>
            <p className="text-lg text-muted-foreground">{access.intro || "Cairo By Nights is committed to welcoming all guests"}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[access.physicalAccess, access.transportParking].map((group: any, gi: number) => (
              <div key={gi} className="bg-muted/50 rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-3 text-primary">{group?.heading || (gi === 0 ? 'Physical Access' : 'Public Transport & Parking')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(group?.items || []).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">{cta.heading || "Ready to Visit Us in Carlton?"}</h2>
          <p className="text-lg text-muted-foreground mb-8">{cta.body || "Experience authentic Egyptian cuisine in the heart of Melbourne's historic Lygon Street dining precinct"}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {(cta.buttons || DEFAULT_CTA_BUTTONS).map((btn: any, i: number) => {
              const external = btn.href?.startsWith('http');
              return (
                <a key={i} href={btn.href} className={btn.style === 'hero' ? 'hero-button' : 'reserve-button'} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {btn.label}
                </a>
              );
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-4"><strong className="text-foreground">Address:</strong> 5/252 Lygon Street, Carlton VIC 3053</p>
            <p className="text-muted-foreground mb-4"><strong className="text-foreground">Phone:</strong> <a href="tel:0396541005" className="text-primary hover:text-accent">{site?.phone || '03 9654 1005'}</a></p>
            <p className="text-muted-foreground"><strong className="text-foreground">Hours:</strong> {cta.hoursLine || 'Sun-Thu 5pm-12am | Fri-Sat 5pm-1am'}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const DEFAULT_CTA_BUTTONS = [
  { label: 'Make a Reservation', href: RESERVATION, style: 'hero' },
  { label: 'View Our Menu', href: '/menu', style: 'reserve' },
  { label: 'Contact Us', href: '/contact-us', style: 'reserve' },
];

export default Location;
