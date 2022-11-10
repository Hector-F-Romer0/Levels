import { pool } from "../db/conectionDB.js";

const getUsuario = async (req, res) => {
	try {
		console.log(req.params.id);
		const [result] = await pool.query(`SELECT * FROM usuarios WHERE numId='${req.params.id}'`);

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

		if (result.length === 0) return res.status(404).json({ msg: `No existen usuarios en la BD.` });

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
		const [result] = await pool.query("INSERT INTO usuarios VALUES (?,?,?,?,?,?,?)", [
			numId,
			nombres,
			apellidos,
			nombreUsuario,
			correo,
			contrasena,
			tipo,
		]);

		return res.status(200).json({
			msg: `Insersión del usuario ${nombres} ${apellidos} con id ${numId} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateUsuarios = async (req, res) => {
	try {
		const { nombres, apellidos, nombreUsuario, correo, contrasena, tipo } = req.body;
		const [result] = await pool.query(
			"UPDATE usuarios SET nombres = IFNULL(?,nombres), apellidos = IFNULL(?,apellidos), nombreUsuario = IFNULL(?,nombreUsuario), correo = IFNULL(?,correo), contrasena = IFNULL(?,contrasena), tipo = IFNULL(?,tipo) WHERE numId = ?",
			[nombres, apellidos, nombreUsuario, correo, contrasena, tipo, req.params.id]
		);
		if (result.affectedRows === 0)
			return res.status(404).json({
				msg: `El usuario con id ${req.params.id} NO EXISTE.`,
			});

		return res.status(203).json({
			msg: `Actualización del usuario con id ${req.params.id} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const eliminarUsuario = async (req, res) => {
	try {
		const [result] = await pool.query(`DELETE FROM usuarios WHERE numId='${req.params.id}'`);

		if (result.affectedRows === 0)
			return res.status(404).json({ msg: `El usuario con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json({ msg: `Eliminación del usuario con id ${req.params.id} CORRECTA.` });
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { getUsuario, getUsuarios, createUsuarios, updateUsuarios, eliminarUsuario };
