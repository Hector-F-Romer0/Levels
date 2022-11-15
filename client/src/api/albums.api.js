import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
    baseURL: beURI,
});

const getAlbumesRequest = async () => await client.get(`/albums`);
export { getAlbumesRequest }; 