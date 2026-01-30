import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import danaoteaser from "@/assets/alexandramarley-uxdesign-danao-coverv1.webp";
import tsDesign01_a from "@/assets/alexandramarley-uxdesign-toolswap-design01a.webp";
import tsDesign01_b from "@/assets/alexandramarley-uxdesign-toolswap-design01b.webp";
import tsDesign02_a from "@/assets/alexandramarley-uxdesign-toolswap-home.webp";
import tsDesign02_b from "@/assets/alexandramarley-uxdesign-toolswap-listingcreated.webp";
import tsDesign04 from "@/assets/alexandramarley-uxdesign-toolswap-design04.webp";
import tsDesign03a from "@/assets/alexandramarley-uxdesign-toolswap-design03a.webp";
import tsDesign03b from "@/assets/alexandramarley-uxdesign-toolswap-design03b.webp";
import tsResearch01 from "@/assets/alexandramarley-ux-toolswap-research-01.png";
import tsUserJourney from "@/assets/alexandramarley-ux-ToolSwap-userjourney.webp";
import deliverables1 from "@/assets/alexandramarley-ToolSwap-Home.png";
import filterVideo from "@/assets/ScreenRecording_01-28-2026 16-35-42_1.mov";
import toolswapTitle from "@/assets/alexandramarley-uxdesign-toolswap-title.webp";
import benchmark01 from "@/assets/alexandramarley-uxdesign-toolswap-benchmark01.webp";
import benchmark02 from "@/assets/alexandramarley-uxdesign-toolswap-benchmark02.webp";
import tsAccount from "@/assets/alexandramarley-uxdesign-toolswap-account.webp";
import tsBookingRequests2 from "@/assets/alexandramarley-uxdesign-toolswap-booking-requests.webp";
import tsBookingState from "@/assets/alexandramarley-uxdesign-toolswap-booking-state.webp";
import tsCalendar from "@/assets/alexandramarley-uxdesign-toolswap-calendar.webp";
import tsChat from "@/assets/alexandramarley-uxdesign-toolswap-chat.webp";
import tsChats from "@/assets/alexandramarley-uxdesign-toolswap-chats.webp";
import tsConfirmListing from "@/assets/alexandramarley-uxdesign-toolswap-confirm-listing.webp";
import tsCreateListing2 from "@/assets/alexandramarley-uxdesign-toolswap-create-listing.webp";
import tsDetailedChatinquiry from "@/assets/alexandramarley-uxdesign-toolswap-detailed-chatinquiry.webp";
import tsDetailedView2 from "@/assets/alexandramarley-uxdesign-toolswap-detailed-view.webp";
import tsFilter2 from "@/assets/alexandramarley-uxdesign-toolswap-filter.webp";
import tsHome2 from "@/assets/alexandramarley-uxdesign-toolswap-home.webp";
import tsListview2 from "@/assets/alexandramarley-uxdesign-toolswap-listview.webp";
import tsRateLender from "@/assets/alexandramarley-uxdesign-toolswap-rate-lender.webp";
import tsRating2 from "@/assets/alexandramarley-uxdesign-toolswap-rating.webp";
import tsSearch2 from "@/assets/alexandramarley-uxdesign-toolswap-search.webp";

