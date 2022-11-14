import React from "react";
import "../css/cards.css";

const Songs = () => {
	return (
		<div className="card">
			<div className="infoImg">
				{/* <img src="" alt="ortegonGei" /> */}
				<div className="img"></div>
			</div>
			<div className="infoImg">
				<h2>Titulo canción</h2>
				<h2>NombreArtista</h2>
				<h3>NombrAlbum</h3>
				<audio controls>
					<source src="./Feid - Ateo.wav " />
				</audio>
			</div>
		</div>

		// <div className="Contenedor2">
		// 	<div className="card">
		// 		<div className="box">
		// 			<div class="content">
		// 				<img src=".../public/Img/Bosboni.png" alt="" className="foto1" />
		// 				<h3 className="Artista">Bosboni</h3>
		// 				<p className="Informacion">Info zzz</p>
		// 				<a href="#" className="Cancion">
		// 					Ingresar canción
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Songs;
