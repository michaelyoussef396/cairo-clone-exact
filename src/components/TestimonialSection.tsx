import happyGuests from '@/assets/happy-guests.webp';
import { Helmet } from 'react-helmet-async';

export const TestimonialSection = () => {
  // Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Restaurant",
      "name": "Cairo By Nights Restaurant & Bar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5/252 Lygon Street",
        "addressLocality": "Carlton",
        "addressRegion": "VIC",
        "postalCode": "3053",
        "addressCountry": "AU"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Krystalia T"
    },
    "reviewBody": "Had such a fantastic night at Cairo By Nights. Food was delicious and we went on a Saturday night and there was a beautiful lady doing belly dancing which really added to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!"
  };

  return (
    <section className="section-padding bg-gradient-dark">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* What Our Customer Says - Original Layout */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              WHAT OUR CUSTOMER SAYS
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold egyptian-gold mb-8">
              "What a Live Egyptian Night in the Heart of Melbourne"
            </h3>
          </div>
          
          {/* Original 2-column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Testimonial Content */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👤</span>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Had such a fantastic night at Cairo By Nights. Food was delicious and we went on a 
                    Saturday night and there was a beautiful lady doing belly dancing which really added 
                    to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!
                  </p>
                  <p className="font-semibold text-primary">-- Krystalia T</p>
                </div>
              </div>
            </div>

            {/* Right: Large Image */}
            <div className="relative">
              <img
                src={happyGuests}
                alt="Happy guests enjoying live belly dancing performance at Cairo By Nights Carlton"
                width={800}
                height={600}
                className="w-full aspect-video object-cover rounded-lg shadow-dark"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <a
              href="/about-us"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              Check Our Story →
            </a>
          </div>
          
          <div className="relative">
            {/* This could be another image or content if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};