import Navigation from "@/components/Navigation";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/alexandramarley-home-01.webp";
import portfolio2 from "@/assets/alexandramarley-home-02.webp";
import portfolio3 from "@/assets/alexandramarley-home-03.webp";
import portfolio4 from "@/assets/alexandramarley-home-04.webp";
import portfolio5 from "@/assets/alexandramarley-home-05.webp";
import portfolio6 from "@/assets/alexandramarley-home-06.webp";
import Footer from "@/components/Footer";

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  // 12 images: positions 3, 6, 7, 8, 9, 10 are landscape
  const slides = [
    { src: portfolio1, isLandscape: false },
    { src: portfolio2, isLandscape: false },
    { src: portfolio3, isLandscape: true },  // 3rd
    { src: portfolio4, isLandscape: false },
    { src: portfolio5, isLandscape: false },
    { src: portfolio6, isLandscape: true },  // 6th
    { src: portfolio1, isLandscape: true },  // 7th
    { src: portfolio2, isLandscape: true },  // 8th
    { src: portfolio3, isLandscape: true },  // 9th
    { src: portfolio4, isLandscape: true },  // 10th
    { src: portfolio5, isLandscape: false },
    { src: portfolio6, isLandscape: false },
  ];
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Hero Section */}
        <section className="py-8 md:py-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Beyond the Frame
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Where design thinks, and imagery speaks — always beyond the frame
            </p>
          </div>
        </section>

        {/* Image Showcase: vertical stack on mobile, horizontal carousel on desktop */}
        <section className="py-8 md:py-12">
          {/* Mobile (vertical) */}
          <div className="md:hidden flex flex-col items-center space-y-0">
            {slides.map((slide, index) => (
              <div key={index} className="mx-auto" style={{ height: 541 }}>
                <div
                  className="relative overflow-hidden h-[541px] w-[361px]"
                >
                  <img
                    src={slide.src}
                    alt={`Portfolio image ${index + 1}`}
                    className={`h-full object-cover ${
                      slide.isLandscape ? 'w-auto max-w-full' : 'w-[361px]'
                    }`}
                    style={{ height: 541 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop (carousel) */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-0">
                {slides.map((slide, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="relative overflow-hidden h-[650px]">
                      <img
                        src={slide.src}
                        alt={`Portfolio image ${index + 1}`}
                        className={`h-full object-cover ${
                          slide.isLandscape ? 'w-auto min-w-full' : 'w-auto'
                        }`}
                        style={{ height: 650 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom arrows */}
            <div className="absolute bottom-2 right-2 z-10 hidden md:flex flex-row gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="p-2 bg-background/70 hover:bg-background text-foreground border border-border"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="p-2 bg-background/70 hover:bg-background text-foreground border border-border"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Contact moved to footer */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
