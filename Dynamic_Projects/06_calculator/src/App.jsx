// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import TaxCalculator from './pages/TaxCalculator';
import LoanCalculator from './pages/LoanCalculator';
import InvestmentCalculator from './pages/InvestmentCalculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Footer />
        <Routes>
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/investment-calculator" element={<InvestmentCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
