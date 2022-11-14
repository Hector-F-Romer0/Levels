import React from "react";
import "../css/cards.css";

const Songs = ({infoCancion}) =>{
	const apiUrlupload = "http://localhost:4000/uploads";
	return (
		<><div className="card">
			<div className="infoImg">
				<img src={`${apiUrlupload}/img/AlbumFaid.png`} className="img" alt="img"/>
				<div className="img"></div>
			</div>
			<div className="infoImg">
				<h2>NombreCancion</h2>
				<h2>Artista</h2>
				<h3>Album</h3>
				<h3>Duracion</h3>
				<audio controls className="reproducir">
					
				</audio>
			</div>

		</div></>
	);
};

export default Songs;
