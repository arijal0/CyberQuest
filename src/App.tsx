import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Outcomes = lazy(() => import("./pages/Outcomes"));
const IntroToCybersecurity = lazy(() => import("./pages/IntroToCybersecurity"));
const Cryptography = lazy(() => import("./pages/Cryptography"));
const Milestones = lazy(() => import("./pages/Milestones"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ErrorBoundary>
          <ScrollToTop />
          <Suspense
            fallback={<div className="flex min-h-screen items-center justify-center">Loading…</div>}
          >
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
          </Suspense>
        </ErrorBoundary>
      </TooltipProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
