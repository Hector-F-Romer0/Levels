import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const crearUsuarioRequest = async (data) => await client.post(`/users`, data);

export { crearUsuarioRequest };
