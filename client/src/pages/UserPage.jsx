import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
	const params = useParams();

	console.log(params);

	return (
		<>
			<div className="User">
				<h1 className="UserText">Usuario {params.id}</h1>
				<p className="UserText2">XxPepitoPro123xX</p>
				<h1 className="UseText">Nombres</h1>
				<p className="UserText2">Jose Luis</p>
				<h1 className="UserText">Apellidos</h1>
				<p className="UserText2">Rodriguez</p>
				<h1 className="UserText">Número de identidad</h1>
				<p className="UserText2">1232444242</p>
				<h1 className="UserText">Correo</h1>
				<p className="UserText2">Hansolo@gmail.com</p>
			</div>
		</>
	);
};

export default UserPage;
