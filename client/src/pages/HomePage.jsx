import React from "react";
import { useState, useEffect } from "react";

import Songs from "../components/Songs";
import SearchBar from "../components/SearchBar";
import FormSubirImg from "../components/FormSubirImg";

import { getCancionesRecientesRequest, getCancionesRequest } from "../api/searchs.api.js";

const HomePage = () => {
	const [canciones, setCanciones] = useState([]);
	const [loading, setLoading] = useState();
	const [cancionesRecientes, setCancionesRecientes] = useState([]);

	const cargarCancionesRecientes = async () => {
		setLoading(true);
		const res = await getCancionesRecientesRequest();
		setCancionesRecientes(res.data);
		setLoading(false);
	};

	const cargarCanciones = async () => {
		setLoading(true);
		const res = await getCancionesRequest();
		setCanciones(res.data);
		setLoading(false);
	};

	// Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
	useEffect(() => {
		cargarCancionesRecientes();
		cargarCanciones();
	}, []);

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div>
			<SearchBar data={canciones} />
			<FormSubirImg />
			<div className="container">
				{cancionesRecientes.map((item) => (
					<Songs infoCancion={item} key={item.isrc} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
