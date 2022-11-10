import { pool } from "../db/conectionDB.js";

const getUsuarios = (req, res) => {
	res.send("Hola mundo - GET");
};

const createUsuarios = async (req, res) => {
	try {
		const { numId, nombres, apellidos, nombreUsuario, correo, contrasena, tipo } = req.body;
		console.log(req.body);
		const [result] = await pool.query("INSERT INTO usuarios VALUES (?,?,?,?,?,?,?)", [
			numId,
			nombres,
			apellidos,
			nombreUsuario,
			correo,
			contrasena,
			tipo,
		]);
		console.log("---------------------------------");
		console.log(result);

		return res.status(200).json({
			msg: `Insersión del usuario ${nombres} ${apellidos} con id ${numId} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateUsuarios = (req, res) => {
	res.send("Hola mundo - put");
};

const deleteUsuarios = (req, res) => {
	res.send("Hola mundo - delete");
};

// router.get("/ping", async (req, res) => {
// 	// const [result] = await pool.query("SELECT 1 +1 AS RESULT");
// 	const [result] = await pool.query("SHOW TABLES");
// 	res.json(result);
// });

export { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios };
