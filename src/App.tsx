import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AnimationProvider } from '@/contexts/AnimationContext';
import AnimationToggle from '@/components/AnimationToggle';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimationProvider>
        <BrowserRouter basename="/portfolio">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/404" element={<NotFound />} />
            {/* Redirect unknown routes to 404 page */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
        <AnimationToggle />
      </AnimationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
