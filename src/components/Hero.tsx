import React from "react";

export default function Hero() {
  return (
    <section style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#d1d5db' }}>
        A <span style={{ color: '#bb8b35', fontWeight: 'bold' }}>Fino Corte</span> oferece aviamentos, tecidos e acessórios para costura. 
        Atendimento especializado no centro de Gaspar/SC.
      </p>

      <a href="https://wa.me/554730182555" className="btn-dourado">
        <span>Falar no WhatsApp</span>
        <span>(47) 3018-2555</span>
      </a>

      <a href="https://www.instagram.com/finocortetecidos_/" className="btn-dourado">
        <span>Seguir no Instagram</span>
        <span>@finocortetecidos_</span>
      </a>

      <div style={{ marginTop: '40px', border: '1px solid #bb8b35', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#bb8b35' }}>Informações de Visita</h2>
        <p>Rua São José, 196 - Centro, Gaspar/SC</p>
        <p>Segunda a Sexta: 08:30 às 18:00</p>
        <p>Sábados: 08:30 às 12:00</p>
      </div>
      
    </section>
  );
}