import React from "react";
import { useState, useEffect } from "react";
import Songs from "../components/Songs";
import FormSubirImg from "../components/FormSubirImg";

import { getCancionesRecientesRequest } from "../api/searchs.api.js";

const HomePage = () => {
	const [canciones, setCanciones] = useState([]);
	const [loading, setLoading] = useState();

	const cargarCanciones = async () => {
		setLoading(true);
		const res = await getCancionesRecientesRequest();
		console.log(res.data);
		setCanciones(res.data);
		setLoading(false);
	};

	// Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
	useEffect(() => {
		cargarCanciones();
	}, []);

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div>
			<FormSubirImg />
			<div className="container">
				{canciones.map((item) => (
					<Songs infoCancion={item} key={item.isrc} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
