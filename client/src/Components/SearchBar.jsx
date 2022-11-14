import React from "react";
import { useState } from "react";
import "../css/styles.css";

const SearchBar = ({ data }) => {
	const [filteredData, setFilteredData] = useState([]);

	const handleFilter = (event) => {
		const palabraBuscada = event.target.value;
		console.log(palabraBuscada);
		const filtro = data.filter((value) => {
			return value.titulo.toLowerCase().includes(palabraBuscada.toLowerCase());
		});

		if (palabraBuscada === "") {
			setFilteredData([]);
		} else {
			setFilteredData(filtro);
		}
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input className="inputSearchBar" type="text" onChange={handleFilter} />
				<div className="searchIcon"></div>
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
	);
};

export default SearchBar;
