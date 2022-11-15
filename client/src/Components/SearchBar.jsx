import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CancionesContext } from "../context/CancionesContext";

import "../css/styles.css";
import "../css/searchBar.css";
import ListContainer from "./lists/ListContainer";

const SearchBar = () => {
	const { canciones, setFiltroBusqueda, filtroBusqueda } = useContext(CancionesContext);
	const [filteredData, setFilteredData] = useState([]);

	let refArray = "";

	// const adminFiltros = () => {
	// 	let atributoFiltro;
	// 	if (filtroBusqueda.buscarPor === "artista") {
	// 		atributoFiltro = "nombreArtistico";
	// 	} else if (filtroBusqueda.buscarPor === "canciones") {
	// 		atributoFiltro = "tituloCancion";
	// 	} else if (filtroBusqueda.buscarPor === "albumes") {
	// 		atributoFiltro = "titulo";
	// 	}
	// 	return atributoFiltro;
	// };

	const handleFilter = (event) => {
		const palabraBuscada = event.target.value;
		// console.log(adminFiltros());
		let filtro = "";
		console.log(filtroBusqueda);
		if (filtroBusqueda.buscarPor === "artistas") {
			refArray = "nombreArtistico";

			filtro = canciones.filter((value) => {
				return value.nombreArtistico.toLowerCase().includes(palabraBuscada.toLowerCase());
			});
		} else if (filtroBusqueda.buscarPor === "canciones") {
			refArray = "tituloCancion";
			filtro = canciones.filter((value) => {
				return value.tituloCancion.toLowerCase().includes(palabraBuscada.toLowerCase());
			});
		} else if (filtroBusqueda.buscarPor === "albumes") {
			refArray = "titulo";
			filtro = canciones.filter((value) => {
				return value.titulo.toLowerCase().includes(palabraBuscada.toLowerCase());
			});
		}
		console.log("REF ARRAY " + refArray);
		console.log(refArray);

		if (palabraBuscada === "") {
			setFilteredData([]);
		} else {
			setFilteredData(filtro);
		}
	};

	const handleSearchParam = (filtro) => {
		setFiltroBusqueda({ buscarPor: filtro });
	};

	return (
		<>
			{<h1>Estas filtrando por: {filtroBusqueda.buscarPor}</h1>}
			<div>
				<h1>Buscar por</h1>
				<button type="button" onClick={() => handleSearchParam("canciones")}>
					Canciones
				</button>
				<button type="button" onClick={() => handleSearchParam("artistas")}>
					Artistas x genero
				</button>
				<button type="button" onClick={() => handleSearchParam("albumes")}>
					Albumes
				</button>
			</div>
			<div className="search">
				<div className="searchInputs">
					<input
						className="inputSearchBar"
						placeholder="Ingrese su búsqueda"
						type="text"
						onChange={handleFilter}
					/>
				</div>
				{/* Si el filtro de información contiene información, se mostrarán los resultados gracias al operador && */}
				{filteredData.length !== 0 && (
					<div className="dataResult">
						{filteredData.slice(0, 10).map((value, index) => (
							<Link className="dataItem" to={"/songs/id"} key={index}>
								{value[refArray]}
							</Link>
						))}
					</div>
				)}
			</div>
			{filtroBusqueda.buscarPor === "canciones" ? (
				<ListContainer />
			) : (
				<h1>
					Estas filtrando por:
					{filtroBusqueda.buscarPor}
				</h1>
			)}
		</>
	);
};
export default SearchBar;
