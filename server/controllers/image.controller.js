import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuraciones de cómo se guardarán los archivos
const storage = multer.diskStorage({
	destination: path.join(__dirname, "../db/src/"),
	filename: (req, file, cb) => {
		cb(null, `${Date.now()} - ${file.originalname}`);
	},
});

const upload = multer({ storage: storage }).single("testImg");

export { upload };
