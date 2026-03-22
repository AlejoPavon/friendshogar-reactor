import TopTicker from '@/components/layout/TopTicker';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import HistorySection from '@/components/home/HistorySection';
import TeamSection from '@/components/home/TeamSection';
import PaymentMethodsSection from '@/components/home/PaymentMethodsSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata = {
  title: 'Friends Hogar | Arquitectura del Descanso',
  description: 'Descubre la precisión técnica y el confort editorial en nuestra nueva colección de colchones y sommiers.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Top Banner */}
      <TopTicker />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Intro Hero Section */}
        <Hero />

        {/* Brand Story Section */}
        <HistorySection />

        {/* The Leadership Team */}
        <TeamSection />

        {/* Payment Methods Section */}
        <PaymentMethodsSection />
      </main>

      {/* Floating Actions */}
      <WhatsAppButton />

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
