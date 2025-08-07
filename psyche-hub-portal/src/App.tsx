import { Toaster } from "@/core/components/ui/toaster";
import { Toaster as Sonner } from "@/core/components/ui/sonner";
import { TooltipProvider } from "@/core/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resources from "./pages/Resources";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./core/components/NotFound";
import ArticleCreate from "./features/articles/pages/ArticleCreate";
import ArticleDetailPage from "./features/articles/pages/ArticleDetail";
import ArticlesPage from "./features/articles/pages/ArticlesPage";
import LandingPage from "./features/home/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/create" element={<ArticleCreate />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          {/* <Route path="/psychologists" element={<Psychologists />} /> */}
          {/* <Route path="/psychologists/:id" element={<PsychologistDetail />} /> */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
