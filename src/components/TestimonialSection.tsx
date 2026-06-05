import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import happyGuests from '@/assets/happy-guests.webp';
import { Helmet } from 'react-helmet-async';
import { usePage } from '@/hooks/usePage';

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { data: page } = usePage('homePage');
  const t = page?.testimonial || {};

  // Review Schema for SEO (left untouched for byte-identical JSON-LD)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": { "@type": "Restaurant", "name": "Cairo By Nights Restaurant & Bar", "address": { "@type": "PostalAddress", "streetAddress": "5/252 Lygon Street", "addressLocality": "Carlton", "addressRegion": "VIC", "postalCode": "3053", "addressCountry": "AU" } },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Krystalia T" },
    "reviewBody": "Had such a fantastic night at Cairo By Nights. Food was delicious and we went on a Saturday night and there was a beautiful lady doing belly dancing which really added to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!"
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-dark">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">{t.label || 'WHAT OUR CUSTOMER SAYS'}</p>
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold egyptian-gold mb-8">
              {t.heading || '"What a Live Egyptian Night in the Heart of Melbourne"'}
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="space-y-6">
              <div className="flex items-start gap-4">
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.3, type: 'spring' }} className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👤</span>
                </motion.div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.body || "Had such a fantastic night at Cairo By Nights. Food was delicious and we went on a Saturday night and there was a beautiful lady doing belly dancing which really added to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!"}
                  </p>
                  <p className="font-semibold text-primary">-- {t.author || 'Krystalia T'}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <motion.img whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} src={happyGuests} alt="Happy guests enjoying live belly dancing performance at Cairo By Nights Carlton" width={800} height={600} className="w-full aspect-video object-cover rounded-lg shadow-dark cursor-pointer" loading="lazy" />
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <a href="/about-us" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium">
              {t.linkText || 'Check Our Story →'}
            </a>
          </div>
          <div className="relative"></div>
        </div>
      </div>
    </section>
  );
};
