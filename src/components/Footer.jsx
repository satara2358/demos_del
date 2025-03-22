// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <h3 className="text-2xl font-semibold mb-4 sm:mb-0">
            Mi Página Profesional
          </h3>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-lg hover:text-blue-400 transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#services" className="text-lg hover:text-blue-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Mi Página Profesional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
