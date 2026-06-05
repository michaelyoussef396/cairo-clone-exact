import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet-async";
import { PortableTextContent } from "@/components/PortableTextContent";
import { usePage } from "@/hooks/usePage";
import bellydancerImage from "@/assets/belly-dancer.webp";
import restaurantInterior from "@/assets/restaurant-interior.webp";
import fullTable from "@/assets/full-table.webp";
import happyGuests from "@/assets/happy-guests.webp";
import egyptianDishes from "@/assets/egyptian-dishes.webp";
import shishaImage from "@/assets/shisha.webp";
import barDrinks from "@/assets/bar-drinks.webp";
import beverages from "@/assets/beverages.webp";

const ACCENT_LINK = "text-egyptian-gold hover:underline";

const Events = () => {
  const { data: page } = usePage("eventsPage");
  const seo = page?.seo || {};
  const hero = page?.hero || {};
  const gallery = page?.gallery || {};
  const schedule = page?.weeklySchedule || {};
  const shisha = page?.shisha || {};
  const ent = page?.entertainment || {};
  const cta = page?.cta || {};

  const galleryImages = [
    bellydancerImage, restaurantInterior, fullTable, happyGuests, egyptianDishes,
    shishaImage, barDrinks, beverages, bellydancerImage, restaurantInterior, fullTable, happyGuests,
  ];

  const eventSchema = {
    "@context": "https://schema.org", "@type": "EventSeries",
    "name": "Weekly Belly Dancing & Live Entertainment at Cairo By Nights",
    "description": "Experience authentic Egyptian belly dancing and live Arabic music performances every Friday, Saturday, and Sunday evening at Cairo By Nights Carlton.",
    "image": "https://www.caironightsrestaurant.com.au/images/belly-dancer.webp",
    "organizer": { "@type": "Restaurant", "name": "Cairo By Nights", "url": "https://www.caironightsrestaurant.com.au", "telephone": "+61396541005", "address": { "@type": "PostalAddress", "streetAddress": "5/252 Lygon Street", "addressLocality": "Carlton", "addressRegion": "VIC", "postalCode": "3053", "addressCountry": "AU" } },
    "location": { "@type": "Restaurant", "name": "Cairo By Nights", "address": { "@type": "PostalAddress", "streetAddress": "5/252 Lygon Street", "addressLocality": "Carlton", "addressRegion": "VIC", "postalCode": "3053", "addressCountry": "AU" } },
    "subEvent": [
      { "@type": "Event", "name": "Friday Night Belly Dancing & Live Music", "description": "Professional belly dancing at 9pm followed by live Arabic music and dance performances from 8pm-11pm", "eventSchedule": { "@type": "Schedule", "byDay": "https://schema.org/Friday", "startTime": "20:00", "endTime": "23:00" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "eventStatus": "https://schema.org/EventScheduled", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "url": "https://cairo-by-nights-restaurant-bar.resos.com/booking" } },
      { "@type": "Event", "name": "Saturday Night Belly Dancing Show", "description": "Authentic Egyptian belly dance performance by professional dancers at 9pm", "eventSchedule": { "@type": "Schedule", "byDay": "https://schema.org/Saturday", "startTime": "21:00", "endTime": "22:00" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "eventStatus": "https://schema.org/EventScheduled", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "url": "https://cairo-by-nights-restaurant-bar.resos.com/booking" } },
      { "@type": "Event", "name": "Sunday Night Belly Dancing & Live Music", "description": "Professional belly dancing at 9pm followed by live Arabic music and dance performances from 8pm-11pm", "eventSchedule": { "@type": "Schedule", "byDay": "https://schema.org/Sunday", "startTime": "20:00", "endTime": "23:00" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "eventStatus": "https://schema.org/EventScheduled", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "url": "https://cairo-by-nights-restaurant-bar.resos.com/booking" } }
    ]
  };

  const imageGallerySchema = {
    "@context": "https://schema.org", "@type": "ImageGallery",
    "name": "Cairo By Nights Event Gallery",
    "description": "Photos of belly dancing performances, shisha lounge, Egyptian cuisine, and authentic Middle Eastern atmosphere at Cairo By Nights Carlton",
    "image": galleryImages.map((image, index) => ({ "@type": "ImageObject", "url": `https://www.caironightsrestaurant.com.au${image}`, "name": `Cairo By Nights Event Photo ${index + 1}`, "description": "Live belly dancing, shisha lounge, and Egyptian cuisine at Cairo By Nights Carlton Melbourne", "encodingFormat": "image/webp" }))
  };

  const [boxA, ...boxRest] = (shisha.infoBoxText || 'Open 7 Days | Shisha served throughout dinner service').split(' | ');

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seo.title || "Belly Dancing Melbourne | Live Shows | Cairo By Nights"}
        description={seo.description || "Live belly dancing shows every Fri-Sun 9PM. Arabic music, shisha lounge Carlton. Best entertainment venue Melbourne. Reserve your spot!"}
        canonical={seo.canonical || "https://www.caironightsrestaurant.com.au/events"}
        ogType={seo.ogType || "event"}
        ogImage="/images/og-events.webp"
      />
      <Helmet>
        <link rel="preload" as="image" href={bellydancerImage} />
        <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(imageGallerySchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bellydancerImage})` }} />
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight egyptian-gold">
            {hero.heading || "Belly Dancing Melbourne | Live Entertainment & Shisha at Cairo By Nights"}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            {hero.subheading || "From sizzling dance shows to unforgettable live music and exclusive parties — every night tells a story."}
          </p>
          <p className="text-lg md:text-xl text-accent/90 font-medium">{hero.tagline || "[Authentic Egyptian Nights in Melbourne]"}</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">{gallery.heading || "Unforgettable Moments at Cairo By Nights"}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {gallery.intro || "From golden veils and Arabic oud to packed-out nights filled with laughter, Cairo By Nights captures the essence of Egyptian hospitality. Each photo tells a story of authentic Egyptian cuisine, belly dancing, and unforgettable cultural experiences in Carlton."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 group cursor-pointer">
                <img src={image} alt={`Cairo By Nights Carlton event gallery - Live belly dancing, shisha lounge, Egyptian cuisine ${index + 1}`} width={400} height={400} className="w-full h-full object-cover" loading="lazy" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">{schedule.heading || "Weekly Events Schedule"}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{schedule.intro || "Experience the magic every night with our authentic Egyptian entertainment"}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(schedule.days || []).map((d: any, i: number) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 egyptian-gold">{d.day}</h3>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">{d.title}</h4>
                  <p className="text-muted-foreground mb-6">{d.description}</p>
                  <div className="text-accent font-medium whitespace-pre-line">{d.times}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Shisha Lounge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">{shisha.heading || "Premium Shisha Lounge in Carlton"}</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{shisha.intro || "Unwind in Melbourne's most authentic shisha experience, where traditional Egyptian hospitality meets modern comfort"}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold egyptian-gold">{shisha.leftHeading || "Melbourne's Best Shisha Lounge Experience"}</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <PortableTextContent value={shisha.leftBody} />
                </div>

                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <h4 className="text-xl font-bold mb-4 egyptian-gold">{shisha.featuredFlavorsHeading || "Featured Flavors"}</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {(shisha.flavors || []).map((f: any, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent text-xl">{f.emoji}</span>
                        <div>
                          <span className="font-semibold text-foreground">{f.name}</span> - {f.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{shisha.closingParagraph}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                  <h4 className="text-2xl font-bold mb-6 egyptian-gold">{shisha.whyChooseHeading || "Why Choose Our Shisha Lounge?"}</h4>
                  <ul className="space-y-4">
                    {(shisha.whyChooseFeatures || []).map((feat: any, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"><span className="text-accent font-bold">✓</span></div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{feat.title}</h5>
                          <p className="text-muted-foreground">{feat.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-6 border border-primary/30">
                  <p className="text-lg font-medium text-center">
                    <span className="egyptian-gold">{boxA}</span>{boxRest.length ? ` | ${boxRest.join(' | ')}` : ''}
                  </p>
                  <p className="text-center text-muted-foreground mt-2">{shisha.infoBoxSubtext || "Reservations recommended for weekend evenings"}</p>
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
              <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">{ent.heading || "Authentic Egyptian Entertainment"}</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{ent.intro || "Immerse yourself in the sights and sounds of Egypt with our world-class performers"}</p>
            </div>

            <div className="space-y-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                <h3 className="text-3xl font-bold mb-4 egyptian-gold">{ent.bellyDancing?.heading || "Professional Belly Dancing Shows"}</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <PortableTextContent value={ent.bellyDancing?.body} />
                </div>
              </div>

              <PortableTextContent value={ent.bellyDancingNote} linkClassName={ACCENT_LINK} paragraphClassName="text-center text-muted-foreground max-w-2xl mx-auto mb-8" />

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                <h3 className="text-3xl font-bold mb-4 egyptian-gold">{ent.music?.heading || "Live Arabic Music Performances"}</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <PortableTextContent value={ent.music?.body} />
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-primary/30">
                <h3 className="text-2xl font-bold mb-4 text-center egyptian-gold">{ent.whatToExpect?.heading || "What to Expect"}</h3>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">{ent.whatToExpect?.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 egyptian-gold">{cta.heading || "Ready to Experience the Magic?"}</h2>
          <PortableTextContent value={cta.linkText} linkClassName="text-primary hover:text-accent transition-colors duration-300" paragraphClassName="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" />
          <button className="reserve-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">{cta.buttonLabel || "Reserve Your Table"}</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
