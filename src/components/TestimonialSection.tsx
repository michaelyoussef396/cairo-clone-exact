import happyGuests from '@/assets/happy-guests.jpg';

export const TestimonialSection = () => {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Customer Testimonial - Improved Layout */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-8">
              What Our Customer says
            </h3>
          </div>
          
          {/* Featured Testimonial Card */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left: Quote Mark & Title */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="egyptian-gold text-6xl md:text-8xl font-playfair font-bold mb-4 leading-none">
                  "
                </div>
                <h4 className="font-playfair text-xl md:text-2xl font-semibold egyptian-gold leading-tight">
                  What a Live Egyptian Night in the Heart of Melbourne
                </h4>
              </div>

              {/* Right: Testimonial Content */}
              <div className="lg:col-span-3">
                <div className="testimonial-card relative">
                  {/* Decorative Egyptian Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 egyptian-gold opacity-20 text-6xl font-bold">
                    ✦
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      {/* Customer Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                          <span className="text-primary-foreground text-2xl font-bold">K</span>
                        </div>
                      </div>
                      
                      {/* Testimonial Text */}
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed text-lg mb-6 italic">
                          "Had such a fantastic night at Cairo Nights. Food was delicious and we went on a 
                          Saturday night and there was a beautiful lady doing belly dancing which really added 
                          to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!"
                        </p>
                        
                        {/* Customer Info */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-primary text-lg">Krystalia T</p>
                            <p className="text-sm text-muted-foreground">Verified Customer</p>
                          </div>
                          
                          {/* Star Rating */}
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-primary text-xl">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              Check Our Story →
            </a>
          </div>
          
          <div className="relative">
            <img
              src={happyGuests}
              alt="Happy guests enjoying live belly dancing performance at Cairo Nights Carlton"
              className="w-full aspect-video object-cover rounded-lg shadow-dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};