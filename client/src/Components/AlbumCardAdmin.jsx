import React from "react";

const AlbumCard = ({ infoAlbum }) => {
	const apiUrlupload = "http://localhost:4000/uploads";
	return (
		<div className="card">
			<div className="imgCard">
				<img src={`${apiUrlupload}/img/album/${infoAlbum.fotoAlbum}`} className="img" alt="img" />
			</div>
			<div className="infoImg">
				<h1>{infoAlbum.titulo}</h1>
				<h2>Fecha lanzamiento: {infoAlbum.fechaLanzamiento}</h2>
				<h2>{infoAlbum.discografia}</h2>
				<button className="InputSelect2">Actualizar Canción</button>
				<button className="InputSelect2">Eliminar Canción</button>
			</div>
		</div>
	);
};

export default AlbumCard;
