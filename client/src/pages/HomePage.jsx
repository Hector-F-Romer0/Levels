import React, { useContext, useState } from "react";
import { useEffect } from "react";

import Songs from "../components/Songs";
import ArtistsCard from "../components/ArtistsCard";
import AlbumCard from "../components/AlbumCard";
import SearchBar from "../components/SearchBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CancionesContext } from "../context/CancionesContext";

const HomePage = () => {
	const { canciones, loadingCanciones, cargarCanciones, filtroBusqueda, setFiltroBusqueda } =
		useContext(CancionesContext);

	const navigate = useNavigate();

	const renderizacionCards = (item, index) => {
		if (filtroBusqueda.buscarPor === "canciones") {
			return <Songs infoCancion={item} key={index} />;
		}
		if (filtroBusqueda.buscarPor === "artistas") {
			return <ArtistsCard infoArtista={item} key={index} />;
		} else {
			return <AlbumCard infoAlbum={item} key={index} />;
		}
	};

	const cerrarSesion = () => {
		navigate("/Login");
	};

	useEffect(() => {
		cargarCanciones();
	}, [filtroBusqueda]);

	// Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
	useEffect(() => {
		cargarCanciones();
	}, []);

	if (loadingCanciones) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div>
			<div className="Register">
				<button className="InputSelect" onClick={cerrarSesion}>
					Cerrar sesión
				</button>
			</div>
			<SearchBar setFiltroBusqueda={setFiltroBusqueda} filtroBusqueda={filtroBusqueda} />
			{/* <FormSubirImg /> */}
			<div className="container">
				{canciones.map((item, index) =>
					// <Songs infoCancion={item} key={item.isrc} />
					renderizacionCards(item, index)
				)}
			</div>
		</div>
	);
};

export default HomePage;
