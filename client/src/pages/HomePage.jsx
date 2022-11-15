import React, { useContext } from "react";
import { useEffect } from "react";

import Songs from "../components/Songs";
import SearchBar from "../components/SearchBar";
import FormSubirImg from "../components/FormSubirImg";

import { CancionesContext } from "../context/CancionesContext";

const HomePage = () => {
	const { canciones, loadingCanciones, cargarCanciones, cargarCancionesRecientes } = useContext(CancionesContext);

	// Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
	useEffect(() => {
		cargarCanciones();
		// cargarCancionesRecientes();
	}, []);

	if (loadingCanciones) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div>
			<h1>Hola</h1>
			<SearchBar />
			{/* <FormSubirImg /> */}
			<div className="container">
				{canciones.map((item) => (
					// <Songs infoCancion={item} key={item.isrc} />
					<Songs infoCancion={item} key={item.isrc} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
