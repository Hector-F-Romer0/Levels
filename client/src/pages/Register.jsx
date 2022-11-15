import React from "react";
import { useForm } from "react-hook-form";

import { crearUsuarioRequest } from "../api/users.api.js";

const Register = () => {
	// Useamos el hook userForm(). register permite registrar los campos y crear validaciones
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const api = async (data) => {
		const a = await crearUsuarioRequest(data);
		return a;
	};

	const onSubmit = async (data) => {
		// Añadimos a la información del formulario el atributo "tipo", de esta manera se puede insertar el usuario en la BD
		data.tipoUsuario = "Usuario";
		console.log(data);
		const a = await api(data);
		console.log(a);
		// Mandamos la información a la base de datos

		// enviarDatosAPI(data);
	};
	return (
		<div className="Register">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="textRegis">Nombres</label>
				<br></br>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:Luis Miguel"
					id="nombres"
					{...register("nombres", {
						required: true,
						maxLength: 50,
					})}
				/>
				{errors.nombres?.type === "required" && <p className="Error">El campo Nombres es requerido</p>}
				{errors.nombres?.type === "maxLength" && (
					<p className="Error">El campo Nombres no debe de tener más de 50 letras</p>
				)}
				<br></br>
				<label className="textRegis">Apellidos</label>
				<br></br>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:Rodriguez Muñoz"
					id="apellidos"
					{...register("apellidos", {
						required: true,
						maxLength: 50,
					})}></input>
				{errors.apellidos?.type === "required" && <p className="Error">El campo Apellidos es requerido</p>}
				{errors.apellidos?.type === "maxLength" && (
					<p className="Error">El campo Apellidos no debe de tener más de 50 letras</p>
				)}
				<br></br>
				<label className="textRegis">Documento de identidad</label>
				<br></br>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:1005785804"
					id="id"
					{...register("numId", { required: true })}></input>
				{errors.numId?.type === "required" && (
					<p className="Error">El campo Documento de identidad es requerido</p>
				)}
				<br></br>
				<label className="textRegis">Nombre de usuario</label>
				<br></br>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:xXPepito123proXx"
					id="nombreUsuario"
					{...register("nombreUsuario", { required: true })}></input>
				{errors.nombreUsuario?.type === "required" && (
					<p className="Error">El campo Nombre de Usuario es requerido</p>
				)}
				<br></br>
				<label className="textRegis">Correo</label>
				<br></br>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:TerminatorHansolo@gmail.com"
					id="email"
					{...register("correo", { required: true })}></input>
				{errors.correo?.type === "required" && <p className="Error">El campo Correo es requerido</p>}
				<br></br>
				<label className="textRegis">Contraseña</label>
				<br></br>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:Contraseña123"
					id="contrasena"
					{...register("contrasena", { required: true })}></input>
				{errors.contrasena?.type === "required" && <p className="Error">El campo Contraseña es requerido</p>}
				<br></br>
				<input type="Submit" className="BotonRegis" value="Registrarse" />
			</form>
		</div>
	);
};

export default Register;
