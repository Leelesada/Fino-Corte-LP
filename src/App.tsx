import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <motion.div 
  className="min-h-screen bg-black text-white font-sans overflow-x-hidden flex flex-col items-center"
  id="landing-page-container"
>
      </motion.div>
    </AnimatePresence>
  );
}
