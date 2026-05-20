import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Link } from "react-router-dom";
import danaocover from "@/assets/alexandramarley-uxdesign-danao-coverv1.webp"
import toolswapcover from "@/assets/alexandramarley-uxdesign-toolswap-coverv2.webp"


const UXUIDesign = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Title + subtitle above teasers */}
  <section className="pt-8 pb-4 md:pt-10 md:pb-5">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-foreground text-center">
              Designing <span className="text-green-700 font-semibold">digital products</span> that make complex information clear and easy to act on
            </h2>
                <div className="flex items-center gap-4 justify-center mt-2">
                  <div className="flex-1 h-[2px] bg-muted/90" aria-hidden />
                  <h3 className="text-xl md:text-2xl font-normal text-muted-foreground px-4">A selection of my work</h3>
                  <div className="flex-1 h-[2px] bg-muted/90" aria-hidden />
            </div>
          </div>
        </section>

        {/* Side-by-side teasers (no hero) */}
        <section className="w-full">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Danao Topo teaser (moved to first) */}
            <Link to="/projects/danao-topo" className="group flex flex-col h-full">
              <div className="w-full overflow-hidden bg-transparent h-56 md:h-72">
                <img
                  src={danaocover}
                  alt="Danao Topo — Interactive topographical visualization"
                  className="h-full w-auto mx-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="bg-background">
                <div className="px-6 py-6 md:py-8">
                  <h4 className="text-2xl md:text-3xl font-medium tracking-tight">Turning complex route data into a simple, interactive topographical visualisation</h4>
                  <p className="text-muted-foreground mt-2">
                    2026 | Mobile | UX/UI Design
                  </p>
                </div>
              </div>
            </Link>

            {/* ToolSwap teaser (moved to second) */}
            <Link to="/projects/toolswap" className="group flex flex-col h-full">
              <div className="w-full overflow-hidden bg-transparent h-56 md:h-72">
                <img
                  src={toolswapcover}
                  alt="ToolSwap — Community-driven platform for sharing tools"
                  className="h-full w-auto mx-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="bg-background">
                <div className="px-6 py-6 md:py-8">
                  <h4 className="text-2xl md:text-3xl font-medium tracking-tight">A mobile marketplace built to reduce spendings and boost eco responsibility</h4>
                  <p className="text-muted-foreground mt-2">
                    2026 | Mobile | UX/UI Design
                  </p>
                </div>
              </div>
            </Link>
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
};

export default UXUIDesign;
