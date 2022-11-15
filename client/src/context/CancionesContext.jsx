import React, { createContext, useState } from "react";
import { getCancionesHomeRequest } from "../api/searchs.api";
import { getArtistasHomeRequest } from "../api/artists.api";
import { getAlbumesRequest } from "../api/albums.api";

export const CancionesContext = createContext();

// CancionesProvider le otorgará a todos los componentes los estados y métodos que se exporten con el provider
export const CancionesProvider = ({ children }) => {
	const [canciones, setCanciones] = useState([]);
	const [filtroBusqueda, setFiltroBusqueda] = useState({
		buscarPor: "canciones",
	});
	const [loadingCanciones, setLoadingCanciones] = useState();

	const cargarCanciones = async () => {
		setLoadingCanciones(true);
		if (filtroBusqueda.buscarPor === "canciones") {
			const res = await getCancionesHomeRequest();
			setCanciones(res.data);
		} else if (filtroBusqueda.buscarPor === "artistas") {
			const res = await getArtistasHomeRequest();
			setCanciones(res.data);
		} else {
			const res = await getAlbumesRequest();
			setCanciones(res.data);
		}
		setLoadingCanciones(false);
	};

	const cargarArtistas = async () => {
		setLoadingCanciones(true);
		const res = await getArtistasHomeRequest();
		setCanciones(res.data);
		setLoadingCanciones(false);
	};

	return (
		<CancionesContext.Provider
			value={{
				canciones,
				setCanciones,
				loadingCanciones,
				setLoadingCanciones,
				cargarCanciones,
				cargarArtistas,
				filtroBusqueda,
				setFiltroBusqueda,
			}}>
			{children}
		</CancionesContext.Provider>
	);
};
