import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import fullTable from '@/assets/full-table.webp';
import restaurantInterior from '@/assets/restaurant-interior.webp';
import happyGuests from '@/assets/happy-guests.webp';
import egyptianDishes from '@/assets/egyptian-dishes.webp';
import mainDish1 from '@/assets/main-dish-1.webp';
import mainDish2 from '@/assets/main-dish-2.webp';

const FunctionRoom = () => {
  const banquetPackages = [
    {
      price: "$55pp",
      title: "Simple, authentic, and satisfying.",
      items: [
        "🥣 Mixed Dips for the Table",
        "🍗 Entree: Chicken Wings & Salads",
        "🥘 Main: Choice of Tagen Lamb Roz Moammar or Chicken Couscous",
        "🍰 Dessert: Traditional Baklava"
      ]
    },
    {
      price: "$65pp",
      title: "A complete culinary journey.",
      items: [
        "🥣 Mixed Dips & Bread Selection",
        "🍤 Entree: Grilled Prawns & Mixed Salads",
        "🥘 Main: Lamb Mansaf or Chicken Shawarma with Rice",
        "🍰 Dessert: Assorted Middle Eastern Sweets",
        "☕ Arabic Coffee & Tea"
      ]
    },
    {
      price: "$75pp",
      title: "The ultimate Egyptian feast.",
      items: [
        "🥣 Premium Mezze Platter",
        "🦐 Entree: Seafood Selection & Gourmet Salads",
        "🥩 Main: Mixed Grill (Lamb, Chicken, Kofta) with Traditional Sides",
        "🍰 Dessert: Premium Dessert Selection",
        "🍷 Welcome Drink & Arabic Coffee Service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Function Room Carlton | Private Events | Cairo By Nights"
        description="Private function room hire Carlton. Birthday parties, corporate events, engagements. Banquet packages from $55pp. Book your event now!"
        canonical="https://www.caironightsrestaurant.com.au/function-room"
        ogImage="/images/og-function-room.webp"
      />
      <Helmet>
        <link rel="preload" as="image" href={fullTable} />
        <link rel="preload" as="image" href={restaurantInterior} />
        <link rel="preload" as="image" href={egyptianDishes} />
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="relative">
            <img
              src={fullTable}
              alt="Private function room setup at Cairo By Nights Carlton - Perfect for birthday parties and corporate events"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
            />
          </div>
          <div className="relative">
            <img
              src={restaurantInterior}
              alt="Cairo By Nights function room interior Carlton - Authentic Egyptian decor and private event space"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
            />
          </div>
          <div className="relative">
            <img
              src={egyptianDishes}
              alt="Traditional Egyptian cuisine spread at Cairo By Nights - Halal banquet packages from $55pp"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
            />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 egyptian-gold">
            Function Room Hire Carlton | Private Events at Cairo By Nights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Our function room in Carlton offers an immersive Egyptian experience, ideal for birthdays, 
            corporate dinners, engagements, and private celebrations. With authentic Middle Eastern cuisine, 
            vibrant décor, and live entertainment options like singers or belly dancers, Cairo By Nights is 
            the perfect venue for a memorable event.
          </p>
          <a
            href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
            className="hero-button inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plan Your Event
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                An Experience Beyond Just Dining
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your celebration into a sensory journey with Cairo By Nights. Our event space in 
                Melbourne is designed for memorable moments — from bespoke Egyptian catering to live Arabic 
                performances. Whether it's an intimate dinner or a festive gathering, our team curates every 
                detail to deliver elegance, flavour, and unforgettable atmosphere.
              </p>
              <a
                href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
                className="reserve-button inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Make Reservation
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={mainDish2}
                alt="Elegant Egyptian dining setup at Cairo By Nights - Premium banquet service"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
              <img
                src={restaurantInterior}
                alt="Authentic Middle Eastern restaurant ambiance - Cairo By Nights Carlton venue"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
              <img
                src={egyptianDishes}
                alt="Traditional Egyptian dishes - Authentic halal cuisine at Cairo By Nights Melbourne"
                width={800}
                height={600}
                className="w-full h-48 object-cover rounded-lg col-span-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banquet Packages Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Banquet Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated dining experiences for every celebration, ideal for birthdays, engagements, and group bookings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {banquetPackages.map((pkg, index) => (
              <div key={index} className="testimonial-card p-6 h-full">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold egyptian-gold mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.title}</p>
                </div>
                <div className="space-y-3">
                  {pkg.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <span className="text-lg">{item.split(' ')[0]}</span>
                      <span className="text-muted-foreground">{item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Event Features */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Private Event Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Live Entertainment</h3>
              <p className="text-muted-foreground">Belly dancers, Arabic singers, and traditional music</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Authentic Cuisine</h3>
              <p className="text-muted-foreground">Traditional Egyptian dishes made by expert chefs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏺</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Egyptian Décor</h3>
              <p className="text-muted-foreground">Immersive atmosphere with authentic Middle Eastern design</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Custom Events</h3>
              <p className="text-muted-foreground">Birthdays, corporate dinners, engagements, and more</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 text-center mt-8 max-w-3xl mx-auto">
            Enhance your event with{" "}
            <Link to="/events" className="text-egyptian-gold hover:underline">
              live belly dancing performances
            </Link>{" "}
            every Friday, Saturday, and Sunday. View our full{" "}
            <Link to="/menu#banquet" className="text-egyptian-gold hover:underline">
              banquet menu options
            </Link>{" "}
            to customize your celebration menu.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your private event requirements and create an unforgettable
            Egyptian dining experience for you and your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
              className="hero-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Event
            </a>
            <a
              href="tel:03 9654 1005"
              className="reserve-button"
            >
              Call Us: 03 9654 1005
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FunctionRoom;