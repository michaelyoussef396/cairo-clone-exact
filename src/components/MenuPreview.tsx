import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import entreeImage from '@/assets/entree.webp';
import mainDish1 from '@/assets/main-dish-1.webp';
import mainDish2 from '@/assets/main-dish-2.webp';
import beveragesImage from '@/assets/beverages.webp';
import fullTable from '@/assets/full-table.webp';
import shishaServed from '@/assets/shisha.webp';
import { usePage } from '@/hooks/usePage';

const FALLBACK_TILES = [
  { title: 'Entrees', image: entreeImage, alt: 'Traditional Egyptian entrees at Cairo By Nights restaurant Carlton Melbourne' },
  { title: 'Main Dishes', image: mainDish1, alt: 'Authentic Egyptian main dishes - Cairo By Nights halal cuisine Melbourne' },
  { title: 'Grills', image: mainDish2, alt: 'Charcoal grilled Egyptian meats at Cairo By Nights Carlton' },
  { title: 'Drinks', image: beveragesImage, alt: 'Traditional Egyptian beverages and drinks at Cairo By Nights' },
];

export const MenuPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { data: page } = usePage('homePage');
  const preview = page?.menuPreview || {};

  // Preserve the original two-tone headings (trailing phrase in gold) while keeping the text editable.
  const splitGold = (full: string, lead: string): [string, string] =>
    full.startsWith(lead) ? [lead, full.slice(lead.length)] : [full, ''];
  const [sectionLead, sectionGold] = splitGold(
    preview.sectionHeading || 'Dine, Unwind, and Experience Cairo in Melbourne',
    'Dine, Unwind, and Experience ',
  );
  const [menuLead, menuGold] = splitGold(
    preview.menuHeading || 'A Menu Crafted with Generations of Flavor',
    'A Menu Crafted with ',
  );

  const tiles = (preview.categories?.length ? preview.categories : FALLBACK_TILES).map(
    (cat: any, i: number) => ({
      title: cat.title,
      image: cat.image?.url || FALLBACK_TILES[i]?.image || entreeImage,
      alt: FALLBACK_TILES[i]?.alt || cat.title,
    }),
  );

  return (
    <section ref={ref} id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Dine, Unwind, and Experience Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold">
              {sectionLead}{sectionGold && <span className="egyptian-gold">{sectionGold}</span>}
            </h3>

            <div className="testimonial-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👤</span>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {preview.testimonialText ||
                      '"The food was just as amazing as always. Ending the night with a warm Om Ali, a glass of mint tea, and a smooth shisha, all while listening to the ambient Egyptian music, truly makes for the perfect evening. Cairo By Nights never disappoints!"'}
                  </p>
                  <p className="font-semibold text-primary">-- {preview.testimonialAuthor || 'Irene Izquierdo'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={fullTable} alt="Full table spread of Egyptian cuisine - Traditional mezze and mains at Cairo By Nights Carlton" width={400} height={400} className="w-full aspect-square object-cover rounded-lg" loading="lazy" />
            <img src={shishaServed} alt="Premium shisha being served at Cairo By Nights - Best shisha lounge Carlton Melbourne" width={400} height={400} className="w-full aspect-square object-cover rounded-lg" loading="lazy" />
          </div>
        </div>

        {/* Menu Section */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {menuLead}{menuGold && <span className="egyptian-gold">{menuGold}</span>}
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">
            {preview.menuSubheading || 'Savor the Flavors of Egypt'}
          </h3>
          <a href="/menu" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium">
            {preview.linkText || 'View Full Menu'}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <Link to="/menu" className="group cursor-pointer block">
                <motion.div className="relative overflow-hidden rounded-lg aspect-square mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src={category.image} alt={category.alt} width={400} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      {category.title}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
                <h4 className="font-playfair text-xl font-semibold text-center egyptian-gold">{category.title}</h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
