// src/components/Servicios.jsx
import React from 'react';

const Servicios = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto mt-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
      <p className="text-lg text-gray-700">
        Ofrecemos una variedad de servicios para ayudarte a mejorar tu experiencia. A continuación te mostramos lo que hacemos.
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li>Consultoría personalizada</li>
        <li>Desarrollo web a medida</li>
        <li>Soporte técnico</li>
      </ul>
    </div>
  );
};

export default Servicios;
