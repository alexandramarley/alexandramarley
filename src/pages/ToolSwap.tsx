import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
// TODO: Replace with actual images
import toolswapHero from "@/assets/portfolio-1.jpg";
import toolswapDetail1 from "@/assets/portfolio-2.jpg";
import toolswapDetail2 from "@/assets/portfolio-3.jpg";

const ToolSwap = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              ToolSwap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              A community-driven platform for sharing and borrowing tools
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="rounded-full bg-muted px-4 py-2 text-sm">UI/UX Design</div>
              <div className="rounded-full bg-muted px-4 py-2 text-sm">Community Platform</div>
              <div className="rounded-full bg-muted px-4 py-2 text-sm">Web App</div>
            </div>
            
            {/* Hero Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-16">
              <img
                src={toolswapHero}
                alt="ToolSwap platform overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Problem Statement
            </h2>
            <div className="max-w-3xl">
              <p className="text-muted-foreground">
                Many people own tools they rarely use, while others need tools but cannot
                justify purchasing them for one-time use. The challenge was to create a
                user-friendly platform that would facilitate tool sharing while ensuring
                trust and reliability within the community.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Process & Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <img
                    src={toolswapDetail1}
                    alt="ToolSwap interface demonstration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Research & Discovery</h3>
                <p className="text-muted-foreground">
                  Conducted user interviews and market analysis to understand
                  community needs and existing solutions in the sharing economy space.
                  This phase helped identify key pain points and opportunities.
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <img
                    src={toolswapDetail2}
                    alt="ToolSwap design process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Design & Implementation</h3>
                <p className="text-muted-foreground">
                  Created user flows and wireframes focused on simplifying the
                  tool sharing process. Developed the platform with React and Node.js,
                  integrating essential features like mapping and messaging capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-background rounded-lg shadow-sm text-center">
                <h3 className="text-3xl font-bold mb-2 text-primary">500+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm text-center">
                <h3 className="text-3xl font-bold mb-2 text-primary">1,200+</h3>
                <p className="text-muted-foreground">Tools Shared</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm text-center">
                <h3 className="text-3xl font-bold mb-2 text-primary">4.8/5</h3>
                <p className="text-muted-foreground">User Rating</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-muted-foreground">
                ToolSwap has successfully connected hundreds of community members,
                facilitating tool sharing and reducing individual tool purchases.
                The platform has received positive feedback for its intuitive design
                and robust safety features.
              </p>
            </div>
          </div>
        </section>

        {/* Next Case Study */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-semibold">Next Case Study</h2>
              <Link
                to="/danao-topo"
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl overflow-hidden">
                  <img
                    src={toolswapHero}
                    alt="Danao Topo Project"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white">Danao Topo →</span>
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

export default ToolSwap;