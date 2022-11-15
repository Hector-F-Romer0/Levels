import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CancionesContext } from "../context/CancionesContext";
import "../css/styles.css";
import "../css/searchBar.css";

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
		const filtro = canciones.filter((value) => {
			return value.tituloCancion.toLowerCase().includes(palabraBuscada.toLowerCase());
		});
		// console.log(filteredData);
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
					<input
						className="inputSearchBar"
						placeholder="Ingrese su búsqueda"
						type="text"
						onChange={handleFilter}
					/>
					{/* <div className="searchIcon"></div> */}
				</div>
				{/* Si el filtro de información contiene información, se mostrarán los resultados gracias al operador && */}
				{filteredData.length !== 0 && (
					<div className="dataResult">
						{filteredData.slice(0, 10).map((value) => (
							<Link className="dataItem" to={"/songs/id"} key={value.isrc}>
								{value.tituloCancion}
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};
export default SearchBar;
