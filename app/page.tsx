import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyForme from '@/components/WhyForme';
import FabricCraftsmanship from '@/components/FabricCraftsmanship';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyForme />
      <FabricCraftsmanship />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
