import React from "react";
import { useState } from "react";

const FormSubirImg = () => {
	const [imagen, setImagen] = useState();

	const selectedImg = (e) => {
		// const file = e.files.target[0];
		console.log(e.target.files[0]);
		setImagen(e.target.files[0]);
	};

	const sendHandler = () => {
		if (!imagen) {
			console.log("La imagen no tiene información.");
		}

		const formdata = new FormData();
		formdata.append("testImg", imagen);

		fetch("http://localhost:4000/image", {
			method: "POST",
			body: formdata,
		});

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
