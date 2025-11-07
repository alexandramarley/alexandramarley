import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UXUIDesign from "./pages/UXUIDesign";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";
import ToolSwap from "./pages/ToolSwap";
import DanaoTopo from "./pages/DanaoTopo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uxui-design" element={<UXUIDesign />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/:subcategory" element={<Photography />} />
          <Route path="/projects/toolswap" element={<ToolSwap />} />
          <Route path="/projects/danao-topo" element={<DanaoTopo />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
