import express from "express";
import * as dotenv from "dotenv";

import userRoutes from "./routes/users.routes.js";
import genreRoutes from "./routes/genre.routes.js";
import artistsRoutes from "./routes/artists.routes.js";
// import songsRoutes from "./routes/songs.routes.js";
import albumesRoutes from "./routes/albums.routes.js";

// Configuraciones del servidor y paquetes importados
const app = express();
dotenv.config();

const port = process.env.PORT;

// * MIDDLEWARES
// Permite la lectura y parseo de los datos que se envíen en el body de la request.
app.use(express.json());

// Usa la ruta de Usuarios para la administración de estos. Antepone el prefijo '/api'
app.use("/api", userRoutes);
app.use("/api", genreRoutes);
app.use("/api", artistsRoutes);
// app.use("/api", songsRoutes);
app.use("/api", albumesRoutes);

app.listen(port, () => console.log(`Server en línea en el puerto ${port} 🔥`));
