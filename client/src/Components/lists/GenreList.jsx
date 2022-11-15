import React, { useContext, useEffect, useState } from "react";
import { getGenerosRequest } from "../../api/genres.api";
import { getIdGeneroYFiltrarRequest } from "../../api/searchs.api";
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
		const res = await getIdGeneroYFiltrarRequest(genero);
		setCanciones(res.data);
		setLoading(false);
	};

	const handleChange = (e) => {
		filtrarPorGenero(e.target.value);
	};

	return (
		<div className="Registerfiltro">
			<label className="textofiltro">
				Filtrado de canciones por género. 
				</label> <br></br>
				<br></br>
				<select className="InputSelect" onChange={handleChange}>
					{generos.map((item) => {
						return <option key={item.idGenero}>{item.nombreGenero}</option>;
					})}
				</select>
		</div>
	);
};

export default GenreList;
