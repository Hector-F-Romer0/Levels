import React from "react";
import { useState, useContext } from "react";

import { CancionesContext } from "../context/CancionesContext";
import "../css/styles.css";

const SearchBar = () => {
	const { canciones } = useContext(CancionesContext);

	const [filteredData, setFilteredData] = useState([]);
	const [filtro, setFiltro] = useState("");

	const handleRadioClick = (e) => {
		console.log(e.target.value);
		setFiltro(e.target.value);
	};

	const handleFilter = (event) => {
		const palabraBuscada = event.target.value;
		console.log(palabraBuscada);
		const filtro = canciones.filter((value) => {
			return value.titulo.toLowerCase().includes(palabraBuscada.toLowerCase());
		});

		if (palabraBuscada === "") {
			setFilteredData([]);
		} else {
			setFilteredData(filtro);
		}
	};

	const opcionRadioEscogida = () => {};

	return (
		<>
			<div className="search">
				<div className="searchInputs">
					<input className="inputSearchBar" type="text" onChange={handleFilter} />
					{/* <div className="searchIcon"></div> */}
				</div>
				{/* Si el filtro de información contiene información, se mostrarán los resultados gracias al operador && */}
				{filteredData.length !== 0 && (
					<div className="dataResult">
						{filteredData.slice(0, 10).map((value) => (
							<a className="dataItem" href={value.rutaCancion} key={value.isrc}>
								{value.titulo}
							</a>
						))}
					</div>
				)}
			</div>
			<div>
				<label htmlFor="genero">Género</label>
				<input
					type="radio"
					value="genero"
					name="react-radio-button"
					checked={opcionRadioEscogida("genero")}
					onChange={handleRadioClick}
				/>
				<label htmlFor="artista">Artista</label>
				<input
					type="radio"
					value="artista"
					name="react-radio-button"
					checked={opcionRadioEscogida("artista")}
					onChange={handleRadioClick}
				/>
				<label htmlFor="año">Año</label>

				<input
					type="radio"
					value="año"
					name="react-radio-button"
					checked={opcionRadioEscogida("año")}
					onChange={handleRadioClick}
				/>
				<label htmlFor="ninguno">Ninguno</label>
				<input
					type="radio"
					value="ninguno"
					name="react-radio-button"
					checked={opcionRadioEscogida("ninguno")}
					onChange={handleRadioClick}
				/>
			</div>
		</>
	);
};

export default SearchBar;
