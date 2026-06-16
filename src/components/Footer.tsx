import React from "react";
import { Scissors, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

        {/* Centro: Endereço Correto */}
        <div className="text-center">
          <p className="text-zinc-400 text-xs font-sans tracking-wider">
            Rua São José, 196 - Centro, Gaspar/SC <br />
          </p>
        </div>

        {/* Direita: Subir & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={handleScrollToTop}
            id="back-to-top"
            className="flex items-center gap-2 text-gold hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest font-sans font-semibold cursor-pointer"
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </button>
          <span className="text-zinc-600 text-[10px] font-sans font-light">
            &copy; {currentYear} Fino Corte. Todos os direitos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}
