import fullTable from '@/assets/full-table.jpg';
import shishaServed from '@/assets/shisha.jpg';
import happyGuests from '@/assets/happy-guests.jpg';

export const TestimonialSection = () => {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* First Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold">
              Dine, Unwind, and Experience <span className="egyptian-gold">Cairo in Melbourne</span>
            </h3>
            
            <div className="testimonial-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👤</span>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "The food was just as amazing as always. Ending the night with a warm Om Ali, 
                    a glass of mint tea, and a smooth shisha, all while listening to the ambient 
                    Egyptian music, truly makes for the perfect evening. Cairo Nights never disappoints!"
                  </p>
                  <p className="font-semibold text-primary">-- Irene Izquierdo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={fullTable}
              alt="A full table of food"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={shishaServed}
              alt="Shisha being served"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="text-center mb-12">
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-8">
            What Our Customer says
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="font-playfair text-xl md:text-2xl font-semibold mb-6 egyptian-gold">
              "What a Live Egyptian Night in the Heart of Melbourne"
            </h4>
            
            <div className="testimonial-card text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👤</span>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Had such a fantastic night at Cairo Nights. Food was delicious and we went on a 
                    Saturday night and there was a beautiful lady doing belly dancing which really added 
                    to the atmosphere. The music was great as well. Thank you Sonny, I'll definitely be back again!"
                  </p>
                  <p className="font-semibold text-primary">-- Krystalia T</p>
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