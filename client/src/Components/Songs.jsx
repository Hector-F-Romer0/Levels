import React from "react";
import "../css/cards.css";

const Songs = ({ infoCancion }) => {
	const apiUrlupload = "http://localhost:4000/uploads";

	return (
		<div className="card">
			<div className="infoImg">
				<img src={`${apiUrlupload}/Indeleble Album.jpg`} alt="img" />
				<div className=""></div>
			</div>
			<div className="infoImg">
				<h2>{infoCancion.titulo}</h2>
				<h2>{infoCancion.artista}</h2>
				<h3>NombrAlbum</h3>
				<audio controls>
					<source src={`${apiUrlupload}/${infoCancion.rutaCancion}`} />
				</audio>
			</div>
		</div>
	);
};

export default Songs;
