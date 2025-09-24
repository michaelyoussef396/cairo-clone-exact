import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import bellydancerImage from "@/assets/belly-dancer.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import fullTable from "@/assets/full-table.jpg";
import happyGuests from "@/assets/happy-guests.jpg";
import egyptianDishes from "@/assets/egyptian-dishes.jpg";
import shishaImage from "@/assets/shisha.jpg";
import barDrinks from "@/assets/bar-drinks.jpg";
import beverages from "@/assets/beverages.jpg";

const Events = () => {
  const galleryImages = [
    bellydancerImage,
    restaurantInterior,
    fullTable,
    happyGuests,
    egyptianDishes,
    shishaImage,
    barDrinks,
    beverages,
    bellydancerImage,
    restaurantInterior,
    fullTable,
    happyGuests,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bellydancerImage})`,
          }}
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight egyptian-gold">
            THE NIGHT COMES ALIVE
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight egyptian-gold">
            AT CAIRO BY NIGHTS
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            From sizzling dance shows to unforgettable live music and exclusive parties — every night tells a story.
          </p>
          <p className="text-lg md:text-xl text-accent/90 font-medium">
            [Authentic Egyptian Nights in Melbourne]
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">
              Unforgettable Moments at Cairo By Nights
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From golden veils and Arabic oud to packed-out nights filled with laughter, Cairo By Nights captures the essence of Egyptian hospitality. Each photo tells a story of authentic Egyptian cuisine, belly dancing, and unforgettable cultural experiences in Carlton.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Cairo By Nights event moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Events Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 egyptian-gold">
              Weekly Events Schedule
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the magic every night with our authentic Egyptian entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Friday */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 egyptian-gold">Friday</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Belly Dance & Live Performance</h4>
                <p className="text-muted-foreground mb-6">
                  Belly dancer at 9pm followed by live dance performances
                </p>
                <div className="text-accent font-medium">
                  Belly Dancer: 9:00 PM<br />
                  Live Dancer: 8:00 PM - 11:00 PM
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 egyptian-gold">Saturday</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Belly Dance Show</h4>
                <p className="text-muted-foreground mb-6">
                  Authentic Egyptian belly dance performance by professional dancers
                </p>
                <div className="text-accent font-medium">
                  Belly Dancer: 9:00 PM
                </div>
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 egyptian-gold">Sunday</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Belly Dance & Live Performance</h4>
                <p className="text-muted-foreground mb-6">
                  Belly dancer at 9pm followed by live dance performances
                </p>
                <div className="text-accent font-medium">
                  Belly Dancer: 9:00 PM<br />
                  Live Dancer: 8:00 PM - 11:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 egyptian-gold">
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your table now and immerse yourself in an authentic Egyptian night
          </p>
          <button className="reserve-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
            Reserve Your Table
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;