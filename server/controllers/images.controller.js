import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "../db/conectionDB.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuraciones de cómo se guardarán los archivos
const storage = multer.diskStorage({
	destination: path.resolve(__dirname, "../uploads/music/"),
	filename: (req, file, cb) => {
		cb(null, `${file.originalname}`);
	},
});

const filtrarSoloImagenes = (req, file, cb) => {
	const ext = path.extname(file.originalname);
	if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
		return callback(new Error("Las imágenes debe estar en formato .png, .jpg, .jpeg o .gif"));
	}
	callback(null, true);
};

const filtrarSoloAudios = (req, file, cb) => {
	const ext = path.extname(file.originalname);
	if (ext !== ".mp3" && ext !== ".wav") {
		return callback(new Error("La canción debe estar en formato .wav o .mp3"));
	}
	callback(null, true);
};

// Especificamos que se subirá un solo archivo que tenga el id de 'testImg'
const uploadImage = multer({ storage: storage, fileFilter: filtrarSoloImagenes }).single("testImg");
const uploadAudio = multer({ storage: storage, fileFilter: filtrarSoloAudios }).single("testAudio");

// * CONFIGURACIONES DEL ACCESO A LA IMAGEN
const getImagen = async (req, res) => {
	try {
		const [result] = await pool.query(`SELECT rutaCancion FROM canciones WHERE isrc='${req.params.isrc}'`);

		if (result.length === 0) return res.status(404).json({ msg: `TRY` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { uploadAudio, uploadImage, getImagen };
