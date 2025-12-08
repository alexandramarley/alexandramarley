import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import contactImg from "@/assets/alexandramarley-contact-05.webp";
import contact01 from "@/assets/alexandramarley-contact-01.webp";
import contact02 from "@/assets/alexandramarley-contact-02.webp";
import contact03 from "@/assets/alexandramarley-contact-03.webp";
import contact04 from "@/assets/alexandramarley-contact-04.webp";

const Contact = () => {
  const images = [contact01, contact02, contact04, contact03,  contactImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

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
                  Originally rooted in the photography industry and shaped by four years in eCommerce and luxury retail, I bring a unique blend of visual storytelling, client experience, and digital operations to my work. I design with a detail-driven eye, a user-centred mindset, and a strong understanding of how people interact with products both online and in person. My background in high-end sales and customer engagement allows me to create intuitive, user-focused experiences that feel considered, high-quality, and effortless.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Outside of work, you'll find me outdoors - rock climbing or with a camera in my hand. I love traveling around the globe and learning more about our beautiful world. Travel fuels my curiosity and constantly inspires my creative approach.
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

              {/* Photo carousel */}
              <div className="mt-6 md:mt-0 flex justify-center items-start">
                <div className="w-full md:max-w-[360px] lg:max-w-[420px] overflow-hidden rounded-lg shadow-lg relative">
                  <img
                    src={images[currentIndex]}
                    alt={`Alexandra Marley ${currentIndex + 1}`}
                    className="w-full h-auto md:aspect-[3/4] object-cover block"
                  />

                  {/* Prev / Next controls */}
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    title="Previous (left arrow)"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 md:p-2 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next"
                    title="Next (right arrow)"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 md:p-2 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                        className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-white" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
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
