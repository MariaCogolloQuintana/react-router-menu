import React from 'react';

const Carros = () => {
  const carrosMock = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Honda', modelo: 'Civic' },
    { id: 3, marca: 'Ford', modelo: 'Focus' }
  ];

  return (
    <div className="page">
      <h1>Listado de Carros</h1>
      <ul>
        {carrosMock.map(carro => (
          <li key={carro.id}>{carro.marca} {carro.modelo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carros;
