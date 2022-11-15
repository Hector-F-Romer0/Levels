import React, { createContext, useState } from "react";
import { getCancionesHomeRequest } from "../api/searchs.api";

export const CancionesContext = createContext();

// CancionesProvider le otorgará a todos los componentes los estados y métodos que se exporten con el provider
export const CancionesProvider = ({ children }) => {
	const [canciones, setCanciones] = useState([]);
	const [loadingCanciones, setLoadingCanciones] = useState();

	const cargarCanciones = async () => {
		setLoadingCanciones(true);
		const res = await getCancionesHomeRequest();
		setCanciones(res.data);
		setLoadingCanciones(false);
		console.log(canciones);
		console.log(canciones[8]);
	};

	return (
		<CancionesContext.Provider
			value={{
				canciones,
				setCanciones,
				loadingCanciones,
				setLoadingCanciones,
				cargarCanciones,
			}}>
			{children}
		</CancionesContext.Provider>
	);
};
