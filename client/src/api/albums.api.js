import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

// const subirAlbum = axios.create({
// 	method: "post",
// 	url: "myurl",
// 	data: bodyFormData,
// 	headers: { "Content-Type": "multipart/form-data" },
//   })

const getAlbumesRequest = async () => await client.get(`/albums`);

const postAlbumesRequest = async (data) => {
	console.log("Dentro de AXIOS");
	console.log(data);
	await client.post(`/albums`, data);
};

export { getAlbumesRequest, postAlbumesRequest };
