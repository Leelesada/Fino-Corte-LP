import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black py-8 text-center">
      <button onClick={handleScrollToTop} className="text-gold text-xs uppercase mb-4 flex items-center justify-center mx-auto gap-2">
        Voltar ao topo <ArrowUp className="w-4 h-4" />
      </button>
      <p className="text-zinc-600 text-[10px]">© {new Date().getFullYear()} Fino Corte. Todos os direitos reservados.</p>
    </footer>
  );
}