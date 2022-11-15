import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getCancionesHomeRequest = async () => await client.get(`/home/songs`);

const getCancionesHomeYearRequest = async (yearFiltro) => await client.get(`/home/songs/years/query/${yearFiltro}`);

const getIdGeneroYFiltrarRequest = async (genero) => await client.post(`/find/genre`, { nombreGenero: genero });

const getIdAlbumYFiltrarRequest = async (album) => await client.post(`/find/album`, { nombreAlbum: album });

// const getCancionRequest = async (id) => await client.get(`/song/${id}`);

export { getCancionesHomeRequest, getCancionesHomeYearRequest, getIdGeneroYFiltrarRequest, getIdAlbumYFiltrarRequest };
