import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import toolSwapHero from "@/assets/portfolio-2.jpg";

const ToolSwap = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ToolSwap</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              A community marketplace for borrowing and lending tools — designed for simplicity and accessibility.
            </p>

            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
              <img src={toolSwapHero} alt="ToolSwap hero" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="text-muted-foreground">
                ToolSwap helps neighbours share rarely-used tools. It focuses on trust, simple listings, and low-cost maintenance.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolSwap;
