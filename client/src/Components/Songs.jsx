import React from "react";
import "../css/cards.css";

const Songs = ({ infoCancion }) => {
	const apiUrlupload = "http://localhost:4000/uploads";

	return (
		<div className="card">
			<div className="imgCard">
				<img src={`${apiUrlupload}/img/Indeleble Album.jpg`} className="img" alt="img" />
			</div>
			<h1>{infoCancion.titulo}</h1>
			<div className="infoImg">
				<h2>{infoCancion.tituloCancion}</h2>
				<h2>{infoCancion.artista}</h2>
				<h3>{infoCancion.tituloAlbum}</h3>
				{/* <audio controls>
					<source src={`${apiUrlupload}/music/${infoCancion.rutaCancion}`} />
				</audio> */}
			</div>
		</div>
	);
};

export default Songs;
