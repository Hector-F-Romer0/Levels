import React from "react";
import { useForm } from "react-hook-form";

import { loginUsuarioRequest } from "../api/users.api.js";

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const loginUsuario = async (data) => {
		console.log("Entré al loginUsuario");
		const a = await loginUsuarioRequest(data)
			console.log(a);
	};

	const OnSubmit = (data) => {
		console.log("Holiwis")
		loginUsuario(data);
		console.log("Entré al onsubmit")
	};

	return (
		<div className="Login">
			<form onSubmit={handleSubmit(OnSubmit)}>
				<label className="LoginText">Usuario</label>
				<br></br>
				<input type="input" className="LoginHolder" {...register("nombreUsuario", { required: true })}></input>
				{errors.usuario?.type === "required" && <p className="Error">Debes de escribir tu usuario</p>}
				<br></br>
				<label className="LoginText">Contraseña</label>
				<br></br>
				<input type="input" className="LoginHolder" {...register("contrasena", { required: true })}></input>
				{errors.contrasena?.type === "required" && <p className="Error">Debes de escribir tu contraseña</p>}
				<br></br>
				<button type="Submit" className="LoginBtn" >Iniciar sesión</button>
			</form>
		</div>
	);
};

export default Login;
