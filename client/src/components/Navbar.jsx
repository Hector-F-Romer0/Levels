import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Navbar = () => {
	const { data } = useContext(UserContext);

	return (
		<header>
			<h1 className="titulo">Levels</h1>
			<nav className="myNavbar">
				<ul className="navUl">
					{data === "" ? <h1>Hossssla</h1> : <h4>{data.nombreUsuario}</h4>}
					<li>
						<NavLink className="active" to="/">
							Inicio
						</NavLink>
						<NavLink className="active" to="/user/">
							Usuario
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
