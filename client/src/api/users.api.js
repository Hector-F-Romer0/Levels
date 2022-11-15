import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const crearUsuarioRequest = async (data) => await client.post(`/users`, data);

const getUsuarioRequest = async (numId) => await client.get(`/users/${numId}`);

const loginUsuarioRequest = async (data) => await client.post(`/login`, data);

export { crearUsuarioRequest, getUsuarioRequest, loginUsuarioRequest };
