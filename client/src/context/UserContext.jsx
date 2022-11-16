import React, { createContext, useState } from "react";
import { getUsuarioRequest } from "../api/users.api";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [data, setData] = useState({});

	const cargarDatosUsuario = async (numId) => {
		const res = await getUsuarioRequest(numId);
		console.log(res);
	};

	return (
		<UserContext.Provider
			value={{
				data,
				setData,
				cargarDatosUsuario,
			}}>
			{children}
		</UserContext.Provider>
	);
};
