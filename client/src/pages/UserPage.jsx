import React from "react";
import { useParams } from "react-router-dom";
import { getUsuarioRequest } from "../api/users.api";
import { useState, useEffect } from 'react';

const UserPage = () => {
	const params = useParams();

	const [usuarios, setUsers] = useState({})

	const [loading, setLoading] = useState();

	const cargarUsuarios = async () => {
		setLoading(true);
		const res = await getUsuarioRequest(params.id);
		console.log(res.data);
		setUsers(res.data);
		console.log(usuarios)
		setLoading(false);
	};

	useEffect(() => {
		cargarUsuarios();
	}, []);
	console.log(params);

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<>
			<div className="User">
				<h1 className="UserText">Usuario</h1>
				<p className="UserText2">{usuarios.nombreUsuario}</p>
				<h1 className="UseText">Nombres</h1>
				<p className="UserText2">{usuarios.nombres}</p>
				<h1 className="UserText">Apellidos</h1>
				<p className="UserText2">{usuarios.apellidos}</p>
				<h1 className="UserText">Número de identidad</h1>
				<p className="UserText2">{usuarios.numId}</p>
				<h1 className="UserText">Correo</h1>
				<p className="UserText2">{usuarios.correo}</p>
				<input type='button' value='Cerrar sesión' className="Cerrar"></input>
			</div>
		</>
	);
};

export default UserPage;
