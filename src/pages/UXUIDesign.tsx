import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UXUIDesign = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      description: "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      category: "UX/UI Design",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Intuitive mobile banking application design with focus on security and ease of use.",
      category: "UX/UI Design",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              UX/UI Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Case studies showcasing user-centered design solutions
            </p>

            <div className="space-y-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <CardDescription className="text-base">{study.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{study.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UXUIDesign;
