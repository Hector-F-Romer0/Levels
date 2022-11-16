import axios from "axios";

const beURI = "http://localhost:4000/api/uploads";

const subirImagenBD = async (formdata, idAlbum) => await axios.post(`${beURI}/img/album/${idAlbum}`, formdata);

const subirAudioBD = async (formdata, isrc) => await axios.post(`${beURI}/audio/${isrc}`, formdata);

// const getCancionRequest = async (id) => await client.get(`/song/${id}`);

export { subirImagenBD, subirAudioBD };
