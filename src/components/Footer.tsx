import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import cairoLogo from '@/assets/cairo-by-nights-new-logo.png';

export const Footer = () => {
  const contactInfo = {
    address: "5/252 Lygon Street, Carlton 3053",
    phone: "03 9654 1005",
    email: "info@caironightsrestaurant.com.au",
    hours: {
      weekdays: "Sunday – Thursday: 5:00pm – 12:00am",
      weekends: "Friday & Saturday: 5:00pm – 01:00am"
    }
  };

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Menu', href: '/menu' },
    { name: 'Events', href: '/events' },
    { name: 'Function Room', href: '/function-room' },
    { name: 'Contact Us', href: '/contact-us' }
  ];


  return (
    <footer className="bg-gradient-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6">
            <a href="/" className="inline-block">
              <img
                src={cairoLogo}
                alt="Cairo By Nights Restaurant & Bar"
                className="h-72 w-auto"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Experience authentic Egyptian cuisine, live belly dancing, and premium shisha 
              in the heart of Carlton, Melbourne.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-semibold egyptian-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-semibold egyptian-gold">
              Opening Hours
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground">
                    {contactInfo.hours.weekdays}
                  </div>
                  <div className="text-muted-foreground">
                    {contactInfo.hours.weekends}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Reservation CTA */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="text-center">
            <a
              href="https://bookings.wowapps.com/make-booking/caironightsrestauran?src=web"
              className="reserve-button inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Now
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Cairo By Nights Restaurant & Bar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Authentic Egyptian Dining in Melbourne
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};