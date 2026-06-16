import React from "react";
import logoImg from "../assets/images/Logo-perfil.png";

export default function Header() {
  return (
    <header className="w-full py-6 bg-black flex flex-col items-center justify-center px-4" id="top-header">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <a 
          href="#" 
          id="branding-logo-link"
          className="group flex flex-col items-center justify-center text-center transition-all duration-350"
          aria-label="Fino Corte - Home"
        >
          {/* Logo Circular Elegante Moldurado em Ouro */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-gold-dark via-gold to-gold-light shadow-[0_0_25px_rgba(187,139,53,0.15)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={logoImg} 
                alt="Fino Corte Logotipo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}
