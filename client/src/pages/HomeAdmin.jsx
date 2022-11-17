import React, { useContext, useState } from "react";
import { useEffect } from "react";

import SongsAdmin from "../components/SongsAdmin";
import ArtistsCardAdmin from "../components/ArtistsCardAdmin";
import AlbumCardAdmin from "../components/AlbumCardAdmin";
import SearchBar from "../components/SearchBar";
import { Routes, Route, useNavigate } from "react-router-dom";

import { CancionesContext } from "../context/CancionesContext";
import { NavLink } from "react-router-dom";

const HomeAdmin = () => {
	const { canciones, loadingCanciones, cargarCanciones, filtroBusqueda, setFiltroBusqueda } =
		useContext(CancionesContext);

	const navigate = useNavigate();

	const renderizacionCards = (item, index) => {
		console.log("Dentro de renderizar");
		if (filtroBusqueda.buscarPor === "canciones") {
			return <SongsAdmin infoCancion={item} key={index} />;
		}
		if (filtroBusqueda.buscarPor === "artistas") {
			return <ArtistsCardAdmin infoArtista={item} key={index} />;
		} else {
			return <AlbumCardAdmin infoAlbum={item} key={index} />;
		}
	};

	const cerrarSesion = () => {
		navigate("/Login");
	};

	useEffect(() => {
		cargarCanciones();
	}, [filtroBusqueda]);

	useEffect(() => {
		console.log("Canciones ha cambiado");
		console.log(canciones);
		renderizacionCards(canciones);
	}, [canciones]);

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
			<div className="Register">
				<NavLink className="InputSelect" to="/inserSongs">
					Insertar Canción
				</NavLink>
				<br></br>
				<br></br>
				<NavLink className="InputSelect" to="/inserArtist">
					Insertar Artista
				</NavLink>
				<br></br>
				<br></br>
				<NavLink className="InputSelect" to="/insertAlbum">
					Insertar Album
				</NavLink>
				<br></br>
				<br></br>
				<NavLink className="InputSelect" to="/InserGenero">
					Insertar Género
				</NavLink>
				<br></br>
				<br></br>
			</div>
			<div className="container">{canciones.map((item, index) => renderizacionCards(item, index))}</div>
		</div>
	);
};

export default HomeAdmin;
