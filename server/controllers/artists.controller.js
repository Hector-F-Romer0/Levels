import { pool } from "../db/conectionDB.js";

const getArtista = async (req, res) => {
	try {
		const [result] = await pool.query(`SELECT * FROM artistas WHERE idArtista='${req.params.id}'`);

		if (result.length === 0) return res.status(404).json({ msg: `El artista con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getArtistas = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM artistas");

		if (result.length === 0) return res.status(404).json({ msg: `No existen artistas en la BD.` });

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const createArtistas = async (req, res) => {
	try {
		const { nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista } = req.body;
		// Se verifica en la BD si YA existe el artista en la BD.
		const [existeArtista] = await pool.query(`SELECT * FROM artistas WHERE nombreArtistico = ?`, [nombreArtistico]);

		// Si el artista existe en la base de datos, devuelve un mensaje y no crea el registro.
		if (existeArtista.length > 0) return res.status(400).json({ msg: "El artista ya está creado en la BD." });

		const [result] = await pool.query("INSERT INTO artistas VALUES (default,?,?,?,?,?,?)", [
			nombres,
			apellidos,
			nombreArtistico,
			fechaNacimiento,
			lugarNacimiento,
			fotoArtista,
		]);

		return res.status(201).json({
			msg: `Insersión del artista ${nombreArtistico} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateArtistas = async (req, res) => {
	try {
		const { nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista } = req.body;
		const [result] = await pool.query(
			"UPDATE artista SET ISRC = IFNULL(?,ISRC), titulo = IFNULL(?,titulo), fechaLanzamiento = IFNULL(?,fechaLanzamiento), rutaCancion = IFNULL(?,rutaCancion), idGenero = IFNULL(?,idGenero), idAlbum = IFNULL(?,idAlbum) WHERE ISRC = ?",
			[nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista, req.params.id]
		);
		if (result.affectedRows === 0)
			return res.status(404).json({
				msg: `La canción con id ${req.params.id} NO EXISTE.`,
			});

		return res.status(203).json({
			msg: `Actualización del canción con id ${req.params.id} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const eliminarArtista = async (req, res) => {
	try {
		const [result] = await pool.query(`DELETE FROM canciones WHERE ISRC='${req.params.id}'`);

		if (result.affectedRows === 0)
			return res.status(404).json({ msg: `La canción con ISRC ${req.params.id} NO EXISTE.` });

		return res.status(200).json({ msg: `Eliminación de la canción con ISRC ${req.params.id} CORRECTA.` });
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { getArtista, getArtistas, createArtistas, updateArtistas, eliminarArtista };
