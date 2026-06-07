import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Image imports for Danao design choices and placeholders
import design01b from "@/assets/alexandramarley-uxdesign-danao-design-01d.webp";
import design02b from "@/assets/alexandramarley-uxdesign-danao-design-02b.webp";
import design03 from "@/assets/alexandramarley-uxdesign-danao-design-03b.webp";
import design04 from "@/assets/alexandramarley-uxdesign-danao-design-04b.webp";
import userJourney from "@/assets/alexandramarley-ux-danao-topo-user-journey.webp";
import danaoBenchmark1 from "@/assets/alexandramarley-uxdesign-danao-benchmark1.webp";
import danaoBenchmark2 from "@/assets/alexandramarley-uxdesign-danao-benchmark2.webp";
import danaoBenchmark3 from "@/assets/alexandramarley-uxdesign-danao-benchmark3.webp";
import danaoBenchmark4 from "@/assets/alexandramarley-uxdesign-danao-benchmark4.webp";
import contact from "@/assets/alexandramarley-uxdesign-contact-new.webp";
import danaoAccount from "@/assets/alexandramarley-uxdesign-danao-account-new.webp";
import danaoCragAscent from "@/assets/alexandramarley-uxdesign-danao-crag-ascent-new.webp";
import danaoCragDetail from "@/assets/alexandramarley-uxdesign-danao-crag-detail-new.webp";
import danaoCrag from "@/assets/alexandramarley-uxdesign-danao-crag-new.webp";
import danaoFilter from "@/assets/alexandramarley-uxdesign-danao-filter-new.webp";
import danaoInfo from "@/assets/alexandramarley-uxdesign-danao-info-new.webp";
import danaoMapCrag from "@/assets/alexandramarley-uxdesign-danao-map-crag-new.webp";
import danaoMapOverview from "@/assets/alexandramarley-uxdesign-danao-map-overview-new.webp";
import danaoSearch from "@/assets/alexandramarley-uxdesign-danao-search-new.webp";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import toolswapcover from "@/assets/alexandramarley-uxdesign-toolswap-coverv2.webp";
import danaoTitle from "@/assets/alexandramarley-uxdesign-danao-title.webp";

