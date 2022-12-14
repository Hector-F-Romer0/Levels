import React, { useContext, useEffect, useState } from "react";
import { getCancionesHomeYearRequest } from "../../api/searchs.api";
import { getYearRequest } from "../../api/songs.api";
import { CancionesContext } from "../../context/CancionesContext";

const YearList = () => {
	const { setCanciones, setLoadingCanciones } = useContext(CancionesContext);
	const [years, setYears] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		cargarYears();
	}, []);

	const cargarYears = async () => {
		setLoading(true);
		const res = await getYearRequest();
		setYears(res.data);
		setLoading(false);
	};

	const filtrarPorAño = async (year) => {
		setLoadingCanciones(true);
		const res = await getCancionesHomeYearRequest(year);
		setCanciones(res.data);
		setLoadingCanciones(false);
	};

	const handleChange = (e) => {
		filtrarPorAño(e.target.value);
	};

	return (
		<div className="Registerfiltro">
			<h1 className="textofiltro">Filtrado de canciones por año.</h1>
			<select className="InputSelect" onChange={handleChange}>
				{years.map((item) => {
					return <option key={item.year}>{item.year}</option>;
				})}
			</select>
		</div>
	);
};

export default YearList;
