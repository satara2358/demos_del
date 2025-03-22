// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
