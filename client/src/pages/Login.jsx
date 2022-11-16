import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { Routes, Route, useNavigate } from "react-router-dom";

import { loginUsuarioRequest, getUsuarioRequest } from "../api/users.api.js";

const Login = () => {
	const navigate = useNavigate();
	const { setData } = useContext(UserContext);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const loginUsuario = async (data) => {
		try {
			console.log("Entré al loginUsuario");
			const existe = await loginUsuarioRequest(data);
			const idUsuario = await existe.data.numId;

			if (existe.status === 200) {
				console.log("SI EXISTE");
				return idUsuario;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getInformacionUsuario = async (id) => {
		try {
			const res = await getUsuarioRequest(id);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const OnSubmit = async (data) => {
		// loginUsuario(data);
		console.log(data);
		const idUsuario = await loginUsuario(data);
		console.log(idUsuario);
		const usuario = await getInformacionUsuario(idUsuario);
		setData(usuario);
		navigate("/HomeAdmin");
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
				<input type="password" className="LoginHolder" {...register("contrasena", { required: true })}></input>
				{errors.contrasena?.type === "required" && <p className="Error">Debes de escribir tu contraseña</p>}
				<br></br>
				<button type="Submit" className="LoginBtn">
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};

export default Login;
