import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // É melhor importar o CSS logo abaixo do React
import App from "./App"; // Remova o .tsx daqui, o Vite encontra automaticamente

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);