import React from "react";
import axios from "axios";

import { useState } from "react";

const FormSubirImg = () => {
	const beURL = "http://localhost:4000/api/uploads";

	const [imagen, setImagen] = useState();

	const selectedImg = (e) => {
		console.log(e.target.files[0]);
		setImagen(e.target.files[0]);
	};

	const sendHandler = () => {
		if (!imagen) {
			console.log("La imagen no tiene información.");
		}

		const formdata = new FormData();
		formdata.append("testImg", imagen);

		axios.post(beURL, formdata);

		// fetch("http://localhost:4000/api/uploads", {
		// 	method: "POST",
		// 	body: formdata,
		// });

		setImagen(null);
	};

	return (
		<>
			<h1>Test de cargar archivo</h1>
			{/* <form action="#" encType="multipart/form-data"> */}
			<label htmlFor="file"></label>
			<input type="file" name="testImg" id="file" accept=".jpg" onChange={selectedImg} />
			<button onClick={sendHandler}>Enviar</button>
			{/* </form> */}
		</>
	);
};

export default FormSubirImg;
