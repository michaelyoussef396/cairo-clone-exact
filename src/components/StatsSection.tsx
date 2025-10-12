import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '8+', label: 'EVENTS MONTHLY' },
    { number: '5', label: 'EXPERT CHEFS' },
    { number: '5000+', label: 'SERVED CUSTOMERS' },
    { number: '15000+', label: 'SERVED DISHES' }
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="stats-card cursor-default"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="egyptian-gold text-3xl lg:text-4xl font-bold font-playfair mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground text-sm font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};