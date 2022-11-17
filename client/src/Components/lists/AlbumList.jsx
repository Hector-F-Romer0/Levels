import React, { useContext, useEffect, useState } from "react";
import { getAlbumesRequest } from "../../api/albums.api";
import { getIdAlbumYFiltrarRequest } from "../../api/searchs.api";
import { CancionesContext } from "../../context/CancionesContext";

const AlbumList = () => {
	const { setCanciones, setLoadingCanciones } = useContext(CancionesContext);

	const [albumes, setAlbumes] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		cargarAlbumes();
	}, []);

	const cargarAlbumes = async () => {
		setLoading(true);
		const res = await getAlbumesRequest();
		setAlbumes(res.data);
		setLoading(false);
	};

	const filtrarPorAlbum = async (album) => {
		setLoadingCanciones(true);
		const res = await getIdAlbumYFiltrarRequest(album);
		setCanciones(res.data);
		setLoadingCanciones(false);
	};

	const handleChange = (e) => {
		filtrarPorAlbum(e.target.value);
	};

	return (
		<div className="Registerfiltro">
			<h1 className="textofiltro">Filtrado de canciones por álbum.</h1>
			<select className="InputSelect" onChange={handleChange}>
				{albumes.map((item) => {
					return <option key={item.idAlbum}>{item.titulo}</option>;
				})}
			</select>
		</div>
	);
};

export default AlbumList;
