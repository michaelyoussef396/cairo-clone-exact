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
            Melbourne's Home of Authentic<br />Egyptian Cuisine & Culture
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            <strong>Cairo Nights isn't just a restaurant — it's a cultural journey<br />through the flavours, music, and soul of Egypt.</strong>
          </p>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary">
              <span className="text-2xl font-bold">94</span>
            </div>
          </div>
          <div className="animate-bounce mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-white" />
          </div>
        </div>
      </section>

      {/* Our Egyptian Roots Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Egyptian Roots –<br />From Cairo to Carlton
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Cairo Nights was born from a dream to bring the heart of Egypt to the vibrant streets of Melbourne. Founded by an Egyptian-Australian family with deep culinary traditions, the vision was to recreate the experience of Cairo's famous night markets — where sizzling street food, soulful Arabic music, and warm hospitality come together.
                </p>
                <p>
                  From our first service, we set out to become more than just a restaurant. Cairo Nights is a <strong className="text-white">halal Egyptian restaurant in Carlton</strong> that celebrates tradition, flavour, and performance. What began as a humble idea is now one of Melbourne's most unique dining destinations — where every plate tells a story, and every night leaves a memory.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={barDrinks} 
                  alt="Bar at Cairo Nights" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img 
                  src={happyGuests} 
                  alt="Happy guests dining" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src={bellyDancer} 
                  alt="Live belly dancing performance" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img 
                  src={fullTable} 
                  alt="Egyptian dining table" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-primary italic font-light tracking-widest uppercase">
              INSPIRED BY THE STREETS OF EGYPT
            </p>
          </div>
        </div>
      </section>

      {/* Authentic Egyptian Chefs Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={egyptianDishes} 
                  alt="Egyptian dishes" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img 
                  src={mainDish1} 
                  alt="Traditional Egyptian cuisine" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src={restaurantInterior} 
                  alt="Restaurant interior" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img 
                  src={barDrinks} 
                  alt="Egyptian beverages" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
                Authentic Egyptian<br />Chefs in Melbourne –<br />Tradition on Every Plate
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300 mb-8">
                <p>
                  At Cairo Nights, the heart of our kitchen beats with generations of Egyptian culinary tradition. Our chefs are experts in halal Egyptian cuisine, blending timeless flavours with modern flair. From fire-grilled kofta to creamy molokhia, every dish is crafted with heritage, precision, and passion.
                </p>
                <p>
                  Whether you're a first-time visitor or a returning guest, our food tells the story of Egypt — bold, soulful, and unforgettable. This is <strong className="text-white">authentic Egyptian dining in Carlton</strong>, led by chefs who bring more than recipes — they bring legacy.
                </p>
              </div>
              
              <a
                href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
                className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-colors duration-300 font-semibold tracking-wider"
                target="_blank"
                rel="noopener noreferrer"
              >
                Make Reservation 🍽️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Background */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${barDrinks})` }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm uppercase tracking-widest text-primary font-semibold">EVENTS MONTHLY</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">5</div>
              <div className="text-sm uppercase tracking-widest text-primary font-semibold">EXPERT CHEFS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">5000+</div>
              <div className="text-sm uppercase tracking-widest text-white font-semibold">SERVED CUSTOMERS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">15000+</div>
              <div className="text-sm uppercase tracking-widest text-white font-semibold">SERVED DISHES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Clientele's Feedback
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Abrar</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-white">
                Incredible Food from<br />Start to Dessert
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Amazing food. Highly recommend the mix grill. Dessert was also great, had the hazelnut egyptian traditional pudding.
              </p>
            </div>
            
            {/* Review 2 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Saif Abdulrahman</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-white">
                Authentic Dining,<br />Shisha & Live Music
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Excellent authentic Egyptian food and superb service. Egyptian cuisine is well known for its hospitality, and they excel at shisha (try the Fruit Fever). The singer was an amazing bonus.
              </p>
            </div>
            
            {/* Review 3 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Masi Hashemi</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-white">
                A Hidden Gem with<br />Cozy Vibes
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Flavorful Tagine, friendly staff, and cozy vibes. Try the BBQ Quail - it's a hidden gem! Highly recommend for authentic Egyptian cuisine👌
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={restaurantInterior} 
                alt="Cairo Nights restaurant exterior at night" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-white">
                Our Mission – Celebrating Egyptian Culture Through Cuisine & Hospitality
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300 mb-8">
                <p>
                  At Cairo Nights, we don't just serve food — we create experiences. Our mission is to celebrate the rich culture of Egypt through authentic cuisine, live Arabic music, and warm hospitality. Whether you're joining us for dinner, a function, or a show, every visit is designed to immerse you in the soul of Egypt.
                </p>
                <p>
                  From traditional dishes to ambient shisha lounges and vibrant performances, we aim to make every moment unforgettable — just as Cairo itself would.
                </p>
              </div>
              <p className="text-lg italic text-gray-400">
                — Sonny, Founder of Cairo Nights
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;