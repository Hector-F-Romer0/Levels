import React, { useContext, useEffect, useState } from "react";
import { getGenerosRequest } from "../../api/genres.api";
import { getIdGeneroRequest } from "../../api/searchs.api";
import { CancionesContext } from "../../context/CancionesContext";

const GenreList = () => {
	const { setCanciones } = useContext(CancionesContext);

	const [generos, setGeneros] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		cargarGeneros();
	}, []);

	useEffect(() => {
		cargarGeneros();
	}, []);

	const cargarGeneros = async () => {
		setLoading(true);
		const res = await getGenerosRequest();
		setGeneros(res.data);
		setLoading(false);
	};

	const filtrarPorGenero = async (genero) => {
		setLoading(true);
		const res = await getIdGeneroRequest(genero);
		console.log(res);
		// setCanciones(res.data);
		setLoading(false);
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		filtrarPorGenero(e.target.value);
	};

	return (
		<div>
			<select className="InputSong" onChange={handleChange}>
				{generos.map((item) => {
					return <option key={item.idGenero}>{item.nombreGenero}</option>;
				})}
			</select>
		</div>
	);
};

export default GenreList;
