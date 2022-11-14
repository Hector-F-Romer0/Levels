import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getCancionesRequest = async () => await client.get(`/songs`);

const getCancionesRecientesRequest = async () => await client.get(`/lastSongs`);

const getCancionRequest = async (id) => await client.get(`/song/${id}`);

export { getCancionesRequest, getCancionRequest, getCancionesRecientesRequest };
