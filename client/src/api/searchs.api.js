import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getCancionesHomeRequest = async () => await client.get(`/home/songs`);

const getCancionRequest = async (id) => await client.get(`/song/${id}`);

export { getCancionesHomeRequest };
