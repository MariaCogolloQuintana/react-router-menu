import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCar, FaUser, FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/carros"><FaCar /> Carros</Link></li>
        <li><Link to="/conductores"><FaUser /> Conductores</Link></li>
        <li><Link to="/configuracion"><FaCog /> Configuración</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
