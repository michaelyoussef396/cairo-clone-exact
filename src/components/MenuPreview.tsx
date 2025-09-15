import { ArrowRight } from 'lucide-react';
import entreeImage from '@/assets/entree.jpg';
import mainDish1 from '@/assets/main-dish-1.jpg';
import mainDish2 from '@/assets/main-dish-2.jpg';
import beveragesImage from '@/assets/beverages.jpg';

export const MenuPreview = () => {
  const menuCategories = [
    {
      title: 'Entree',
      image: entreeImage,
      alt: 'Entree image'
    },
    {
      title: 'Main Dish',
      image: mainDish1,
      alt: 'Main dish image'
    },
    {
      title: 'Main Dish',
      image: mainDish2,
      alt: 'Main dish image'
    },
    {
      title: 'Beverages',
      image: beveragesImage,
      alt: 'Beverages image'
    }
  ];

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            A Menu Crafted with <span className="egyptian-gold">Generations of Flavor</span>
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">
            Savor the Flavors of Egypt
          </h3>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};