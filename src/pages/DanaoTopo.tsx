import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// TODO: Replace with actual images
import danaoHero from "@/assets/portfolio-4.jpg";
import danaoDetail1 from "@/assets/portfolio-5.jpg";
import danaoDetail2 from "@/assets/portfolio-6.jpg";
import { Link } from "react-router-dom";

const DanaoTopo = () => {
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
            {/* Hero Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-16">
              <img
                src={danaoHero}
                alt="Danao Topo visualization overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 bg-muted/30">
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
                  src={danaoDetail1}
                  alt="Danao Topo interface showcase"
                  className="w-full h-full object-cover"
                />
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
            {/* Full-width Process Image */}
            <div className="mt-8 -mx-6 md:-mx-12 lg:-mx-24">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={danaoHero}
                  alt="Process step visualization"
                  className="w-full h-full object-cover"
                />
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

            {/* Flowchart image */}
            <div className="mt-8 -mx-6 md:-mx-12 lg:-mx-24">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={danaoDetail2}
                  alt="User journey flowchart"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Small title + text line underneath */}
            <div className="max-w-3xl mt-8">
              <h4 className="text-lg font-semibold mb-2">Sketches & Wireframes</h4>
              <p className="text-muted-foreground mb-6">After coming up with some sketches to get a rough idea of what I want to do, I started with the wireframes on Figma.</p>
            </div>

            {/* Another picture */}
            <div className="mt-4 -mx-6 md:-mx-12 lg:-mx-24">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={danaoDetail1}
                  alt="Illustration or screenshot"
                  className="w-full h-full object-cover"
                />
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
                <div className="max-w-3xl px-12">
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
                  <p className="text-muted-foreground">
                    Below you can see the different versions up to the final design (different choice of font thickness, collapsing route overview).
                  </p>
                </div>
                <div className="max-w-3xl px-12 mt-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg">
                    <img src={danaoDetail1} alt="Detail 1" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div>
                <div className="max-w-3xl px-12">
                  <h4 className="text-lg font-semibold mb-2">Difficulty Distribution Chart</h4>
                  <p className="text-muted-foreground mb-4">
                    I wanted to include a cool colour chart to show how many different routes and grades are available in a given climbing area. However, in the pie chart the grades were unreadable, too small. As next option I tried out a bar chart, plus I shortened the text & added icons with a small description instead. If I added the different grades next to the bar, it was unreadable, therefore I thought of scraping the chart altogether & use a text description instead.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    After showing the chart to fellow climbers I gathered the feedback that they were missing the information on how many easy or difficult routes are at this climbing area. So it is important to see the variations of routes, but also the numbers of routes (someone who only climbs very easy routes will not want to go to a climbing area that features one easy climb). Therefore I added a chart but with a number icon next to it, to know how many routes are available altogether <span className="text-red-500 font-semibold">(Red)</span>.
                  </p>
                  <p className="text-muted-foreground">
                    Below you can see the process from the start to the final design.
                  </p>
                </div>
                <div className="max-w-3xl px-12 mt-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg">
                    <img src={danaoDetail2} alt="Detail 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div>
                <div className="max-w-3xl px-12">
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
                <div className="max-w-3xl px-12 mt-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg">
                    <img src={danaoHero} alt="Detail 3" className="w-full h-full object-cover" />
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
                <div className="max-w-3xl px-12 mt-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg">
                    <img src={danaoDetail1} alt="Detail 4" className="w-full h-full object-cover" />
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
              <p className="text-muted-foreground mb-6">
                The final deliverables included a downloadable offline topo package (GeoJSON + lightweight raster tiles), a clickable interactive prototype, and a design handoff package (Figma components, style guide and token documentation) for low-budget development teams.
              </p>
            </div>

            <div className="max-w-3xl mt-6">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img src={danaoDetail1} alt="Deliverables overview" className="w-full h-full object-cover" />
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

        {/* Next Case Study Teaser */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-base text-muted-foreground mb-4">Next Case Study</h3>
              <Link to="/projects/toolswap" className="group block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={danaoDetail1}
                        alt="ToolSwap preview"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      ToolSwap
                    </h2>
                    <p className="text-muted-foreground">
                      Explore how the ToolSwap platform revolutionizes equipment sharing in the climbing community, making gear more accessible while reducing environmental impact.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

         {/* Technical Implementation */}      </main>

              {/* Technical Implementation */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={danaoDetail2}
                  alt="Danao Topo technical details"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
                    <p className="text-muted-foreground">
                      Utilized high-resolution satellite imagery and ground-truth
                      data to create accurate topographical representations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Visualization</h3>
                    <p className="text-muted-foreground">
                      Implemented WebGL-based 3D rendering with custom shaders
                      for realistic terrain visualization and smooth performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Interactivity</h3>
                    <p className="text-muted-foreground">
                      Developed intuitive controls for navigation and exploration,
                      with support for touch devices and traditional inputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Environmental Impact
            </h2>
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6">
                The Danao Topo project has become an essential tool for
                environmental researchers and local planners. It provides valuable
                insights for conservation efforts and sustainable development
                planning in the region.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold mb-2">100km²</h3>
                  <p className="text-muted-foreground">Area Mapped</p>
                </div>
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold mb-2">0.5m</h3>
                  <p className="text-muted-foreground">Resolution</p>
                </div>
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Research Papers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default DanaoTopo;