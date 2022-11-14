import { pool } from "../db/conectionDB.js";

const getUsuario = async (req, res) => {
	try {
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
	console.log(req.body);
	const { numId, nombres, apellidos, nombreUsuario, correo, contrasena, tipoUsuario } = req.body;
	// // Verificación de existencia en la BD
	// const [existeUsuario] = await pool.query(`SELECT * FROM usuarios WHERE numId = ?`, [numId]);
	// // Si la canción existe en la base de datos, devuelve un mensaje y no crea el registro.
	// if (existeUsuario.length > 0)
	// 	return res.status(400).json({ msg: `El usuario con id ${numId} ya existe en la BD.` });

	const [result] = await pool.query("INSERT INTO usuarios VALUES (?,?,?,?,?,?,?)", [
		numId,
		nombres,
		apellidos,
		nombreUsuario,
		correo,
		contrasena,
		tipoUsuario,
	]);

	return res.status(200).json({
		msg: `Insersión del usuario ${nombres} ${apellidos} con id ${numId} CORRECTO.`,
	});
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
