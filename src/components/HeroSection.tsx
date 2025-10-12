import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import egyptianDishes from '@/assets/egyptian-dishes.webp';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden scroll-smooth">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={egyptianDishes}
          alt="Authentic Egyptian cuisine at Cairo By Nights Carlton - Mixed grill, kofta, and traditional Middle Eastern dishes"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="egyptian-gold inline-block"
                >
                  Authentic
                </motion.span><br />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="egyptian-gold inline-block"
                >
                  Egyptian
                </motion.span><br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="inline-block"
                >
                  Restaurant in<br />
                  Carlton, Melbourne
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Experience the magic of Cairo By Nights with authentic Egyptian cuisine, live 
                belly dancing, Arabic music, and premium shisha in the heart of Carlton.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
                className="hero-button flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Experience
                <span className="text-xl">🍽️</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/menu"
                className="reserve-button flex items-center justify-center gap-2"
              >
                View Menu
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="pt-8"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <motion.span 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="egyptian-gold text-2xl font-bold"
                >
                  5000+
                </motion.span>
                <span>Happy Customers across Melbourne</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Additional Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="text-center space-y-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="egyptian-gold text-6xl font-playfair font-bold"
              >
                Loved by Melbourne
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-primary text-2xl font-playfair"
              >
                Foodies & Shisha Lovers
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};