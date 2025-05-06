import React from 'react';

const Conductores = () => {
  const conductoresMock = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'Maria López' },
    { id: 3, nombre: 'Carlos González' }
  ];

  return (
    <div className="page">
      <h1>Listado de Conductores</h1>
      <ul>
        {conductoresMock.map(conductor => (
          <li key={conductor.id}>{conductor.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Conductores;
