import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuraciones de cómo se guardarán los archivos
const storage = multer.diskStorage({
	destination: path.resolve(__dirname, "../db/uploads/"),
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

// Especificamos que se subirá un solo archivo que tenga el id de 'testImg'
const upload = multer({ storage: storage }).single("testImg");

export { upload };
