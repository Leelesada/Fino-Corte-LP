import React from "react";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

export default function Hero() {
  const buttons = [
    { label: "WhatsApp", sub: "(47) 3018-2555", icon: <MessageCircle size={20}/>, url: "https://wa.me/554730182555" },
    { label: "Instagram", sub: "@finocortetecidos_", icon: <Instagram size={20}/>, url: "https://www.instagram.com/finocortetecidos_/" },
    { label: "Localização", sub: "Rua São José, 196 -sl 04 - Centro", icon: <MapPin size={20}/>, url: "https://maps.app.goo.gl/M2bHodXHxtWfikmp8" }
  ];

  return (
    <section style={{ maxWidth: '400px', margin: '0 auto 40px auto', padding: '0 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.6', color: '#e5e7eb' }}>
        A <span style={{ color: '#bb8b35', fontWeight: 'bold' }}>Fino Corte</span> oferece aviamentos em geral, tecidos e acessórios para costura e confecção. 
        Contamos com <span style={{ color: '#bb8b35' }}>atendimento especializado</span> e estilista na loja para ajudar você a encontrar as melhores soluções para seus projetos de moda e artesanato.
      </p>

      {buttons.map((btn, index) => (
        <a key={index} href={btn.url} className="btn-dourado" target="_blank" rel="noopener noreferrer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {btn.icon}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{btn.label}</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{btn.sub}</div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}