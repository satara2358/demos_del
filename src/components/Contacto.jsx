// src/components/Contacto.jsx
import React from 'react';

const Contacto = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto mt-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
      <p className="text-lg text-gray-700">
        Si tienes alguna pregunta o quieres saber más sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.
      </p>
      <form className="mt-6">
        <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
        <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />

        <label htmlFor="email" className="block text-gray-700 mb-2">Correo Electrónico</label>
        <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />

        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
