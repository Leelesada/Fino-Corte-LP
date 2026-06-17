import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '10px' }}>
      &copy; {new Date().getFullYear()} Fino Corte. Todos os direitos reservados.
    </footer>
  );
}