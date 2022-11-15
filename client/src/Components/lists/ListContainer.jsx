import React, { useContext } from "react";

import YearList from "../lists/YearList";
import AlbumList from "../lists/AlbumList";
import GenreList from "../lists/GenreList";
import { CancionesContext } from "../../context/CancionesContext";

const ListContainer = () => {
	const { setCanciones, cargarCanciones } = useContext(CancionesContext);
	const handleResetResults = () => {
		setCanciones([]);
		cargarCanciones();
	};

	return (
		<div className="">
			<YearList />
			<GenreList />
			<AlbumList />
			<button type="button" onClick={handleResetResults}>
				Eliminar filtros
			</button>
		</div>
	);
};

export default ListContainer;
