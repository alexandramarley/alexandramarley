import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import contactImg from "@/assets/alexandramarley-contact-05.webp";
import contactImg1 from "@/assets/alexandramarley-contact-07.webp";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  HELLO
                </h2>
                <div className="max-w-2xl">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Originally from the photography industry and working in eCommerce for over four years, I'm combining my years of experience in sales, client engagement, and digital operations into my designs. I have a strong eye for detail, a team-first mindset, and a drive to create intuitive, user-focused experiences in fast-paced environments.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I’m an outdoor enthusiast, in my spare time you can find me rock climbing or with a camera in my hand. I love traveling around the globe and learn more about our beautiful world. 
                </p><p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Born in Switzerland, living in London, available worldwide. Let's create something together. 
                </p>
                

                {/* Contact Links */}
                <div className="space-y-8 mt-12">
                  {/* Email Contact */}
                  <div>
                    <a
                      href="mailto:info@alexandramarley.com"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      CONTACT
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-1">
                    <div>
                      <a
                        href="https://www.linkedin.com/in/alexandra-marley-252ba7172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        LINKEDIN
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.instagram.com/alexandramarley_/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        INSTAGRAM
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/* Photo */}
              <div className="mt-6 md:mt-0 flex justify-center items-start">
                <div className="w-full md:max-w-[360px] lg:max-w-[420px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={contactImg1}
                    alt="Alexandra Marley"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
