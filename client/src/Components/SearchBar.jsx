import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CancionesContext } from "../context/CancionesContext";

import "../css/styles.css";
import "../css/searchBar.css";
import ListContainer from "./lists/ListContainer";
import GenreList from "./lists/GenreList";

const SearchBar = () => {
	const { canciones, setFiltroBusqueda, filtroBusqueda } = useContext(CancionesContext);
	const [filteredData, setFilteredData] = useState([]);

	const handleFilter = (event) => {
		const palabraBuscada = event.target.value;
		let filtro = "";

		if (filtroBusqueda.buscarPor === "artistas") {
			filtro = canciones.filter((value) => {
				return value.nombreArtistico.toLowerCase().includes(palabraBuscada.toLowerCase());
			});
		} else if (filtroBusqueda.buscarPor === "canciones") {
			filtro = canciones.filter((value) => {
				return value.tituloCancion.toLowerCase().includes(palabraBuscada.toLowerCase());
			});
		} else if (filtroBusqueda.buscarPor === "albumes") {
			filtro = canciones.filter((value) => {
				return value.titulo.toLowerCase().includes(palabraBuscada.toLowerCase());
			});
		}
		if (palabraBuscada === "") {
			setFilteredData([]);
		} else {
			setFilteredData(filtro);
		}
	};

	const last = (value, index) => {
		if (filtroBusqueda.buscarPor === "artistas") {
			return (
				<Link className="dataItem" to={"/songs/id"} key={index}>
					{value.nombreArtistico}
				</Link>
			);
		} else if (filtroBusqueda.buscarPor === "canciones") {
			return (
				<Link className="dataItem" to={"/songs/id"} key={index}>
					{value.tituloCancion}
				</Link>
			);
		} else if (filtroBusqueda.buscarPor === "albumes") {
			return (
				<Link className="dataItem" to="/songs/id" key={index}>
					{value.titulo}
				</Link>
			);
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
						{filteredData.slice(0, 10).map((value, index) => last(value, index))}
					</div>
				)}
			</div>
			{filtroBusqueda.buscarPor === "canciones" ? (
				<ListContainer />
			) : (
				filtroBusqueda.buscarPor === "artistas" && <GenreList />
			)}
		</>
	);
};
export default SearchBar;
