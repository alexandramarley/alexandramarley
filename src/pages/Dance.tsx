import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import dance01 from "@/assets/alexandramarley-photo-dance-01.webp";
import dance02 from "@/assets/alexandramarley-photo-dance-02.webp";
import dance03 from "@/assets/alexandramarley-photo-dance-03.webp";
import dance04 from "@/assets/alexandramarley-photo-dance-04.webp";
import dance05 from "@/assets/alexandramarley-photo-dance-05.webp";
import dance06 from "@/assets/alexandramarley-photo-dance-06.webp";
import dance07 from "@/assets/alexandramarley-photo-dance-07.webp";
import dance08 from "@/assets/alexandramarley-photo-dance-08.webp";
import dance09 from "@/assets/alexandramarley-photo-dance-09.webp";
import dance10 from "@/assets/alexandramarley-photo-dance-10.webp";
import dance11 from "@/assets/alexandramarley-photo-dance-11.webp";
import dance12 from "@/assets/alexandramarley-photo-dance-12.webp";
import dance13 from "@/assets/alexandramarley-photo-dance-13.webp";
import dance14 from "@/assets/alexandramarley-photo-dance-14.webp";
import dance15 from "@/assets/alexandramarley-photo-dance-15.webp";

const Dance = () => {
  const photos = [
    dance02, dance03, dance09, dance10, dance04, dance08,
    dance06, dance05, dance12, dance11, dance01,
    dance07, dance13, dance14, dance15,
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

            {/* Masonry-like photo grid using CSS columns to keep aspect ratio and avoid cropping */}
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 xl:columns-5">
              {photos.map((src, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <img
                    src={src}
                    alt={`Dance ${i + 1}`}
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
              alt={`Dance ${currentIndex + 1}`}
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />
          </div>
        )}

      <Footer />
    </div>
  );
};

export default Dance;
