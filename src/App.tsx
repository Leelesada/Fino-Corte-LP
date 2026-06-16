import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans overflow-x-hidden"
        id="landing-page-container"
      >
        {/* Acabamento elegante de ouro no topo absoluto */}
        <div className="w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

        {/* Header - Logotipo Centrado */}
        <Header />

        <main id="main-content-flow">
          {/* Seção principal objetiva com CTA direto, texto da Fino Corte e Informações de Visita */}
          <Hero />
        </main>

        {/* Rodapé institucional com link "Voltar ao topo" */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
