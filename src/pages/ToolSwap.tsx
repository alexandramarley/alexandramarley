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
import tsUserJourney from "@/assets/alexandramarley-ux-ToolSwap-userjourney.webp";
import deliverables6 from "@/assets/alexandramarley-ToolSwap-Create-Account.png";
import deliverables11 from "@/assets/alexandramarley-ToolSwap-Create-Booking-Requests.png";
import deliverables8 from "@/assets/alexandramarley-ToolSwap-Create-Listing.png";
import deliverables4 from "@/assets/alexandramarley-ToolSwap-Detailed-View.png";
import deliverables5 from "@/assets/alexandramarley-ToolSwap-Filter.png";
import deliverables1 from "@/assets/alexandramarley-ToolSwap-Home.png";
import deliverables3 from "@/assets/alexandramarley-ToolSwap-ListView.png";
import deliverables7 from "@/assets/alexandramarley-toolswap-menu.png";
import deliverables12 from "@/assets/alexandramarley-ToolSwap-Messages-Chat.png";
import deliverables9 from "@/assets/alexandramarley-ToolSwap-Review-Listing.png";
import deliverables10 from "@/assets/alexandramarley-ToolSwap-Reviews.png";
import deliverables2 from "@/assets/alexandramarley-toolswap-Search.png";
import benchmark from "@/assets/alexandramarley-ux-toolswap-benchmark-01.webp";

