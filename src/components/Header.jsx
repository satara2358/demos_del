import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-900 text-white">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Mi Página Profesional</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-lg hover:text-blue-300 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/sobre-mi" className="text-lg hover:text-blue-300 transition-colors">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="text-lg hover:text-blue-300 transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="text-lg hover:text-blue-300 transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
