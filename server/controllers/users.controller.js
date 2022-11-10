import { pool } from "../db/conectionDB.js";

const getUsuario = async (req, res) => {
	try {
		console.log(req.params.id);
		const [result] = await pool.query(`SELECT * FROM usuarios WHERE numeroIdentificacion='${req.params.id}'`);

		// Si el resultado es un array vacío, significa que no encontró un registro con el id mandada en la URL
		if (result.length === 0) return res.status(404).json({ msg: `El usuario con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getUsuarios = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM usuarios");
		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
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

export { getUsuario, getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios };
