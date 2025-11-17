import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import UXUIDesign from "./pages/UXUIDesign";
import Photography from "./pages/Photography";
import Portrait from "./pages/Portrait";
import Business from "./pages/Business";
import Dance from "./pages/Dance";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ToolSwap from "./pages/ToolSwap";
import DanaoTopo from "./pages/DanaoTopo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        {/* ScrollToTop ensures every route navigation starts at the top of the page */}
        {/** Placed inside the Router so useLocation works correctly */}
        <ScrollToTopImpl />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uxui-design" element={<UXUIDesign />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/portrait" element={<Portrait />} />
          <Route path="/photography/business" element={<Business />} />
          <Route path="/photography/dance" element={<Dance />} />
          <Route path="/photography/:subcategory" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/toolswap" element={<ToolSwap />} />
          <Route path="/projects/danao-topo" element={<DanaoTopo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
  </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

function ScrollToTopImpl() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Always scroll to the top on route change
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
