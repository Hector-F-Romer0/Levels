import React from "react";
import "../css/cards.css";

const Songs = ({ infoCancion }) => {
	const apiUrlupload = "http://localhost:4000/uploads";

	return (
		<div className="card">
			<div className="imgCard">
				<img src={`${apiUrlupload}/img/Indeleble Album.jpg`} className="img" alt="img" />
			</div>
			<div className="infoImg">
				<h2>{infoCancion.titulo}</h2>
				<h2>{infoCancion.artista}</h2>
				<h3>Artista</h3>
				<h3>NombreAlbum</h3>
				<audio controls className="audiplay">
					<source src={`${apiUrlupload}/music/${infoCancion.rutaCancion}`} />
					<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js"></script>
				</audio>
				
			</div>
		</div>
	);
};

export default Songs;
