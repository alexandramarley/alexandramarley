import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Image imports for Danao design choices and placeholders
import danaoHero from "@/assets/alexandramarley-ux-danao-research-01.webp";
import design01b from "@/assets/alexandramarley-uxdesign-danao-design-01d.webp";
import design02b from "@/assets/alexandramarley-uxdesign-danao-design-02b.webp";
import design03 from "@/assets/alexandramarley-uxdesign-danao-design-03b.webp";
import design04 from "@/assets/alexandramarley-uxdesign-danao-design-04b.webp";
import userJourney from "@/assets/alexandramarley-ux-danao-topo-user-journey.png";
import danaoBenchmark1 from "@/assets/alexandramarley-uxdesign-danao-benchmark1.webp";
import danaoBenchmark2 from "@/assets/alexandramarley-uxdesign-danao-benchmark2.webp";
import danaoBenchmark3 from "@/assets/alexandramarley-uxdesign-danao-benchmark3.webp";
import danaoBenchmark4 from "@/assets/alexandramarley-uxdesign-danao-benchmark4.webp";
import sketcheswireframes from "@/assets/alexandramarley-ux-danao-topo-sketcheswireframes.webp";
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
import toolswapteaser from "@/assets/alexandramarley-uxdesign-toolswap-coverv1.webp";
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
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.querySelector<HTMLElement>(".carousel-item");
    const step = firstChild ? firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0") : el.clientWidth;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  useEffect(() => {
    if (isCarouselPaused) return;
    // autoplay every 3s
    autoplayRef.current = window.setInterval(() => {
      scrollNext();
    }, 3000);
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
    const itemWidth = first.offsetWidth + gap;
    const setWidth = itemWidth * origCount;

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

    // set initial scroll to middle copy for seamless loop
    // use setTimeout to ensure layout has finished
    setTimeout(() => {
      el.scrollLeft = setWidth;
      updateCenter();
    }, 50);

    const onScroll = () => {
      updateCenter();
      // if user scrolls manually, pause autoplay briefly
      setIsCarouselPaused(true);
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      // handle seamless wrap: if we pass into first copy or beyond last copy, jump
      if (el.scrollLeft <= itemWidth * 0.5) {
        el.scrollLeft = el.scrollLeft + setWidth;
      } else if (el.scrollLeft >= setWidth * 2 - itemWidth * 0.5) {
        el.scrollLeft = el.scrollLeft - setWidth;
      }
      // resume after 2.5s
      window.setTimeout(() => setIsCarouselPaused(false), 2500);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateCenter);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateCenter);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location && (location.state as any)?.scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // user test stories (for swipeable card)
  const [userTestIndex, setUserTestIndex] = useState(0);
  const userTestStories: React.ReactNode[] = [
    (
      <div>
        <h5 className="text-sm font-semibold mb-2 text-muted-foreground">User Test 1 — Route discovery & filtering</h5>
        <div className="text-muted-foreground mb-4">
          <ul className="list-inside space-y-2 pl-4">
            <li>• Quickly found the climbing area and selected a route without assistance</li>
            <li>• Expected clearer visual highlighting of the selected route and attempted to interact directly with the topo image</li>
            <li>• Accessed the information section without issues</li>
            <li>• Found filter interactions difficult due to small tap targets and a high number of required taps</li>
            <li>• Noted smaller font size, but appreciated the overall simplicity and low number of steps</li>
          </ul>
        </div>
      </div>
    ),
    (
      <div>
        <h5 className="text-sm font-semibold mb-2 text-muted-foreground">User Test 2 — Navigation & information access</h5>
        <div className="text-muted-foreground mb-4">
          <ul className="list-inside space-y-2 pl-4">
            <li>• Initially attempted to interact with the map before accessing the information section</li>
            <li>• Successfully completed all core tasks once oriented</li>
            <li>• Found wall and route details easily and accessed all required information</li>
            <li>• Did not discover the “All routes” entry point and instead used the filter directly from the crag view</li>
            <li>• Expected clearer navigation feedback, including a visible back button</li>
          </ul>
        </div>
      </div>
    ),
  ];

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
                  <span className="text-green-700 font-semibold">Danao Topo:</span> Turning complex route data into a simple, interactive visualisation
                </h1>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:h-full items-start">
                    {/* Left: Title + longer text */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Identifying the core user problem</h3>
                      <p className="text-muted-foreground max-w-2xl mb-8">
                        Climbers in Danao relied soley on a spreadsheet to access route information - a format that’s hard to use outdoors and impossible to navigate quickly.
                      </p>
                      <p className="text-muted-foreground mb-8">
                        This app design transforms text-heavy content into a mobile-first climbing guide that prioritises clarity, offline access, and intuitive visual interaction.
                      </p>
                    </div>

                    {/* Right: Role / Team / Timeline stacked vertically; smaller visual weight so Overview remains priority */}
                    <div className="mt-6 md:mt-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-base font-semibold mb-1">Role</h4>
                          <p className="text-sm text-muted-foreground">Product Designer (End-to-End)</p>
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
          className="flex gap-4 overflow-x-auto scroll-smooth py-3 no-scrollbar"
        >
          {/* left fade (hidden on mobile) */}
          <div className="pointer-events-none hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent opacity-90 z-10" />
          {
            // render three copies for a seamless infinite scroll
            [...overviewImages, ...overviewImages, ...overviewImages].map((img, idx) => {
              const orig = idx % overviewImages.length;
              return (
                <div key={idx} className="carousel-item flex-none w-1/2 md:w-1/6 transform transition-transform duration-300 scale-90">
                  <div className="overflow-hidden rounded-lg">
                    <img src={img} alt={overviewAlts[orig]} className="w-full h-auto object-contain cursor-pointer" onClick={() => openSingle(img, overviewAlts[orig])} />
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

{/* Research & Analysis */}
  {/* Research summary: new titles + paragraph + six cards */}
  <section id="research" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl text-left">
          <h3 className="text-base text-muted-foreground mb-2">The Process - Step One</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">RESEARCH &amp; ANALYSIS</h2>
        </div>

        <div className="w-full">
          <p className="text-muted-foreground mb-12 max-w-none">
            I used a mix of qualitative and quantitive methods to understand our users and their behaviours and priorities when using climbing guide resources. Besides observing and talking to climbers I created a survey to gather market research. These insights shaped feature priorities and the overall information architecture. My findings:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Primary Use Case</h4>
              <p className="text-muted-foreground">90% of users prioritise access details, route grade, and route length. These form the essential content of the app.</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Overview and key route details</h4>
              <p className="text-muted-foreground">Users need to know where a route starts/ends, its length, difficulty, required gear, approach, and best climbing conditions.</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Offline access is essential</h4>
              <p className="text-muted-foreground">Poor reception in climbing areas makes downloadable offline content a key requirement.</p>
            </div>
          </div>
          <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Grading System</h4>
              <p className="text-muted-foreground">95% prefer the French Sport Grading system; other grading conversions can be added later.</p>
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
              <h4 className="text-lg font-semibold mb-2">Route Rating</h4>
              <p className="text-muted-foreground">Only 25% want to rate routes. Most users mainly view route info and track climbing projects.</p>
            </div>
          </div>
        </div>
        
        <div className="w-full mt-12">
          <div className="max-w-3xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Competitor Analysis</h3>
            <p className="text-muted-foreground mb-6">At the same time I did some benchmarking and compared other climbing apps and their design. I gathered:</p>
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
                <h3 className="text-base text-muted-foreground mb-2">The Process - Step Two</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">DESIGN</h2>
              </div>
              <div className="w-full">
                <p className="text-muted-foreground mb-4 max-w-none">
                  I started to work on the app structure and document the user journeys. My key considerations were the user goals and how to organise route information so it’s easy to access in the field.
                </p>
              </div>

            {/* User journey paragraph on the left, flowchart image centered on the right (responsive) */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="max-w-3xl">
                  <p className="text-muted-foreground mb-6">
                    I documented three main journeys:
                  </p>

                  <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                    <li>• User is researching climbing areas and wants general information about Danao</li>
                    <li>• User has decided to climb at Danao and wants access to detailed route information</li>
                    <li>• User can’t find the info they need and needs assistance or support</li>
                  </ul>
                  <p className="text-muted-foreground mb-6">
                    To help me visualise and plan these user journeys, I created a flow chart. This allows me to rationalise the steps within the journey, and plan the navigation within the app.
                  </p>
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
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Design Choices</h3>
          </div>
          <div className="w-full">
            <p className="text-muted-foreground mb-6 max-w-none">After coming up with some sketches to get a rough idea of what I want to do, I created wireframes on Figma. As a next step, I continued with the design. Some details and highlights:</p>
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
                        <h4 className="text-lg font-semibold mb-2">Route Information</h4>
                        <p className="text-muted-foreground mb-4">
                          Climbing routes contain a mix of short, critical data (grade, length) and long-form content (route descriptions). Displaying all information at once would increase cognitive load and make scanning difficult on mobile.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          To address this, I used expandable route list items that surface essential information by default and reveal detailed descriptions on demand. This allows users to quickly compare routes while still accessing depth when needed.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Selecting a route - either from the topo image or the route list - triggers a clear, consistent response:
                        </p>
                        <ul className="list-inside space-y-2 text-muted-foreground mb-4">
                          <li>• The route expands to show the full description </li>
                          <li>• The corresponding line in the topo is highlighted</li>
                          <li>• The route title is visually emphasised to confirm selection</li>
                        </ul>
                        <p className="text-muted-foreground mb-4">
                          To support faster decision-making, additional contextual cues were introduced, including icons indicating climbing style, first ascent information, and the ability to mark routes as projects or log ascents
                        </p>
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
                    <h4 className="text-lg font-semibold mb-2">Difficulty Distribution Chart</h4>
                    <p className="text-muted-foreground mb-4">
                      Climbers need to quickly understand whether a climbing area matches their ability. Rather than focusing on precise grade breakdowns, user feedback highlighted the importance of seeing how many easy or hard routes are available.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The area overview therefore combines a simplified grade distribution with key contextual information such as approach time and typical climbing conditions, allowing users to assess suitability at a glance. The final solution prioritises readability through clear visual hierarchy, scannable icons, and a prominent call to action.
                    </p>
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
                        <h4 className="text-lg font-semibold mb-2">Filter Option</h4>
                        <p className="text-muted-foreground mb-4">
                          Benchmarking revealed that most climbing apps offer limited filtering, typically focusing on climbing style or grade, while overlooking key criteria such as route length and rating. These dimensions are essential for planning climbs in real outdoor conditions, so I introduced additional filters to better support route selection.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          User testing showed that the initial checkbox-based solution required too many taps and increased interaction friction. In response, the redesigned filter replaces checkboxes with range sliders, reducing effort, improving accuracy, and enabling faster adjustments - particularly important when using the app outdoors.
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
                    <h4 className="text-lg font-semibold mb-2">Search Function</h4>
                    <p className="text-muted-foreground mb-4">
                     Early iterations explored combining the search field with the page title, but testing showed this introduced unnecessary visual noise and uncertainty around hierarchy. To maintain clarity and consistency, search was elevated to the main navigation, making it permanently accessible across the app.
                    </p>
                    <p className="text-muted-foreground mb-4">
                     The redesigned search removes non-essential imagery and prioritises scannability. Results are visually differentiated using icons, allowing users to quickly distinguish between routes and walls, while surfacing the most relevant information at a glance - grade, rating, and location for routes, and route count for walls.
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
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Three</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">PROTOTYPE &amp; TESTING</h2>

              {/* Full-width paragraph */}
              <div className="w-full">
                <p className="text-muted-foreground mb-6 max-w-none">After finishing my design screens, I connected all the different frames &amp; created a prototype. When it came to the user testing, I gave the candidates the following tasks:</p>
              </div>

              {/* User Test Tasks card (full width) */}
              <div className="w-full">
                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-3">User Test Tasks</h4>
                  <ul className="list-inside space-y-2 text-muted-foreground pl-4">
                    <li>• Find out how to get there from Cebu using any means of transport</li>
                    <li>• Find the overview of the different crags (climbing areas)</li>
                    <li>• Find the “Pocket Wall” and a route called Dong Ba Dong. You want to find out how long is the route, and how many quick drawers (QD) are needed</li>
                    <li>• Find the overview of all routes, and filter all routes more than 30 meters with a rating of 4 Stars or more</li>
                    <li>• Find a way how to contact the route setters</li>
                  </ul>
                </div>
              </div>

              {/* Two cards side-by-side: left = user test story (swipeable), right = prototype iframe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="relative p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full pt-12 md:pt-14">
                  {/* top-right swipe buttons (larger) */}
                  <div className="absolute top-4 right-4 flex items-center gap-3">
                    <button
                      aria-label="Previous user test"
                      onClick={() => setUserTestIndex((userTestIndex - 1 + userTestStories.length) % userTestStories.length)}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl md:text-2xl bg-muted hover:bg-muted/80 rounded-full"
                    >
                      ‹
                    </button>
                    <button
                      aria-label="Next user test"
                      onClick={() => setUserTestIndex((userTestIndex + 1) % userTestStories.length)}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl md:text-2xl bg-muted hover:bg-muted/80 rounded-full"
                    >
                      ›
                    </button>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Testing Insights</h4>
                    <div>{userTestStories[userTestIndex]}</div>
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

              {/* Findings & Next Steps cards under Prototype (same card design) */}
              <div className="w-full mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <h4 className="text-lg font-semibold mb-3">Findings</h4>
                      <p className="text-sm italic text-muted-foreground mb-3">Testing was conducted on an earlier version of the design. The insights below directly informed the subsequent redesign.</p>
                      <ul className="list-inside space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Some elements lack clarity or visibility (filter fields, all routes button)</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Tap targets can feel too small for some users</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Navigation could be improved with clearer pathways and a back button for easier movement</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Users appreciate the simplicity of the design and can complete key tasks</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0">
                    <h4 className="text-lg font-semibold mb-3">Next Steps</h4>
                    <ul className="list-inside space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Improve visibility of “all routes” button</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Improve the filter screen</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Refine navigation flow</span>
                      </li>

                      <li className="flex items-start gap-2">
                        {/* Pending icon: clock (neutral grey) */}
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Validate changes through further user testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Process Step Four Section */}
  <section id="deliverables" className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Four</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">DELIVERABLES</h2>
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
            <div className="max-w-3xl">
                <h3 className="text-base text-muted-foreground mb-2">The Process - Step Five</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">CONCLUSIONS</h2>
            </div>

            {/* Conclusions card (same style as User Test Tasks) */}
            <div className="w-full mt-6">
              <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg">
                <p className="text-muted-foreground mb-6">
                  Danao Topo was an end-to-end exploration of designing for information-dense content in challenging outdoor conditions. Particular focus was placed on map interaction, route discoverability, and reducing cognitive load while preserving depth where needed.
                </p>
                <p className="text-muted-foreground mb-4">
                  While the project remains a conceptual exercise, it was informed by real user input and realistic constraints. The process reinforced the importance clear information hierarchy, thoughtful interaction design - lessons directly applicable to complex, data-rich products beyond the climbing domain
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
                    src={toolswapteaser}
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