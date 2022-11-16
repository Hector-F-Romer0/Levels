import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { getUsuarioRequest } from "../api/users.api";
import { useState, useEffect } from "react";

import { UserContext } from "../context/UserContext";

const UserPage = () => {
	const { data, setData } = useContext(UserContext);

	const [usuarios, setUsers] = useState({});

	const [loading, setLoading] = useState();

	const cargarUsuarios = async () => {
		setLoading(true);
		const res = await getUsuarioRequest(data.numId);
		console.log(res.data);
		setUsers(res.data);
		console.log(usuarios);
		setLoading(false);
	};

	useEffect(() => {
		cargarUsuarios();
	}, []);

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<>
			<div className="User">
				<h1 className="UserText">Usuario</h1>
				<p className="UserText2">{data.nombreUsuario}</p>
				<h1 className="UseText">Nombres</h1>
				<p className="UserText2">{data.nombres}</p>
				<h1 className="UserText">Apellidos</h1>
				<p className="UserText2">{data.apellidos}</p>
				<h1 className="UserText">Número de identidad</h1>
				<p className="UserText2">{data.numId}</p>
				<h1 className="UserText">Correo</h1>
				<p className="UserText2">{data.correo}</p>
				<input type="button" value="Cerrar sesión" className="Cerrar"></input>
			</div>
		</>
	);
};

export default UserPage;
