import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { getGenerosRequest } from "../api/genres.api.js";
import { postAlbumesRequest, getAlbumIdRequest, updateAlbumRequest } from "../api/albums.api.js";
import { subirImagenBD } from "../api/image.api.js";

const InsertAlbum = () => {
	const [imagen, setImagen] = useState();
	const [generos, setGeneros] = useState([]);
	const [loading, setLoading] = useState();

	const cargarGeneros = async () => {
		setLoading(true);
		const res = await getGenerosRequest();
		setGeneros(res.data);
		setLoading(false);
	};

	// Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
	useEffect(() => {
		cargarGeneros();
	}, []);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const crearUsuarioBD = async (data) => {
		try {
			const res = await postAlbumesRequest(data);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const actualizarImgAlbum = async (dataActualizda, idAlbum) => {
		try {
			const res = await updateAlbumRequest(dataActualizda, idAlbum);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const obtenerIdAlbum = async (titulo) => {
		try {
			console.log(titulo);
			const res = await getAlbumIdRequest(titulo);
			return res.data.idAlbum;
		} catch (error) {
			await console.log(error.response);
		}
	};

	// * -------------------------------------------------------------------------------------------------------
	// * TRATAMIENTO PARA SUBIR LA IMAGEN
	const selectedImg = (e) => {
		console.log(e.target.files[0]);
		setImagen(e.target.files[0]);
	};

	// * -------------------------------------------------------------------------------------------------------

	const onSubmit = async (data) => {
		// IMAGEN
		if (!imagen) {
			return console.log("La imagen no tiene información.");
		}

		// 1. Se crea el usuario en la BD sin la url de la imagen. (Se añade después)
		await crearUsuarioBD(data);
		// 2. Obtengo el id del usuario que acabo de crear
		const idBuscado = await obtenerIdAlbum(data.titulo);
		// 3. Configuro la siguiente petición para mandar la imagen
		const formdata = new FormData();
		formdata.append("imgAlbum", imagen);
		subirImagenBD(formdata, idBuscado);
		// 4. Actualizar el atributo de la URL al álbum recíen creado
		const urlAlbum = `${idBuscado}.jpg`;
		console.log(urlAlbum);
		const res = await actualizarImgAlbum(urlAlbum, idBuscado);
		console.log(res);
		setImagen(null);
	};

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div className="Register">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="textRegis">Inserta un artista</label>
				<br></br>
				<br></br>
				<label className="textRegis">Titulo</label>
				<br></br>
				<input
					type="text"
					className="InputSong"
					{...register("titulo", {
						required: true,
					})}></input>
				<br></br>
				{errors.titulo?.type === "required" && <p className="Error">El campo Titulo es requerido</p>}
				<label className="textRegis">Fecha de lanzamiento</label>
				<br></br>
				<input
					type="text"
					className="InputSong"
					{...register("fechaLanzamiento", {
						required: true,
					})}></input>
				<br></br>
				{errors.fechaLanzamiento?.type === "required" && (
					<p className="Error">El campo Fecha de lanzamiento es requerido</p>
				)}

				<label className="UserText">Genero</label>
				<br></br>
				<select
					className="InputSong"
					{...register("idGenero", {
						required: true,
					})}>
					{generos.map((item) => {
						return <option key={item.idGenero}>{item.nombreGenero}</option>;
					})}
				</select>

				<label className="textRegis">Discografía</label>
				<br></br>
				<input
					type="text"
					className="InputSong"
					{...register("discografia", {
						required: true,
					})}></input>
				<br></br>
				{errors.discografia?.type === "required" && <p className="Error">El campo Discografia es requerido</p>}

				<h1>Test de cargar archivo</h1>
				{/* <form action="#" encType="multipart/form-data"> */}
				<label htmlFor="file"></label>
				<input type="file" name="imgAlbum" id="file" accept=".jpg" onChange={selectedImg} />

				<button type="Submit" className="BotonRegis">
					Insertar
				</button>
			</form>
		</div>
	);
};

export default InsertAlbum;