const DanaoTopo = () => {
  const [singleLightboxOpen, setSingleLightboxOpen] = useState(false);
  const [singleLightboxSrc, setSingleLightboxSrc] = useState<string | null>(null);
  const [singleLightboxAlt, setSingleLightboxAlt] = useState<string>("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  // Carousel refs/state for the new horizontal autoplay carousel
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const openSingle = (src: string, alt = "") => {
    // If the image is part of the deliverables/gallery images, open the multi-image lightbox
    const idx = deliverablesImages.indexOf(src);
    if (idx !== -1) {
      setCurrentIndex(idx);
      setLightboxOpen(true);
      return;
    }

    // Otherwise fall back to single-image lightbox
    setSingleLightboxSrc(src);
    setSingleLightboxAlt(alt);
    setSingleLightboxOpen(true);
  };

  const closeSingle = () => {
    setSingleLightboxOpen(false);
    setTimeout(() => setSingleLightboxSrc(null), 200);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSingle();
    };
    if (singleLightboxOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [singleLightboxOpen]);

  // Deliverables images for gallery modal (10 items) - ordered per request
  const deliverablesImages = [
    danaoInfo,
    danaoMapOverview,
    danaoMapCrag,
    danaoCrag,
    danaoCragDetail,
    danaoCragAscent,
    danaoFilter,
    danaoSearch,
    danaoAccount,
    contact,
  ];

  // images for the overview carousel (order matters)
  const overviewImages = [
    danaoInfo,
    danaoMapOverview,
    danaoMapCrag,
    danaoCrag,
    danaoCragDetail,
    danaoCragAscent,
    danaoFilter,
    danaoSearch,
    danaoAccount,
    contact,
  ];

  const overviewAlts = [
    'Contact',
    'Map Overview',
    'Map Crag',
    'Crag Detail',
    'Crag',
    'Crag Ascent',
    'Filter',
    'Search',
    'Account',
    'Contact',
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

  // Carousel auto-scroll helpers
  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.querySelector<HTMLElement>(".carousel-item");
    const step = firstChild ? firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0") : el.clientWidth;
    // If we're near the end, wrap to the start
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft + step >= maxScrollLeft - 2) {
      // smooth scroll to start
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
    // If we're near the start, wrap to the end
    if (el.scrollLeft - step <= 2) {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isCarouselPaused) return;
    // autoplay every 2.5s
    autoplayRef.current = window.setInterval(() => {
      scrollNext();
    }, 2500);
    return () => { if (autoplayRef.current) window.clearInterval(autoplayRef.current); };
  }, [isCarouselPaused]);

  // Highlight center item: detect which carousel-item is closest to the carousel center
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
        // set default (smaller)
        it.classList.remove("scale-105");
        it.classList.add("scale-90");
      });
      if (closest) {
        closest.classList.remove("scale-90");
        closest.classList.add("scale-105");
      }
    };

    // Add left/right padding so the first and last items can be centered
    const setSidePadding = () => {
      // recompute itemWidth in case of responsive layout
      itemWidth = first.offsetWidth + gap;
      const sidePad = Math.max(0, (el.clientWidth - itemWidth) / 2);
      el.style.paddingLeft = `${sidePad}px`;
      el.style.paddingRight = `${sidePad}px`;
    };

    // ensure layout settles before measuring and centering
    setTimeout(() => {
      setSidePadding();
      // On mobile (narrow viewports) start on the first item; otherwise start on the 3rd item
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
      // if user scrolls manually, pause autoplay briefly
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
      // clear padding style
      try {
        el.style.paddingLeft = "";
        el.style.paddingRight = "";
      } catch (e) {
        // ignore
      }
      if (resumeTimeout) window.clearTimeout(resumeTimeout);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location && (location.state as any)?.scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // user test story (single static card)
  const userTestStory: React.ReactNode = (
    <div>
      <p className="text-sm italic text-muted-foreground mb-3">Testing was conducted on an earlier version of the design. The insights below directly informed the subsequent redesign.</p>
      <p className="text-muted-foreground mb-8">
       Climbers moved quickly through core tasks - finding routes, filtering, accessing details. But friction points became obvious. Tap targets were too small to hit reliably. The "All Routes" button was too hidden. Navigation lacked clear feedback; users didn't always know where they were or how to go back.
       </p>
       <p className="text-muted-foreground mb-8">
       These insights directly informed the next iteration: larger tap targets, improved filter interactions, clearer navigation hierarchy, better visual feedback.
       </p>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Hero Section */}
        {/* Hero Section: three-line title with right-side 9:16 image */}
        <section
          className="py-8 md:py-12 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${danaoTitle})` }}
        >
          {/* background overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/10" aria-hidden />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: three-line heading + intro (spans 2/3 on md+) */}
              <div className="md:col-span-2 pr-20 md:pr-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight leading-tight md:leading-snug w-full">
                  <span className="text-green-700 font-semibold">Danao Topo:</span> From spreadsheet data to visual route discovery</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                  A mobile application design improving traditional climbing guidebooks
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-0">
                  <div className="rounded-full bg-muted px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm">UI/UX Design</div>
                  <div className="rounded-full bg-muted px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm">Climbing Guide</div>
                  <div className="rounded-full bg-muted px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm">Mobile App</div>
                </div>
              </div>

              {/* Right: tall image (9:16). Visible on all sizes; absolute on small screens so it can be cut off but not overlap text. */}
              <div className="flex justify-center absolute right-6 top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-auto md:translate-y-0">
                <div className="aspect-[9/16] w-[140px] sm:w-[180px] md:w-full md:max-w-[216px] lg:max-w-[280px] overflow-hidden rounded-lg mx-auto">
                  {/* danaoteaser removed per request; keeping container for layout */}
                  <div className="w-full h-full bg-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section menu: quick anchors for page sections (centered & sticky) */}
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
              {/* subtle gradient line to visually match the main navigation when this bar becomes sticky */}
              <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20" aria-hidden />
            </nav>
          </div>
        </div>

{/* Overview New*/}
  <section id="overview" className="pt-16 pb-6">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-lg bg-background">
              <div className="w-full flex items-stretch md:h-full">
                <div className="w-full">
                  {/* Use a 5-column grid on md+ and allocate 3/5 (60%) to the left and 2/5 (40%) to the right */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-16 md:h-full items-start">
                    {/* Left: Title + longer text (takes ~60%) */}
                    <div className="md:col-span-3">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why a spreadsheet is worse than no design at all</h3>
                      <p className="text-muted-foreground max-w-2xl mb-8">
                        How do you turn a wall of text into a decision tool? Especially when that decision happens outdoors with no reception, and the wrong choice means not having a rope long enough - which can be life threatening. In Danao, Philippines, climbers navigated dozens of routes using only a spreadsheet with no images. Standing at a physical wall, they had to match what they were seeing to route names in text. Comparing routes was nearly impossible. Most of the time, they just guessed and hoped they were climbing the right one.
                      </p>
                      <p className="text-muted-foreground mb-8">
                        This app design transforms text-heavy route data into a mobile-first climbing guide designed to support real-world use. My background in photography taught me that information hierarchy is crucial - if climbers can't visually parse the information in seconds, the design fails. The solution prioritises clear map interaction, fast route discovery, and offline-friendly access, reducing cognitive load while preserving the depth climbers need when choosing routes.
                      </p>
                    </div>

                    {/* Right: Role / Team / Timeline stacked vertically; smaller visual weight so Overview remains priority (takes ~40%) */}
                    <div className="mt-6 md:mt-0 md:col-span-2">
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
                          <p className="text-sm text-muted-foreground">July - September 2025 (further iteration in 2026)</p>
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
          <div className="pointer-events-none hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent opacity-90 z-10" />
          {
            // single copy of images; we'll add side padding so the first/last items
            // can be scrolled to the centre of the view even without duplicates
            overviewImages.map((img, idx) => {
              return (
                <div key={idx} className="carousel-item flex-none w-3/4 sm:w-1/2 md:w-[180px] lg:w-[234px] transform transition-transform duration-300 scale-90">
                  <div className="overflow-hidden rounded-lg flex items-center justify-center" style={{ minHeight: '160px' }}>
                    <img src={img} alt={overviewAlts[idx]} className="w-full h-auto object-contain cursor-pointer" onClick={() => openSingle(img, overviewAlts[idx])} />
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
  <div className="pointer-events-none hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent opacity-90 z-10" />
      </div>
    </div>
  </section>

{/* Research & Analysis */}
  {/* Research summary: new titles + paragraph + six cards */}
  <section id="research" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="w-full text-left">
          <h3 className="text-base text-muted-foreground mb-2">RESEARCH &amp; ANALYSIS</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What climbers said they wanted vs. what they actually used</h2>
        </div>

        <div className="w-full">
          <p className="text-muted-foreground mb-6 max-w-none">
            I started with assumptions based on my own climbing experience. I needed to validate whether those assumptions matched reality.
          </p>
          <p className="text-muted-foreground mb-12 max-w-none">
            I surveyed climbers, observed at the climbing wall (crag), and conducted interviews. The research revealed clear priorities: route length (for rope selection), grade, access info, and offline access are non-negotiable. But when I later tested the design with users, I discovered friction points I hadn't anticipated - small tap targets, unclear navigation, and confusing filters. That gap between what looked good on paper and what actually worked shaped the second iteration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Primary Use Case</h4>
              <p className="text-muted-foreground">90% of users prioritise access details, route grade, and route length. These form the essential content of the app</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Overview and key route details</h4>
              <p className="text-muted-foreground">Users need to know where a route starts/ends, its length, difficulty, required gear, approach, and best climbing conditions</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Offline access is essential</h4>
              <p className="text-muted-foreground">Poor reception in climbing areas makes downloadable offline content a key requirement</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Grading System</h4>
              <p className="text-muted-foreground">95% prefer the French Sport Grading system</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Conditions & safety awareness</h4>
              <p className="text-muted-foreground">Users value contextual information such as wall orientation (sun/shade), best time to climb, and potential safety risks (e.g. loose rock) to plan climbs effectively</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Secondary Use Case</h4>
              <p className="text-muted-foreground">Only 25% want to rate routes. Most users mainly view route info and track climbing projects.</p>
            </div>
          </div>
        </div>
        
        <div className="w-full mt-12">
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Competitor Analysis</h3>
            <p className="text-muted-foreground mb-6 max-w-none">At the same time I benchmarked existing climbing apps to understand common patterns and trade-offs in route discovery, filtering, and map interaction.</p>
            <p className="text-muted-foreground mb-6 max-w-none">I noticed recurring issues: visual clutter, limited filter options, layouts built for desktop first. This informed where opportunities existed to improve clarity and usability on mobile.</p>
          </div>
        </div>
        
        <div className="w-full mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="w-full overflow-hidden rounded-md mb-4 h-40 md:h-44 relative">
                <img
                  src={danaoBenchmark1}
                  alt="Example 1"
                  className="w-full h-full object-cover cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSingle(danaoBenchmark1, 'Example 1')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark1, 'Example 1'); }}
                />
                <span className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-30 text-white rounded-full p-1 flex items-center justify-center pointer-events-none" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Example 1</h4>
              <ul className="list-inside list-disc text-muted-foreground pl-4 space-y-1">
                <li>Visually cluttered</li>
                <li>Poor colour hierarchies</li>
              </ul>
            </div>
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="w-full overflow-hidden rounded-md mb-4 h-40 md:h-44 relative">
                <img
                  src={danaoBenchmark2}
                  alt="Example 2"
                  className="w-full h-full object-cover cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSingle(danaoBenchmark2, 'Example 2')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark2, 'Example 2'); }}
                />
                <span className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-30 text-white rounded-full p-1 flex items-center justify-center pointer-events-none" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Example 2</h4>
              <ul className="list-inside list-disc text-muted-foreground pl-4 space-y-1">
                <li>Limited filtering options</li>
                <li>Poor mobile readability</li>
              </ul>
            </div>
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="w-full overflow-hidden rounded-md mb-4 h-40 md:h-44 relative">
                <img
                  src={danaoBenchmark3}
                  alt="Example 3"
                  className="w-full h-full object-cover cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSingle(danaoBenchmark3, 'Example 3')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark3, 'Example 3'); }}
                />
                <span className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-30 text-white rounded-full p-1 flex items-center justify-center pointer-events-none" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Example 3</h4>
              <ul className="list-inside list-disc text-muted-foreground pl-4 space-y-1">
                <li>Desktop-first layouts</li>
                <li>Broken mobile flow</li>
              </ul>
            </div>
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="w-full overflow-hidden rounded-md mb-4 h-40 md:h-44 relative">
                <img
                  src={danaoBenchmark4}
                  alt="Example 4"
                  className="w-full h-full object-cover cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSingle(danaoBenchmark4, 'Example 4')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark4, 'Example 4'); }}
                />
                <span className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-30 text-white rounded-full p-1 flex items-center justify-center pointer-events-none" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Example 4</h4>
              <ul className="list-inside list-disc text-muted-foreground pl-4 space-y-1">
                <li>User friendly layout</li>
                <li>Good filter options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Process Step Two Section - Design */}
  <section id="design" className="pt-12 pb-2 bg-muted/30">
          <div className="container mx-auto px-6">
            {/* Process Step Two - adopt ToolSwap structure: titles, paragraphs, and user journey image to the right */}
            <div className="max-w-3xl">
                <h3 className="text-base text-muted-foreground mb-2">DESIGN</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">From assumptions to evidence: four design shifts</h2>
              </div>
              <div className="w-full">
                <p className="text-muted-foreground mb-4 max-w-none">
                  The research showed what climbers needed. Translating that into a design that works at a wall, offline, and in the moment shaped every decision.
                </p>
              </div>

            {/* User journey paragraph on the left, flowchart image centered on the right (responsive) */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="max-w-3xl">
                  <p className="text-muted-foreground mb-6">
                    I mapped out four user journeys - each representing a different moment when someone needed the app:
                  </p>

                  <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                    <li>• Researching climbing areas (before arrival)</li>
                    <li>• Planning detailed climbs (at the area)</li>
                    <li>• Finding a specific route or wall (at the wall, in the moment)</li>
                    <li>• Managing projects, support, account changes (secondary)</li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <div className="w-full max-w-3xl overflow-hidden rounded-lg">
                    <img
                      src={userJourney}
                      alt="User journey flowchart"
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => openSingle(userJourney, 'User journey')}
                    />
                  </div>
                </div>
              </div>
            </div>
          <div className="max-w-3xl mt-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Design Choices</h3>
          </div>
          <div className="w-full">
            <p className="text-muted-foreground mb-6 max-w-none">Each journey had different information needs. A climber researching areas offline needs different information than one standing at a wall with 30 seconds to decide. I sketched rough ideas to map these, then created wireframes to stress-test whether the navigation actually solved the right problem at the right moment.</p>
          </div>
           <div className="w-full">
            <p className="text-muted-foreground mb-6 max-w-none">Then I tested with users - and that's where the assumptions broke down. Tap targets were too small. Navigation paths weren't obvious. Filters required too many taps. Every friction point was a lost decision. Working in retail and eCommerce taught me that clarity under pressure is everything. The second iteration addressed this directly. Four specific decisions came out of this cycle:</p>
          </div>
            </div>
        </section>

        {/* Four detail paragraphs with images*/}
        <section className="pt-2 pb-16">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {/* Block 1 - Route Information */}
              <div>
                <div className="px-0 sm:px-12 mt-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Progressive disclosure: scanning vs. depth</h4>
                        <p className="text-muted-foreground mb-4">
                          Routes contain two types of information: quick decisions (grade, length, quick drawer count) and context (full description, setting info). Showing everything at once would overwhelm and make scanning difficult on mobile.</p>
                        <p className="text-muted-foreground mb-4">
                          To address this, I used expandable route list items to surface essential information by default and reveal detailed descriptions on demand. When you select a route - either from the list or by tapping the topo image - the route expands to show the full description. The corresponding line on the topo highlights to confirm what you're looking at. The image itself is zoomable, so climbers can inspect the wall and route further.</p>
                        <p className="text-muted-foreground mb-4">
                          I also added contextual cues to speed up decision-making: icons for climbing style, first ascent information, and buttons to mark routes as projects or log ascents.</p>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="w-full max-w-[240px] overflow-hidden rounded-md md:max-w-[320px] lg:max-w-[380px] mx-auto">
                          <img
                            src={design01b}
                            alt="Design choice 01 - option B"
                            className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                            onClick={() => {
                              setSingleLightboxSrc(design01b);
                              setSingleLightboxAlt("Design choice 01 - option B");
                              setSingleLightboxOpen(true);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Block 2 - Difficulty Distribution Chart */}
              <div>
                <div className="px-0 sm:px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Why I ditched the precise grading system</h4>
                    <p className="text-muted-foreground mb-4">
                      In the survey, climbers said they wanted precise grade breakdowns. But when I tested the design, something else emerged: what they actually needed was a quick gut-check. <i>Does this area have routes I can climb?</i> Not exact numbers, but the overall distribution.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      So I ditched the precise breakdown for a simplified chart that shows the grades clearly. Some areas might be mostly easy routes, others mostly hard, or have a broad selection. Combined with approach time and climbing conditions (sun exposure, best time to visit), climbers can assess suitability at a glance.</p>
                    <p className="text-muted-foreground mb-4">
                      The final solution prioritises readability: clear visual hierarchy, icons for context, and a prominent "View Routes" button to move forward.</p>
                  </div>

                  <div className="w-full max-w-[240px] overflow-hidden rounded-lg flex items-center justify-center md:max-w-[320px] lg:max-w-[380px] mx-auto mt-6">
                    <img
                      src={design02b}
                      alt="Design choice 02 - option B"
                      className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(design02b);
                        setSingleLightboxAlt("Design choice 02 - option B");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 3 - Filter Option) */}
              <div>
                <div className="px-0 sm:px-12 mt-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">From checkboxes to sliders: reducing friction outdoors</h4>
                        <p className="text-muted-foreground mb-4">
                         Most climbing apps focus on filtering by style or grade. But in the research, climbers consistently mentioned two things: route length (to match their rope) and user ratings (to know if a route is worth the effort). These are essential for planning in real conditions.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          When I tested the initial design, checkboxes became an immediate problem. Standing at a wall with limited time, each tap added friction. Five different filter options with two states each (checked/unchecked) meant climbers were tapping endlessly just to narrow down routes.
                        </p>
                         <p className="text-muted-foreground mb-4">
                          So I switched to range sliders. Instead of multiple taps across checkboxes, climbers adjust a start and end point with two intuitive drags. Faster, more precise, and easier to refine your search.
                        </p>
                      </div>

                      <div className="w-full max-w-[240px] overflow-hidden rounded-lg flex items-center justify-center md:max-w-[320px] lg:max-w-[380px] mx-auto">
                        <img
                          src={design03}
                          alt="Filter"
                          className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                          onClick={() => {
                            setSingleLightboxSrc(design03);
                            setSingleLightboxAlt("Filter");
                            setSingleLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 4 */}
              <div>
                <div className="px-0 sm:px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Elevating search from hidden feature to core navigation</h4>
                    <p className="text-muted-foreground mb-4">
                     Early iterations buried search inside the page title as a small icon. But testing revealed the problem: climbers couldn't find it, and it created visual clutter without clarity. If climbers can't discover search, it doesn't matter how good it is.
                    </p>
                    <p className="text-muted-foreground mb-4">
                     So I moved the search to the main navigation to make it permanently visible and accessible. The redesigned search removes non-essential imagery distraction and prioritises scannability. Icons visually differentiate between routes and walls: a climbing icon for routes, a location pin for walls. Each result surfaces the most relevant details at a glance - grade, rating, and area for routes; route count for walls.
                    </p>
                  </div>

                  <div className="w-full max-w-[240px] overflow-hidden rounded-lg flex items-center justify-center md:max-w-[320px] lg:max-w-[380px] mx-auto mt-6">
                    <img
                      src={design04}
                      alt="Design choice 04 - full"
                      className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(design04);
                        setSingleLightboxAlt("Design choice 04 - full");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Three Section - Prototype & Testing */}
  <section id="prototype" className="py-12">
          <div className="container mx-auto px-6">
            <div>
              <h3 className="text-base text-muted-foreground mb-2">PROTOTYPE &amp; TESTING</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Small sample, big learnings: what testing revealed</h2>

              {/* Full-width paragraph */}
              <div className="w-full">
                <p className="text-muted-foreground mb-6 max-w-none">After finishing my design screens, I created a prototype and tested it with climbers. The goal: validate whether the design solved the core problem or if I'd missed something fundamental.</p>
              </div>

              {/* User Test Tasks card (full width) */}
              <div className="w-full">
                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-3">The tasks I gave them</h4>
                  <ul className="list-inside space-y-2 text-muted-foreground pl-4">
                    <li>• Navigate to Danao from Cebu using any means of transport</li>
                    <li>• Find the overview of the different crags (climbing areas)</li>
                    <li>• Find the “Pocket Wall” and a route called Dong Ba Dong. You want to find out how long is the route, and how many quick drawers (QD) are needed</li>
                    <li>• Filter routes by length and rating</li>
                    <li>• Find contact info for route setters</li>
                  </ul>
                </div>
              </div>

              {/* Two cards side-by-side: left = Findings, right = prototype iframe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="relative p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full pt-12 md:pt-14">
                  {/* top-right swipe buttons (larger) */}
                  {/* Static user test card (no carousel) */}

                  <div>
                    <h4 className="text-lg font-semibold mb-3">What emerged:</h4>
                    <div>{userTestStory}</div>
                  </div>

                </div>

                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex items-center justify-center h-full">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <iframe
                      title="Danao Topo Prototype Embed"
                      src="https://embed.figma.com/proto/yX9iLC2Gjfsh4tJJcXFb5z/Danao-Topo?page-id=3950%3A6788&node-id=4268-12308&viewport=-1881%2C489%2C0.21&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4268%3A12308&embed-host=share"
                      style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                      className="w-full h-full min-h-[420px] md:min-h-[480px]"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Next Steps - full width */}
              <div className="w-full mt-6">
                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-3">Next Steps</h4>
                  <ul className="list-inside space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><b>Improve visibility of “all routes” button</b> - Make it prominent in the crag view so climbers don't have to hunt for it</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><b>Larger touch targets</b> - Increase tap areas across filters and navigation to accommodate outdoor use</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><b>Improve the filter screen</b> - Transition from checkboxes to range sliders, reducing taps and friction</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><b>Refine navigation flow</b> - Add clearer feedback and a visible back button so climbers always know where they are</span>
                    </li>

                    <li className="flex items-start gap-2">
                      {/* Pending icon: clock (neutral grey) */}
                      <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><b>Validate changes through further user testing</b> - Confirm the refinements addressed the friction points</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Process Step Four Section */}
  <section id="deliverables" className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">DELIVERABLES</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">What this turned into</h2>
            </div>
          </div>

          <div className="w-full mt-6">
            <div className="px-6">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(0)} src={danaoInfo} alt="Info" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(1)} src={danaoMapOverview} alt="Map Overview" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(2)} src={danaoMapCrag} alt="Map Crag" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(3)} src={danaoCrag} alt="Crag" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(4)} src={danaoCragDetail} alt="Crag detail" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>

                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(5)} src={danaoCragAscent} alt="Crag Ascent" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(6)} src={danaoFilter} alt="Filter" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(7)} src={danaoSearch} alt="Search" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(8)} src={danaoAccount} alt="Account" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(9)} src={contact} alt="Contact" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </section>



  {/* Process Step Five Section */}
  <section id="conclusion" className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="w-full">
                <h3 className="text-base text-muted-foreground mb-2">CONCLUSIONS</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Knowing when your design solved the problem (even if you don't ship it)</h2>
            </div>

            {/* Conclusions card (same style as User Test Tasks) */}
            <div className="w-full mt-6">
              <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg">
                <p className="text-muted-foreground mb-6">
                  This was my first case study, and I learned the hard way that research needs to come before design. I started with sketches based on my climbing experience, then validated through user testing - which revealed assumptions I'd gotten wrong. Usability testing exposed friction points: small tap targets, unclear navigation, elements that lacked clarity. I iterated based on these findings, tested again, and the second round validated the changes. The real insight wasn't climbing-specific: when users have no WiFi, are outdoors, and need to decide quickly, clarity beats precision. Progressive disclosure, simplified grading, range sliders - all forced by constraints that clarified the design.
                </p>
                <p className="text-muted-foreground mb-4">
                  Around the same time, 27 Crag released a redesign solving the same problem. Rather than ship something similar, I studied their approach - their execution at scale taught me more than shipping would have. Looking back, I'd strengthen contrast on the star ratings (yellow on photos needs WCAG AA refinement), but the core insight - that constraints force clarity - applies far beyond climbing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA (card style) */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-b from-white/60 to-muted/5 border border-muted/30 rounded-xl p-8 md:p-10 flex flex-col items-center gap-6 text-center">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Get in touch</h3>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Want to discuss this work or collaborate? Let's talk!</h2>
                  <p className="text-muted-foreground mb-4"> I geek out over design process - reach out if you want to talk through it (or if you just want climbing recommendations)</p>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/alexandra-marley-252ba7172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white border border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-5 py-3 rounded-full font-semibold shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.795-1.75-1.774 0-.979.784-1.774 1.75-1.774s1.75.795 1.75 1.774c0 .979-.784 1.774-1.75 1.774zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.533 0-1.768 1.199-1.768 2.438v4.679h-3v-9h2.879v1.233h.041c.401-.761 1.379-1.563 2.84-1.563 3.04 0 3.603 2.001 3.603 4.6v4.73z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
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
                ToolSwap
              </h2>

              <Link
                to="/projects/toolswap"
                state={{ scrollTop: true }}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative block overflow-hidden rounded-xl shadow-lg"
              >
                <div className="w-full overflow-hidden">
                  <img
                    src={toolswapcover}
                    alt="ToolSwap Project - Community-driven platform for sharing tools"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 px-6">
                  <p className="text-lg md:text-xl text-white text-center max-w-2xl">
                    A community-driven platform for sharing and borrowing tools
                  </p>
                  <span className="text-xl font-semibold text-white">View Case Study →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

      

      </main>


      {/* Single-image lightbox modal (no icons) */}
      {/* Deliverables gallery modal (index-based) */}
      {lightboxOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
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

      {singleLightboxOpen && singleLightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeSingle(); }}
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={closeSingle}
            className="absolute top-6 right-6 text-white text-3xl leading-none z-10"
            aria-label="Close"
          >
            ×
          </button>

          <img
            src={singleLightboxSrc}
            alt={singleLightboxAlt}
            className="max-w-[90%] max-h-[90%] object-contain rounded"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DanaoTopo;