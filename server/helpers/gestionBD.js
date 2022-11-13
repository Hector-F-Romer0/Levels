import { pool } from "../db/conectionDB.js";

const verificarExiste = async (valorABuscar, atributo, tablaABuscar) => {
	const [result] = await pool.query(`SELECT * FROM ${tablaABuscar} WHERE ${atributo}='${valorABuscar}'`);
	console.log(`Valor del result: ${result}`);
	const existe = result.length > 0 ? (existe = true) : (existe = false);
	return existe;
};

export { verificarExiste };
