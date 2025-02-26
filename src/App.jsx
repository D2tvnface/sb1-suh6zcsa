import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PriceComparison from './components/PriceComparison';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Benefits />
      <PriceComparison />
      <Testimonials />
      <OrderForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;