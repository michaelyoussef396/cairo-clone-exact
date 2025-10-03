import { MapPin, Clock, Phone, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import restaurantInterior from '@/assets/restaurant-interior.webp';
import egyptianDishes from '@/assets/egyptian-dishes.webp';

const ContactUs = () => {
  const contactInfo = {
    address: "5/252 Lygon Street, Carlton 3053",
    phone: "03 9654 1005", 
    email: "info@caironightsrestaurant.com.au",
    hours: {
      weekdays: "Sunday – Thursday: 5:00pm – 12:00am",
      weekends: "Friday & Saturday: 5:00pm – 01:00am"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Contact Cairo By Nights | Lygon St Carlton | 03 9654 1005"
        description="Cairo By Nights: 5/252 Lygon Street, Carlton 3053. Ph: 03 9654 1005. Open Sun-Thu 5pm-12am, Fri-Sat 5pm-1am. Reserve online!"
        canonical="https://www.caironightsrestaurant.com.au/contact-us"
      />
      <Helmet>
        <link rel="preload" as="image" href={restaurantInterior} />
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={restaurantInterior}
            alt="Cairo By Nights Egyptian Restaurant Interior - 5/252 Lygon Street Carlton Melbourne"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 egyptian-gold">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get in touch with Cairo By Nights for reservations, events, or any inquiries about our authentic Egyptian dining experience.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 egyptian-gold">
                  Visit Cairo By Nights
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Experience authentic Egyptian cuisine in the heart of Carlton, Melbourne. We're open seven days a week, ready to transport you to the flavors of Egypt.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Address</h3>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                    <a 
                      href={`https://maps.google.com/search/${encodeURIComponent(contactInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Phone</h3>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Email</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <div>{contactInfo.hours.weekdays}</div>
                      <div>{contactInfo.hours.weekends}</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Open 7 days a week with{" "}
                <Link to="/events" className="text-egyptian-gold hover:underline">
                  live belly dancing entertainment
                </Link>{" "}
                every Friday, Saturday, and Sunday from 9PM. View our{" "}
                <Link to="/menu" className="text-egyptian-gold hover:underline">
                  full menu
                </Link>{" "}
                online.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={egyptianDishes}
                alt="Authentic Egyptian cuisine at Cairo By Nights Carlton - Halal restaurant Lygon Street Melbourne"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Terrace Policy Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Weekend Terrace Minimum Spend Policy
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Important Information for Our Valued Guests
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">
                Crafting a Premium Experience
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-1 text-primary">Applicable Area</h4>
                    <p className="text-muted-foreground">Front Terrace Area (Tables 10-23)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-1 text-primary">Time Period</h4>
                    <p className="text-muted-foreground">Weekends between 5:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-1 text-primary">Minimum Spend</h4>
                    <p className="text-foreground font-bold text-xl">$40 per person</p>
                  </div>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "This policy helps us preserve the exclusive feel of our Front Terrace, ensuring every guest can enjoy the best of Cairo By Nights during our busiest hours. We appreciate your understanding and cooperation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Find Us in Carlton
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Located on bustling Lygon Street, we're easily accessible by public transport and car. First time visiting Carlton? <a href="/location" className="text-primary hover:text-accent underline">Check our location guide</a> for parking tips, tram routes, and nearby attractions.
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8277165143247!2d144.96789931531915!3d-37.80015054202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ca46c6f4c7%3A0x5a6fb5d0c5f7e6!2s252%20Lygon%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sau!4v1634567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cairo By Nights Restaurant Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Ready to Experience Egypt?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book your table today or contact us for special events and private dining arrangements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Online Reservation */}
            <div className="text-center p-6 bg-secondary/20 rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Online Booking</h3>
              <p className="text-muted-foreground mb-4">Reserve your table instantly through our online booking system.</p>
              <a
                href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
                className="reserve-button inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>

            {/* Phone Reservation */}
            <div className="text-center p-6 bg-secondary/20 rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our team for bookings and special requests.</p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="hero-button inline-block"
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* Private Events */}
            <div className="text-center p-6 bg-secondary/20 rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Private Events</h3>
              <p className="text-muted-foreground mb-4">Planning a special celebration? Let us create an unforgettable experience.</p>
              <a
                href="/function-room"
                className="reserve-button inline-block"
              >
                View Function Room Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex" role="img" aria-label="Rated 4.8 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <span className="text-muted-foreground ml-2">4.8/5 on Google Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card p-6">
              <div className="flex items-center gap-2 mb-4" role="img" aria-label="Rated 5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Absolutely fantastic dining experience! The authentic Egyptian flavors transported us straight to Cairo. The belly dancing show was mesmerizing!"
              </p>
              <div className="font-semibold text-primary">Sarah M.</div>
              <div className="text-sm text-muted-foreground">Google Review</div>
            </div>

            <div className="testimonial-card p-6">
              <div className="flex items-center gap-2 mb-4" role="img" aria-label="Rated 5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Perfect venue for our anniversary dinner. The staff were incredibly welcoming and the food was exceptional. Will definitely be back!"
              </p>
              <div className="font-semibold text-primary">Michael & Lisa K.</div>
              <div className="text-sm text-muted-foreground">Google Review</div>
            </div>

            <div className="testimonial-card p-6">
              <div className="flex items-center gap-2 mb-4" role="img" aria-label="Rated 5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Great atmosphere and delicious food. The mixed grill was outstanding and the shisha was perfect. Highly recommended for a unique dining experience."
              </p>
              <div className="font-semibold text-primary">Ahmed R.</div>
              <div className="text-sm text-muted-foreground">Google Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section - Internal Links */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 egyptian-gold">
              Explore More
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover everything Cairo By Nights has to offer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/menu" className="group testimonial-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary group-hover:text-accent transition-colors">
                Our Menu
              </h3>
              <p className="text-muted-foreground">
                Explore our authentic Egyptian dishes, from traditional tagines to premium grills and desserts.
              </p>
            </a>

            <a href="/events" className="group testimonial-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💃</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary group-hover:text-accent transition-colors">
                Live Events
              </h3>
              <p className="text-muted-foreground">
                Experience belly dancing shows, live Arabic music, and our premium shisha lounge every weekend.
              </p>
            </a>

            <a href="/function-room" className="group testimonial-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-playfair font-semibold text-xl mb-2 text-primary group-hover:text-accent transition-colors">
                Private Events
              </h3>
              <p className="text-muted-foreground">
                Host your birthday, corporate event, or celebration with our exclusive banquet packages.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;