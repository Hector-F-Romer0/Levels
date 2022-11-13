import React from "react";

import FormSubirImg from "../components/FormSubirImg";
import Songs from "../components/Songs";

const HomePage = () => {
	return (
		<div className='Contenedor1'>
			<input typeof='text' className='Buscador' placeholder='Buscar'></input>
			<FormSubirImg />
			<Songs />
		</div>
	);
};

export default HomePage;
