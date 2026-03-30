import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductDetail from '@/components/catalog/ProductDetail';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { getProductById, allProducts } from '@/data/products';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: 'Producto no encontrado | Friends Hogar' };
  }

  return {
    title: `${product.title} | Friends Hogar`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />

      <main className="flex-grow">
        <ProductDetail product={product} />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
