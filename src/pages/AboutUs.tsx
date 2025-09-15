import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import fullTable from '@/assets/full-table.jpg';
import mainDish1 from '@/assets/main-dish-1.jpg';
import bellyDancer from '@/assets/belly-dancer.jpg';
import happyGuests from '@/assets/happy-guests.jpg';
import barDrinks from '@/assets/bar-drinks.jpg';
import { Clock, MapPin, Phone, Mail, Users, Award, Heart } from 'lucide-react';

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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto section-padding">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Our <span className="egyptian-gold">Story</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
            Melbourne's Home of Authentic Egyptian Cuisine & Culture
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Cairo Nights isn't just a restaurant — it's a cultural journey through the flavours, music, and soul of Egypt.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            <div className="col-span-2 lg:col-span-1">
              <img 
                src={fullTable} 
                alt="Egyptian dining experience" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src={mainDish1} 
                alt="Authentic Egyptian dishes" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src={bellyDancer} 
                alt="Live entertainment" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src={happyGuests} 
                alt="Happy dining guests" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <img 
                src={barDrinks} 
                alt="Bar with Egyptian cocktails" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground italic">
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

      {/* What Makes Us Special Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 egyptian-gold">
            What Makes Cairo Nights Special?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold">Authentic Recipes</h3>
              <p className="text-muted-foreground">
                Traditional Egyptian recipes passed down through generations, prepared with authentic spices and techniques.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold">Live Entertainment</h3>
              <p className="text-muted-foreground">
                Experience authentic Egyptian culture with live belly dancing performances and traditional music.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold">Warm Hospitality</h3>
              <p className="text-muted-foreground">
                Egyptian hospitality at its finest, making every guest feel like family in our Carlton restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold mb-8 egyptian-gold">
            Experience Egypt in Melbourne
          </h2>
          <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto">
            Step into Cairo Nights and be transported to the bustling streets of Cairo. Our restaurant combines 
            authentic Egyptian flavors with the warmth of traditional hospitality, creating an unforgettable 
            dining experience in the heart of Carlton.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <MapPin className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Location</h4>
              <p className="text-sm text-gray-300">5/252 Lygon Street, Carlton</p>
            </div>
            
            <div className="space-y-2">
              <Clock className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Hours</h4>
              <p className="text-sm text-gray-300">Open 7 Days</p>
            </div>
            
            <div className="space-y-2">
              <Phone className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm text-gray-300">03 9654 1005</p>
            </div>
            
            <div className="space-y-2">
              <Mail className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-300">info@caironightsrestaurant.com.au</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
              className="reserve-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Table
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;