import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const postCancionRequest = async (data) => {
	return await client.post(`/songs`, data);
};

const getYearRequest = async () => await client.get(`/home/songs/years`);
export { getYearRequest, postCancionRequest };
