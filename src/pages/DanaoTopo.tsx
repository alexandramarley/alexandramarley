import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Image imports for Danao design choices and placeholders
import danaoteaser from "@/assets/alexandramarley-ux-danao-teaser.webp";
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
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import toolswapteaser from "@/assets/alexandramarley-ux-toolswap-teaser.webp";

const DanaoTopo = () => {
  const [singleLightboxOpen, setSingleLightboxOpen] = useState(false);
  const [singleLightboxSrc, setSingleLightboxSrc] = useState<string | null>(null);
  const [singleLightboxAlt, setSingleLightboxAlt] = useState<string>("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openSingle = (src: string, alt = "") => {
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

  // Deliverables images for gallery modal (10 items)
  const deliverablesImages = [
    deliverable1,
    deliverable2,
    deliverable3,
    deliverable4,
    deliverable5,
    deliverable6,
    deliverable7,
    deliverable8,
    deliverable9,
    deliverable10,
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
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: three-line heading + intro (spans 2/3 on md+) */}
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight leading-tight md:leading-snug w-full">
                  <span className="text-green-700 font-semibold">Danao Topo:</span> Turning complex route data into a simple, interactive visualisation
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                  A mobile application design improving traditional climbing guidebooks
                </p>
                <div className="flex flex-wrap gap-3 mb-0">
                  <div className="rounded-full bg-muted px-4 py-2 text-sm">UI/UX Design</div>
                  <div className="rounded-full bg-muted px-4 py-2 text-sm">Climbing Guide</div>
                  <div className="rounded-full bg-muted px-4 py-2 text-sm">Mobile App</div>
                </div>
              </div>

              {/* Right: tall image (9:16) shown on md+ (occupies 1/3) */}
              <div className="hidden md:flex justify-center">
                <div className="aspect-[9/16] w-full max-w-[160px] sm:max-w-[200px] md:max-w-[216px] lg:max-w-[280px] overflow-hidden rounded-lg mx-auto">
                  <img
                    src={danaoteaser}
                    alt="Danao Topo preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Overview */}
  {/* Research snapshot block (16:9): left = text, right = three short items */}
  <section className="py-6">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-lg bg-background">
              <div className="w-full flex items-stretch md:h-full">
                <div className="w-full px-6 md:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:h-full items-start">
                    {/* Left: Title + longer text */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h3>
                      <p className="text-muted-foreground max-w-2xl mb-6">
                        As an outdoor climber, you usually rely on guide books and topos (lines drawn on pictures of rock, explaining the route) to navigate climbing areas. They include info on how to access the climbing area, the length of the routes, the difficulty grade, and other useful information. However, when I visited a climbing area in the Philippines, Danao, all that was available, was a spreadsheet with lots of data.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        I took this opportunity to turn this information into a mobile application design, with improvements to traditional climbing guidebooks. My mission with this design:
                      </p>
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        <li>• make the most important information for climbers easily accessible</li>
                        <li>• create a visually appealing design</li>
                        <li>• design should be appropriate for low budget development teams, simple and easy to implement</li>
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
                        <p className="text-muted-foreground">3 months (July - September 2025)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Research & Analysis */}
  {/* Process Section */}
  <section className="py-6">
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

      {/* Research Findings */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="w-full">
              {/* Make findings use full available width and distribute cards evenly on md+ */}
              <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch justify-between gap-6 w-full">
                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-xs md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Primary Use Case</h4>
                    <p className="text-muted-foreground">90% of users prioritise access details, route grade, and route length. These form the essential content of the app.</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-xs md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Overview and key route details</h4>
                    <p className="text-muted-foreground">Users need to know where a route starts/ends, its length, difficulty, required gear, approach time, and best climbing conditions.</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-xs md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Offline access is essential</h4>
                    <p className="text-muted-foreground">Poor reception in climbing areas makes downloadable offline content a key requirement.</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-xs md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Grading System</h4>
                    <p className="text-muted-foreground">95% prefer the French Sport Grading system; other grading conversions can be added later</p>
                  </div>
                </div>

                <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                  <div className="mx-auto max-w-xs md:max-w-none text-left">
                    <h4 className="text-lg font-semibold mb-2">Secondary Use Cases</h4>
                    <p className="text-muted-foreground">Only 25% want to rate routes. Most users mainly view route info and track project climbs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              <p className="text-muted-foreground mb-6">
                At the same time I did some <span className="font-semibold">benchmarking</span> and compared other climbing apps and their design. I gathered:
              </p>

                {/* Benchmark items: use same card structure as Research Findings (3 items) */}
                <div className="w-full mb-8">
                  <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch justify-between gap-6 w-full">
                    <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                      <div className="mx-auto max-w-xs md:max-w-none text-left">
                        <p className="text-muted-foreground"><span className="text-blue-500 font-semibold">With Example Blue</span> we can see that there is too much happening, and the colour choice makes it more chaotic</p>
                      </div>
                    </div>

                    <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                      <div className="mx-auto max-w-xs md:max-w-none text-left">
                        <p className="text-muted-foreground"><span className="text-green-500 font-semibold">Example Green</span> has no filter for route length / grade rating (some offer to filter the climbing style or the difficulty grade, but there should be more options), and the overlapping of the different routes creates a bad user experience</p>
                      </div>
                    </div>

                    <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                      <div className="mx-auto max-w-xs md:max-w-none text-left">
                        <p className="text-muted-foreground"><span className="text-red-500 font-semibold">Example Red</span> is only designed for desktop applications. Whilst they have an app for mobile users, no topos can be viewed and are referred to the website.</p>
                      </div>
                    </div>
                  </div>
                </div>

              {/* Danao benchmarks — show full image (no cropping) and enable lightbox on click */}
              <div className="mt-8">
                <div className="mx-auto">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-2 md:px-4">
                    <div className="flex-shrink-0 w-[260px] md:w-[320px]">
                      <div className="overflow-hidden rounded-lg">
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
                    <div className="flex-shrink-0 w-[260px] md:w-[320px]">
                      <div className="overflow-hidden rounded-lg">
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
                    <div className="flex-shrink-0 w-[260px] md:w-[320px]">
                      <div className="overflow-hidden rounded-lg">
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
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            {/* User Journey (image sits to the right of the text on md+) */}
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Left: Text content (keeps the original constrained width) */}
                <div className="max-w-3xl md:pr-8">
                  {/* Titles grouped and given extra breathing room */}
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-base text-muted-foreground mb-2">The Process - Step Two</h3>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-0">DESIGN</h2>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    I started to work on the app structure and document the user journeys:
                  </p>
                  <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                    <li>• User is researching climbing areas and wants some general information about Danao</li>
                    <li>• User has decided to climb at Danao, and wants to access detailed route information</li>
                    <li>• User can’t find the information they require, and needs assistance</li>
                  </ul>
                  <p className="text-muted-foreground mb-6">
                    To help me visualise and plan these user journeys, I created a flow chart. This allows me to rationalise the steps within the journey, and plan the navigation within the app.
                  </p>
                </div>

                {/* Right: User journey image (shift down a bit on md+ to align with paragraph) */}
                <div className="flex items-start justify-center md:justify-end md:mt-8">
                  <div className="w-full max-w-3xl">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={userJourney}
                        alt="User journey"
                        className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={() => openSingle(userJourney, 'User journey')}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(userJourney, 'User journey'); }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small title + text line underneath */}
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
                      <li>• The list item will expand and show the route description <span className="text-green-500 font-semibold">(Green)</span></li>
                      <li>• The route line in the topo will be highlighted <span className="text-red-500 font-semibold">(Red)</span></li>
                      <li>• The route title information will become bold, showing the selection clearly <span className="text-blue-500 font-semibold">(Blue)</span></li>
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
                      After showing the chart to fellow climbers I gathered the feedback that they were missing the information on how many easy or difficult routes are at this climbing area. So it is important to see the variations of routes, but also the numbers of routes (someone who only climbs very easy routes will not want to go to a climbing area that features one easy climb). Therefore I added a chart but with a number icon next to it, to know how many routes are available altogether <span className="text-red-500 font-semibold">(Red)</span>.
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
                    The search function caused some friction initially as I wasn’t sure how I should combine the search field with the title of the page. I feared removing the “All Routes” title might cause confusion and users would not know what page they’re on.
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
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Text content */}
              <div className="max-w-3xl md:pr-12">
                <h3 className="text-base text-muted-foreground mb-2">The Process - Step Three</h3>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">PROTOTYPE &amp; TESTING</h2>
                <p className="text-muted-foreground mb-4">
                  After finishing my design screens, I connected all the different frames &amp; created a prototype.
                </p>
                <p className="text-muted-foreground mb-4">
                  When it came to the user testing, I gave the candidates the following tasks:
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
                  <span className="font-semibold">User 2</span> clicked right away on the map first, instead of pressing on the info section. After reading the instructions again, they found the info section without any problem. The second task they mastered without any problems. They also found the specific wall &amp; clicked on the mentioned route &amp; found all necessary information. Interestingly, the user couldn’t find “All Routes”, and filtered the routes through the filter icon on the crag wall, instead of going through - Info - All Routes - Filter. It’s possible that they didn’t read the whole info section, but in any case I will look into highlighting the “All Routes” button better. The help section was very easy to find, they didn’t mention anything regarding the font size. In general the user mentioned missing a back button.
                </p>

                {/* Findings & Next Steps User Testing (use Research Findings section structure) */}
                <section className="py-8">
                  <div className="container mx-auto px-6">
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch justify-between gap-6 w-full">
                        <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                          <div className="mx-auto max-w-xs md:max-w-none text-left">
                            <h4 className="text-lg font-semibold mb-2">Findings</h4>
                            <ul className="list-inside space-y-2 text-muted-foreground">
                              <li>• Some elements lack clarity or visibility (filter fields, All routes button)</li>
                              <li>• Tap targets can feel too small for some users</li>
                              <li>• Users appreciate the simplicity of the design and can complete key tasks</li>
                              <li>• Navigation could be improved with clearer pathways and a back button for easier movement</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-6 bg-muted/10 rounded-lg flex-1 min-w-0 flex justify-center">
                          <div className="mx-auto max-w-xs md:max-w-none text-left">
                            <h4 className="text-lg font-semibold mb-2">Next Steps</h4>
                            <ul className="list-inside space-y-2 text-muted-foreground">
                              <li>• Improve visibility of “All Routes” button</li>
                              <li>• Improve the filter screen (see wireframe example)</li>
                              <li>• Thinking of adding a back navigation button</li>
                              <li>• Obtain more user tests to collect further data</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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

        

        {/* Process Step Four Section */}
        <section className="py-12">
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
                  <img onClick={() => openLightbox(0)} src={deliverable1} alt="Home" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(1)} src={deliverable2} alt="Info" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(2)} src={deliverable3} alt="Map" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(3)} src={deliverable4} alt="Map detail" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(4)} src={deliverable5} alt="Map detail DM" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>

                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(5)} src={deliverable6} alt="Search" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(6)} src={deliverable7} alt="Help" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(7)} src={deliverable8} alt="Crag" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(8)} src={deliverable9} alt="Crag detail" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-lg flex items-center justify-center p-2">
                  <img onClick={() => openLightbox(9)} src={deliverable10} alt="Crag DM" className="max-w-full max-h-[180px] md:max-h-[280px] lg:max-h-[360px] object-contain cursor-pointer" />
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
                I’m pleased with the final design, especially the map page. Finding a suitable base map was challenging — Google’s satellite imagery lacked clarity — so I used OpenStreetMap and created a custom dark version through AI. The crag info section also presented challenges, but I’m happy with the outcome.
              </p>
              <p className="text-muted-foreground mb-4">
                Next, I plan to refine the All Routes and Filter sections and conduct more user testing to guide future improvements. I’m currently in contact with the route developer of Danao to potentially bring this project to life. I also recognise that some design elements may be complex to implement, and I aim to streamline them for easier development and a smoother user experience.
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