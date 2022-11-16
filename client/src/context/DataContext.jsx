import React, { createContext, useState } from "react";
import { getUsuarioRequest } from "../api/users.api";
export const DataContext = createContext();

const dataFixed = {
  nombreUsuario: "FernandoManosBisturí",
  contresena: "1234",
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataFixed);

const cargarDatosUsuario= async (numId)=>{
    const res = await getUsuarioRequest(numId)
    console.log(res)
}

  return (
    <DataContext.Provider
      value={{
        getUsuarioRequest,
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
