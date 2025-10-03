import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

// Lazy load all page components for code splitting
const Index = lazy(() => import("./pages/Index"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Location = lazy(() => import("./pages/Location"));
const Events = lazy(() => import("./pages/Events"));
const FunctionRoom = lazy(() => import("./pages/FunctionRoom"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Menu = lazy(() => import("./pages/Menu"));
const NewMenu = lazy(() => import("./pages/NewMenu"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component for Suspense
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <GoogleAnalytics />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/location" element={<Location />} />
              <Route path="/events" element={<Events />} />
              <Route path="/function-room" element={<FunctionRoom />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/menu" element={<NewMenu />} />
              <Route path="/old-menu-admin" element={<Menu />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
