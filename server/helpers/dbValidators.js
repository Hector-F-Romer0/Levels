import { pool } from "../db/conectionDB.js";

const existeIdUsuario = async (id) => {
	const [result] = await pool.query(`SELECT * FROM usuarios WHERE numId = ?`, [id]);

	if (result.length > 0) throw new Error(`El usuario con número de documento ${id} YA EXISTE en la BD.`);
};

export { existeIdUsuario };
