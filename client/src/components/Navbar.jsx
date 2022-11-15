import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>NavBar va aquí</h1>
      <ul>
        <NavLink to="/" className='nav'>Inicio</NavLink>
        <NavLink to="/user/" className='nav'>Usuario</NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
