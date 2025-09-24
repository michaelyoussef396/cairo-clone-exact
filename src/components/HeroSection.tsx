import { ChevronDown } from 'lucide-react';
import egyptianDishes from '@/assets/egyptian-dishes.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import bellyDancer from '@/assets/belly-dancer.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1">
        <div className="relative">
          <img
            src={egyptianDishes}
            alt="Mix of Egyptian main dishes"
            className="w-full h-screen object-cover opacity-40"
          />
        </div>
        <div className="relative">
          <img
            src={restaurantInterior}
            alt="Photo of the restaurant"
            className="w-full h-screen object-cover opacity-40"
          />
        </div>
        <div className="relative">
          <img
            src={bellyDancer}
            alt="Belly dancer dancing in the restaurant"
            className="w-full h-screen object-cover opacity-40"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-playfair text-9xl md:text-[10rem] lg:text-[16rem] font-bold leading-tight">
                <span className="egyptian-gold">Authentic</span><br />
                <span className="egyptian-gold">Egyptian</span><br />
                Dining in<br />
                Melbourne
              </h1>
              
              <p className="text-4xl md:text-5xl text-muted-foreground max-w-lg leading-relaxed">
                Experience the magic of Cairo By Nights with authentic Egyptian cuisine, live 
                belly dancing, Arabic music, and premium shisha in the heart of Carlton.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
                className="hero-button flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Experience
                <span className="text-xl">🍽️</span>
              </a>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="egyptian-gold text-2xl font-bold">5000+</span>
                <span>Happy Customers across Melbourne</span>
              </div>
            </div>
          </div>

          {/* Right Side - Additional Visual Element */}
          <div className="hidden lg:block">
            <div className="text-center space-y-4">
              <div className="egyptian-gold text-[8rem] font-playfair font-bold">
                Loved by Melbourne
              </div>
              <div className="text-primary text-7xl font-playfair">
                Foodies & Shisha Lovers
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
};