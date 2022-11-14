import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "../db/conectionDB.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuraciones de cómo se guardarán los archivos
const storage = multer.diskStorage({
	destination: path.resolve(__dirname, "../uploads/"),
	filename: (req, file, cb) => {
		cb(null, `${file.originalname}`);
	},
});

// filename: (req, file, cb) => {
// 	cb(null, `${Date.now()}-${file.originalname}`);
// },

// Especificamos que se subirá un solo archivo que tenga el id de 'testImg'
const upload = multer({ storage: storage }).single("testImg");

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

export { upload, getImagen };
