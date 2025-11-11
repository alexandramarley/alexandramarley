import Navigation from "@/components/Navigation";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/alexandramarley-home-01.webp";
import portfolio2 from "@/assets/alexandramarley-home-02.webp";
import portfolio3 from "@/assets/alexandramarley-home-03.webp";
import portfolio4 from "@/assets/alexandramarley-home-04.webp";
import portfolio5 from "@/assets/alexandramarley-home-05.webp";
import portfolio6 from "@/assets/alexandramarley-home-06.webp";
import portfolio7 from "@/assets/alexandramarley-home-07.webp";
import portfolio8 from "@/assets/alexandramarley-home-08.webp";
import portfolio9 from "@/assets/alexandramarley-home-09.webp";
import portfolio10 from "@/assets/alexandramarley-home-10.webp";
import portfolio11 from "@/assets/alexandramarley-home-11.webp";
import portfolio12 from "@/assets/alexandramarley-home-12.webp";

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  // 12 images: mark some slides as landscape to keep visual variety
  const slides = [
    { src: portfolio1, isLandscape: false },
    { src: portfolio2, isLandscape: false },
    { src: portfolio3, isLandscape: true },
  { src: portfolio4, isLandscape: true },
  { src: portfolio5, isLandscape: true },
    { src: portfolio6, isLandscape: true },
    { src: portfolio7, isLandscape: true },
    { src: portfolio8, isLandscape: true },
    { src: portfolio9, isLandscape: true },
    { src: portfolio10, isLandscape: true },
  { src: portfolio11, isLandscape: true },
    { src: portfolio12, isLandscape: false },
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
              <div key={index} className="mx-auto">
                {/* For landscape images on mobile keep the width and let height scale naturally.
                    For portrait images keep fixed height to maintain consistent stack sizing. */}
                <div
                  className={slide.isLandscape ? 'relative overflow-hidden w-[376px]' : 'relative overflow-hidden h-[541px] w-[376px]'}
                  style={slide.isLandscape ? undefined : { height: 541 }}
                >
                  <img
                    src={slide.src}
                    alt={`Portfolio image ${index + 1}`}
                    className={slide.isLandscape ? 'w-[376px] h-auto object-contain' : 'h-full object-cover w-[376px]'}
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
