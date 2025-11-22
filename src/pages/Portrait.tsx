import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import p01 from "@/assets/alexandramarley-photo-portrait-01.webp";
import p02 from "@/assets/alexandramarley-photo-portrait-02.webp";
import p03 from "@/assets/alexandramarley-photo-portrait-03.webp";
import p04 from "@/assets/alexandramarley-photo-portrait-04.webp";
import p05 from "@/assets/alexandramarley-photo-portrait-05.webp";
import p06 from "@/assets/alexandramarley-photo-portrait-06.webp";
import p07 from "@/assets/alexandramarley-photo-portrait-07.webp";
import p08 from "@/assets/alexandramarley-photo-portrait-08.webp";
import p09 from "@/assets/alexandramarley-photo-portrait-09.webp";
import p10 from "@/assets/alexandramarley-photo-portrait-10.webp";
import p11 from "@/assets/alexandramarley-photo-portrait-11.webp";
import p12 from "@/assets/alexandramarley-photo-portrait-12.webp";
import p13 from "@/assets/alexandramarley-photo-portrait-13.webp";
import p14 from "@/assets/alexandramarley-photo-portrait-14.webp";
import p15 from "@/assets/alexandramarley-photo-portrait-15.webp";
import p16 from "@/assets/alexandramarley-photo-portrait-16.webp";
import p17 from "@/assets/alexandramarley-photo-portrait-17.webp";

const Portrait = () => {
  // Re-imported photos in numeric order 01..17 and build five rows: 3,3,3,5,3
  const photos = [
    p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16, p17,
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const openLightbox = (i: number) => {
    setCurrentIndex(i);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, currentIndex]);

  return (
    <div className="min-h-screen">
      <Navigation />

    <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">

            {/* Masonry-like photo grid used on Dance page: CSS columns keep aspect ratios and avoid cropping */}
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 xl:columns-5">
              {photos.map((src, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <img
                    src={src}
                    alt={`Portrait ${i + 1}`}
                    className="w-full h-auto rounded-lg object-contain cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i); }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

        {/* Fullscreen lightbox modal (no icon) */}
        {lightboxOpen && currentIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-6"
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
            aria-modal="true"
            role="dialog"
          >
            <img
              src={photos[currentIndex]}
              alt={`Portrait ${currentIndex + 1}`}
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />
          </div>
        )}

      <Footer />
    </div>
  );
};

export default Portrait;
