import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Link } from "react-router-dom";
import toolswapteaser from "@/assets/alexandramarley-ux-toolswap-teaser.webp";
import danaoteaser from "@/assets/alexandramarley-ux-danao-teaser.webp";

const UXUIDesign = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Title + subtitle above teasers */}
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight text-foreground">
              Designing <span className="text-green-700 font-semibold">clean</span> and <span className="text-green-700 font-semibold">user friendly</span> digital products for real users, with as few clicks as possible
            </h2>
            <h3 className="text-xl md:text-2xl font-normal text-muted-foreground">A selection of my work</h3>
          </div>
        </section>

        {/* Side-by-side teasers (no hero) */}
        <section className="w-full">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* ToolSwap teaser */}
            <Link to="/projects/toolswap" className="group flex flex-col h-full">
              <div className="aspect-[1/1] w-full overflow-hidden bg-muted">
                <img
                  src={toolswapteaser}
                  alt="ToolSwap — Community-driven platform for sharing tools"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="bg-background">
                <div className="px-6 py-6 md:py-8">
                  <h4 className="text-2xl md:text-3xl font-medium tracking-tight">A mobile marketplace built to reduce spendings and boost eco responsibility</h4>
                  <p className="text-muted-foreground mt-2">
                    2025 | Mobile | UX/UI Design
                  </p>
                </div>
              </div>
            </Link>

            {/* Danao Topo teaser */}
            <Link to="/projects/danao-topo" className="group flex flex-col h-full">
              <div className="aspect-[1/1] w-full overflow-hidden bg-muted">
                <img
                  src={danaoteaser}
                  alt="Danao Topo — Interactive topographical visualization"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="bg-background">
                <div className="px-6 py-6 md:py-8">
                  <h4 className="text-2xl md:text-3xl font-medium tracking-tight">Turning complex route data into a simple, interactive topographical visualisation</h4>
                  <p className="text-muted-foreground mt-2">
                    2025 | Mobile | UX/UI Design
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
