import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("all");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    if (section === "contact") {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
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
            <PortfolioGrid filter={activeSection} />
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
