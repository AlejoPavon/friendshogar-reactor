import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import EspaldaresSection from '@/components/home/EspaldaresSection';
import HistorySection from '@/components/home/HistorySection';
import TeamSection from '@/components/home/TeamSection';
import PaymentMethodsSection from '@/components/home/PaymentMethodsSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import AnimationWrapper from '@/components/ui/AnimationWrapper';

export const metadata = {
  title: 'Friends Hogar | Arquitectura del Descanso',
  description: 'Descubre la precisión técnica y el confort editorial en nuestra nueva colección de colchones y sommiers.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Intro Hero Section */}
        <Hero />

        {/* Brand Story Section */}
        <AnimationWrapper delay={0.2}>
          <HistorySection />
        </AnimationWrapper>


        {/* Espaldares Collection */}
        <EspaldaresSection />

        {/* The Leadership Team (Deactivated for now) */}
        {/* 
        <AnimationWrapper delay={0.1}>
          <TeamSection />
        </AnimationWrapper>
        */}

        {/* Payment Methods Section */}
        <AnimationWrapper>
          <PaymentMethodsSection />
        </AnimationWrapper>
      </main>

      {/* Floating Actions */}
      <WhatsAppButton />

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
