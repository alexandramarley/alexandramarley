import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Image imports for Danao design choices and placeholders
import danaoteaser from "@/assets/alexandramarley-ux-danao-teaser.webp";
import danaoHero from "@/assets/alexandramarley-ux-danao-research-01.png";
import design01a from "@/assets/alexandramarley-ux-danao-design-01-1.webp";
import design01b from "@/assets/alexandramarley-ux-danao-design-01-2.webp";
import design02a from "@/assets/alexandramarley-ux-danao-design-02-a.webp";
import design02b from "@/assets/alexandramarley-ux-danao-design-02-b.webp";
import design03 from "@/assets/alexandramarley-ux-danao-design-03.webp";
import design04 from "@/assets/alexandramarley-ux-danao-design-04.png";
import userJourney from "@/assets/alexandramarley-ux-danao-userjourney.png";
import danaoDetail2 from "@/assets/alexandramarley-ux-danao-userjourney.png";
import danaoBenchmark1 from "@/assets/alexandramarley-ux-danao-benchmark-01.png";
import danaoBenchmark2 from "@/assets/alexandramarley-ux-danao-benchmark-02.png";
import danaoBenchmark3 from "@/assets/alexandramarley-ux-danao-benchmark-03.png";
import sketcheswireframes from "@/assets/alexandramarley-ux-danao-sketches-wireframes.png";
import deliverable1 from '@/assets/alexandramarley-ux-danao-topo-home.webp';
import deliverable2 from '@/assets/alexandramarley-ux-danao-topo-info.webp';
import deliverable3 from '@/assets/alexandramarley-ux-danao-topo-map.webp';
import deliverable4 from '@/assets/alexandramarley-ux-danao-topo-map-detail.webp';
import deliverable5 from '@/assets/alexandramarley-ux-danao-topo-map-detail-dm.webp';
import deliverable6 from '@/assets/alexandramarley-ux-danao-topo-search.webp';
import deliverable7 from '@/assets/alexandramarley-ux-danao-topo-help.webp';
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
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Danao Topo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Interactive topographical visualization of Danao's natural landscape
            </p>
            <div className="flex flex-wrap gap-3 mb-2">
              <div className="rounded-full bg-muted px-4 py-2 text-sm">UI/UX Design</div>
              <div className="rounded-full bg-muted px-4 py-2 text-sm">Climbing Guide</div>
              <div className="rounded-full bg-muted px-4 py-2 text-sm">Mobile App</div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Project Overview
                </h2>
                <p className="text-muted-foreground mb-6">
                  As an outdoor climber, you usually rely on guide books and topos (lines drawn on pictures of rock, explaining the route) to navigate climbing areas. They include info on how to access the climbing area, the length of the routes, the difficulty grade, and other useful information. However, when I visited a climbing area in the Philippines, Danao, all that was available, was a spreadsheet with lots of data.  
                </p>
                <p className="text-muted-foreground mb-6">
                  I took this opportunity to turn this information into a mobile application design, with improvements to traditional climbing guidebooks. My mission with this design:
                </p>
                                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• make the most important information for climbers easily accessible</li>
                  <li>• create a visually appealing design</li>
                  <li>• design should be appropriate for low budget development teams, simple and easy to implement</li>
                  <li>• Environmental impact analysis</li>
                </ul>
              </div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={danaoteaser}
                  alt="Danao Topo interface showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

               {/* Impact Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Impact</h2>
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6">
                Danao Topo aims to not only enhance the climbing experience but also to support other community-led climbing areas who wish to use the same design.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold mb-2">100+</h3>
                  <p className="text-muted-foreground">Routes on the app</p>
                </div>
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold mb-2">1000kg</h3>
                  <p className="text-muted-foreground">Estimated Materials Saved</p>
                </div>
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Climbers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">
                The Process - Step One
              </h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                RESEARCH & ANALYSIS
              </h2>
              <p className="text-muted-foreground mb-8">
                In my research I used a mix of qualitative and quantitive methods to find out more about our users and their behaviour. Besides observing & talking to climbers I created a survey to gather market research, which would drive decision making in the design process. 
              </p><p className="text-muted-foreground mb-6">
                Based on the results of my survey, 90% want information on how to access the climbing area, what's the grade + length of the routes. Second priority went to a map overview, what's the best time to climb there (is the wall north- or south facing), and safety features (is there loose rock).
              </p>
            </div>
            {/* Process Image aligned with text width (no hero full-bleed) */}
            <div className="mt-8">
              <div className="max-w-3xl mx-auto">
                <div className="aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={danaoHero}
                    alt="Process step visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-3xl mt-12">
              <p className="text-muted-foreground mb-6">
                Based on the results of my survey, 90% want information on how to access the climbing area, what's the grade + length of the routes. Second priority went to a map overview, what's the best time to climb there (is the wall north- or south facing), and safety features (is there loose rock).
              </p>
              
              <p className="text-muted-foreground mb-6">
                Some climbing areas won't have cell reception, and I personally find it too heavy to bring a book with me. Therefore it was clear it would be a mobile app where you can download the info, without service needed.
              </p>

              <p className="text-muted-foreground mb-6">
                Whilst you could multi select options, 100% mentioned they would prefer the French Sport Grading system. A grading conversion tool could be considered at a later stage.
              </p>

              <p className="text-muted-foreground mb-6">
                The last question mentioned the rating of the users. Majority mentioned they use the topo to look at the routes & to mark routes as projects (unfinished climbs) so that they could come back to it. Only 25% mentioned they would like to rate the routes, therefore I won't include this feature for now.
              </p>

              <p className="text-muted-foreground mb-6">
                The main use cases are for users to find out:
              </p>

              <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                <li>• where the route starts and ends</li>
                <li>• how long the route is</li>
                <li>• how many quick drawers do I need</li>
                <li>• how difficult is the route</li>
                <li>• how long does it take to get to the climbing area</li>
                <li>• when are the best climbing conditions in the climbing area, is there afternoon or morning sun</li>
              </ul>

              <p className="text-muted-foreground mb-6">
                The secondary, less important use cases are:
              </p>

              <ul className="list-inside space-y-2 text-muted-foreground mb-8">
                <li>• how fun is this route (rating)</li>
                <li>• where can I contact someone if I have further questions</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">Benchmark</h4>

              <p className="text-muted-foreground mb-6">
                At the same time I compared other climbing apps and their design. I gathered:
              </p>

              <ul className="list-inside space-y-2 text-muted-foreground mb-8">
                <li>• <span className="text-blue-500 font-semibold">With Example Blue</span> we can see that there is too much happening, and the colour choice makes it more chaotic</li>
                <li>• <span className="text-green-500 font-semibold">Example Green</span> has no filter for route length / grade rating (some offer to filter the climbing style or the difficulty grade, but there should be more options), and the overlapping of the different routes creates a bad user experience</li>
                <li>• <span className="text-red-500 font-semibold">Example Red</span> is only designed for desktop applications. Whilst they have an app for mobile users, no topos can be viewed and are referred to the website.</li>
              </ul>

              {/* Danao benchmarks — show full image (no cropping) and enable lightbox on click */}
              <div className="mt-8">
                <div className="max-w-3xl mx-auto">
                  <div className="flex gap-4 items-start overflow-x-auto md:overflow-x-visible px-2">
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
          </div>
        </section>

        {/* Process Step Two Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-base text-muted-foreground mb-2">
                The Process - Step Two
              </h3>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                DESIGN
              </h2>
              <p className="text-muted-foreground mb-6">
                I started to work on the app structure and document the user journeys, there are three ones:


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

             {/* User Journey (constrained to text width) */}
            <div className="mt-4">
              <div className="max-w-3xl mx-auto">
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

            {/* Small title + text line underneath */}
            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Sketches & Wireframes</h4>
              <p className="text-muted-foreground mb-6">After coming up with some sketches to get a rough idea of what I want to do, I started with the wireframes on Figma.</p>
            </div>

            {/* Sketches & Wireframes (constrained to text width) */}
            <div className="mt-4">
              <div className="max-w-3xl mx-auto">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={sketcheswireframes}
                    alt="Sketches & wireframes"
                    className="w-full h-auto object-contain md:max-h-[520px] lg:max-h-[620px] cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => openSingle(sketcheswireframes, 'Sketches & wireframes')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSingle(sketcheswireframes, 'Sketches & wireframes'); }}
                  />
                </div>
              </div>
            </div>

            {/* Small title + text line underneath */}
            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Design Choices</h4>
              <p className="text-muted-foreground mb-6">Once I was happy with the wireframes, I continued with the design. Some details and highlights:</p>
            </div>
          </div>
        </section>

        {/* Four detail paragraphs with images (each paragraph has extra horizontal padding and 64px vertical spacing) */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {/* Block 1 */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Route Information</h4>
                     <p className="text-muted-foreground mb-4">
                    Within the application, there is a large amount of text to display. Routes have information with varying length. For example, a route description can often be a few paragraphs long, whereas the difficulty is 2 - 3 characters. It would be overwhelming to show all the information at once. As a solution, I chose to use expanding list items for routes, which show the short, vital information all the time, and when expanded show the long detailed description.
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
              

              {/* Block 2 */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Difficulty Distribution Chart</h4>
                    <p className="text-muted-foreground mb-4">
                      I wanted to include a cool colour chart to show how many different routes and grades are available in a given climbing area. However, in the pie chart the grades were unreadable, too small. As next option I tried out a bar chart, plus I shortened the text & added icons with a small description instead. If I added the different grades next to the bar, it was unreadable, therefore I thought of scraping the chart altogether & use a text description instead.
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

              {/* Block 3 */}
              <div>
                <div className="px-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-semibold mb-2">Filter Option</h4>
                    <p className="text-muted-foreground mb-4">
                      When creating a mood board & cross checking other climbing apps, one thing they’re missing, is a filter option with more choices. There were filters to differentiate the climbing style, or the difficulty grade, but no filter for the route length and rating. So I added one to my design that seemed useful.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This is one area of the app I’m not totally satisfied with. The user experience is quite bad as a high number of taps is required, compared to a slider.
                    </p>
                    <p className="text-muted-foreground">
                      This is my main priority in a future re-design, I have a new version in the wireframes and will pursue a new design there.
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
        {/* Process Step Three Section */}
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
                  <li>• Find out how to get there from Cebu (by car/bus, doesn’t matter)</li>
                  <li>• Find the overview of the different crags (climbing areas)</li>
                  <li>• Find the “Pocket Wall” and a route called Dong Ba Dong. You want to find out how long is the route, and how many quick drawers (QD) are needed</li>
                  <li>• Find the overview of all routes, and filter all routes more than 30 meters with a rating of 4 Stars or more</li>
                  <li>• Find a way how to contact the route setters</li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  User 1 found the climbing area + route very easy, although they mentioned they wish the route would have been highlighted more clearer. They did try to interact with the map itself, which is with the prototype not possible. The info section was accessed without any problems, when using the filter function the user mentioned the fields are quite small to interact with and that a lot of taps are involved. In general they found the font size on the smaller side, but appreciated the simplicity of the design &amp; how few clicks are involved.
                </p>

                <p className="text-muted-foreground mb-4">
                  User 2 clicked right away on the Map first, instead of pressing on the Info section. After reading the instructions again, they found the info section without any problem. The second task they mastered without any problems. They also found the specific wall &amp; clicked on the mentioned route &amp; found all necessary information. Interestingly, the user couldn’t find “All Routes”, and filtered the routes through the filter icon on the crag wall, instead of going through - Info - All Routes - Filter. It’s possible that they didn’t read the whole Info section, but in any case I will look into highlighting the “All Routes” button better. The Help section was very easy to find, they didn’t mention anything regarding the font size. In general the user mentioned missing a back button.
                </p>

                <p className="text-muted-foreground mb-4">
                  As a result of these user tests I’m implementing the following:
                </p>
                <ul className="list-inside space-y-2 text-muted-foreground mb-6">
                  <li>• Improve visibility of “All Routes” button</li>
                  <li>• Improve the Filter screen (see wireframe example)</li>
                  <li>• Thinking of adding a Back Navigation Button</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  I want to obtain more user tests to collect further feedback &amp; see what else might not work.
                </p>
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

        {/* Technical Implementation and Impact have been moved to the bottom of the page */}
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
                 The Danao Topo project demonstrated that with focused prioritisation and simple, well-documented deliverables, even low-budget teams can produce an effective offline-capable topo app. Future work will focus on improving filter usability and conducting further user testing to validate longer-term adoption and environmental research applications.
               </p>
             </div>
           </div>
         </section>

   {/* Next Case Study */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-semibold">Next Case Study</h2>
              <Link
                to="/projects/toolswap"
                state={{ scrollTop: true }}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl overflow-hidden">
                  <img
                    src={toolswapteaser}
                    alt="ToolSwap Project"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white">ToolSwap →</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeSingle(); }}
          aria-modal="true"
          role="dialog"
        >
          <div className="max-w-[90vw] max-h-[90vh]">
            <img
              src={singleLightboxSrc}
              alt={singleLightboxAlt}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DanaoTopo;