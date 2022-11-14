import axios from "axios";

const beURI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: beURI,
});

const crearUsuarioRequest = async (data) => {
	console.log("En request");
	console.log(data);
	// return await client.post(`/users`, data);
	axios.post(beURI, { data }).then((res) => {
		console.log(res);
		console.log(res.data);
	});
};
export { crearUsuarioRequest };
