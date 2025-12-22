import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import AboutSection from '@/components/AboutSection';
import ModalitiesSection from '@/components/ModalitiesSection';
import WhoIServeSection from '@/components/WhoIServeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <AboutSection />
        <ModalitiesSection />
        <WhoIServeSection />
        <TestimonialsSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
