import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Tracker } from "./pages/Tracker";
import { DoseTiming } from "./pages/DoseTiming";
import { ManageMedicine } from "./pages/ManageMedicine";
import { Caregiver } from "./pages/Caregiver";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BottomNavigation } from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/dose-timing" element={<DoseTiming />} />
            <Route path="/medicines" element={<ManageMedicine />} />
            <Route path="/caregiver" element={<Caregiver />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
