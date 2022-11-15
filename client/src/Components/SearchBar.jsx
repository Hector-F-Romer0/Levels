import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CancionesContext } from "../context/CancionesContext";

import "../css/styles.css";
import "../css/searchBar.css";
import ListContainer from "./lists/ListContainer";

const SearchBar = () => {
	const { canciones } = useContext(CancionesContext);

	const [filteredData, setFilteredData] = useState([]);

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

	return (
		<>
			<div className="search">
				<div className="searchInputs">
					<input
						className="inputSearchK"
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
			<ListContainer />
		</>
	);
};
export default SearchBar;