const ToolSwap = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [researchLightboxOpen, setResearchLightboxOpen] = useState(false);
  const [journeyLightboxOpen, setJourneyLightboxOpen] = useState(false);
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
        {/* Hero Section: three-line title with right-side 9:16 image (matches Danao layout) */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: three-line heading + intro (spans 2/3 on md+) */}
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight leading-tight md:leading-snug w-full">
                  <span className="text-green-700 font-semibold">ToolSwap:</span> A community marketplace for borrowing tools - reducing cost and boosting sustainability
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

              {/* Right: tall image (9:16) shown on md+ (occupies 1/3) */}
              <div className="hidden md:flex justify-center">
                <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[216px] lg:max-w-[280px] overflow-hidden rounded-lg mx-auto">
                  <img
                    src={deliverables1}
                    alt="ToolSwap preview"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview (adopted from DanaoTopo): left long text, right Role/Team/Timeline — stacks on mobile */}
        <section className="pt-6 pb-12">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-lg bg-background">
                <div className="w-full flex items-stretch md:h-full">
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:h-full items-start">
                    {/* Left: Title + longer text */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h3>
                      <p className="text-muted-foreground max-w-2xl mb-6">
                        As London’s cost of living rises and we all try to be more eco-friendly, it makes sense that not everyone owns a pressure washer or drill—especially when you only need one occasionally. With DIY makeovers on the rise, it’s tempting to try them yourself. So what if there were an app where you could borrow tools from people nearby, and offer up that fancy Artisan stand mixer you only use every six months in return?
                      </p>
                      <p className="text-muted-foreground mb-6">
                        I have created from scratch a design for a mobile application where you can reserve and list any home tools through different categories. My goals:
                      </p>
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        <li>• Create a mobile app that is easy and quick to use</li>
                        <li>• Create a marketplace where tools can be lent/borrowed for a short amount of time with a user rating system designed to enhance transparency, reliability, and trust.</li>
                        <li>• Reduce people's spending and encourage sustainable choices</li>
                      </ul>
                    </div>

                    {/* Right: three short titled lines */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-4">Role</h4>
                        <p className="text-muted-foreground">Product Designer (full scope delivery, from research to final design)</p>
                      </div>

                      <div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-4">Team</h4>
                        <p className="text-muted-foreground">Independent project</p>
                      </div>

                      <div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-4">Timeline</h4>
                        <p className="text-muted-foreground">September - October 2025</p>
                      </div>
                    </div>
                  </div>
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
                To find out more about our users and if there’s a need for such a tool I relied mainly on quantitative and qualitative methods. I created a survey to find out more about our users, what tools people would be interested to borrow, and if they would pay for it. The results: 
              </p>
            </div>

{/* Research Findings */}
        <section className="py-8">
          <div className="container mx-auto px-6">
              <div className="w-full">
              {/* Make findings use full available width and allow cards to wrap onto multiple rows when needed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">User Demand</h4>
                    <p className="text-muted-foreground">60% of participants are somewhat interested in using the app, 46% use tools monthly or weekly. Most commonly used categories: hand tools (80%), followed by DIY tools, then kitchen/garden tools.</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Motivations</h4>
                    <div className="text-muted-foreground">
                      <p className="mb-2">Users are driven by practical and ethical benefits:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                        <li>Convenience</li>
                        <li>User verification</li>
                        <li>Sustainability and reducing waste</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Barriers and Trust Concerns</h4>
                    <p className="text-muted-foreground">The biggest hesitation is around possible damage to borrowed tools. Users also worry about reliability and responsibility. They want reassurance that both lenders and borrowers can be trusted.</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Essential Trust-Building Features</h4>
                    <div className="text-muted-foreground">
                      <p className="mb-2">To increase confidence in using the app, participants identified key features:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                        <li>User verification</li>
                        <li>Ratings & reviews</li>
                        <li>Insurance or damage guarantee</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg min-w-0 flex flex-col justify-start h-full">
                  <div className="flex-1 w-full mx-auto max-w-md md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Priority Features & Core Use Cases</h4>
                    <div className="text-muted-foreground">
                      <p className="mb-2">Most desired app functionalities include:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                        <li>Search by tool type</li>
                        <li>Availability calendar</li>
                        <li>Map view of nearby tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  

              <p className="text-muted-foreground mb-6">
                As part of my research I did some  <span className="font-semibold">benchmarking</span> and compared similar products and their designs to identify best practices and areas for improvement.
                </p>
             {/* Benchmark summary cards (two items) */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch justify-between gap-6 w-full">
                  <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                    <div className="mx-auto max-w-md md:max-w-none text-left">
                      <p className="text-muted-foreground"><span className="text-blue-500 font-semibold">Example blue </span> shows an app that feels crowded and overwhelming due to the excessive information and colour overload presented on the home screen.</p>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                    <div className="mx-auto max-w-md md:max-w-none text-left">
                      <p className="text-muted-foreground">In contrast, <span className="text-red-500 font-semibold">example red</span> offers a clean and intuitive interface, prioritising essential features like search and categories, which enhances the user experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Benchmark image */}
              <div className="flex justify-center mt-6">
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src={benchmark}
                    alt="Benchmark - comparative analysis"
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => {
                      setSingleLightboxSrc(benchmark);
                      setSingleLightboxAlt("Benchmark - comparative analysis");
                      setSingleLightboxOpen(true);
                    }}
                  />
                </div>
              </div>
          </div>
        </section>

        {/* Process Step Two Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">The Process - Step Two</h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">DESIGN</h2>
              <p className="text-muted-foreground mb-4">
                Based on research insights, key priorities were identified: ease of discovery, quick listing flows, and trust-building features such as user ratings and verification. The secondary, less important use cases would be an account overview with previous borrowed/listed items and the aim to strengthen the community and supporting the environment
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
                    I started to work on the app structure and document the user journey. My key considerations were the user goals and to document the structure. There are three different journeys:
                  </p>

                  <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                    <li>• To search and borrow someone&apos;s tool</li>
                    <li>• To list your own tools</li>
                    <li>• To access your account</li>
                  </ul>
                </div>

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
            </div>

            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Design Choices</h4>
              <p className="text-muted-foreground mb-0">After defining the user journey I drew some sketches and created medium fidelity wireframe which helped me clarify the structure and flow. Next step was converting the wireframes into actual designs. Some of my challenges and reasonings are highlighted below.</p>
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
                    When experimenting with different navigation types (hamburger menu, floating buttons, bottom navigation) I realised that using a hamburger menu with a floating search bar would be the best solution. <span className="text-red-500 font-semibold">The search bar</span> is one of the main CTA’s in the whole app, therefore I wanted it to be as accessible as possible. I did some benchmarking with other map-prioritised applications, and even though there is a clear design pattern, I decided to have the search bar at the bottom, as it is much easier to reach with your thumb (compared to the top).
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
                      When looking at other marketplaces or selling applications, most are based on list-view designs, and the map-view is only of secondary importance. As my research showed, users find the map very useful, therefore I decided to make the design map-oriented, but still offer the option of showing the items in a list view.
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
                    The terminology for the main menu was quite tricky. In the beginning I used the categories reserve tool - create listing - my account - settings. The first two categories are quite clear, my account would have been responsible for your own bookings, but also the bookings you receive for the items you lend.
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
                      The list item screen went through various changes as I struggled to combine all the important information on one screen nicely. In the end I chose to use a bottom sheet to have the map in the background, which helps the user to identify where the tool is located. In the screenshot on the right you can see how the user can find the most important information, highlighted in <span className="text-red-500 font-semibold">red</span>.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The <span className="text-red-500 font-semibold">red</span> and <span className="text-blue-500 font-semibold">blue</span> highlighted section is scrollable, after the description underneath you can find the reviews for this specific items from other users, plus what else the lender borrows.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Highlighted in <span className="text-green-500 font-semibold">green</span>  is the CTA to book the item + the overall price you’d pay. These items are fixed, as they should be all-time accessible.
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
                      I first tried to combine it within the map view (when showing the results), but after further research I removed that and opted for a bottom sheet. This seemed more user friendly, better to reach with your thumb, and the function is clearer. After doing some bench marking with other marketplace apps I wanted to include filter chips at the top of the screen to highlight the most used features. However, overall this would have overcomplicated the design and made it less clear to navigate. Below you can see the different versions to the final result (right side).
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

        {/* Process Step Three Section - Prototype & Testing */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Text content */}
              <div className="max-w-3xl md:pr-12">
                <h3 className="text-base text-muted-foreground mb-2">The Process - Step Three</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">PROTOTYPE &amp; TESTING</h2>
                <p className="text-muted-foreground mb-4">
                  After finishing my design screens, I connected all the different frames &amp; created a prototype. When it came to the user testing, I gave the candidates the following tasks:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>
                    You live in Canary Wharf &amp; look for a power drill from September 13th 2025 - September 20th, 2025. Try to reserve the item closest to you, assuming you already have an account (steven.smith@gmail.com / password), and continue with the checkout flow.
                  </li>
                  <li>
                    You live in Canary Wharf (15 Chichester Way, E14 3EG) and want to lend your jigsaw to other people. Try to create your own listing, the price is £4 per day and no description is needed (can be skipped).
                  </li>
                  <li>
                    Try to find the booking requests for your bookings (the tools that you are lending to others)
                  </li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold">User 1</span> struggled with the CTA buttons on the booking screens. Currently they are only underlined, so I’ll change this into clearer CTA’s. The reserve-a-tool flow seemed to be quite clear as the user did not face any challenges with the search flow, although they tried to use the keyboard which is not fully interactive. They were also looking for a FAQ page and wanted to know how they could report an issue or a user. Since then I’ve added those pages to the main menu, accessible through the category settings.
                </p>

                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold">User 2</span> solved the first task without any problems, and didn’t mind the category suggestions above the search bar, which I found very positive. When the user created a listing, they got confused when they had to insert the price, as the screen didn’t wait for the user to confirm the value, and instead changed right away to the next screen. So I will add here a step in between, so that the user can confirm the price through a “continue” CTA. With the third task, the user got a bit confused as he expected to see a jigsaw listing in the listings (as he just created in an earlier task). Also, instead of pressing on bookings - requests, the user first clicked on the different states (upcoming / completed / requests) but after clarification they mentioned that they wanted to see what there was.
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


        {/* Findings & Next Steps - moved out of the two-column grid to be full-width and centered */}
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
                        <span>CTA buttons styled only as underlined text were not recognized as actionable, causing confusion</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Users expect access to supporting resources such as FAQs and issue reporting</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>User confusion occurred when entering the price for a new listing (value auto-submitted without user confirmation)</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>The search and reserve flow is generally intuitive and easy to follow</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Category suggestions above the search bar were not perceived as intrusive</span>
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
                        <span>Replace ambiguous underlined CTAs with clearer buttons</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Added FAQ / report an issue section to the menu</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Add clearer feedback in the create-listing flow (confirm price step)</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Conduct more user tests to collect further data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Step Four Section - Deliverables */}
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