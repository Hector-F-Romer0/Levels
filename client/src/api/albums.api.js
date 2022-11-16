import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const getAlbumesRequest = async () => await client.get(`/albums`);

const postAlbumesRequest = async (data) => {
	console.log("Dentro de AXIOS");
	console.log(data);
	return await client.post(`/albums`, data);
};

const getAlbumIdRequest = async (titulo) => {
	return await client.post("/findAlbumbyName/", { titulo: titulo });
};

const updateAlbumRequest = async (data, id) => {
	return await client.patch(`${beURI}/albums/${id}`, {
		fotoAlbum: data,
	});
};

export { getAlbumesRequest, postAlbumesRequest, getAlbumIdRequest, updateAlbumRequest };
