import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Get in Touch
            </h2>
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out. 
                I'll do my best to get back to you as soon as possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Let's create something beautiful together.
              </p>
            </div>

            <div className="mt-16">
              <ContactSection />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
