import express from "express";
import * as dotenv from "dotenv";

import userRoutes from "./routes/users.routes";

// Configuraciones del servidor
const app = express();
dotenv.config();

const port = process.env.PORT;

// * MIDDLEWARES
// Permite la lectura y parseo de los datos que se envíen en el body de la request. Escencial al momento de tratar con peticiones POST, PUT o PATCH.
app.use(express.json());

// Usa la ruta de Usuarios para la administración de estos
app.use(userRoutes);

app.listen(port, () => console.log(`Server en línea en el puerto ${port} 🔥`));
