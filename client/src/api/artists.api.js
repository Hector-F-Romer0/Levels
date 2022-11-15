import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getArtistasHomeRequest = async () => await client.get(`/artists`);
export { getArtistasHomeRequest };
