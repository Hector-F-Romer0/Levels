import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1 className="titulo">Levels</h1>
      <nav className="myNavbar">
      <ul className="navUl">
        <li>
          <NavLink activeClassName='active' exact to="/" >Inicio</NavLink>
          <NavLink activeClassName='active' exact to="/user/">Usuario</NavLink>
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default Navbar;
