import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getGenerosRequest = async () => await client.get(`/genres`);
const postGenerosRequest = async (data) => await client.post(`/genres`, data);
export { getGenerosRequest, postGenerosRequest };
