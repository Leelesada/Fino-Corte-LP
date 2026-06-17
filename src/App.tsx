export default function App() {
  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-black text-white font-sans overflow-x-hidden flex flex-col items-center"
        id="landing-page-container"
      >
        {/* Adicione as chamadas de volta aqui dentro: */}
        <Header />
        <Hero />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}