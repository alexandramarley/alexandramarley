import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Image imports for Danao design choices and placeholders
import danaoHero from "@/assets/alexandramarley-ux-danao-research-01.webp";
import design01a from "@/assets/alexandramarley-ux-danao-design-01-a.webp";
import design01b from "@/assets/alexandramarley-ux-danao-design-01-b.webp";
import design02a from "@/assets/alexandramarley-ux-danao-design-02-a.webp";
import design02b from "@/assets/alexandramarley-ux-danao-design-02-b.webp";
import design03 from "@/assets/alexandramarley-ux-danao-design-03.webp";
import design04 from "@/assets/alexandramarley-ux-danao-design-04.webp";
import userJourney from "@/assets/alexandramarley-ux-danao-topo-user-journey.png";
import danaoBenchmark1 from "@/assets/alexandramarley-ux-danao-benchmark-01.webp";
import danaoBenchmark2 from "@/assets/alexandramarley-ux-danao-benchmark-02.webp";
import danaoBenchmark3 from "@/assets/alexandramarley-ux-danao-benchmark-03.webp";
import sketcheswireframes from "@/assets/alexandramarley-ux-danao-topo-sketcheswireframes.webp";
import deliverable1 from '@/assets/alexandramarley-ux-danao-topo-home.webp';
import deliverable2 from '@/assets/alexandramarley-ux-danao-topo-info.webp';
import deliverable3 from '@/assets/alexandramarley-ux-danao-topo-map.webp';
import deliverable4 from '@/assets/alexandramarley-ux-danao-topo-map-detail.webp';
import deliverable5 from '@/assets/alexandramarley-ux-danao-topo-map-detail-dm.webp';
import deliverable6 from '@/assets/alexandramarley-ux-danao-topo-search.webp';
import deliverable7 from '@/assets/alexandramarley-ux-danao-topo-help.png';
import deliverable8 from '@/assets/alexandramarley-ux-danao-topo-crag.webp';
import deliverable9 from '@/assets/alexandramarley-ux-danao-topo-crag-detail.webp';
import deliverable10 from '@/assets/alexandramarley-ux-danao-topo-crag-dm.webp';
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
                        Climbers in Danao relied on a spreadsheet and traditional guidebooks to access route information - a format that’s hard to use outdoors and impossible to navigate quickly.
                      </p>
                      <p className="text-muted-foreground mb-8">
                        Danao Topo addresses this by transforming unstructured route data into a mobile-first climbing guide that prioritises clarity, offline access, and intuitive visual interaction.
                      </p>
                    </div>

                    {/* Right: Role / Team / Timeline stacked vertically; smaller visual weight so Overview remains priority */}
                    <div className="mt-6 md:mt-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-base font-semibold mb-1">Role</h4>
                          <p className="text-sm text-muted-foreground">Product Designer (full scope delivery, from research to final design)</p>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold mb-1">Team</h4>
                          <p className="text-sm text-muted-foreground">Independent project</p>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold mb-1">Timeline</h4>
                          <p className="text-sm text-muted-foreground">3 months (July - September 2025)</p>
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

    {/* Research summary: new titles + paragraph + six cards */}
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl text-left">
          <h3 className="text-base text-muted-foreground mb-2">The Process - Step One</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">RESEARCH &amp; ANALYSIS NEW</h2>
        </div>

        <div className="w-full">
          <p className="text-muted-foreground mb-8 max-w-none">
            I used a mix of qualitative and quantitive methods to understand our users and their behaviours and priorities when using climbing guide resources. Besides observing and talking to climbers I created a survey to gather market research. These insights shaped feature priorities and the overall information architecture. My findings:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Primary Use Case</h4>
              <p className="text-muted-foreground">90% of users prioritise access details, route grade, and route length. These form the essential content of the app.</p>
            </div>
          </div>

          <div className="p-6 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Overview and key route details</h4>
              <p className="text-muted-foreground">Users need quick access to where a route starts/ends, its length, difficulty, required gear and approach time.</p>
            </div>
          </div>

          <div className="p-6 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Offline access is essential</h4>
              <p className="text-muted-foreground">Poor reception in climbing areas makes downloadable offline content a key requirement.</p>
            </div>
          </div>

          <div className="p-6 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Grading System</h4>
              <p className="text-muted-foreground">95% prefer the French Sport Grading system; other grading conversions can be added later.</p>
            </div>
          </div>

          <div className="p-6 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Secondary Use Cases</h4>
              <p className="text-muted-foreground">Only 25% want to rate routes. Most users mainly view route info and track climbing projects.</p>
            </div>
          </div>

          <div className="p-6 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
            <div className="flex-1 w-full">
              <h4 className="text-lg font-semibold mb-2">Research methods</h4>
              <p className="text-muted-foreground">Interviews, surveys and field observations informed feature prioritisation and the map-first approach.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Research & Analysis */}
    {/* Process Section */}
    <section id="research" className="py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">
                The Process - Step One
              </h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                RESEARCH & ANALYSIS
              </h2>
              <p className="text-muted-foreground mb-8">
                In my research I used a mix of qualitative and quantitive methods to find out more about our users and their behaviour. Besides observing and talking to climbers I created a survey to gather market research, which would drive decision making in the design process. My findings:
              </p>
            </div>

      {/* Research Findings (adopt ToolSwap structure) */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="w-full">
              {/* Use the same card structure as ToolSwap - responsive grid that stacks on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Primary Use Case</h4>
                    <p className="text-muted-foreground">90% of users prioritise access details, route grade, and route length. These form the essential content of the app</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Overview and key route details</h4>
                    <p className="text-muted-foreground">Users need to know where a route starts/ends, its length, difficulty, required gear, approach time, and best climbing conditions</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Offline access is essential</h4>
                    <p className="text-muted-foreground">Poor reception in climbing areas makes downloadable offline content a key requirement</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Grading System</h4>
                    <p className="text-muted-foreground">95% prefer the French Sport Grading system; other grading conversions can be added later</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Secondary Use Cases</h4>
                    <p className="text-muted-foreground">Only 25% want to rate routes. Most users mainly view route info and track climbing project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              <p className="text-muted-foreground mb-6">
                At the same time I did some <span className="font-semibold">benchmarking</span> and compared other climbing apps and their design. I gathered:
              </p>

              {/* Benchmarks: align each finding with its image (grid of 3 columns on md+) */}
              <div className="w-full mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Item 1 */}
                  <div className="p-6 bg-muted/10 rounded-lg flex flex-col items-stretch">
                    <div className="flex-1">
                      <p className="text-muted-foreground"><span className="text-blue-500 font-semibold">Example blue</span> we can see that there is too much happening, and the colour choice makes it more chaotic</p>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="w-full max-w-[320px] overflow-hidden rounded-lg">
                        <img
                          src={danaoBenchmark1}
                          alt="Danao benchmark 01"
                          className="w-full h-auto object-contain cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onClick={() => openSingle(danaoBenchmark1, 'Danao benchmark 01')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark1, 'Danao benchmark 01'); }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-6 bg-muted/10 rounded-lg flex flex-col items-stretch">
                    <div className="flex-1">
                      <p className="text-muted-foreground"><span className="text-green-500 font-semibold">Example green</span> has no filter for route length / grade rating (some offer to filter the climbing style or the difficulty grade, but there should be more options), and the overlapping of the different routes creates a bad user experience</p>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="w-full max-w-[320px] overflow-hidden rounded-lg">
                        <img
                          src={danaoBenchmark2}
                          alt="Danao benchmark 02"
                          className="w-full h-auto object-contain cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onClick={() => openSingle(danaoBenchmark2, 'Danao benchmark 02')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark2, 'Danao benchmark 02'); }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-6 bg-muted/10 rounded-lg flex flex-col items-stretch">
                    <div className="flex-1">
                      <p className="text-muted-foreground"><span className="text-red-500 font-semibold">Example red</span> is only designed for desktop applications. Whilst they have an app for mobile users, no topos can be viewed and are referred to the website.</p>
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                      <div className="w-full max-w-[320px] overflow-hidden rounded-lg">
                        <img
                          src={danaoBenchmark3}
                          alt="Danao benchmark 03"
                          className="w-full h-auto object-contain cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onClick={() => openSingle(danaoBenchmark3, 'Danao benchmark 03')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(danaoBenchmark3, 'Danao benchmark 03'); }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

  

        {/* Process Step Two Section - Design */}
  <section id="design" className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            {/* Process Step Two - adopt ToolSwap structure: titles, paragraphs, and user journey image to the right */}
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Two</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">DESIGN</h2>
              <p className="text-muted-foreground mb-4">
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
              <h4 className="text-lg font-semibold mb-2">Design Choices</h4>
              <p className="text-muted-foreground mb-0">After coming up with some sketches to get a rough idea of what I want to do, I created wireframes on Figma. As a next step, I continued with the design. Some details and highlights:</p>
            </div>
            </div>
        </section>

        {/* Four detail paragraphs with images (reduce top spacing above block 1) */}
        <section className="pt-2 pb-16">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {/* Block 1 - Route Information */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Route Information</h4>
                    <p className="text-muted-foreground mb-4">
                      Within the application, there is a large amount of text to display. Routes have information with varying length. For example, a route description can often be a few paragraphs long, whereas the difficulty is 2-3 characters. It would be overwhelming to show all the information at once. As a solution, I chose to use expanding list items for routes, which show the short, vital information all the time, and when expanded, show the long detailed description.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      When a user taps a route line in the topo image, or its name in the textual list below:
                    </p>
                    <ul className="list-inside space-y-2 text-muted-foreground mb-4">
                      <li>• The list item will expand and show the route description <span className="text-green-500 font-semibold">(green)</span></li>
                      <li>• The route line in the topo will be highlighted <span className="text-red-500 font-semibold">(red)</span></li>
                      <li>• The route title information will become bold, showing the selection clearly <span className="text-blue-500 font-semibold">(blue)</span></li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      Below you can see the different versions up to the final design (different choice of font thickness, collapsing route overview).
                    </p>

                    <div className="w-full overflow-hidden rounded-lg mt-6">
                      <img
                        src={design01a}
                        alt="Design choice 01 - option A"
                        className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                        onClick={() => {
                          setSingleLightboxSrc(design01a);
                          setSingleLightboxAlt("Design choice 01 - option A");
                          setSingleLightboxOpen(true);
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[390px] lg:max-w-[465px] mx-auto">
                    <img
                      src={design01b}
                      alt="Design choice 01 - option B"
                      className="w-full h-auto object-contain md:max-h-[390px] lg:max-h-[465px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(design01b);
                        setSingleLightboxAlt("Design choice 01 - option B");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>


              {/* Block 2 - Difficulty Distribution Chart */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Difficulty Distribution Chart</h4>
                    <p className="text-muted-foreground mb-4">
                      I wanted to include a cool colour chart to show how many different routes and grades are available in a given climbing area. However, in the pie chart the grades were unreadable, too small. As next option I tried out a bar chart, plus I shortened the text and added icons with a small description instead. If I added the different grades next to the bar, it was unreadable, therefore I thought of scraping the chart altogether and use a text description instead.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      After showing the chart to fellow climbers I gathered the feedback that they were missing the information on how many easy or difficult routes are at this climbing area. So it is important to see the variations of routes, but also the numbers of routes (someone who only climbs very easy routes will not want to go to a climbing area that features one easy climb). Therefore I added a chart but with a number icon next to it, to know how many routes are available altogether <span className="text-red-500 font-semibold">(red)</span>.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Below you can see the process from the start to the final design.
                    </p>

                    <div className="w-full overflow-hidden rounded-lg mt-6">
                      <img
                        src={design02a}
                        alt="Design choice 02 - option A"
                        className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                        onClick={() => {
                          setSingleLightboxSrc(design02a);
                          setSingleLightboxAlt("Design choice 02 - option A");
                          setSingleLightboxOpen(true);
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[390px] lg:max-w-[465px] mx-auto">
                    <img
                      src={design02b}
                      alt="Design choice 02 - option B"
                      className="w-full h-auto object-contain md:max-h-[390px] lg:max-h-[465px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(design02b);
                        setSingleLightboxAlt("Design choice 02 - option B");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 3 - Filter Option */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Filter Option</h4>
                    <p className="text-muted-foreground mb-4">
                      When I created a mood board and cross checked other climbing apps, one thing they were all missing, is a filter option with more choices. There were filters to differentiate the climbing style, or the difficulty grade, but no filter for the route length and rating. So I added one to my design that seemed useful.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      When conducting user tests I realised the user experience is quite bad as a high number of taps is required, compared to a slider. This is my main priority in the future re-design, I have a new version planned (see wireframe example) and will pursue a new design there.
                    </p>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[260px] lg:max-w-[310px] mx-auto">
                    <img
                      src={design03}
                      alt="Design choice 03"
                      className="w-full h-auto object-contain md:max-h-[260px] lg:max-h-[310px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(design03);
                        setSingleLightboxAlt("Design choice 03");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 4 */}
              <div>
                <div className="max-w-3xl px-12">
                  <h4 className="text-lg font-semibold mb-2">Search Function</h4>
                  <p className="text-muted-foreground mb-4">
                    The search function caused some friction initially as I wasn’t sure how I should combine the search field with the title of the page. I feared removing the “all routes” title might cause confusion and users would not know what page they’re on.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    In the end I continued using the main page navigation that is used throughout the other pages to maintain consistency, and used a common design pattern for search fields underneath.
                  </p>
                  <p className="text-muted-foreground">
                    Below you can see different versions in the design process of the search function.
                  </p>
                </div>
                <div className="w-full px-12 mt-6">
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={design04}
                      alt="Design choice 04 - full"
                      className="w-full h-auto object-cover cursor-pointer"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Text content */}
              <div className="max-w-3xl md:pr-12">
                <h3 className="text-base text-muted-foreground mb-2">The Process - Step Three</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">PROTOTYPE &amp; TESTING</h2>
                <p className="text-muted-foreground mb-4">
                  After finishing my design screens, I connected all the different frames &amp; created a prototype. When it came to the user testing, I gave the candidates the following tasks:
                </p>
                <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                  <li>• Find out how to get there from Cebu using any means of transport</li>
                  <li>• Find the overview of the different crags (climbing areas)</li>
                  <li>• Find the “Pocket Wall” and a route called Dong Ba Dong. You want to find out how long is the route, and how many quick drawers (QD) are needed</li>
                  <li>• Find the overview of all routes, and filter all routes more than 30 meters with a rating of 4 Stars or more</li>
                  <li>• Find a way how to contact the route setters</li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold">User 1</span> found the climbing area + route very easy, although they mentioned they wish the route would have been highlighted more clearer. They did try to interact with the map itself, which is with the prototype not possible. The info section was accessed without any problems, when using the filter function the user mentioned the fields are quite small to interact with and that a lot of taps are involved. In general they found the font size on the smaller side, but appreciated the simplicity of the design &amp; how few clicks are involved.
                </p>

                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold">User 2</span> clicked right away on the map first, instead of pressing on the info section. After reading the instructions again, they found the info section without any problem. The second task they mastered without any problems. They also found the specific wall &amp; clicked on the mentioned route &amp; found all necessary information. Interestingly, the user couldn’t find “all routes”, and filtered the routes through the filter icon on the crag wall, instead of going through - info - all routes - filter. It’s possible that they didn’t read the whole info section, but in any case I will look into highlighting the “all routes” button better. The help section was very easy to find, they didn’t mention anything regarding the font size. In general the user mentioned missing a back button.
                </p>

                {/* Findings & Next Steps User Testing: moved below to be full-width (ToolSwap style) */}
              </div>

              {/* Right: Embedded prototype (responsive) */}
              <div className="mt-6 md:mt-0">
                {/* Portrait aspect and constrained width on md+ so phone is larger but not too big.
                    Remove iframe border and use a gentle scale (middle ground between previous sizes).
                    On small screens this stacks below the text as before. */}
                <div className="aspect-[9/16] md:aspect-[9/16] overflow-hidden rounded-lg shadow-sm bg-white md:max-w-[420px] lg:max-w-[480px] mx-auto md:mx-0">
                  <iframe
                    title="Danao Topo Prototype"
                    src="https://embed.figma.com/proto/yX9iLC2Gjfsh4tJJcXFb5z/Danao-Topo?page-id=1%3A3&team_id=1233734426677711168&node-id=3-35&starting-point-node-id=3%3A35&embed-host=share"
                    // subtle scale to make the phone mock slightly bigger than default but smaller than before
                    style={{ border: 'none', transform: 'scale(1.03)', transformOrigin: 'center' }}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Findings & Next Steps - full width, centered (ToolSwap style) */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch justify-between gap-6 w-full">
                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Findings</h4>
                    <ul className="list-inside space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Some elements lack clarity or visibility (filter fields, all routes button)</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Tap targets can feel too small for some users</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Navigation could be improved with clearer pathways and a back button for easier movement</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Users appreciate the simplicity of the design and can complete key tasks</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Next Steps</h4>
                    <ul className="list-inside space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Improve visibility of “all routes” button</span>
                      </li>

                      <li className="flex items-start gap-2">
                        {/* Pending icon: clock (neutral grey) */}
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Improve the filter screen (see wireframe example)</span>
                      </li>

                      <li className="flex items-start gap-2">
                        {/* Pending icon: clock (neutral grey) */}
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Thinking of adding a back navigation button</span>
                      </li>

                      <li className="flex items-start gap-2">
                        {/* Pending icon: clock (neutral grey) */}
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Obtain more user tests to collect further data</span>
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
              <p className="text-muted-foreground mb-6">
                I’m pleased with the final design, especially the map page. Finding a suitable base map was challenging — Google’s satellite imagery lacked clarity — so I used OpenStreetMap and created a custom dark version through AI. The crag info section also presented challenges, but I’m happy with the outcome.
              </p>
              <p className="text-muted-foreground mb-4">
                Next, I plan to refine the all routes and filter sections and conduct more user testing to guide future improvements. I’m currently in contact with the route developer of Danao to potentially bring this project to life. I also recognise that some design elements may be complex to implement, and I aim to streamline them for easier development and a smoother user experience.
              </p>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
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