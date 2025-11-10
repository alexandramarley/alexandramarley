import Navigation from "@/components/Navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import useEmblaCarousel from "embla-carousel-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Creative Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of design and visual storytelling
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-6">
            <PortfolioGrid filter="photography" />
          </div>
        </section>

        {/* Contact moved to footer */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
