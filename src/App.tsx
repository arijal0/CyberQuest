import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Outcomes from "./pages/Outcomes";
import IntroToCybersecurity from "./pages/IntroToCybersecurity";
import Cryptography from "./pages/Cryptography";
import Milestones from "./pages/Milestones";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/outcomes/intro-to-cybersecurity" element={<IntroToCybersecurity />} />
            <Route path="/outcomes/cryptography" element={<Cryptography />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
