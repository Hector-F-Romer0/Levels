import React, { useContext, useState } from "react";
import { useEffect } from "react";

import SongsAdmin from "../components/SongsAdmin";
import ArtistsCardAdmin from "../components/ArtistsCardAdmin";
import AlbumCardAdmin from "../components/AlbumCardAdmin";
import SearchBar from "../components/SearchBar";
import InserCanciones from "./InserCanciones";

import { CancionesContext } from "../context/CancionesContext";
import { NavLink } from "react-router-dom";

const HomeAdmin = () => {
	const { canciones, loadingCanciones, cargarCanciones, filtroBusqueda, setFiltroBusqueda } =
		useContext(CancionesContext);

	const renderizacionCards = (item, index) => {
		if (filtroBusqueda.buscarPor === "canciones") {
			return <SongsAdmin infoCancion={item} key={index} />;
		}
		if (filtroBusqueda.buscarPor === "artistas") {
			return <ArtistsCardAdmin infoArtista={item} key={index} />;
		} else {
			return <AlbumCardAdmin infoAlbum={item} key={index} />;
		}
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
			<SearchBar setFiltroBusqueda={setFiltroBusqueda} filtroBusqueda={filtroBusqueda} />
			{/* <FormSubirImg /> */}
			<div className="Register">
			<NavLink className="InputSelect" to="/inserSongs">Insertar Canción</NavLink> 
			<br></br><br></br>
			<NavLink className="InputSelect" to="/inserArtist">Insertar Artista</NavLink>
			<br></br><br></br>
			<NavLink className="InputSelect" to="/insertAlbum">Insertar Album</NavLink>
			<br></br><br></br>
			<NavLink className="InputSelect" to="/InserGenero">Insertar Género</NavLink>
			<br></br><br></br>
			</div>
			<div className="container">
				{canciones.map((item, index) =>
					// <Songs infoCancion={item} key={item.isrc} />
					renderizacionCards(item, index)
				)}
			</div>
		</div>
	);
};

export default HomeAdmin;