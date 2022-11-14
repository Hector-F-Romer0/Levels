import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/users.routes.js";
import genreRoutes from "./routes/genre.routes.js";
import artistsRoutes from "./routes/artists.routes.js";
import songsRoutes from "./routes/songs.routes.js";
import albumesRoutes from "./routes/albums.routes.js";
import imagesRoutes from "./routes/images.routes.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuraciones del servidor y paquetes importados
const app = express();
dotenv.config();

const port = process.env.PORT;

// * MIDDLEWARES
// Permite la lectura y parseo de los datos que se envíen en el body de la request.
app.use(express.json());

app.use(cors());

console.log(path.resolve(__dirname, "./uploads/"));
const buildPath = path.normalize(path.join(__dirname, "../server/uploads/"));
// app.use(express.static(buildPath));
console.log(buildPath);
app.use("/uploads", express.static(path.join(__dirname, "../server/uploads/")));
// app.use("/uploads1", express.static(__dirname + "/uploads"));
// app.use("/uploads1", express.static(__dirname + "/uploads"));
// console.log(buildPath);
// app.use(express.static(buildPath));
// console.log(__dirname, "./uploads");
// app.use("/uploads", express.static(__dirname, "./uploads/"));
// app.use("/public/images", express.static(__dirname + "/public/images"));
// app.use("/uploadsA", express.static("./uploads"));
// Usa la ruta de Usuarios para la administración de estos. Antepone el prefijo '/api'
app.use("/api", userRoutes);
app.use("/api", genreRoutes);
app.use("/api", artistsRoutes);
app.use("/api", songsRoutes);
app.use("/api", albumesRoutes);
app.use("/api", imagesRoutes);

app.listen(port, () => console.log(`Server en línea en el puerto ${port} 🔥`));
