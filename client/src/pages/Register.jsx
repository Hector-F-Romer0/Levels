import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
	// Useamos el hook userForm(). register permite registrar los campos y crear validaciones
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="Register">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Nombre</label>
				<input type="text" {...register("nombre")} />
				{errors.nombre?.type === "required" && <p>El campo Nombres es requerido</p>}
				<label>Apellidos</label>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:Rodriguez Muñoz"
					id="Apellidos"
					{...register("apellidos")}></input>

				<label className="textRegis">Documento de identidad</label>
				<input type="text" className="Regis" placeholder=" ej:1005785804" id="Id" {...register("id")}></input>
				<label className="textRegis">Nombre de usuario</label>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:xXPepito123proXx"
					id="Usuario"
					{...register("nombreUsuario")}></input>
				<label className="textRegis">Correo</label>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:TerminatorHansolo@gmail.com"
					id="Email"
					{...register("email")}></input>
				<label className="textRegis">Contraseña</label>
				<input
					type="text"
					className="Regis"
					placeholder=" ej:Contraseña123"
					id="Contrasena"
					{...register("contrasena")}></input>
				<label className="textRegis">Repetir contraseña</label>
				<input
					type="text"
					className="Regis"
					placeholder=" Repite la contraseña"
					id="ConfirmarContrasena"
					{...register("confirmarContrasena")}></input>
				<br></br>
				<input type="Submit" value="Registrarse" />
			</form>
		</div>
	);
};

export default Register;
