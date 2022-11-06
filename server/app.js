import express from "express";
import * as dotenv from "dotenv";

// Configuraciones del servidor
const app = express();
dotenv.config();

const port = process.env.PORT;

// * MIDDLEWARES
// Permite la lectura y parseo de los datos que se envíen en el body de la request. Escencial al momento de tratar con peticiones POST, PUT o PATCH.
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hola mundo");
});

app.put("/", (req, res) => {
	res.send("Hola mundo - PUT");
});

app.listen(port, () => console.log(`Server en línea en el puerto ${port} 🔥`));
