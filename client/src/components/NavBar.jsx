import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<header>
			<h1>NavBar va aquí</h1>
			<ul>
				<NavLink to="/">Inicio</NavLink>
				<NavLink to="/user/">Usuario</NavLink>
			</ul>
		</header>
	);
};

export default NavBar;
