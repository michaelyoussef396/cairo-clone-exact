import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { MenuPreview } from '@/components/MenuPreview';
import { TestimonialSection } from '@/components/TestimonialSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <MenuPreview />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
