import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getGenerosRequest, postGenerosRequest} from "../api/genres.api.js";

const InserGenero = () => {
	const [generos, setGeneros] = useState([]);

	const [loading, setLoading] = useState();

	// const cargarGeneros = async () => {
	// 	setLoading(true);
	// 	const res = await getGenerosRequest();
	// 	console.log(res.data);
	// 	setGeneros(res.data);
	// 	//console.log(generos)
	// 	setLoading(false);
	// };

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
        crearGenero(data);
		console.log(data);
	};

    const crearGenero = async (data)=>{
        const res = await postGenerosRequest(data);
        console.log("Ya hice post")
    };

	if (loading) {
		return <h1>Cargando...</h1>;
	}

	return (
		<div className="Register">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="UserText">Ingresa un género</h1>
				<br></br>
				<h1 className="UserText">Género</h1>
				<input
					type="text"
					className="InputSong"
					{...register("nombreGenero", {
						required: true,
					})}></input>
                    <br></br>
				{errors.genero?.type === "required" && <p className="Error">El campo género es requerido</p>}
				<button type="Submit" className="BotonRegis" >Enviar</button>
			</form>
		</div>
	);
};
export default InserGenero;