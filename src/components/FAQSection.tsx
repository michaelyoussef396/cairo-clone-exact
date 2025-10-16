import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import barDrinks from '@/assets/bar-drinks.webp';
import egyptFlag from '@/assets/egypt-flag.webp';

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    {
      question: "Do I need to book a table at Cairo By Nights in advance?",
      answer: "Yes, we highly recommend booking in advance, especially for weekend evenings and during our live performance nights. You can book through our website or call us directly."
    },
    {
      question: "Is Cairo By Nights a halal restaurant?",
      answer: "Yes, Cairo By Nights is a halal-certified restaurant. All our meat is halal and we follow strict halal guidelines in our kitchen preparation."
    },
    {
      question: "Do you have belly dancing or live performances?",
      answer: "Yes! We feature live belly dancing performances and traditional Egyptian music on select nights. Check our events calendar or call us to find out about upcoming performances."
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={ref} className="section-padding">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Bar Image */}
        <div className="mb-16">
          <img
            src={barDrinks}
            alt="Premium drinks and cocktails at Cairo By Nights bar - Egyptian restaurant Carlton Melbourne"
            width={800}
            height={600}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-dark"
            loading="lazy"
          />
        </div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions – <span className="egyptian-gold">Cairo By Nights Carlton</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Planning your visit? Here are answers to the most common questions about our food, events, bookings, and more.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="testimonial-card"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </motion.div>
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-primary/20"
                    >
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Still have any questions?
              </p>
              <a
                href="mailto:contactus@cairobynightsrestaurant.com.au"
                className="text-primary hover:text-accent transition-colors duration-300 font-medium"
              >
                contactus@cairobynightsrestaurant.com.au
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={egyptFlag}
              alt="Egyptian flag - Authentic Egyptian restaurant Cairo By Nights Carlton Melbourne"
              width={800}
              height={600}
              className="w-full aspect-video object-cover rounded-lg shadow-dark"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};