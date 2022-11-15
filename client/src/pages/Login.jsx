import React from "react";
import { useForm } from "react-hook-form";

import { loginUsuarioRequest } from "../api/users.api.js";

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const loginUsuario = (data) => {
		const a = loginUsuarioRequest(data)
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
		console.log(a);
	};

	const OnSubmit = (data) => {
		loginUsuario(data);
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
				<input type="Submit" className="LoginBtn" value="Iniciar sesion" />
			</form>
		</div>
	);
};

export default Login;
