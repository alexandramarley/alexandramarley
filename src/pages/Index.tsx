import Navigation from "@/components/Navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactSection from "@/components/ContactSection";
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

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
