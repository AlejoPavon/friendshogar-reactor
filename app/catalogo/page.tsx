import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CatalogClient from '@/components/catalog/CatalogClient';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata = {
  title: 'Catálogo | Friends Hogar',
  description: 'Explorá nuestro catálogo completo de espaldares, bauleras, almohadas, colchones y bases de sommier.',
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-inverse-surface py-20 md:py-28 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <span className="absolute top-10 right-10 text-[200px] font-black leading-none select-none">
              SHOP
            </span>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
            <span className="text-primary uppercase tracking-[0.4em] font-black text-[10px] md:text-xs block mb-4">
              Friends Hogar
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Catálogo
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Explorá toda nuestra colección. Espaldares artesanales, bauleras, almohadas premium, colchones y bases de sommier.
            </p>
          </div>
        </section>

        {/* Catalog Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <CatalogClient />
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
