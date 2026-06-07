import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import danaoteaser from "@/assets/alexandramarley-uxdesign-danao-coverv1.webp";
import tsDesign01_a from "@/assets/alexandramarley-ux-ts-design01_a.webp";
import tsDesign01_b from "@/assets/alexandramarley-ux-ts-design01_b.webp";
import tsDesign02_a from "@/assets/alexandramarley-ux-ts-results.webp";
import tsDesign02_b from "@/assets/alexandramarley-ux-ts-listing-created.webp";
import listingPlay from "@/assets/alexandramarley-ux-listing-play.mov";
import tsDesign03a from "@/assets/alexandramarley-ux-ts-design03_a.webp";
import tsDesign03b from "@/assets/alexandramarley-ux-ts-design03_b.webp";
import tsResearch01 from "@/assets/alexandramarley-ux-toolswap-research-01.png";
import tsUserJourney from "@/assets/alexandramarley-ux-ToolSwap-userjourney.webp";
import filterVideo from "@/assets/alexandramarley-ux-sortby-play.mov";
import toolswapTitle from "@/assets/alexandramarley-uxdesign-toolswap-title1.webp";
import benchmark01 from "@/assets/alexandramarley-uxdesign-toolswap-benchmark01.webp";
import benchmark02 from "@/assets/alexandramarley-uxdesign-toolswap-benchmark02.webp";
import tsNewHome from "@/assets/alexandramarley-ux-ts-home.webp";
import tsNewSearch01 from "@/assets/alexandramarley-ux-ts-search-01.webp";
import tsNewSearch02 from "@/assets/alexandramarley-ux-ts-search-02.webp";
import tsNewDetailView from "@/assets/alexandramarley-ux-ts-detail-view.webp";
import tsNewListItem from "@/assets/alexandramarley-ux-ts-list-item.webp";
import tsNewSortBy from "@/assets/alexandramarley-ux-ts-sortby.webp";
import tsNewMenu from "@/assets/alexandramarley-ux-ts-menu.webp";
import tsNewMyBookingsDetail from "@/assets/alexandramarley-ux-ts-mybookings-detail.webp";
import tsNewMyBookings from "@/assets/alexandramarley-ux-ts-mybookings.webp";
import tsNewCreateListing from "@/assets/alexandramarley-ux-ts-create-listing.webp";
import tsNewReviewListing from "@/assets/alexandramarley-ux-ts-review-listing.webp";
import tsNewListings from "@/assets/alexandramarley-ux-ts-listings.webp";
import tsNewBookings from "@/assets/alexandramarley-ux-ts-bookings.webp";
import tsNewBookingDetails from "@/assets/alexandramarley-ux-ts-booking-details.webp";
import tsNewChatMessage from "@/assets/alexandramarley-ux-ts-chat-message.webp";
import tsNewReviews from "@/assets/alexandramarley-ux-ts-reviews.webp";
import tsNewResults from "@/assets/alexandramarley-ux-ts-results.webp";

