import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Integration from './components/Integration';
import ProductionTimeline from './components/ProductionTimeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Features />
      <Integration />
      <ProductionTimeline />
      <Footer />
    </div>
  );
}

export default App;
