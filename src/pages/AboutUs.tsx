import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import fullTable from '@/assets/full-table.jpg';
import mainDish1 from '@/assets/main-dish-1.jpg';
import bellyDancer from '@/assets/belly-dancer.jpg';
import happyGuests from '@/assets/happy-guests.jpg';
import barDrinks from '@/assets/bar-drinks.jpg';
import egyptianDishes from '@/assets/egyptian-dishes.jpg';
import { Clock, MapPin, Phone, Mail, Users, Award, Heart, ChevronDown, Star } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantInterior})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto section-padding">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8">
            Our <span className="egyptian-gold">Story</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200 max-w-3xl mx-auto">
            Melbourne's Home of Authentic Egyptian Cuisine & Culture
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            <strong>Cairo Nights isn't just a restaurant — it's a cultural journey through the flavours, music, and soul of Egypt.</strong>
          </p>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="aspect-square">
              <img 
                src={fullTable} 
                alt="Egyptian dining experience" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src={mainDish1} 
                alt="Authentic Egyptian dishes" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src={bellyDancer} 
                alt="Live entertainment" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src={happyGuests} 
                alt="Happy dining guests" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src={barDrinks} 
                alt="Bar with Egyptian cocktails" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src={egyptianDishes} 
                alt="Traditional Egyptian cuisine" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground italic font-light">
              Inspired by the Streets of Egypt
            </p>
          </div>
        </div>
      </section>

      {/* Our Egyptian Roots Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6 egyptian-gold">
                Our Egyptian Roots – From Cairo to Carlton
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Cairo Nights was born from a dream to bring the heart of Egypt to the vibrant streets of Melbourne. Founded by an Egyptian-Australian family with deep culinary traditions, the vision was to recreate the experience of Cairo's famous night markets — where sizzling street food, soulful Arabic music, and warm hospitality come together.
                </p>
                <p>
                  From our first service, we set out to become more than just a restaurant. Cairo Nights is a <strong>halal Egyptian restaurant in Carlton</strong> that celebrates tradition, flavour, and performance. What began as a humble idea is now one of Melbourne's most unique dining destinations — where every plate tells a story, and every night leaves a memory.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={barDrinks} 
                alt="Bar at Cairo Nights with ambient lighting and cocktails" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Egyptian Chefs Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 egyptian-gold">
            Authentic Egyptian Chefs in Melbourne – Tradition on Every Plate
          </h2>
          <div className="space-y-6 text-lg leading-relaxed mb-16">
            <p>
              At Cairo Nights, the heart of our kitchen beats with generations of Egyptian culinary tradition. Our chefs are experts in halal Egyptian cuisine, blending timeless flavours with modern flair. From fire-grilled kofta to creamy molokhia, every dish is crafted with heritage, precision, and passion.
            </p>
            <p>
              Whether you're a first-time visitor or a returning guest, our food tells the story of Egypt — bold, soulful, and unforgettable. This is <strong>authentic Egyptian dining in Carlton</strong>, led by chefs who bring more than recipes — they bring legacy.
            </p>
          </div>
          
          <div className="text-center mb-16">
            <a
              href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
              className="reserve-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Make Reservation
            </a>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold egyptian-gold mb-2">8+</div>
              <div className="text-lg font-medium">Events Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold egyptian-gold mb-2">5</div>
              <div className="text-lg font-medium">Expert Chefs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold egyptian-gold mb-2">5000+</div>
              <div className="text-lg font-medium">Served Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold egyptian-gold mb-2">15000+</div>
              <div className="text-lg font-medium">Served Dishes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 egyptian-gold">
            Our Clientele's Feedback
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Review 1 */}
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Abrar</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">
                Incredible Food from Start to Dessert
              </h3>
              <p className="text-muted-foreground">
                Amazing food. Highly recommend the mix grill. Dessert was also great, had the hazelnut egyptian traditional pudding.
              </p>
            </div>
            
            {/* Review 2 */}
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Saif Abdulrahman</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">
                Authentic Dining, Shisha & Live Music
              </h3>
              <p className="text-muted-foreground">
                Excellent authentic Egyptian food and superb service. Egyptian cuisine is well known for its hospitality, and they excel at shisha (try the Fruit Fever). The singer was an amazing bonus.
              </p>
            </div>
            
            {/* Review 3 */}
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Masi Hashemi</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">
                A Hidden Gem with Cozy Vibes
              </h3>
              <p className="text-muted-foreground">
                Flavorful Tagine, friendly staff, and cozy vibes. Try the BBQ Quail - it's a hidden gem! Highly recommend for authentic Egyptian cuisine👌
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gradient-dark text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${restaurantInterior})` }}
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 egyptian-gold">
            Our Mission – Celebrating Egyptian Culture Through Cuisine & Hospitality
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
            At Cairo Nights, we don't just serve food — we create experiences. Our mission is to celebrate the rich culture of Egypt through authentic cuisine, live Arabic music, and warm hospitality. Whether you're joining us for dinner, a function, or a show, every visit is designed to immerse you in the soul of Egypt.
          </p>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            From traditional dishes to ambient shisha lounges and vibrant performances, we aim to make every moment unforgettable — just as Cairo itself would.
          </p>
          <p className="text-lg italic">
            — Sonny, Founder of Cairo Nights
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;