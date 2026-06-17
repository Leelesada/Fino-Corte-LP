import React from "react";
import { MessageCircle, Instagram, MapPin } from "lucide-react";
import logo from "../assets/logo.png"; // Ajuste o nome "logo.png" se for outro nome

export default function Hero() {
  const buttons = [
    { label: "WhatsApp", sub: "(47) 3018-2555", icon: <MessageCircle size={24}/>, url: "https://wa.me/554730182555" },
    { label: "Instagram", sub: "@finocortetecidos_", icon: <Instagram size={24}/>, url: "https://www.instagram.com/finocortetecidos_/" },
    { label: "Localização", sub: "Rua São José, 196 - Centro", icon: <MapPin size={24}/>, url: "https://maps.app.goo.gl/M2bHodXHxtWfikmp8" }
  ];

  return (
    <section style={{ maxWidth: '400px', margin: '20px auto', padding: '0 20px', textAlign: 'center' }}>
      
      {/* Logo importada corretamente */}
      <img 
        src={logo} 
        alt="Fino Corte Tecidos" 
        style={{ width: '200px', margin: '0 auto 20px auto', display: 'block' }} 
      />

      <p style={{ fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.6', color: '#e5e7eb', fontWeight: '300' }}>
        A <span style={{ color: '#bb8b35', fontWeight: '700' }}>Fino Corte</span> oferece aviamentos em geral, tecidos e acessórios para costura e confecção. 
        Contamos com <span style={{ color: '#bb8b35' }}>atendimento especializado</span> e estilista na loja para ajudar você a encontrar as melhores soluções para seus projetos de moda e artesanato.
      </p>

      {buttons.map((btn, index) => (
        <a key={index} href={btn.url} className="btn-dourado" target="_blank" rel="noopener noreferrer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {btn.icon}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>{btn.label}</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{btn.sub}</div>
            </div>
          </div>
        </a>
      ))}
      
    </section>
  );
}