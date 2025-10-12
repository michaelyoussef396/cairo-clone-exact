import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Home, Menu, Calendar, Phone } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Page Not Found (404) | Cairo By Nights"
        description="Page not found. Return to Cairo By Nights for authentic Egyptian dining, belly dancing, and shisha in Carlton Melbourne."
        noindex={true}
      />
      <Header />

      <div className="section-padding flex items-center justify-center min-h-[60vh]">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-8xl md:text-9xl font-playfair font-bold mb-6 egyptian-gold">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Looks like this page took a wrong turn down Lygon Street. Let's get you back to the authentic Egyptian experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              to="/"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Home className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link
              to="/menu"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Menu className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Menu</span>
            </Link>
            <Link
              to="/events"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Events</span>
            </Link>
            <Link
              to="/contact"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Contact</span>
            </Link>
          </div>

          <a
            href="https://cairo-by-nights-restaurant-bar.resos.com/booking"
            className="hero-button inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Make a Reservation
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
