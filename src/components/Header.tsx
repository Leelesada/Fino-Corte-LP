import React from "react";
import logoImg from "../assets/images/Logo-perfil.png";

export default function Header() {
  return (
    <header className="w-full py-6 bg-black flex justify-center">
      <img src={logoImg} alt="Logo" style={{ width: '150px' }} />
    </header>
  );
}