import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

const UXUIDesign = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight text-muted-foreground">
              Designing <span className="text-green-700 font-semibold">clean</span> and user friendly digital products for real users, with as <span className="text-green-700 font-semibold">few clicks</span> as possible
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-muted-foreground mb-2">
              A selection of my work
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              
            </p>

            <PortfolioGrid filter="uxui" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UXUIDesign;
