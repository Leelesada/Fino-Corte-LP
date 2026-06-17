import React from "react";
import logo from "../assets/Logo-perfil.png";

export default function Hero() {
  const buttons = [
    { label: "WhatsApp", sub: "(47) 3018-2555", url: "https://wa.me/554730182555" },
    { label: "Instagram", sub: "@finocortetecidos_", url: "https://www.instagram.com/finocortetecidos_/" },
    { label: "Localização", sub: "Rua São José, 196 - Centro", url: "https://maps.app.goo.gl/M2bHodXHxtWfikmp8" }
  ];

  return (
    <section style={{ maxWidth: '400px', margin: '20px auto', padding: '0 20px', textAlign: 'center' }}>
      
      <img 
        src={logo} 
        alt="Fino Corte Tecidos" 
        style={{ width: '200px', margin: '0 auto 20px auto', display: 'block' }} 
      />

      <p style={{ fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.6', color: '#e5e7eb' }}>
        A <span style={{ color: '#bb8b35', fontWeight: 'bold' }}>Fino Corte</span> oferece aviamentos em geral, tecidos e acessórios para costura e confecção. 
        Contamos com <span style={{ color: '#bb8b35' }}>atendimento especializado</span> e estilista na loja para ajudar você a encontrar as melhores soluções para seus projetos de moda e artesanato.
      </p>

      {buttons.map((btn, index) => (
        <a key={index} href={btn.url} className="btn-dourado" target="_blank" rel="noopener noreferrer">
          <div style={{ textAlign: 'left', width: '100%' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{btn.label}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{btn.sub}</div>
          </div>
        </a>
      ))}
      
    </section>
  );
}