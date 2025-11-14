import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
const Photography = () => {
  const title = "Photography Portfolio";
  const description = "Some highlights of my photography work";

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">{description}</p>

            <PortfolioGrid filter="photography" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Photography;
