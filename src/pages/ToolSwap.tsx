import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import danaoteaser from "@/assets/alexandramarley-ux-danao-teaser.webp";
import tsDesign01_3 from "@/assets/alexandramarley-ux-toolswap-design-01.webp";
import tsDesign02 from "@/assets/alexandramarley-ux-toolswap-design-02.webp";
import tsDesign03 from "@/assets/alexandramarley-ux-toolswap-design-03.png";
import tsDesign04a from "@/assets/alexandramarley-ux-toolswap-design-04-1.webp";
import tsDesign04b from "@/assets/alexandramarley-ux-toolswap-design-04-2.webp";
import tsDesign05 from "@/assets/alexandramarley-ux-toolswap-design-05.webp";
import tsResearch01 from "@/assets/alexandramarley-ux-toolswap-research-01.png";
import tsUserJourney from "@/assets/alexandramarley-ux-toolswap-userjourney.png";
import tsSketchesWireframes from "@/assets/alexandramarley-ux-toolswap-sketches-wirefreames.webp";
import deliverables6 from "@/assets/ToolSwap-Create-Account.png";
import deliverables11 from "@/assets/ToolSwap-Create-Booking-Requests.png";
import deliverables8 from "@/assets/ToolSwap-Create-Listing.png";
import deliverables4 from "@/assets/ToolSwap-Detailed-View.png";
import deliverables5 from "@/assets/ToolSwap-Filter.png";
import deliverables1 from "@/assets/ToolSwap-Home.png";
import deliverables3 from "@/assets/ToolSwap-ListView.png";
import deliverables7 from "@/assets/ToolSwap-Menu.png";
import deliverables12 from "@/assets/ToolSwap-Messages-Chat.png";
import deliverables9 from "@/assets/ToolSwap-Review-Listing.png";
import deliverables10 from "@/assets/ToolSwap-Reviews.png";
import deliverables2 from "@/assets/ToolSwap-Search.png";
import benchmark from "@/assets/alexandramarley-ux-toolswap-benchmark-01.webp";

