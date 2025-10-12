import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import cairoLogo from '@/assets/cairo-by-nights-logo-new.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Menu', href: '/menu' },
    { name: 'Events', href: '/events' },
    { name: 'Function Room', href: '/function-room' },
    { name: 'Contact US', href: '/contact-us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={cairoLogo}
                alt="Cairo By Nights Restaurant & Bar"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Reserve Now Button */}
          <div className="hidden lg:block">
            <a
              href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
              className="reserve-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary/90 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
                className="block reserve-button text-center mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};