import React from "react";
import logoImg from "../assets/images/Logo-perfil.png";

export default function Header() {
  return (
    <header style={{ width: '100%', padding: '20px 0', textAlign: 'center' }}>
      <img 
  src={logoImg} 
  alt="Fino Corte" 
  style={{ width: '150px', margin: '0 auto', display: 'block' }} 
  className="md:w-60" 
/>
    </header>
  );
}