import React from "react";
import "../css/cards.css";

const Songs = ({ infoCancion }) => {
	const apiUrlupload = "http://localhost:4000/uploads";

	return (
		<div className="card">
			<div className="imgCard">
				<img src={`${apiUrlupload}/img/album/${infoCancion.fotoAlbum}`} className="img" alt="img" />
			</div>
			<div className="infoImg">
				<h2>{infoCancion.tituloCancion}</h2>
				<h2>{infoCancion.artista}</h2>
				<h3>{infoCancion.tituloAlbum}</h3>
				<br></br>
				{
					<audio controls>
						<source src={`${apiUrlupload}/music/${infoCancion.rutaCancion}`} />
					</audio>
				}
				<button className="InputSelect2">Actualizar canción</button>
				<button className="InputSelect2">Eliminar canción</button>
			</div>
		</div>
	);
};

export default Songs;
