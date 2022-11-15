import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getCancionesHomeRequest = async () => await client.get(`/home/songs`);

const getCancionesHomeYearRequest = async (yearFiltro) => await client.get(`/home/songs/years/query/${yearFiltro}`);

const getIdGeneroRequest = async (genero) => await client.post(`/find/genre`, genero);

const getCancionRequest = async (id) => await client.get(`/song/${id}`);

export { getCancionesHomeRequest, getCancionesHomeYearRequest, getIdGeneroRequest };
