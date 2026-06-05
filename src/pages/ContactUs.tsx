import { MapPin, Clock, Phone, Mail, Star } from 'lucide-react';
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
const QUICK_ACTION_BTN = ['reserve-button', 'hero-button', 'reserve-button'];

const ContactUs = () => {
  const { data: site } = useSiteSettings();
  const { data: page } = usePage('contactPage');

  const contact = {
    address: site?.address || '5/252 Lygon Street, Carlton 3053',
    phone: site?.phone || '03 9654 1005',
    email: site?.email || 'contactus@cairobynightsrestaurant.com.au',
    weekdays: site?.openingHours?.weekdays || 'Sunday – Thursday: 5:00pm – 11:30pm',
    weekends: site?.openingHours?.weekends || 'Friday & Saturday: 5:00pm – 12:30am',
    mapsUrl:
      site?.googleMapsUrl ||
      `https://maps.google.com/search/${encodeURIComponent(site?.address || '5/252 Lygon Street, Carlton 3053')}`,
    mapEmbedUrl:
      site?.mapEmbedUrl ||
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8277165143247!2d144.96789931531915!3d-37.80015054202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ca46c6f4c7%3A0x5a6fb5d0c5f7e6!2s252%20Lygon%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sau!4v1634567890123',
  };

  const seo = page?.seo || {};
  const hero = page?.hero || {};
  const info = page?.contactInfo || {};
  const terrace = page?.terracePolicy || {};
  const map = page?.mapSection || {};
  const quick = page?.quickActions || {};
  const reviews = page?.reviews || {};
  const explore = page?.exploreMore || {};

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={seo.title || 'Contact Cairo By Nights | Lygon St Carlton | 03 9654 1005'}
        description={
          seo.description ||
          'Cairo By Nights: 5/252 Lygon Street, Carlton 3053. Ph: 03 9654 1005. Open Sun-Thu 5pm-12am, Fri-Sat 5pm-1am. Reserve online!'
        }
        canonical={seo.canonical || 'https://www.caironightsrestaurant.com.au/contact-us'}
      />
      <Helmet>
        <link rel="preload" as="image" href={restaurantInterior} />
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={restaurantInterior} alt="Cairo By Nights Egyptian Restaurant Interior - 5/252 Lygon Street Carlton Melbourne" width={1920} height={1080} className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 egyptian-gold">{hero.heading || 'Contact Us'}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {hero.subheading || 'Get in touch with Cairo By Nights for reservations, events, or any inquiries about our authentic Egyptian dining experience.'}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">{info.heading || 'Visit Cairo By Nights'}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {info.intro || "Experience authentic Egyptian cuisine in the heart of Carlton, Melbourne. We're open seven days a week, ready to transport you to the flavors of Egypt."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Address</h3>
                    <p className="text-muted-foreground">{contact.address}</p>
                    <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
                      {info.mapsLinkText || 'View on Google Maps →'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg"><Phone className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Phone</h3>
                    <a href={`tel:${contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors duration-300">{contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg"><Mail className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Email</h3>
                    <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors duration-300">{contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg"><Clock className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <div>{contact.weekdays}</div>
                      <div>{contact.weekends}</div>
                    </div>
                  </div>
                </div>
              </div>

              <PortableTextContent value={info.linkParagraph} paragraphClassName="text-muted-foreground mb-4" />
            </div>

            <div className="relative">
              <img src={egyptianDishes} alt="Authentic Egyptian cuisine at Cairo By Nights Carlton - Halal restaurant Lygon Street Melbourne" width={800} height={600} className="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Terrace Policy Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{terrace.heading || 'Weekend Terrace Minimum Spend Policy'}</h2>
            <p className="text-lg text-muted-foreground mb-2">{terrace.subheading || 'Important Information for Our Valued Guests'}</p>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">{terrace.boxHeading || 'Crafting a Premium Experience'}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-1 text-primary">{terrace.applicableAreaLabel || 'Applicable Area'}</h4>
                    <p className="text-muted-foreground">{terrace.applicableArea || 'Front Terrace Area (Tables 10-23)'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0"><Clock className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-1 text-primary">{terrace.timePeriodLabel || 'Time Period'}</h4>
                    <p className="text-muted-foreground">{terrace.timePeriod || 'Weekends between 5:00 PM - 11:00 PM'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0"><Star className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-1 text-primary">{terrace.minSpendLabel || 'Minimum Spend'}</h4>
                    <p className="text-foreground font-bold text-xl">{terrace.minSpend || '$40 per person'}</p>
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground leading-relaxed italic">
                    {terrace.quote || '"This policy helps us preserve the exclusive feel of our Front Terrace, ensuring every guest can enjoy the best of Cairo By Nights during our busiest hours. We appreciate your understanding and cooperation."'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{map.heading || 'Find Us in Carlton'}</h2>
            <PortableTextContent value={map.body} linkClassName="text-primary hover:text-accent underline" paragraphClassName="text-lg text-muted-foreground mb-4" />
          </div>
          <div className="bg-muted/50 rounded-lg overflow-hidden shadow-lg">
            <iframe src={contact.mapEmbedUrl} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={map.mapTitle || 'Cairo By Nights Restaurant Location'}></iframe>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{quick.heading || 'Ready to Experience Egypt?'}</h2>
            <p className="text-lg text-muted-foreground">{quick.body || 'Book your table today or contact us for special events and private dining arrangements.'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(quick.cards || []).map((card: any, i: number) => {
              const icons = [Star, Phone, Mail];
              const Icon = icons[i] || Star;
              const external = card.href?.startsWith('http');
              return (
                <div key={i} className="text-center p-6 bg-secondary/20 rounded-lg">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Icon className="h-8 w-8 text-primary" /></div>
                  <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.body}</p>
                  <a
                    href={card.href}
                    className={`${QUICK_ACTION_BTN[i] || 'reserve-button'} inline-block`}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {card.buttonLabel}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{reviews.heading || 'What Our Guests Say'}</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex" role="img" aria-label="Rated 4.8 out of 5 stars">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-6 w-6 text-yellow-400 fill-current" aria-hidden="true" />))}
              </div>
              <span className="text-muted-foreground ml-2">{reviews.rating || '4.8/5 on Google Reviews'}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(reviews.items || []).map((rev: any, i: number) => (
              <div key={i} className="testimonial-card p-6">
                <div className="flex items-center gap-2 mb-4" role="img" aria-label="Rated 5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (<Star key={j} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />))}
                </div>
                <p className="text-muted-foreground mb-4 italic">{rev.body}</p>
                <div className="font-semibold text-primary">{rev.author}</div>
                <div className="text-sm text-muted-foreground">{rev.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">{explore.heading || 'Explore More'}</h2>
            <p className="text-lg text-muted-foreground">{explore.subheading || 'Discover everything Cairo By Nights has to offer'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(explore.cards || []).map((card: any, i: number) => (
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

export default ContactUs;
