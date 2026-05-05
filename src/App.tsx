import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import Solucoes from "./pages/Solucoes.tsx";
import Projetos from "./pages/Projetos.tsx";
import ProjetoDetalhe from "./pages/ProjetoDetalhe.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