const ToolSwap = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [researchLightboxOpen, setResearchLightboxOpen] = useState(false);
  const [journeyLightboxOpen, setJourneyLightboxOpen] = useState(false);
  const [sketchLightboxOpen, setSketchLightboxOpen] = useState(false);
  // Generic single-image lightbox used by a few design images
  const [singleLightboxOpen, setSingleLightboxOpen] = useState(false);
  const [singleLightboxSrc, setSingleLightboxSrc] = useState<string | null>(null);
  const [singleLightboxAlt, setSingleLightboxAlt] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // If navigated here with state.scrollTop, ensure the page starts at the top.
    const navState = location.state as { scrollTop?: boolean } | null;
    if (navState?.scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const deliverablesImages = [
    deliverables1,
    deliverables2,
    deliverables3,
    deliverables4,
    deliverables5,
    deliverables6,
    deliverables7,
    deliverables8,
    deliverables9,
    deliverables10,
    deliverables11,
    deliverables12,
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

  // Key handling for sketches/wireframes combined image lightbox
  useEffect(() => {
    if (!sketchLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSketchLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sketchLightboxOpen]);

  // Key handling for the generic single-image lightbox
  useEffect(() => {
    if (!singleLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSingleLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [singleLightboxOpen]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              ToolSwap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              A community-driven platform for sharing and borrowing tools
            </p>
            <div className="flex flex-wrap gap-3 mb-0">
              <div className="rounded-full bg-muted px-4 py-2 text-sm">UI/UX Design</div>
              <div className="rounded-full bg-muted px-4 py-2 text-sm">Community Platform</div>
              <div className="rounded-full bg-muted px-4 py-2 text-sm">Mobile App</div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="pt-6 pb-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  Project Overview
                </h2>
                <p className="text-muted-foreground">
                  As the cost of living in London increases each year, and everyone tries to be environmentally friendly, it's understandable that not everyone has a pressure washer, or a drill. Especially because you only need it every once in a while! We are also in a time where DIY-makeovers are hyped up & it's very tempting to do one yourself. What if there would be an app where you could borrow available tools in your area, and in return you offer your fancy Artisan Stand Mixer that you only use every six months?
                </p>
                <p className="text-muted-foreground">
                  I have created from scratch a design for a mobile application where you can reserve and list any home tools through different categories. My goal:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>create a mobile app that is easy and quick to use</li>
                  <li>create a marketplace where tools can be lent/borrowed for a short amount of time</li>
                  <li>reduce people's spending</li>
                  <li>to be more eco-responsible</li>
                </ul>
                <p className="text-muted-foreground">
                  This project took place in September/October 2025, I was responsible for the full project from research to the final design.
                </p>
              </div>

              {/* Centered image next to Project Overview */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[220px] overflow-hidden rounded-lg">
                  <img src={deliverables1} alt="ToolSwap Home" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section (mirrored from DanaoTopo structure) */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step One</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">RESEARCH &amp; ANALYSIS</h2>
              <p className="text-muted-foreground mb-8">
                To find out more about our users and if there’s a need for such a tool I relied mainly on quantitative and qualitative methods. I created a survey to find out what tools people would be interested to borrow, and if they would pay for it. I asked them a bunch of questions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>do they own/rent their home</li>
                <li>do they have access to some outdoor space</li>
                <li>how often do they borrow tools from friends/family or do they already own most tools</li>
                <li>if there would be an app where they can borrow tools, would they use it</li>
                <li>what would be their worries/fears when using the app</li>
                <li>what would serve as a motivation or assurance to use the app</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Based on research insights, key priorities were identified: ease of discovery, quick listing flows, and trust-building features such as user ratings and verification.
              </p>
            </div>

            {/* Full-width Process Image */}
            <div className="mt-8">
              <div className="flex justify-center">
                <div className="w-full max-w-4xl overflow-hidden rounded-lg">
                  <img
                    src={tsResearch01}
                    alt="Process step visualization"
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => setResearchLightboxOpen(true)}
                  />
                </div>
              </div>
            </div>

            <div className="max-w-3xl mt-12">
              <p className="text-muted-foreground mb-6">
                From the survey I learnt that 60% would be somewhat interested in using this app, 46% users use tools monthly or even on a weekly base. Hand tools like hammer, screw drivers etc are used most often (80%), with DIY tools taking the second place and kitchen tools/garden tools third.
              </p>

              <p className="text-muted-foreground mb-6">
                Whilst most users said they are worried about damage to the tools that they would lend, an insurance/guarantee for damages & verified/rated users would make them more comfortable to use the app. Convenience, saving money and supporting sustainability are the main three motivators for using the app.
              </p>

              <p className="text-muted-foreground mb-6">
                Search by tool type / map view of nearby tools & availability calendar were the three most named features that the users would like to have, so I focused the next design iterations on these areas.
              </p>

              <h4 className="list-disc list-inside space-y-2 text-muted-foreground mb-6">The main use cases for the app are:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>search & find tools to borrow near your location</li>
                <li>a user rating system designed to enhance transparency, reliability, and trust.</li>
              </ul>

              <h4 className="list-disc list-inside space-y-2 text-muted-foreground mb-6">Secondary</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>account overview with previous borrowed/listed items</li>
                <li>to strengthen the community & supporting the environment</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">Benchmark</h4>
              <p className="text-muted-foreground mb-6">
                As part of my research I compared similar products and their designs to identify best practices and areas for improvement.
                </p>
              <p className="text-muted-foreground mb-6">
                <span className="text-blue-500 font-semibold">Example Blue </span> shows an app that feels crowded and overwhelming due to the excessive information and colour overload presented on the home screen. In contrast, <span className="text-red-500 font-semibold">Example Red</span> offers a clean and intuitive interface, prioritising essential features like search and categories, which enhances the user experience.
              </p>
              {/* Benchmark image */}
              <div className="flex justify-center mt-6">
                <div className="w-full overflow-hidden rounded-lg">
                  <img src={benchmark} alt="Benchmark - comparative analysis" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Two Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Two</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">DESIGN</h2>
              <p className="text-muted-foreground mb-6">
                It was clear that I had to come up with a design that has minimal clicks, and features the two main things the app should do: Reserve and list tools.
              </p>
              <p className="text-muted-foreground mb-6">
                I started to work on the app structure and document the user journey. My key considerations were the user goals and to document the structure. There are three different journeys: to search &amp; borrow someone&apos;s tool, to list your own tools, and accessing your account.
              </p>
              <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                <li>• Quick listing flow for lenders</li>
                <li>• Fast booking for borrowers</li>
                <li>• Clear tool condition and pickup/delivery instructions</li>
              </ul>
            </div>

            {/* Flowchart image */}
            <div className="mt-8">
              <div className="flex justify-center">
                <div className="w-full max-w-3xl overflow-hidden rounded-lg">
                  <img
                    src={tsUserJourney}
                    alt="User journey flowchart"
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => setJourneyLightboxOpen(true)}
                  />
                </div>
              </div>
            </div>

            {/* Sketches & Wireframes - single combined image under paragraph */}
            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Sketches & Wireframes</h4>
              <p className="text-muted-foreground mb-6">After defining the user journey I drew some sketches & created medium fidelity wireframes before moving onto the actual design.</p>
            </div>

            {/* Sketches & Wireframes (constrained to text width) */}
            <div className="mt-4">
              <div className="max-w-3xl mx-auto">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={tsSketchesWireframes}
                    alt="Sketches and wireframes combined"
                    className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => setSketchLightboxOpen(true)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSketchLightboxOpen(true); }}
                  />
                </div>
              </div>
            </div>

            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Design Choices</h4>
              <p className="text-muted-foreground mb-0">Next step was converting the wireframes into actual designs. Some of my challenges & reasonings are highlighted below.</p>
            </div>
          </div>
        </section>

  {/* Detail blocks with images (mirroring DanaoTopo) */}
  <section className="pt-2 pb-16">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {/* Block 1 - Navigation & Search */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Navigation & Search</h4>
                     <p className="text-muted-foreground mb-4">
                    When experimenting with different navigation types (Hamburger Menu, Floating Buttons, Bottom Navigation) I realised that using a hamburger menu with a floating search bar would be the best solution. <span className="text-red-500 font-semibold">The search bar</span> is one of the main CTA’s in the whole app, therefore I wanted it to be as accessible as possible. I did some benchmarking with other map-prioritised applications, and even though there is a clear design pattern, I decided to have the search bar at the bottom, as it is much easier to reach with your thumb (compared to the top).
                  </p>
                  <p className="text-muted-foreground mb-4">
                    This decision meant that I had to change a lot of other design patterns, which might look a bit strange in the beginning (e.g. <span className="text-blue-500 font-semibold">category suggestions</span> on top of the search bar, instead underneath).
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The menu otherwise can be accessed through a traditional hamburger menu. The only time it’s not used, is when a critical user flow could be interrupted (e.g. creating a listing).
                  </p>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                    <img
                      src={tsDesign01_3}
                      alt="Navigation & Search - full"
                      className="w-full h-auto object-contain md:max-h-[440px] lg:max-h-[560px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(tsDesign01_3);
                        setSingleLightboxAlt("Navigation & Search - full");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Block 2 - Map */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Map</h4>
                    <p className="text-muted-foreground mb-4">
                      When looking at other marketplaces or selling applications, most are based on list-view designs, and the map-view is only of secondary importance. As my research showed users find the map very useful, therefore I decided to make the design map-oriented, but still offer the option of showing the items in a list view.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The map can be seen throughout the application in the background as a visual theme.
                    </p>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[260px] lg:max-w-[310px] mx-auto">
                    <img
                      src={tsDesign02}
                      alt="Map design - full"
                      className="w-full h-auto object-contain md:max-h-[260px] lg:max-h-[310px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(tsDesign02);
                        setSingleLightboxAlt("Map design - full");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 3 - Terminology Main Menu*/}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Terminology Main Menu</h4>
                      <p className="text-muted-foreground mb-4">
                    The terminology for the main menu was quite tricky. In the beginning I used the categories Reserve Tool - Create Listing - My Account - Settings. The first two categories are quite clear, My Account would have been responsible for your own bookings, but also the bookings you receive for the items you lend.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    I found it very difficult to describe the differentiations &amp; even got confused myself when designing the screens, therefore I had to come up with a different menu. I came up with two options, asked users what makes more sense to them, and everyone voted for <span className="text-green-500 font-semibold">option 2</span> vs <span className="text-red-500 font-semibold">option 1</span>.
                  </p>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[440px] lg:max-w-[560px] mx-auto">
                    <img
                      src={tsDesign03}
                      alt="Terminology / Menu choices - full"
                      className="w-full h-auto object-contain md:max-h-[440px] lg:max-h-[560px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(tsDesign03);
                        setSingleLightboxAlt("Terminology / Menu choices - full");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 4 - List Item */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">List Item</h4>
                    <p className="text-muted-foreground mb-4">
                      The list item screen went through various changes as I struggled to combine all the important information on one screen nicely. In the end I chose to use a bottom sheet to have the map in the background, which helps the user to identify where the tool is located. In the screenshot on the right you can see how the user can find the most important information, highlighted in <span className="text-red-500 font-semibold">Red</span>.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The <span className="text-red-500 font-semibold">Red</span> and <span className="text-blue-500 font-semibold">Blue</span> highlighted section is scrollable, after the description underneath you can find the reviews for this specific items from other users, plus what else the lender borrows.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Highlighted in <span className="text-green-500 font-semibold">Green</span>  is the CTA to book the item + the overall price you’d pay. These items are fixed, as they should be all-time accessible.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Below you can see the previous versions that lend to the end version.
                    </p>

                    <div className="w-full overflow-hidden rounded-lg mt-6">
                      <img
                        src={tsDesign04a}
                        alt="List item design - option A - full"
                        className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                        onClick={() => {
                          setSingleLightboxSrc(tsDesign04a);
                          setSingleLightboxAlt("List item design - option A - full");
                          setSingleLightboxOpen(true);
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[260px] lg:max-w-[310px] mx-auto">
                    <img
                      src={tsDesign04b}
                      alt="List item design - option B - full"
                      className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(tsDesign04b);
                        setSingleLightboxAlt("List item design - option B - full");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Block 5 - Filter / Sort by */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Filter / Sort by</h4>
                    <p className="text-muted-foreground mb-4">
                      For the list view of the tools I wanted to include a filter/sort by option. This should make it easier for users to find the tool they want (short travel distance, find the cheapest option, etc.)
                    </p>
                    <p className="text-muted-foreground mb-4">
                      I first tried to combine it within the map view (when showing the results), but after further research I removed that and opted for a bottom sheet. This seemed more user friendly, better to reach with your thumb, and the function is clearer. After doing some bench marking with other marketplace apps I wanted to include filter chips at the top of the screen to highlight the most used features. However, overall this would have overcomplicated the design and made it less clear to navigate. Below you can see the different versions to the final result.
                    </p>

                    <div className="w-full overflow-hidden rounded-lg mt-6">
                      <img
                        src={tsDesign05}
                        alt="Filter & Sort design - full"
                        className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                        onClick={() => {
                          setSingleLightboxSrc(tsDesign05);
                          setSingleLightboxAlt("Filter & Sort design - full");
                          setSingleLightboxOpen(true);
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center md:max-w-[260px] lg:max-w-[310px] mx-auto">
                    <img
                      src={deliverables5}
                      alt="ToolSwap Filter"
                      className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                      onClick={() => {
                        setSingleLightboxSrc(deliverables5);
                        setSingleLightboxAlt("ToolSwap Filter");
                        setSingleLightboxOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Three Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Text content */}
              <div className="max-w-3xl md:pr-12">
                <h3 className="text-base text-muted-foreground mb-2">The Process - Step Three</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">PROTOTYPE &amp; TESTING</h2>
                <p className="text-muted-foreground mb-4">
                  The tasks for my user tests were as followed:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>
                    You live in Canary Wharf &amp; look for a power drill from September 13th 2025 - September 20th, 2025. Try to reserve the item closest to you, assuming you already have an account (steven.smith@gmail.com / Password), and continue with the checkout flow.
                  </li>
                  <li>
                    You live in Canary Wharf (15 Chichester Way, E14 3EG) and want to lend your Jigsaw to other people. Try to create your own listing, the price is £4 per day and no description is needed (this can be skipped).
                  </li>
                  <li>
                    Try to find the Booking Requests for your bookings (the tools that you are lending to others)
                  </li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  User 1 struggled with the CTA buttons on the booking screens. Currently they are only underlined, so I’ll change this into clearer CTA’s. The Reserve-a-tool flow seemed to be quite clear as the user did not face any challenges with the search flow, although they tried to use the keyboard which is not fully interactive. They were also looking for a FAQ page and wanted to know how they could report an issue or a user. Since then I’ve added those pages to the main menu, accessible through the category Settings.
                </p>

                <p className="text-muted-foreground mb-4">
                  User 2 solved the first task without any problems, and didn’t mind the category suggestions above the search bar, which I found very positive. When the user created a listing, they got confused when they had to insert the price, as the screen didn’t wait for the user to confirm the value, and instead changed right away to the next screen. So I will add her a step in between, so that the user can confirm the price through a “Continue” CTA. With the third task, the user got a bit confused as he expected to see a jigsaw listing in the listings (as he just created in an earlier task). Also instead of pressing on Bookings - Requests, the user first clicked on the different states (Upcoming / Completed / Requests) but after clarification they mentioned that they wanted to see what there was.
                </p>

                <p className="text-muted-foreground mb-4">
                  Based on that feedback I applied the following changes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Added FAQ / Report an Issue section to the Menu</li>
                  <li>Changed the CTA’s of the Booking section page</li>
                  <li>Added an additional step in the “Create Listing” to confirm price (instead of stepping ahead)</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  I want to conduct more user tests to collect additional feedback to improve the design further.
                </p>
              </div>

              {/* Right: Embedded prototype (responsive) */}
              <div className="mt-6 md:mt-0">
                {/* Match Danao iframe dimensions and constraints */}
                  <div className="aspect-[9/16] md:aspect-[9/16] overflow-hidden rounded-lg shadow-sm bg-white md:max-w-[420px] lg:max-w-[480px] mx-auto md:mx-0">
                  <iframe
                    title="ToolSwap Prototype"
                    src="https://embed.figma.com/proto/fjdwiyvqq5G6MqKcFuVD1L/Tool-Swap?page-id=5173%3A5102&node-id=5508-7349&viewport=1279%2C352%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5508%3A7349&embed-host=share"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', transform: 'scale(1.03)', transformOrigin: 'center' }}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Four Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Four</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">DELIVERABLES</h2>
            </div>

            <div className="w-full mt-6">
              <div className="px-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(0)} src={deliverables1} alt="Create Account" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(1)} src={deliverables2} alt="Create Booking Requests" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(2)} src={deliverables3} alt="Create Listing" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(3)} src={deliverables4} alt="Detailed View" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(4)} src={deliverables5} alt="Filter" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(5)} src={deliverables6} alt="Home" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>

                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(6)} src={deliverables7} alt="List View" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(7)} src={deliverables8} alt="Menu" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(8)} src={deliverables9} alt="Messages Chat" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(9)} src={deliverables10} alt="Review Listing" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(10)} src={deliverables11} alt="Reviews" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                    <div className="overflow-hidden rounded-lg flex items-center justify-center p-1">
                      <img onClick={() => openLightbox(11)} src={deliverables12} alt="Search" className="max-w-full max-h-[160px] md:max-h-[240px] lg:max-h-[320px] object-contain cursor-pointer" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Five Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Five</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">CONCLUSIONS</h2>
              <p className="text-muted-foreground mb-6">
                I’m really happy with the colour scheme I came up with and the overall design. I’m also happy with the overall usage of the application, there are not a lot of clicks involved.
              </p>

              <p className="text-muted-foreground mb-6">
                The user tests showed that the abnormality in the search process (category suggestions on top of search bar instead of underneath) is not creating any pain points, it is not even mentioned by the users, which I’m very happy to hear.
              </p>

              <p className="text-muted-foreground mb-6">
                As a next step I want to continue collecting more user feedback &amp; see how I can improve the design further, before bringing it onto the market.
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

        {/* Sketches & Wireframes combined image lightbox (single image) */}
        {sketchLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSketchLightboxOpen(false);
            }}
          >
            <button
              onClick={() => setSketchLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={tsSketchesWireframes}
              alt="Sketches and wireframes - full"
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