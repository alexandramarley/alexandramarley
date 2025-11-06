import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

const Photography = () => {
  const { subcategory } = useParams();

  const getTitle = () => {
    if (subcategory === "portrait") return "Portrait Photography";
    if (subcategory === "business") return "Business Photography";
    if (subcategory === "dance") return "Dance Photography";
    return "Photography";
  };

  const getDescription = () => {
    if (subcategory === "portrait") return "Capturing authentic moments and personalities";
    if (subcategory === "business") return "Professional corporate and business imagery";
    if (subcategory === "dance") return "Dynamic movement and artistic expression";
    return "Exploring visual storytelling through the lens";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {getTitle()}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              {getDescription()}
            </p>

            <PortfolioGrid filter="photography" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Photography;
