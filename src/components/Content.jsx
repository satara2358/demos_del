import React from "react";

const Content = () => {
  return (
    <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto mt-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo de Contenido</h1>
      <p className="text-lg text-gray-700">
        Esto es una demo para mostrar cómo estructurar el contenido de manera
        clara y profesional usando Tailwind CSS. Este componente tiene un fondo
        gris claro y está centrado en la pantalla.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Subtítulo</h2>
        <p className="text-gray-600 mt-2">
          Puedes agregar más información aquí y usar diferentes elementos de
          Tailwind CSS para ajustar el diseño. Por ejemplo, puedes agregar
          imágenes, botones o listas.
        </p>
      </div>
    </div>
  );
};

export default Content;
