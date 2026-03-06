import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DailyTracking from "./pages/DailyTracking";
import WeeklyTracking from "./pages/WeeklyTracking";
import Stats from "./pages/Stats";
import FoodLog from "./pages/FoodLog";
import FoodRecommend from "./pages/FoodRecommend";
import Medicine from "./pages/Medicine";
import Points from "./pages/Points";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daily" element={<DailyTracking />} />
          <Route path="/weekly" element={<WeeklyTracking />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/food-log" element={<FoodLog />} />
          <Route path="/food-recommend" element={<FoodRecommend />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/points" element={<Points />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
