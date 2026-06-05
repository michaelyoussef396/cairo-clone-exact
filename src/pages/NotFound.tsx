import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Home, Menu, Calendar, Phone } from 'lucide-react';
import { usePage } from '@/hooks/usePage';

const RESERVATION = 'https://cairo-by-nights-restaurant-bar.resos.com/booking';
const LINK_ICONS = [Home, Menu, Calendar, Phone];
const DEFAULT_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

const NotFound = () => {
  const location = useLocation();
  const { data: page } = usePage('notFoundPage');

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const links = page?.links?.length ? page.links : DEFAULT_LINKS;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={page?.seo?.title || "Page Not Found (404) | Cairo By Nights"}
        description={
          page?.seo?.description ||
          "Page not found. Return to Cairo By Nights for authentic Egyptian dining, belly dancing, and shisha in Carlton Melbourne."
        }
        noindex={page?.seo?.noindex ?? true}
      />
      <Header />

      <div className="section-padding flex items-center justify-center min-h-[60vh]">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-8xl md:text-9xl font-playfair font-bold mb-6 egyptian-gold">
            {page?.code || '404'}
          </h1>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
            {page?.heading || 'Page Not Found'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            {page?.intro ||
              "Looks like this page took a wrong turn down Lygon Street. Let's get you back to the authentic Egyptian experience."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {links.map((link, i) => {
              const Icon = LINK_ICONS[i] || Home;
              return (
                <Link
                  key={i}
                  to={link.href}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <a
            href={RESERVATION}
            className="hero-button inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            {page?.ctaButtonLabel || 'Make a Reservation'}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