const ToolSwap = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [researchLightboxOpen, setResearchLightboxOpen] = useState(false);
  const [journeyLightboxOpen, setJourneyLightboxOpen] = useState(false);
  // Generic single-image lightbox used by a few design images
  const [singleLightboxOpen, setSingleLightboxOpen] = useState(false);
  const [singleLightboxSrc, setSingleLightboxSrc] = useState<string | null>(null);
  const [singleLightboxAlt, setSingleLightboxAlt] = useState<string | null>(null);
  // User test stories (swipeable card in Prototype section)
  const [userTestIndex, setUserTestIndex] = useState(0);
  const userTestStories: React.ReactNode[] = [
    (
      <div>
        <h5 className="text-sm font-semibold mb-2 text-muted-foreground">User Test 1 — Reserve & discovery</h5>
        <div className="text-muted-foreground mb-4">
          <ul className="list-inside space-y-2 pl-4">
            <li>• Struggled to identify CTA buttons on booking screens</li>
            <li>• Underlined CTAs were not recognised as primary actions</li>
            <li>• Booking flow itself was clear once the CTA was found</li>
            <li>• Attempted to use the keyboard during search (not fully interactive)</li>
            <li>• Looked for a FAQ and a way to report an issue or user</li>
          </ul>
        </div>
      </div>
    ),
    (
      <div>
        <h5 className="text-sm font-semibold mb-2 text-muted-foreground">User Test 2 — Listing & bookings</h5>
        <div className="text-muted-foreground mb-4">
          <ul className="list-inside space-y-2 pl-4">
            <li>• Completed the search and booking task without issues</li>
            <li>• Did not mind category suggestions above the search bar</li>
            <li>• Got confused when setting a price during listing creation</li>
            <li>• Price screen advanced automatically without confirmation</li>
            <li>• Expected to see a newly created listing reflected in the listings</li>
            <li>• Initially explored booking states (upcoming / completed / requests) out of curiosity rather than intent</li>
          </ul>
        </div>
      </div>
    ),
  ];
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
    tsCreateListing2,
    tsConfirmListing,
    tsHome2,
    tsSearch2,
    tsCalendar,
    tsDetailedView2,
    tsListview2,
    tsBookingState,
    tsAccount,
    tsBookingRequests2,
    tsChat,
    tsRating2,
  ];

  const overviewAlts = [
    'Home',
    'Search',
    'Calendar',
    'Detailed View',
    'List View',
    'Booking State',
    'Create Listing',
    'Confirm Listing',
    'Account',
    'Booking Requests',
    'Chat',
  ];

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
    tsHome2,
    tsSearch2,
    tsDetailedView2,
    tsListview2,
    tsFilter2,
    tsBookingState,
    tsAccount,
    tsCreateListing2,
    tsBookingRequests2,
    tsChats,
    tsChat,
    tsRating2,
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

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSingleLightboxOpen(false);
        return;
      }

      // Allow left/right arrow navigation when the single-image lightbox
      // is showing an image that belongs to the overview carousel.
      if (e.key === "ArrowRight") {
        if (!singleLightboxSrc) return;
        const idx = overviewImages.findIndex((src) => src === singleLightboxSrc);
        if (idx >= 0) {
          const nextIndex = (idx + 1) % overviewImages.length;
          setSingleLightboxSrc(overviewImages[nextIndex]);
          setSingleLightboxAlt(overviewAlts[nextIndex] || null);
        }
      }

      if (e.key === "ArrowLeft") {
        if (!singleLightboxSrc) return;
        const idx = overviewImages.findIndex((src) => src === singleLightboxSrc);
        if (idx >= 0) {
          const prevIndex = (idx - 1 + overviewImages.length) % overviewImages.length;
          setSingleLightboxSrc(overviewImages[prevIndex]);
          setSingleLightboxAlt(overviewAlts[prevIndex] || null);
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
                  <span className="text-green-700 font-semibold">ToolSwap:</span> A local tool-sharing marketplace that reduces waste and builds trust
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
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Problem vs Solution</h3>
                      <p className="text-muted-foreground max-w-2xl mb-6">
                        In dense cities like London, people often need tools only occasionally. Buying them is expensive, space-inefficient, and often unnecessary - yet borrowing informally lacks trust and reliability.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        ToolSwap is a mobile-first community marketplace that enables people to list, find, and borrow tools nearby — with trust built through verification, ratings, and simple booking flows.
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
                          <p className="text-sm text-muted-foreground">September - October 2025</p>
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
            overviewImages.map((img, idx) => {
              return (
                <div key={idx} className="carousel-item flex-none w-3/4 sm:w-1/2 md:w-[200px] lg:w-[260px] transform transition-transform duration-300 scale-90">
                  <div className="overflow-hidden rounded-lg">
                    <img src={img} alt={overviewAlts[idx]}
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => { setSingleLightboxSrc(img); setSingleLightboxAlt(overviewAlts[idx]); setSingleLightboxOpen(true); }}
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
        <div className="max-w-3xl text-left">
          <h3 className="text-base text-muted-foreground mb-2">The Process - Step One</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">RESEARCH &amp; ANALYSIS</h2>
        </div>

        <div className="w-full">
          <p className="text-muted-foreground mb-6 max-w-none">
           To understand whether there was a real need for a tool-sharing app, I used a mix of qualitative and quantitative research methods. I spoke with potential users, observed how people currently access tools, and ran a survey to explore borrowing habits and trust concerns.
          </p>
          <p className="text-muted-foreground mb-6 max-w-none">
          Key insight: Tool borrowing is already a frequent need - the main barrier isn’t demand, but confidence and convenience. These insights directly informed feature prioritisation, information architecture, and the decision to design ToolSwap as a map-first experience.
        </p></div>

        <div className="w-full mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">User Demand</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>60% interested in borrowing tools via an app</li>
                    <li>46% use tools monthly or weekly</li>
                    <li>Most used categories: Hand tools / DIY tools / Kitchen or garden tools</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Tool use is frequent - access matters more than ownership</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">Motivations</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Quick and convenient access</li>
                    <li>Trust through user verification</li>
                    <li>Reducing waste by sharing rarely used items</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Convenience drives adoption; sustainability reinforces engagement</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">Barriers and Trust Concerns</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Fear of damage to borrowed tools</li>
                    <li>Concerns around reliability and accountability</li>
                    <li>Uncertainty about who to trust</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Trust is the primary barrier to participation</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">Essential Trust-Building Features</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Verified user profiles</li>
                    <li>Ratings & reviews</li>
                    <li>Insurance or damage guarantees</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Trust features are core functionality, not add-ons</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg min-w-0 flex flex-col justify-start h-full">
              <div className="flex-1 w-full">
                <h4 className="text-lg font-semibold mb-2">Priority Features & Core Use Cases</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Search by tool type</li>
                    <li>Availability calendar</li>
                    <li>Map view of nearby tools</li>
                  </ul>

                  <p className="mt-3 text-muted-foreground mb-6"><span className="font-semibold">Insight:</span> Visibility and proximity are prioritised over social features</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Competitor Analysis</h3>
            <p className="text-muted-foreground mb-6 max-w-none">At the same time I benchmarked existing sharing and marketplace apps to compare similar products and their designs to identify best practices and areas for improvement. The findings informed which design approaches to build upon and where opportunities existed to improve clarity and usability on mobile.</p>
            <p className="text-muted-foreground mb-6 max-w-none">Key takeaway: Existing marketplaces either overwhelm users with information or hide critical decision-making details. ToolSwap intentionally prioritises clarity and speed over feature density, particularly in map-based discovery and booking flows.</p>
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
                  onClick={() => { setSingleLightboxSrc(benchmark01); setSingleLightboxAlt('Benchmark - comparative analysis 1'); setSingleLightboxOpen(true); }}
                />
                <button
                  aria-label="Open benchmark 1"
                  onClick={() => { setSingleLightboxSrc(benchmark01); setSingleLightboxAlt('Benchmark - comparative analysis 1'); setSingleLightboxOpen(true); }}
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
                  onClick={() => { setSingleLightboxSrc(benchmark02); setSingleLightboxAlt('Benchmark - comparative analysis 2'); setSingleLightboxOpen(true); }}
                />
                <button
                  aria-label="Open benchmark 2"
                  onClick={() => { setSingleLightboxSrc(benchmark02); setSingleLightboxAlt('Benchmark - comparative analysis 2'); setSingleLightboxOpen(true); }}
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
      </div>
    </section>

  {/* Process Step Two Section */}
  <section id="design" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Two</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">DESIGN</h2>
            </div>

            <div className="w-full">
              <p className="text-muted-foreground mb-6 max-w-none">
                Based on research insights, key priorities were identified: ease of discovery, quick listing flows, and trust-building features such as user ratings and verification. Secondary use cases included account management and booking history, supporting both borrowers and lenders while reinforcing a sense of community.
              </p>
            </div>

            {/* User journey paragraph on the left, flowchart image centered on the right (responsive) */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="max-w-3xl">
                  <p className="text-muted-foreground mb-8">
                It was clear that I had to come up with a design that has minimal clicks, and features the two main things the app should do: Reserve and list tools.
              </p>
              <p className="text-muted-foreground mb-6">
                    To structure the experience, I mapped out the user journeys around three primary goals:
                  </p>

                  <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                    <li>• Finding and borrowing a nearby tool</li>
                    <li>• Listing a tool for others to borrow</li>
                    <li>• Managing bookings and account information</li>
                  </ul>
                  <p className="text-muted-foreground mb-6">
                    These journeys informed the overall information architecture and ensured the interface remained focused on real user needs.
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
              <p className="text-muted-foreground mb-6 max-w-none">After defining the user journey I drew some sketches and created medium fidelity wireframe which helped me clarify the structure and flow. Next step was converting the wireframes into actual designs. Some of my challenges and reasonings are highlighted below.</p>
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
                        <h4 className="text-lg font-semibold mb-2">Navigation & Search</h4>
                        <p className="text-muted-foreground mb-4">
                          Search is the main entry point into ToolSwap, so it needed to stay visible without getting in the way. I placed the search bar at the bottom of the screen to support one-handed use, especially while exploring the map.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Category suggestions appear above the search field. Although this breaks a common pattern, early testing showed it helped users move faster without causing confusion.
                        </p>
                        <p className="text-muted-foreground mb-4">
                         The main menu remains accessible but is intentionally hidden during critical flows to avoid distraction.
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
                    <h4 className="text-lg font-semibold mb-2">Map-first exploration</h4>
                    <p className="text-muted-foreground mb-4">
                      Looking at similar marketplaces, most rely heavily on list views, with maps playing a secondary role. Research showed the opposite here - users cared most about what was close by.
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
                        <h4 className="text-lg font-semibold mb-2">Terminology Main Menu</h4>
                        <p className="text-muted-foreground mb-4">
                          Getting the main menu right took a few iterations. Early versions grouped actions by feature, which made it hard to tell whether certain items related to borrowing or lending.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          I tested two menu structures with users. The final version separates actions into Borrow and Lend, which aligned better with how users described their own mental model and reduced confusion around bookings.
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
                    <h4 className="text-lg font-semibold mb-2">List Item</h4>
                    <p className="text-muted-foreground mb-4">
                      The tool detail screen went through several rounds of refinement. The main challenge was fitting all relevant information onto one screen without overwhelming the user.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The final design uses a bottom sheet layout, keeping the map visible in the background to maintain location context. Key details appear first, followed by a scrollable description and reviews.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The booking CTA and total price are fixed at the bottom so they’re always easy to reach.
                    </p>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                    <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                      <img
                        src={tsDesign04}
                        alt="List item design - option B - full"
                        className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] lg:max-h-[380px] cursor-pointer"
                        onClick={() => {
                          setSingleLightboxSrc(tsDesign04);
                          setSingleLightboxAlt("List item design - option B - full");
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
                        <h4 className="text-lg font-semibold mb-2">Filter / Sort by</h4>
                        <p className="text-muted-foreground mb-4">
                          To support decision-making in list view, a filter and sort option was introduced. Early concepts embedded filters directly into the map view, but testing showed this reduced clarity and reachability.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          The final solution uses a bottom sheet pattern instead. This keeps controls reachable and the map clear, while prioritising the most common filters such as distance, price, and availability.
                        </p>
                      </div>

                      <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                        <div className="w-full max-w-[440px] lg:max-w-[560px] overflow-hidden rounded-lg relative">
                          <video
                            src={filterVideo}
                            muted
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
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Three</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">PROTOTYPE &amp; TESTING</h2>

              {/* Full-width paragraph */}
              <div className="w-full">
                <p className="text-muted-foreground mb-6 max-w-none">After finishing my design screens, I connected all the different frames &amp; created a prototype. The user testing validated the core discovery and booking flows, while revealing clarity issues around CTAs and pricing confirmation.</p>
              </div>

              {/* User Test Tasks card (full width) */}
              <div className="w-full">
                <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-3">User Test Tasks</h4>
                  <ul className="list-inside space-y-2 text-muted-foreground pl-4">
                    <li>• You live in Canary Wharf &amp; look for a power drill from September 13th 2025 - September 20th, 2025. Try to reserve the item closest to you, assuming you already have an account (steven.smith@gmail.com / password), and continue with the checkout flow.</li>
                    <li>• You live in Canary Wharf (15 Chichester Way, E14 3EG) and want to lend your jigsaw to other people. Try to create your own listing, the price is £4 per day and no description is needed (can be skipped).</li>
                    <li>• Try to find the booking requests for your bookings (the tools that you are lending to others)</li>
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
                      title="ToolSwap Prototype Embed"
                      src="https://embed.figma.com/proto/fjdwiyvqq5G6MqKcFuVD1L/Tool-Swap?page-id=5173%3A5102&node-id=5508-7349&viewport=1279%2C352%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5508%3A7349&embed-host=share"
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
                      <ul className="list-inside space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>CTA buttons styled only as underlined text were not recognized as actionable, causing confusion</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Users expect access to supporting resources such as FAQs and issue reporting</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>User confusion occurred when entering the price for a new listing (value auto-submitted without user confirmation)
</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>The search and reserve flow is generally intuitive and easy to follow</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Category suggestions above the search bar were not perceived as intrusive</span>
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
                        <span>Replace ambiguous underlined CTAs with clearer buttons</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Added FAQ / report an issue section to the menu</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Add clearer feedback in the create-listing flow (confirm price step)</span>
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
          </div>
        </section>


        

  {/* Process Step Four Section - Deliverables */}
  <section id="deliverables" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Four</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">DELIVERABLES</h2>
            </div>

            <div className="w-full mt-6">
              <div className="px-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(0)} src={tsHome2} alt="Home" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(1)} src={tsSearch2} alt="Search" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(2)} src={tsDetailedView2} alt="Detailed View" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(3)} src={tsListview2} alt="List View" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(4)} src={tsFilter2} alt="Filter" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(5)} src={tsBookingState} alt="Booking State" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>

                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(6)} src={tsAccount} alt="Account" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(7)} src={tsCreateListing2} alt="Create Listing" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(8)} src={tsBookingRequests2} alt="Booking Requests" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(9)} src={tsChats} alt="Chats" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(10)} src={tsChat} alt="Chat" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(11)} src={tsRating2} alt="Rating" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Process Step Five Section */}
  <section id="conclusion" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Five</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">CONCLUSIONS</h2>
            </div>

            {/* Conclusions card (same style as User Test Tasks) */}
            <div className="w-full mt-6">
              <div className="p-8 bg-muted/100 border border-muted/30 rounded-lg">
                <p className="text-muted-foreground mb-6">
                 This project reinforced the importance of clear information hierarchy, especially when designing for time-pressured, real-world use cases. User testing validated several unconventional design decisions, such as category suggestions above the search bar, while also highlighting areas where clearer affordances were needed.
                </p>
                <p className="text-muted-foreground mb-4">
                  While ToolSwap remains a conceptual project, it demonstrates my approach to designing data-rich, trust-sensitive marketplaces - balancing usability, clarity, and real-world constraints in mobile-first environments.
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
              if (e.target === e.currentTarget) setSingleLightboxOpen(false);
            }}
          >
            <button
              onClick={() => setSingleLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={singleLightboxSrc}
              alt={singleLightboxAlt || "Design - full"}
              className="max-w-[90%] max-h-[90%] object-contain rounded"
            />
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default ToolSwap;