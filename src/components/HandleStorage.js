import React from 'react';

const HandleStorage = ({ cotizacion }) => {
  const handleLocalStorage = () => {
    localStorage.setItem('cotizaciones', cotizacion);
    // const storageData = localStorage.getItem('cotizaciones');
  };
  return (
    <div>
      {' '}
      {cotizacion}
      <button onClick={handleLocalStorage}>Guardar Cotizacion</button>
    </div>
  );
};

export default HandleStorage;