const ToolSwap = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [researchLightboxOpen, setResearchLightboxOpen] = useState(false);
  const [journeyLightboxOpen, setJourneyLightboxOpen] = useState(false);
  // Generic single-image lightbox used by a few design images
  const [singleLightboxOpen, setSingleLightboxOpen] = useState(false);
  const [singleLightboxSrc, setSingleLightboxSrc] = useState<string | null>(null);
  const [singleLightboxAlt, setSingleLightboxAlt] = useState<string | null>(null);
  // Track where the single-image lightbox was opened from ('overview' | 'design-1' | 'design-2' | ... | 'benchmark')
  const [singleLightboxOrigin, setSingleLightboxOrigin] = useState<string | null>(null);
  // User test story (single static card)
  const userTestStory: React.ReactNode = (
    <div>
      <div className="text-muted-foreground mb-4">
        <p>Three clarity gaps emerged. First, underlined CTAs weren't recognised as actionable buttons - users struggled to find them on booking screens, even though the booking flow itself was intuitive once they located the action. Second, the price screen advanced automatically without confirmation, leaving users uncertain whether they'd submitted their price. They also expected to see their newly created listing reflected in the listings immediately. Third, users looked for FAQ and issue reporting options - they needed visible reassurance that support was available.</p>
      </div>
      <div className="text-muted-foreground mb-4">
        <p>These weren't fundamental flow problems. They were clarity issues that eroded confidence in the experience.</p>
      </div>
    </div>
  );
  // Carousel refs/state for the overview carousel (copied from DanaoTopo pattern)
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  // small carousel for Block 1 (Navigation & Search)
  const block1Ref = useRef<HTMLDivElement | null>(null);

  const scrollBlock1Next = () => {
    const el = block1Ref.current;
    if (!el) return;
    const firstImg = el.querySelector<HTMLElement>('img');
    const step = firstImg ? firstImg.offsetWidth + parseInt(getComputedStyle(firstImg).marginRight || '0') : el.clientWidth;
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  const scrollBlock1Prev = () => {
    const el = block1Ref.current;
    if (!el) return;
    const firstImg = el.querySelector<HTMLElement>('img');
    const step = firstImg ? firstImg.offsetWidth + parseInt(getComputedStyle(firstImg).marginRight || '0') : el.clientWidth;
    el.scrollBy({ left: -step, behavior: 'smooth' });
  };

  // small carousel for Block 2 (Map)
  const block2Ref = useRef<HTMLDivElement | null>(null);

  const scrollBlock2Next = () => {
    const el = block2Ref.current;
    if (!el) return;
    const firstImg = el.querySelector<HTMLElement>('img');
    const step = firstImg ? firstImg.offsetWidth + parseInt(getComputedStyle(firstImg).marginRight || '0') : el.clientWidth;
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  const scrollBlock2Prev = () => {
    const el = block2Ref.current;
    if (!el) return;
    const firstImg = el.querySelector<HTMLElement>('img');
    const step = firstImg ? firstImg.offsetWidth + parseInt(getComputedStyle(firstImg).marginRight || '0') : el.clientWidth;
    el.scrollBy({ left: -step, behavior: 'smooth' });
  };

  // small carousel for Block 3 (Terminology / Menu)
  const block3Ref = useRef<HTMLDivElement | null>(null);

  const scrollBlock3Next = () => {
    const el = block3Ref.current;
    if (!el) return;
    const firstImg = el.querySelector<HTMLElement>('img');
    const step = firstImg ? firstImg.offsetWidth + parseInt(getComputedStyle(firstImg).marginRight || '0') : el.clientWidth;
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  const scrollBlock3Prev = () => {
    const el = block3Ref.current;
    if (!el) return;
    const firstImg = el.querySelector<HTMLElement>('img');
    const step = firstImg ? firstImg.offsetWidth + parseInt(getComputedStyle(firstImg).marginRight || '0') : el.clientWidth;
    el.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const overviewImages = [
    tsNewCreateListing,
    tsNewReviewListing,
    tsNewResults,
    tsNewDetailView,
    tsNewListItem,
    tsNewMenu,
    tsNewMyBookings,
    tsNewMyBookingsDetail,
    tsNewReviews,
    tsNewBookings,
    tsNewBookingDetails,
  ];

  const overviewAlts = [
    'Create Listing',
    'Review Listing',
    'Results',
    'Detail View',
    'List Item',
    'Menu',
    'My Bookings',
    'My Bookings Detail',
    'Reviews',
    'Bookings',
    'Booking Details',
  ];

  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.querySelector<HTMLElement>(".carousel-item");
    const step = firstChild ? firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0") : el.clientWidth;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft + step >= maxScrollLeft - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.querySelector<HTMLElement>(".carousel-item");
    const step = firstChild ? firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0") : el.clientWidth;
    if (el.scrollLeft - step <= 2) {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isCarouselPaused) return;
    // autoplay every 2.5s (quicker)
    autoplayRef.current = window.setInterval(() => {
      scrollNext();
    }, 2500);
    return () => { if (autoplayRef.current) window.clearInterval(autoplayRef.current); };
  }, [isCarouselPaused]);

  // Highlight center item and add side padding so first/last can center
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".carousel-item"));
    const origCount = overviewImages.length;
    if (items.length < origCount) return;

    const first = items[0];
    const gap = parseFloat(getComputedStyle(first).marginRight || "0") || 0;
    let itemWidth = first.offsetWidth + gap;

    const updateCenter = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest: HTMLElement | null = null;
      let min = Infinity;
      items.forEach((it) => {
        const offset = it.offsetLeft + it.offsetWidth / 2;
        const diff = Math.abs(offset - center);
        if (diff < min) {
          min = diff;
          closest = it;
        }
        it.classList.remove("scale-105");
        it.classList.add("scale-90");
      });
      if (closest) {
        closest.classList.remove("scale-90");
        closest.classList.add("scale-105");
      }
    };

    const setSidePadding = () => {
      itemWidth = first.offsetWidth + gap;
      const sidePad = Math.max(0, (el.clientWidth - itemWidth) / 2);
      el.style.paddingLeft = `${sidePad}px`;
      el.style.paddingRight = `${sidePad}px`;
    };

    setTimeout(() => {
      setSidePadding();
      const isMobile = el.clientWidth < 768;
      const startIndex = isMobile ? 0 : Math.min(2, items.length - 1);
      const targetItem = items[startIndex];
      if (targetItem) {
        const targetCenter = targetItem.offsetLeft + targetItem.offsetWidth / 2;
        el.scrollLeft = Math.max(0, targetCenter - el.clientWidth / 2);
      } else {
        el.scrollLeft = 0;
      }
      updateCenter();
    }, 50);

    let resumeTimeout: number | null = null;
    const onScroll = () => {
      updateCenter();
      setIsCarouselPaused(true);
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      if (resumeTimeout) window.clearTimeout(resumeTimeout);
      resumeTimeout = window.setTimeout(() => setIsCarouselPaused(false), 2500);
    };

    const onResize = () => {
      setSidePadding();
      updateCenter();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      try { el.style.paddingLeft = ""; el.style.paddingRight = ""; } catch (e) {}
      if (resumeTimeout) window.clearTimeout(resumeTimeout);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    // If navigated here with state.scrollTop, ensure the page starts at the top.
    const navState = location.state as { scrollTop?: boolean } | null;
    if (navState?.scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const deliverablesImages = [
    tsNewHome,
    tsNewSearch01,
    tsNewSearch02,
    tsNewDetailView,
    tsNewListItem,
    tsNewSortBy,
    tsNewMenu,
    tsNewMyBookingsDetail,
    tsNewMyBookings,
    tsNewCreateListing,
    tsNewReviewListing,
    tsNewListings,
    tsNewBookings,
    tsNewBookingDetails,
    tsNewChatMessage,
    tsNewReviews,
  ];

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
    setCurrentIndex((currentIndex + 1) % deliverablesImages.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + deliverablesImages.length) % deliverablesImages.length);
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

  // Key handling for research image lightbox (single image)
  useEffect(() => {
    if (!researchLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResearchLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [researchLightboxOpen]);

  // Key handling for user journey lightbox (single image)
  useEffect(() => {
    if (!journeyLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setJourneyLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [journeyLightboxOpen]);

  // Key handling for the generic single-image lightbox
  useEffect(() => {
    if (!singleLightboxOpen) return;

    const navPairs = [
      {
        imgs: [tsDesign01_a, tsDesign01_b],
        alts: [
          "Navigation & Search - option A",
          "Navigation & Search - option B",
        ],
      },
      {
        imgs: [tsDesign02_a, tsDesign02_b],
        alts: [
          "Map design - option A",
          "Map design - option B",
        ],
      },
      {
        imgs: [tsDesign03a, tsDesign03b],
        alts: [
          "Terminology / Menu choices - option A",
          "Terminology / Menu choices - option B",
        ],
      },
    ];

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSingleLightboxOpen(false);
        setSingleLightboxOrigin(null);
        return;
      }

      // If the open image was opened from the Map design block, restrict navigation to only that pair
      const mapImgs = [tsDesign02_a, tsDesign02_b];
      const mapAlts = ["Map design - option A", "Map design - option B"];
      if (singleLightboxOrigin === 'design-2' && mapImgs.includes(singleLightboxSrc as string)) {
        if (e.key === "ArrowRight") {
          const idx = mapImgs.findIndex((s) => s === singleLightboxSrc);
          const nextIndex = (idx + 1) % mapImgs.length;
          setSingleLightboxSrc(mapImgs[nextIndex]);
          setSingleLightboxAlt(mapAlts[nextIndex]);
          return;
        }

        if (e.key === "ArrowLeft") {
          const idx = mapImgs.findIndex((s) => s === singleLightboxSrc);
          const prevIndex = (idx - 1 + mapImgs.length) % mapImgs.length;
          setSingleLightboxSrc(mapImgs[prevIndex]);
          setSingleLightboxAlt(mapAlts[prevIndex]);
          return;
        }
      }

      // First: overview carousel navigation (existing behaviour)
      if (e.key === "ArrowRight") {
        if (!singleLightboxSrc) return;
        const idxOverview = overviewImages.findIndex((src) => src === singleLightboxSrc);
        if (idxOverview >= 0) {
          const nextIndex = (idxOverview + 1) % overviewImages.length;
          setSingleLightboxSrc(overviewImages[nextIndex]);
          setSingleLightboxAlt(overviewAlts[nextIndex] || null);
          return;
        }

        // If not part of overview, check the design pairs (Block 1/2/3) but only when opened from a design block
        if (singleLightboxOrigin?.startsWith('design')) {
          for (const pair of navPairs) {
            const idxNav = pair.imgs.findIndex((src) => src === singleLightboxSrc);
            if (idxNav >= 0) {
              const nextIndex = (idxNav + 1) % pair.imgs.length;
              setSingleLightboxSrc(pair.imgs[nextIndex]);
              setSingleLightboxAlt(pair.alts[nextIndex]);
              return;
            }
          }
        }
      }

      if (e.key === "ArrowLeft") {
        if (!singleLightboxSrc) return;
        const idxOverview = overviewImages.findIndex((src) => src === singleLightboxSrc);
        if (idxOverview >= 0) {
          const prevIndex = (idxOverview - 1 + overviewImages.length) % overviewImages.length;
          setSingleLightboxSrc(overviewImages[prevIndex]);
          setSingleLightboxAlt(overviewAlts[prevIndex] || null);
          return;
        }

        if (singleLightboxOrigin?.startsWith('design')) {
          for (const pair of navPairs) {
            const idxNav = pair.imgs.findIndex((src) => src === singleLightboxSrc);
            if (idxNav >= 0) {
              const prevIndex = (idxNav - 1 + pair.imgs.length) % pair.imgs.length;
              setSingleLightboxSrc(pair.imgs[prevIndex]);
              setSingleLightboxAlt(pair.alts[prevIndex]);
              return;
            }
          }
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [singleLightboxOpen, singleLightboxSrc]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Hero Section: three-line title with background image (matches Danao layout) */}
        <section
          className="py-8 md:py-12 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${toolswapTitle})` }}
        >
          {/* background overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/10" aria-hidden />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: three-line heading + intro (spans 2/3 on md+) */}
              <div className="md:col-span-2 pr-20 md:pr-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight leading-tight md:leading-snug w-full">
                  <span className="text-green-700 font-semibold">ToolSwap:</span> Borrow tools, build a community
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                  A mobile-first platform to find, list and borrow tools in your neighbourhood
                </p>
                <div className="flex flex-wrap gap-3 mb-0">
                  <div className="rounded-full bg-muted px-4 py-2 text-sm">UI/UX Design</div>
                  <div className="rounded-full bg-muted px-4 py-2 text-sm">Community Platform</div>
                  <div className="rounded-full bg-muted px-4 py-2 text-sm">Mobile App</div>
                </div>
              </div>

              {/* Right: tall image (9:16). Visible on all sizes; absolute on small screens so it can be cut off but not overlap text. */}
              <div className="flex justify-center absolute right-6 top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-auto md:translate-y-0">
                <div className="aspect-[9/16] w-[140px] sm:w-[180px] md:w-full md:max-w-[216px] lg:max-w-[280px] overflow-hidden rounded-lg mx-auto">
                  {/* keep the preview image container for layout; content is provided by background image */}
                  <div className="w-full h-full bg-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

  

        {/* Sticky section menu: quick anchors for page sections (centered & sticky) */}
        <div className="sticky top-14 z-40">
          <div className="container mx-auto px-6 relative">
            <nav className="flex justify-center py-3 md:py-4 bg-background/80 backdrop-blur-sm relative" role="navigation" aria-label="Page sections">
              <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                {[
                  { id: 'overview', mobile: 'Overview', desktop: 'Overview' },
                  { id: 'research', mobile: 'Research', desktop: 'Research & Analysis' },
                  { id: 'design', mobile: 'Design', desktop: 'Design' },
                  { id: 'prototype', mobile: 'Prototype', desktop: 'Prototype & Testing' },
                  { id: 'deliverables', mobile: 'Deliverables', desktop: 'Deliverables' },
                  { id: 'conclusion', mobile: 'Conclusion', desktop: 'Conclusion' },
                ].map(({ id, mobile, desktop }) => (
                  <li key={id} className="flex-shrink-0">
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(id);
                        if (!el) return;
                        // calculate offset so the section title sits below the sticky menu
                        const stickyNav = document.querySelector('nav[aria-label="Page sections"]') as HTMLElement | null;
                        const stickyH = stickyNav ? stickyNav.offsetHeight : 0;
                        const extra = 12; // small breathing room
                        const top = el.getBoundingClientRect().top + window.scrollY - stickyH - extra;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }}
                      className="text-sm md:text-base px-2 md:px-3 py-1 md:py-2 text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-green-600 text-center block md:inline-block max-w-[96px] md:max-w-none"
                    >
                      <span className="block md:hidden">{mobile}</span>
                      <span className="hidden md:block">{desktop}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20" aria-hidden />
            </nav>
          </div>
        </div>

        <section id="overview" className="py-16">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-lg bg-background">
                <div className="w-full flex items-stretch md:h-full">
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:h-full items-start">
                    {/* Left: Title + longer text */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why you should navigate before you browse</h3>
                      <p className="text-muted-foreground max-w-2xl mb-6">
                        In dense cities, where you are matters more than what's available. People want tools close to home - not just for convenience, but because borrowing from someone nearby feels inherently safer than from a stranger across town. Yet most tool-sharing marketplaces treat location as a secondary filter: you browse the full catalog first, then narrow by distance.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        ToolSwap inverts this. Research revealed that what matters most isn't which tools are available - it's where they are. The map-first design prioritises location as the primary lens. It enables people to list, find, and borrow tools from their neighbourhood - with trust built through verification, ratings, and transparent booking flows. In doing so, it recreates something that's hard to find in fast-moving cities: a sense of community based on mutual need and reliability.
                      </p>
                    </div>

                    {/* Right: Role / Team / Timeline stacked vertically; smaller visual weight so Overview remains priority */}
                    <div className="mt-6 md:mt-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-base font-semibold mb-1">Role</h4>
                          <p className="text-sm text-muted-foreground">UX Designer (end-to-end)</p>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold mb-1">Team</h4>
                          <p className="text-sm text-muted-foreground">Independent project</p>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold mb-1">Timeline</h4>
                          <p className="text-sm text-muted-foreground">September - October 2025 (further iteration in 2026)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      

  <section className="py-16">
    <div className="container mx-auto px-6 relative">
      <div className="relative">
        <button
          aria-label="Previous"
          onClick={() => { setIsCarouselPaused(true); scrollPrev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 text-3xl flex items-center justify-center"
        >
          ‹
        </button>

        <div
          ref={carouselRef}
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          className="flex gap-4 overflow-x-auto scroll-smooth py-4 md:py-6 no-scrollbar items-center"
          style={{ alignItems: 'center' }}
        >
          {/* left fade (hidden on mobile) */}
          <div className="pointer-events-none hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent opacity-90 z-10" />
          {
            overviewImages.map((img, idx) => {
              return (
                <div key={idx} className="carousel-item flex-none w-3/4 sm:w-1/2 md:w-[200px] lg:w-[260px] transform transition-transform duration-300 scale-90">
                  <div className="overflow-hidden rounded-lg flex items-center justify-center" style={{ minHeight: '160px' }}>
                    <img src={img} alt={overviewAlts[idx]}
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => { setSingleLightboxSrc(img); setSingleLightboxAlt(overviewAlts[idx]); setSingleLightboxOrigin('overview'); setSingleLightboxOpen(true); }}
                    />
                  </div>
                </div>
              );
            })
          }
        </div>

        <button
          aria-label="Next"
          onClick={() => { setIsCarouselPaused(true); scrollNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 text-3xl flex items-center justify-center"
        >
          ›
        </button>

  {/* right fade (hidden on mobile) */}
  <div className="pointer-events-none hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent opacity-90 z-10" />
      </div>
    </div>
  </section>

  {/* Process Section (mirrored from DanaoTopo structure) */}
  <section id="research" className="py-16">
      <div className="container mx-auto px-6">
        <div className="w-full text-left">
          <h3 className="text-base text-muted-foreground mb-2">RESEARCH &amp; ANALYSIS</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Research revealed the barrier wasn't demand - it was trust and convenience</h2>
        </div>

        <div className="w-full">
          <p className="text-muted-foreground mb-6 max-w-none">
           Before designing, I needed to understand what actually stops people from borrowing tools. Is demand the problem? Logistics? Trust? Availability? To find out, I spoke with potential users, observed how they currently access tools, and ran a survey exploring borrowing habits and concerns.
          </p>
          <p className="text-muted-foreground mb-6 max-w-none">
          <b>Key Insight:</b> Tool borrowing isn't a niche behaviour - 46% of people borrow tools monthly or weekly, and 60% were interested in using an app. Demand isn't the barrier. What emerged clearly from testing: <b>people fear damage, unreliable lenders, and uncertainty about accountability.</b> Trust, not interest, is what stops borrowing.
        </p>
        <p className="text-muted-foreground mb-6 max-w-none">
           The secondary finding: when people do decide to borrow, location matters. They want tools close to home - not just for convenience, but because it's easier to pick up and return, and because borrowing from someone nearby feels more manageable than coordinating across the city.
          </p></div>

        <div className="w-full mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">User demand & behaviour</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>46% use tools monthly or weekly</li>
                    <li>60% interested in borrowing via app</li>
                    <li>Most used: hand tools, DIY tools, garden tools</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Tool borrowing is frequent; access solves a real problem</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">What drives adoption</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access to tools without buying or storing them</li>
                    <li>Cost savings (borrowing is cheaper than owning)</li>
                    <li>Environmental impact (reducing consumption)</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Convenience and sustainability reinforce each other; trust removes the friction</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">Trust barriers (the core issue)</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Fear of damaged tools</li>
                    <li>Concerns around reliability and accountability</li>
                    <li>Uncertainty about who to trust</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Trust, not demand, is the primary blocker</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">What builds trust</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Verified user profiles</li>
                    <li>Ratings and reviews</li>
                    <li>Insurance or damage guarantees</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Trust features aren't nice-to-haves; they're core functionalities</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">What users actually prioritise</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Tools close to home (proximity first)</li>
                    <li>Clear availability and pricing</li>
                    <li>Quick booking without friction</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Location matters before selection. Where the tool is comes before which tool is available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Why most marketplaces get this wrong</h3>
            <p className="text-muted-foreground mb-6 max-w-none">At the same time, I benchmarked existing sharing and marketplace apps. What I found: most treat location as a filter, <i>not a primary consideration</i>. They show you a long list of available items (sorted by rating or price), then let you narrow by distance. You browse everything first, then filter by geography.</p>
            <p className="text-muted-foreground mb-6 max-w-none">But research showed people actually prioritise differently. When deciding whether to borrow, <b>location comes early in their thinking</b> - not as a final filter, but as part of whether borrowing feels manageable at all. They want tools close to home because it's practical: easier to pick up, easier to return, easier to coordinate. Most existing solutions - whether they're cluttered or minimal - ignore this. They structure discovery the same way: list first, location second.</p>
          </div>
        </div>

        <div className="w-full mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
                <div className="w-full overflow-hidden rounded-md mb-4 h-40 md:h-44 relative">
                <img
                  src={benchmark01}
                  alt="Benchmark example 1"
                  className="w-full h-full object-cover cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => { setSingleLightboxSrc(benchmark01); setSingleLightboxAlt('Benchmark - comparative analysis 1'); setSingleLightboxOrigin('benchmark'); setSingleLightboxOpen(true); }}
                />
                <button
                  aria-label="Open benchmark 1"
                  onClick={() => { setSingleLightboxSrc(benchmark01); setSingleLightboxAlt('Benchmark - comparative analysis 1'); setSingleLightboxOrigin('benchmark'); setSingleLightboxOpen(true); }}
                  className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
              <h4 className="text-lg font-semibold mb-2">Example 1</h4>
              <ul className="list-inside list-disc text-muted-foreground pl-4 space-y-1">
                <li>Visual clutter</li>
                <li>Information overload</li>
                <li>Conflicting visual hierarchy</li>
              </ul>
            </div>
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
                <div className="w-full overflow-hidden rounded-md mb-4 h-40 md:h-44 relative">
                <img
                  src={benchmark02}
                  alt="Benchmark example 2"
                  className="w-full h-full object-cover cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => { setSingleLightboxSrc(benchmark02); setSingleLightboxAlt('Benchmark - comparative analysis 2'); setSingleLightboxOrigin('benchmark'); setSingleLightboxOpen(true); }}
                />
                <button
                  aria-label="Open benchmark 2"
                  onClick={() => { setSingleLightboxSrc(benchmark02); setSingleLightboxAlt('Benchmark - comparative analysis 2'); setSingleLightboxOrigin('benchmark'); setSingleLightboxOpen(true); }}
                  className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
              <h4 className="text-lg font-semibold mb-2">Example 2</h4>
              <ul className="list-inside list-disc text-muted-foreground pl-4 space-y-1">
                <li>Clean, minimal interface</li>
                <li>Clear feature prioritisation</li>
                <li>Intuitive navigation</li>
              </ul>
            </div>
          </div>
        </div>
                <div className="w-full mt-12">
          <div className="w-full">
            <p className="text-muted-foreground mb-6 max-w-none">This meant map-first wasn't a design trend, but a practical choice. If people care about where tools are before browsing which tools are available, the map should be the primary interface. Users navigate to their neighbourhood first, then discover what's available nearby. Everything flows from that: the search bar, the filters, the layout of tool cards - all organised around location and spatial context, not just features or ratings.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Process Step Two Section */}
  <section id="design" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">DESIGN</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Map-first design to solve the proximity problem</h2>
            </div>

            <div className="w-full">
              <p className="text-muted-foreground mb-6 max-w-none">
                Research revealed that location comes early in the borrowing decision. When people consider borrowing a tool, they're thinking: "Is there one close to me?" not "What tools exist?" This meant the design couldn't treat location as a secondary filter - it had to be the primary lens.
              </p>
              <p className="text-muted-foreground mb-6 max-w-none">
                So I structured ToolSwap around the map. Instead of showing a list first and letting people narrow by distance, the map is the search interface. Users navigate to their neighbourhood, discover what's available nearby, and decide from there. Every design choice flows from this core structure.
              </p>
            </div>

            {/* User journey paragraph on the left, flowchart image centered on the right (responsive) */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6">
                    To support map-first discovery, three user journeys had to work seamlessly:
                  </p>

                  <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                    <li>• <b>Finding and borrowing a nearby tool</b> - the primary flow</li>
                    <li>• <b>Listing a tool for others to borrow</b> - equally important, but different mental model</li>
                    <li>• <b>Managing bookings and account information</b> - the support layer</li>
                  </ul>
                  <p className="text-muted-foreground mb-6">
                    Keeping the map visible and accessible throughout the app - even when searching, filtering, or viewing details - meant maintaining spatial context at every step. Users always knew where they were and where the tools were.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-full max-w-3xl overflow-hidden rounded-lg">
                    <img
                      src={tsUserJourney}
                      alt="User journey flowchart"
                      className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                      onClick={() => setJourneyLightboxOpen(true)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Design Choices</h4>
            </div>

            <div className="w-full">
              <p className="text-muted-foreground mb-6 max-w-none">After defining the user journey I drew some sketches and created medium fidelity wireframes in Figma which helped me clarify the structure and flow. Next step was converting the wireframes into actual designs. Map-first simplifies the core problem, but it creates specific design constraints. The sections below show how I navigated each one.</p>
            </div>
          </div>
        </section>

  {/* Detail blocks with images (mirroring DanaoTopo) */}
  <section className="pt-2 pb-16">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {/* Block 1 - Navigation & Search */}
              <div>
                <div className="px-0 sm:px-12 mt-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="max-w-3xl">
                        <h4 className="text-lg font-semibold mb-2">Why the search bar lives at the bottom</h4>
                        <p className="text-muted-foreground mb-4">
                          Search is the main entry point into ToolSwap. Users need to find tools quickly. But on mobile, especially while exploring the map with one hand, reaching the top of the screen is awkward. So the search bar lives at the bottom - instantly reachable, always visible, never blocking the map.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Category suggestions appear above the search field. This breaks the typical pattern of hiding suggestions inside a dropdown, but early testing showed users moved faster with immediate, visible options. The pattern break worked because it served the user's actual behaviour.
                        </p>
                      </div>

                      <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                        <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                          {/* Small swipeable carousel for design options */}
                          {/* Carousel arrows moved to top-right */}

                          <div ref={block1Ref} className="flex gap-4 overflow-x-auto scroll-smooth py-3 no-scrollbar">
                            <div className="flex-none w-full">
                              <img
                                src={tsDesign01_a}
                                alt="Navigation & Search - option A"
                                className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  setSingleLightboxSrc(tsDesign01_a);
                                  setSingleLightboxAlt("Navigation & Search - option A");
                                  setSingleLightboxOrigin('design-1');
                                  setSingleLightboxOpen(true);
                                }}
                              />
                            </div>

                            <div className="flex-none w-full">
                              <img
                                src={tsDesign01_b}
                                alt="Navigation & Search - option B"
                                className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  setSingleLightboxSrc(tsDesign01_b);
                                  setSingleLightboxAlt("Navigation & Search - option B");
                                  setSingleLightboxOrigin('design-1');
                                  setSingleLightboxOpen(true);
                                }}
                              />
                            </div>
                          </div>

                          <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                            <button
                              aria-label="Previous design"
                              onClick={scrollBlock1Prev}
                              className="text-2xl text-foreground hover:text-green-600 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1"
                            >
                              ‹
                            </button>
                            <button
                              aria-label="Next design"
                              onClick={scrollBlock1Next}
                              className="text-2xl text-foreground hover:text-green-600 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1"
                            >
                              ›
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Block 2 - Map */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Why the map never closes</h4>
                    <p className="text-muted-foreground mb-4">
                      Looking at similar marketplaces, most rely heavily on list views, with maps playing a secondary role - hidden in the background. Research showed the opposite here - users cared most about what was close by.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For that reason, ToolSwap is designed as a map-first experience, with a list view available when users want to compare options more directly. Keeping the map visible throughout the app helps maintain spatial context during decision-making.
                    </p>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                    <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                      <div ref={block2Ref} className="flex gap-4 overflow-x-auto scroll-smooth py-3 no-scrollbar">
                        <div className="flex-none w-full">
                          <img
                            src={tsDesign02_a}
                            alt="Map design - option A"
                            className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                              setSingleLightboxSrc(tsDesign02_a);
                              setSingleLightboxAlt("Map design - option A");
                              setSingleLightboxOrigin('design-2');
                              setSingleLightboxOpen(true);
                            }}
                          />
                        </div>

                        <div className="flex-none w-full">
                          <img
                            src={tsDesign02_b}
                            alt="Map design - option B"
                            className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                              setSingleLightboxSrc(tsDesign02_b);
                              setSingleLightboxAlt("Map design - option B");
                              setSingleLightboxOrigin('design-2');
                              setSingleLightboxOpen(true);
                            }}
                          />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                        <button
                          aria-label="Previous map design"
                          onClick={scrollBlock2Prev}
                          className="text-2xl text-foreground hover:text-green-600 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1"
                        >
                          ‹
                        </button>
                        <button
                          aria-label="Next map design"
                          onClick={scrollBlock2Next}
                          className="text-2xl text-foreground hover:text-green-600 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 3 - Terminology Main Menu*/}
              <div>
                <div className="px-0 sm:px-12 mt-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="max-w-3xl">
                        <h4 className="text-lg font-semibold mb-2">When users' mental models guide the menu</h4>
                        <p className="text-muted-foreground mb-4">
                          Getting the main menu right took a few iterations. Early versions grouped actions by feature - search here, my bookings there, create listing elsewhere. But testing quickly revealed the problem: users couldn't intuitively tell whether an action related to borrowing or lending.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          I tested two menu structures: one organised by feature (the original approach) and one organized by Borrow and Lend. The results were clear. Users moved faster and with less confusion when actions were grouped by their mental model, not by feature categories.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          The final version separates actions into Borrow and Lend, which reduced confusion around managing different types of bookings.
                        </p>
                      </div>

                      <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                        <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                          <div ref={block3Ref} className="flex gap-4 overflow-x-auto scroll-smooth py-3 no-scrollbar">
                            <div className="flex-none w-full">
                              <img
                                src={tsDesign03a}
                                alt="Terminology / Menu choices - option A"
                                className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  setSingleLightboxSrc(tsDesign03a);
                                  setSingleLightboxAlt("Terminology / Menu choices - option A");
                                  setSingleLightboxOrigin('design-3');
                                  setSingleLightboxOpen(true);
                                }}
                              />
                            </div>

                            <div className="flex-none w-full">
                              <img
                                src={tsDesign03b}
                                alt="Terminology / Menu choices - option B"
                                className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  setSingleLightboxSrc(tsDesign03b);
                                  setSingleLightboxAlt("Terminology / Menu choices - option B");
                                  setSingleLightboxOrigin('design-3');
                                  setSingleLightboxOpen(true);
                                }}
                              />
                            </div>
                          </div>

                          <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                            <button
                              aria-label="Previous menu design"
                              onClick={scrollBlock3Prev}
                              className="text-2xl text-foreground hover:text-green-600 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1"
                            >
                              ‹
                            </button>
                            <button
                              aria-label="Next menu design"
                              onClick={scrollBlock3Next}
                              className="text-2xl text-foreground hover:text-green-600 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1"
                            >
                              ›
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 4 - List Item */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Details without cluttering the map</h4>
                    <p className="text-muted-foreground mb-4">
                      The tool detail screen needed to answer a user's core question: Can I trust this person and this situation? But showing lender info, reviews, pricing, availability, and descriptions all at once would overwhelm - a cluttered screen reads as unclear, and unclear feels risky.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      From my background in photography and visual design, I know that clarity comes from hierarchy - showing what matters first, letting the eye and mind settle before adding complexity. So I used a bottom sheet layout that keeps the map visible in the background. Users always know where the tool is. Key details appear first - lender info, price, distance, availability - followed by scrollable description and reviews. The booking CTA and total price stay fixed at the bottom, always reachable.
                    </p>
                    <p className="text-muted-foreground mb-4">
                     This structure answers their question progressively: Who is this? How much? How far? Before asking them to commit."
                    </p>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                    <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                      <video
                        src={listingPlay}
                        muted
                        autoPlay
                        loop
                        controls
                        playsInline
                        className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                        onClick={() => {
                          setSingleLightboxSrc(listingPlay);
                          setSingleLightboxAlt("List item video");
                          setSingleLightboxOrigin('design-4');
                          setSingleLightboxOpen(true);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 5 - Filter / Sort by */}
              <div>
                <div className="px-0 sm:px-12 mt-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="max-w-3xl">
                        <h4 className="text-lg font-semibold mb-2">Why filters live in a bottom sheet</h4>
                        <p className="text-muted-foreground mb-4">
                          To support decision-making in list view, a filter and sort option was introduced. Early concepts embedded filters directly into the map view, but testing showed this reduced clarity and reachability.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          The final solution uses a bottom sheet pattern instead. This keeps controls reachable and the map clear, while prioritising the most common filters: distance, price, and availability.
                        </p>
                      </div>

                      <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                        <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                          <video
                            src={filterVideo}
                            muted
                            autoPlay
                            loop
                            controls
                            playsInline
                            className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px]"
                            aria-label="ToolSwap Filter demo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Three Section - Prototype & Testing */}
  <section id="prototype" className="py-16">
          <div className="container mx-auto px-6">
            <div>
              <h3 className="text-base text-muted-foreground mb-2">PROTOTYPE &amp; TESTING</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Testing exposed gaps in clarity - particularly around CTAs</h2>

              {/* Full-width paragraph */}
              <div className="w-full">
                <p className="text-muted-foreground mb-6 max-w-none">After creating a prototype, I ran usability tests with the three core tasks: reserving a tool, creating a listing, and finding booking requests. The core flows worked - users completed tasks and understood the logic. But testing revealed specific clarity gaps that needed addressing.</p>
              </div>

              {/* User Test Tasks card (full width) */}
              <div className="w-full">
                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-3">Usability Testing Tasks</h4>
                  <ul className="list-inside space-y-2 text-muted-foreground pl-4">
                    <li>• You live in Canary Wharf & look for a power drill from September 13th 2025 - September 20th, 2025. Try to reserve the item closest to you, assuming you already have an account, and continue with the checkout flow</li>
                    <li>• You live in Canary Wharf and want to lend your jigsaw to other people. Try to create your own listing, the price is £2 per day and no description is needed</li>
                    <li>• Try to find the booking requests for your bookings (the tools that you are lending to others)</li>
                  </ul>
                </div>
              </div>

              {/* Two cards side-by-side: left = user test story (swipeable), right = prototype iframe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="relative p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full pt-12 md:pt-14">
                  {/* top-right swipe buttons (larger) */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Insights & Findings</h4>
                    <div>{userTestStory}</div>
                  </div>

                </div>

                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex items-center justify-center h-full">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <iframe
                      title="ToolSwap Prototype Embed"
                      src="https://embed.figma.com/proto/fjdwiyvqq5G6MqKcFuVD1L/Tool-Swap?node-id=9368-21562&p=f&viewport=7453%2C-624%2C0.37&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9368%3A21562&page-id=9368%3A17986&embed-host=share"
                      style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                      width={800}
                      height={450}
                      className="w-full h-full min-h-[420px] md:min-h-[480px]"
                      allowFullScreen
                    />
                    <div className="mt-3 text-sm text-muted-foreground">
                      If the prototype embed fails to load (HTTP 500), open it directly in a new tab:
                      <div>
                        <a
                          href="https://embed.figma.com/proto/fjdwiyvqq5G6MqKcFuVD1L/Tool-Swap?node-id=9368-21562&p=f&viewport=7453%2C-624%2C0.37&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9368%3A21562&page-id=9368%3A17986&embed-host=share"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >
                          Open prototype in a new tab
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Findings & Next Steps cards under Prototype (same card design) */}
                <div className="w-full mt-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <h4 className="text-lg font-semibold mb-3">Next Steps</h4>
                    <ul className="list-inside space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Replace ambiguous underlined CTAs with clearer buttons</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Add explicit confirmation to the create-listing flow (confirm price step)</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Display newly created listings immediately in the user's listings</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Added FAQ / report an issue section to the menu</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Conduct more user tests to validate changes</span>
                      </li>
                    </ul>
                  </div>
                </div>

            </div>
          </div>
        </section>


        

  {/* Process Step Four Section - Deliverables */}
  <section id="deliverables" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">DELIVERABLES</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">What this turned into</h2>
            </div>

            <div className="w-full mt-6">
              <div className="px-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(0)} src={tsNewHome} alt="Home" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(1)} src={tsNewSearch01} alt="Search 01" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(2)} src={tsNewSearch02} alt="Search 02" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(3)} src={tsNewDetailView} alt="Detail View" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(4)} src={tsNewListItem} alt="List Item" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(5)} src={tsNewSortBy} alt="Sort By" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>

                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(6)} src={tsNewMenu} alt="Menu" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(7)} src={tsNewMyBookingsDetail} alt="My Bookings Detail" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(8)} src={tsNewMyBookings} alt="My Bookings" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(9)} src={tsNewCreateListing} alt="Create Listing" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(10)} src={tsNewReviewListing} alt="Review Listing" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(11)} src={tsNewListings} alt="Listings" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>

                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(12)} src={tsNewBookings} alt="Bookings" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(13)} src={tsNewBookingDetails} alt="Booking Details" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(14)} src={tsNewChatMessage} alt="Chat Message" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(15)} src={tsNewReviews} alt="Reviews" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Process Step Five Section */}
  <section id="conclusion" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="w-full">
              <h3 className="text-base text-muted-foreground mb-2">CONCLUSIONS</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">How research-first design changed my approach to trust-sensitive marketplaces</h2>
            </div>

            {/* Conclusions card (same style as User Test Tasks) */}
            <div className="w-full mt-6">
              <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg">
                <p className="text-muted-foreground mb-6">
                 My first case study taught me that research comes before design. With ToolSwap, I reversed the order and started by listening.
                </p>
                <p className="text-muted-foreground mb-6">
                 The research revealed something clear: the barrier wasn't demand - it was confidence and convenience. People feared damaged tools and uncertain accountability. They wanted items close to home, verified lenders, and clear pricing.
                </p>
                <p className="text-muted-foreground mb-6">
                 Starting with research meant every design choice had a foundation. But the real learning came from testing: underlined CTAs weren't recognised as actionable. Price screens that auto-advanced confused users. Missing support options made people hesitant. Each of these was a clarity gap that eroded confidence.
                </p>
                <p className="text-muted-foreground mb-4">
                This project reinforced something I learned in retail and eCommerce: people trust what they understand. <b>And trust-sensitive marketplaces live or die on clarity.</b> Every design choice - from information architecture to button weight - either reinforces or undermines whether users feel safe. That applies far beyond tool-sharing: to insurance products, peer-to-peer lending, community platforms.
                 </p>
              <p className="text-muted-foreground mb-4">
                  If this shipped, I'd first validate the reserve flow with users who've never borrowed before. I'd also validate the green colour meets WCAG AA contrast standards across all contexts, and test whether the insurance/damage guarantee copy is prominent enough in the product detail screen.
                </p>
                </div>
            </div>
          </div>
        </section>

        {/* Next Case Study */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 text-center">Next Case Study</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Danao Topo
              </h2>
              
              <Link
                to="/projects/danao-topo"
                state={{ scrollTop: true }}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative block overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={danaoteaser}
                    alt="Danao Topo Project - Interactive topographical visualization"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 px-6">
                  <p className="text-lg md:text-xl text-white text-center max-w-2xl">
                    Interactive topographical visualization of Danao's natural landscape
                  </p>
                  <span className="text-xl font-semibold text-white">View Case Study →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>


        {/* Lightbox Modal */}
        {lightboxOpen && currentIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 text-white text-4xl"
              aria-label="Previous"
            >
              ‹
            </button>

            <img
              src={deliverablesImages[currentIndex]}
              alt={`Deliverable ${currentIndex + 1}`}
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 text-white text-4xl"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        )}

        {/* Research image lightbox (single image) */}
        {researchLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setResearchLightboxOpen(false);
            }}
          >
            <button
              onClick={() => setResearchLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={tsResearch01}
              alt="Process visualization - full"
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />
          </div>
        )}

        {/* User journey lightbox (single image) */}
        {journeyLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setJourneyLightboxOpen(false);
            }}
          >
            <button
              onClick={() => setJourneyLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={tsUserJourney}
              alt="User journey - full"
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />
          </div>
        )}

        {/* Generic single-image lightbox used by multiple design images */}
        {singleLightboxOpen && singleLightboxSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) { setSingleLightboxOpen(false); setSingleLightboxOrigin(null); }
            }}
          >
            <button
              onClick={() => { setSingleLightboxOpen(false); setSingleLightboxOrigin(null); }}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            {/* Left/Right controls for the design pairs (Blocks 1/2/3) */}
            {singleLightboxOrigin?.startsWith('design') && [tsDesign01_a, tsDesign01_b, tsDesign02_a, tsDesign02_b, tsDesign03a, tsDesign03b].includes(singleLightboxSrc) && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const pairs = [
                      { imgs: [tsDesign01_a, tsDesign01_b], alts: ["Navigation & Search - option A", "Navigation & Search - option B"] },
                      { imgs: [tsDesign02_a, tsDesign02_b], alts: ["Map design - option A", "Map design - option B"] },
                      { imgs: [tsDesign03a, tsDesign03b], alts: ["Terminology / Menu choices - option A", "Terminology / Menu choices - option B"] },
                    ];
                    for (const pair of pairs) {
                      const idx = pair.imgs.findIndex((s) => s === singleLightboxSrc);
                      if (idx >= 0) {
                        const prevIndex = (idx - 1 + pair.imgs.length) % pair.imgs.length;
                        setSingleLightboxSrc(pair.imgs[prevIndex]);
                        setSingleLightboxAlt(pair.alts[prevIndex]);
                        break;
                      }
                    }
                  }}
                  className="absolute left-6 text-white text-4xl"
                  aria-label="Previous design"
                >
                  ‹
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const pairs = [
                      { imgs: [tsDesign01_a, tsDesign01_b], alts: ["Navigation & Search - option A", "Navigation & Search - option B"] },
                      { imgs: [tsDesign02_a, tsDesign02_b], alts: ["Map design - option A", "Map design - option B"] },
                      { imgs: [tsDesign03a, tsDesign03b], alts: ["Terminology / Menu choices - option A", "Terminology / Menu choices - option B"] },
                    ];
                    for (const pair of pairs) {
                      const idx = pair.imgs.findIndex((s) => s === singleLightboxSrc);
                      if (idx >= 0) {
                        const nextIndex = (idx + 1) % pair.imgs.length;
                        setSingleLightboxSrc(pair.imgs[nextIndex]);
                        setSingleLightboxAlt(pair.alts[nextIndex]);
                        break;
                      }
                    }
                  }}
                  className="absolute right-6 text-white text-4xl"
                  aria-label="Next design"
                >
                  ›
                </button>
              </>
            )}

            {/\.(mp4|mov|webm)$/i.test(singleLightboxSrc || '') ? (
              <video
                src={singleLightboxSrc || undefined}
                controls
                autoPlay
                className="max-w-[90%] max-h-[90%] object-contain rounded"
              />
            ) : (
              <img
                src={singleLightboxSrc}
                alt={singleLightboxAlt || "Design - full"}
                className="max-w-[90%] max-h-[90%] object-contain rounded"
              />
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default ToolSwap;