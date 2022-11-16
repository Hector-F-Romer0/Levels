import React from "react";

import { parsearFechaCompleta } from "../helpers/convertFormats.js";

const ArtistsCard = ({ infoArtista }) => {
	const apiUrlupload = "http://localhost:4000/uploads";

	return (
		<div className="cardArtist">
			<div className="imgCard">
				<img src={`${apiUrlupload}/img/Indeleble Album.jpg`} className="img" alt="img" />
			</div>
			<div className="infoImg">
				<h1>{infoArtista.nombreArtistico}</h1>
				{infoArtista.apellidos === "" ? <h4>Grupo musical</h4> : <h4>Artista</h4>}
				<h2>{infoArtista.nombres}</h2>
				<h2>{infoArtista.apellidos}</h2>
				<h2>Originario de: {infoArtista.lugarNacimiento}</h2>
				{infoArtista.apellidos === "" ? (
					<h2>Año de fundación: ${infoArtista.fechaNacimiento}</h2>
				) : (
					<h2>Fecha nacimiento: {infoArtista.fechaNacimiento}</h2>
				)} <button className="InputSelect2">Actualizar Artista</button>
				<button className="InputSelect2">Eliminar Artista</button>
			</div>
		</div>
	);
};

export default ArtistsCard;
