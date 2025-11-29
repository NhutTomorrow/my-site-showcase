import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BTL1 from "./pages/BTL1";
import BTL2 from "./pages/BTL2";
import BTL3 from "./pages/BTL3";
import HPMR from "./pages/HPMR";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/btl1" element={<BTL1 />} /> {/* <--- 2. THÊM DÒNG NÀY */}
          <Route path="/btl2" element={<BTL2 />} /> {/* <--- 2. THÊM DÒNG NÀY */}
          <Route path="/btl3" element={<BTL3 />} /> {/* <--- 2. THÊM DÒNG NÀY */}
          <Route path="/HPMR" element={<HPMR />} /> {/* <--- 2. THÊM DÒNG NÀY */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;