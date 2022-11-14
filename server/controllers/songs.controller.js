import { pool } from "../db/conectionDB.js";

const getCancion = async (req, res) => {
	try {
		const [result] = await pool.query(`SELECT * FROM canciones WHERE ISRC='${req.params.id}'`);

		if (result.length === 0) return res.status(404).json({ msg: `La canción con ISRC ${req.params.id} NO EXISTE.` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getCanciones = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM canciones");

		if (result.length === 0) return res.status(404).json({ msg: `No existen canciones en la BD.` });

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const createCanciones = async (req, res) => {
	try {
		const { ISRC, titulo, añoLanzamiento, rutacancion, idGenero, idAlbum } = req.body;
		// Se verifica en la BD si YA existe la canción en la BD.
		const [existeCancion] = await pool.query(`SELECT * FROM canciones WHERE ISRC = ?`, [ISRC]);

		// Si la canción existe en la base de datos, devuelve un mensaje y no crea el registro.
		if (existeCancion.length > 0) return res.status(400).json({ msg: "La canción ya está creada en la BD." });

		const [result] = await pool.query("INSERT INTO canciones VALUES (?,?,?,?,?,?,?)", [
			ISRC,
			titulo,
			fechaLanzamiento,
			rutacancion,
			idGenero,
			idAlbum
		]);

		return res.status(200).json({
			msg: `Insersión de la cancion ${nombreArtistico} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateCanciones = async (req, res) => {
	try {
		const { nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista } = req.body;
		console.log(req.body);
		const [result] = await pool.query(
			"UPDATE canciones SET nombres = IFNULL(?,nombres), apellidos = IFNULL(?,apellidos), nombreArtistico = IFNULL(?,nombreArtistico), fechaNacimiento = IFNULL(?,fechaNacimiento), lugarNacimiento = IFNULL(?,lugarNacimiento), fotoArtista = IFNULL(?,fotoArtista) WHERE idArtista = ?",
			[nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista, req.params.id]
		);
		if (result.affectedRows === 0)
			return res.status(404).json({
				msg: `El artista con id ${req.params.id} NO EXISTE.`,
			});

		return res.status(203).json({
			msg: `Actualización del artista con id ${req.params.id} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const eliminarCanciones = async (req, res) => {
	try {
		const [result] = await pool.query(`DELETE FROM artistas WHERE idArtista='${req.params.id}'`);

		if (result.affectedRows === 0)
			return res.status(404).json({ msg: `Elartistas con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json({ msg: `Eliminación del artistas con id ${req.params.id} CORRECTA.` });
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { getCancion, getCanciones, createCanciones, updateCanciones, eliminarCanciones };