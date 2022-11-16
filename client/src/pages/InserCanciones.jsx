import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getGenerosRequest } from "../api/genres.api.js";
import { getAlbumesRequest } from "../api/albums.api.js";
import { postCancionRequest } from "../api/songs.api.js";
import { subirAudioBD } from "../api/image.api";

const InserCanciones = () => {
	const [cancionASubir, setCancionASubir] = useState();
	const [generos, setGeneros] = useState([]);
	const [loading, setLoading] = useState();
	const [albumes, setAlbumes] = useState([]);

	const cargarGeneros = async () => {
		setLoading(true);
		const res = await getGenerosRequest();
		setGeneros(res.data);
		//console.log(generos)
		setLoading(false);
	};

	const cargarAlbumes = async () => {
		setLoading(true);
		const res = await getAlbumesRequest();
		setAlbumes(res.data);
		setLoading(false);
	};

	// Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
	useEffect(() => {
		cargarGeneros();
		cargarAlbumes();
	}, []);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const crearCancionBD = async (data) => {
		try {
			const res = await postCancionRequest(data);
			// return res;
		} catch (error) {
			console.log(error);
		}
	};

	const selectedAudio = (e) => {
		console.log(e.target.files[0]);
		setCancionASubir(e.target.files[0]);
	};

	const onSubmit = (data) => {
		console.log(data);
		if (!cancionASubir) {
			return console.log("La imagen no tiene información.");
		}

		crearCancionBD(data);
		let urlCancion = data.isrc;
		urlCancion = `${urlCancion}.wav`;
		console.log(urlCancion);
		const formdata = new FormData();
		formdata.append("audioCancion", cancionASubir);
		subirAudioBD(formdata, urlCancion);

		setCancionASubir(null);
	};

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div className="Register">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="UserText">Ingresa una canción</h1>
				<br></br>
				<h1 className="UserText">ISRC</h1>
				<input
					type="text"
					className="InputSong"
					{...register("isrc", {
						required: true,
					})}></input>
				{errors.isrc?.type === "required" && <p className="Error">El campo ISRC es requerido</p>}
				<h1 className="UserText">Titulo</h1>
				<input
					type="text"
					className="InputSong"
					{...register("titulo", {
						required: true,
					})}></input>
				{errors.titulo?.type === "required" && <p className="Error">El campo Titulo es requerido</p>}
				<h1 className="UserText">Fecha de lanzamiento</h1>
				<input
					type="text"
					className="InputSong"
					{...register("fechaLanzamiento", {
						required: true,
					})}></input>
				{errors.fechaLanzamiento?.type === "required" && (
					<p className="Error">El campo Fecha de lanzamiento es requerido</p>
				)}

				<h1 className="UserText">Id del album</h1>
				<select
					className="InputSong"
					{...register("idAlbum", {
						required: true,
					})}>
					{albumes.map((item) => {
						return (
							<option value={item.idAlbum} key={item.idAlbum}>
								{item.titulo}
							</option>
						);
					})}
				</select>
				<h1 className="UserText">Duración</h1>
				<input
					type="text"
					className="InputSong"
					{...register("duracion", {
						required: true,
					})}></input>
				{errors.duracion?.type === "required" && <p className="Error">El campo Duración es requerido</p>}
				<h1 className="UserText">Genero</h1>
				<select
					className="InputSong"
					{...register("idGenero", {
						required: true,
					})}>
					{generos.map((item) => {
						return (
							<option value={item.idGenero} key={item.idGenero}>
								{item.nombreGenero}
							</option>
						);
					})}
				</select>
				{errors.idGenero?.type === "required" && <p className="Error">El campo Genero es requerido</p>}
				<br></br>

				<label htmlFor="file">Imágen del album</label>
				<input type="file" name="audioCancion" id="file" accept=".wav" onChange={selectedAudio} />

				<button type="Submit" className="BotonRegis">
					Insertar
				</button>
			</form>
		</div>
	);
};
export default InserCanciones;
