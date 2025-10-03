import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import entreeImage from '@/assets/entree.webp';
import mainDish1 from '@/assets/main-dish-1.webp';
import mainDish2 from '@/assets/main-dish-2.webp';
import beveragesImage from '@/assets/beverages.webp';
import fullTable from '@/assets/full-table.webp';
import shishaServed from '@/assets/shisha.webp';

export const MenuPreview = () => {
  const menuCategories = [
    {
      title: 'Entrees',
      image: entreeImage,
      alt: 'Entree image',
      link: '/menu'
    },
    {
      title: 'Main Dishes',
      image: mainDish1,
      alt: 'Main dish image',
      link: '/menu'
    },
    {
      title: 'Grills',
      image: mainDish2,
      alt: 'Grill dishes image',
      link: '/menu'
    },
    {
      title: 'Drinks',
      image: beveragesImage,
      alt: 'Beverages and drinks image',
      link: '/menu'
    }
  ];

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Dine, Unwind, and Experience Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold">
              Dine, Unwind, and Experience <span className="egyptian-gold">Cairo in Melbourne</span>
            </h3>
            
            <div className="testimonial-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👤</span>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "The food was just as amazing as always. Ending the night with a warm Om Ali, 
                    a glass of mint tea, and a smooth shisha, all while listening to the ambient 
                    Egyptian music, truly makes for the perfect evening. Cairo By Nights never disappoints!"
                  </p>
                  <p className="font-semibold text-primary">-- Irene Izquierdo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={fullTable}
              alt="Full table spread of Egyptian cuisine - Traditional mezze and mains at Cairo By Nights Carlton"
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src={shishaServed}
              alt="Premium shisha being served at Cairo By Nights - Best shisha lounge Carlton Melbourne"
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Menu Section */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            A Menu Crafted with <span className="egyptian-gold">Generations of Flavor</span>
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">
            Savor the Flavors of Egypt
          </h3>
          <a
            href="/menu"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={category.image}
                  alt={category.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    {category.title}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <h4 className="font-playfair text-xl font-semibold text-center egyptian-gold">
                {category.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};