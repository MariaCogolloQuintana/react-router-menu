import React, { useState } from 'react';

const Configuracion = () => {
  const [config, setConfig] = useState({ tema: '', notificaciones: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig({
      ...config,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="page">
      <h1>Configuración del Sistema</h1>
      <form>
        <label>
          Tema:
          <select name="tema" value={config.tema} onChange={handleChange}>
            <option value="oscuro">Oscuro</option>
            <option value="claro">Claro</option>
          </select>
        </label>
        <br />
        <label>
          Activar notificaciones:
          <input
            type="checkbox"
            name="notificaciones"
            checked={config.notificaciones}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Configuracion;
