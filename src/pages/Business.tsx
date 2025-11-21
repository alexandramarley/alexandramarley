import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import b01 from "@/assets/alexandramarley-photo-business-01.webp";
import b02 from "@/assets/alexandramarley-photo-business-02.webp";
import b03 from "@/assets/alexandramarley-photo-business-03.webp";
import b04 from "@/assets/alexandramarley-photo-business-04.webp";
import b05 from "@/assets/alexandramarley-photo-business-05.webp";
import b06 from "@/assets/alexandramarley-photo-business-06.webp";
import b07 from "@/assets/alexandramarley-photo-business-07.webp";
import b08 from "@/assets/alexandramarley-photo-business-08.webp";
import b09 from "@/assets/alexandramarley-photo-business-09.webp";
import b10 from "@/assets/alexandramarley-photo-business-10.webp";
import b11 from "@/assets/alexandramarley-photo-business-11.webp";
import b12 from "@/assets/alexandramarley-photo-business-12.webp";
import b13 from "@/assets/alexandramarley-photo-business-13.webp";
import b14 from "@/assets/alexandramarley-photo-business-14.webp";
import b15 from "@/assets/alexandramarley-photo-business-15.webp";
import b16 from "@/assets/alexandramarley-photo-business-16.webp";
import b17 from "@/assets/alexandramarley-photo-business-17.webp";
import b18 from "@/assets/alexandramarley-photo-business-18.webp";

const Business = () => {
  const photos = [
    b01,b02,b03,b04,b05,b06,b07,b08,b09,b10,b11,b12,b13,b14,b15,b16,b17,b18
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

            {/* Grid gallery: rows of 3 images. Each item keeps original ratio via h-full w-auto
                so portrait images (like b01) match the landscape height while preserving aspect ratio. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((src, i) => (
                <div key={i} className="h-56 md:h-72 overflow-hidden rounded-lg flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Business ${i + 1}`}
                    // keep original ratio and match wrapper height
                    className="h-full w-auto object-contain cursor-pointer"
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
              alt={`Business ${currentIndex + 1}`}
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />
          </div>
        )}

      <Footer />
    </div>
  );
};

export default Business;
