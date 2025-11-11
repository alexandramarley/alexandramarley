import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Dance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center">Dance</h1>
            <div className="mt-12 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block bg-muted/40 text-muted-foreground px-6 py-4 rounded-lg"> 
                  <h2 className="text-2xl md:text-3xl font-semibold">Coming soon</h2>
                </div>
                <p className="text-sm text-muted-foreground mt-4">We're preparing a selection of performance and dance photography — check back soon.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dance;
