import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

import FormSubirImg from "../components/FormSubirImg";
import { getGenerosRequest } from "../api/genres.api.js";
import { postAlbumesRequest } from "../api/albums.api.js";

const InsertAlbum = () => {
	const beURL = "http://localhost:4000/api/uploads/img";

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
		console.log("Entra antes de AXIOS");
		const res = await postAlbumesRequest(data);
		console.log(res);
	};

	const selectedImg = (e) => {
		console.log(e.target.files[0]);
		setImagen(e.target.files[0]);
	};

	const onSubmit = (data) => {
		console.log(data);
		if (!imagen) {
			console.log("La imagen no tiene información.");
		}
		const formdata = new FormData();
		formdata.append("imgAlbum", imagen);

		axios({
			method: "post",
			url: "myurl",
			data: data,
			headers: { "Content-Type": "multipart/form-data" },
		});
		formdata.append("data", data);
		// axios.post(beURL, formdata);
		console.log(formdata);
		// fetch("http://localhost:4000/api/uploads", {
		// 	method: "POST",
		// 	body: formdata,
		// });
		setImagen(null);
		// crearUsuarioBD(data);
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
