import { pool } from "../db/conectionDB.js";

const getCancion = async (req, res) => {
	try {
		const [result] = await pool.query(`SELECT * FROM canciones WHERE ISRC='${req.params.id}'`);

		if (result.length === 0)
			return res.status(404).json({ msg: `La canción con ISRC ${req.params.id} NO EXISTE.` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getCanciones = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM canciones LIMIT 10");

		if (result.length === 0) return res.status(404).json({ msg: `No existen canciones en la BD.` });

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getCancionesRecientes = async (req, res) => {
	try {
		const [result] = await pool.query(
			"SELECT axc.isrc, a.nombreArtistico AS artista, a.fotoArtista, c.titulo AS tituloCancion,c.rutaCancion, c.fechaLanzamiento, c.duracion, g.nombreGenero, al.titulo AS tituloAlbum,al.fotoAlbum FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum ORDER BY c.fechaInsercion DESC LIMIT 10;"
		);

		if (result.length === 0) return res.status(404).json({ msg: `No existen canciones en la BD.` });

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const createCancion = async (req, res) => {
	try {
		const { isrc, titulo, fechaLanzamiento, rutaCancion, idGenero, idAlbum, duracion } = req.body;
		console.log(req.body);
		// Se verifica en la BD si YA existe la canción en la BD.
		const [existeCancion] = await pool.query(`SELECT * FROM canciones WHERE isrc = ?`, [isrc]);

		// Si la canción existe en la base de datos, devuelve un mensaje y no crea el registro.
		if (existeCancion.length > 0) return res.status(400).json({ msg: "La canción ya está creada en la BD." });

		const [result] = await pool.query("INSERT INTO canciones VALUES (?,?,?,?,?,?,?,default)", [
			isrc,
			titulo,
			fechaLanzamiento,
			rutaCancion,
			idGenero,
			idAlbum,
			duracion,
		]);

		return res.status(200).json({
			msg: `Inserción de la canción ${titulo} CORRECTA.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateCancion = async (req, res) => {
	try {
		const { isrc, titulo, fechaLanzamiento, rutaCancion, idGenero, idAlbum } = req.body;
		console.log(req.body);
		console.log(req.params.id);
		const [result] = await pool.query(
			"UPDATE canciones SET titulo = IFNULL(?,titulo), fechaLanzamiento = IFNULL(?,fechaLanzamiento), rutaCancion = IFNULL(?,rutaCancion), idGenero = IFNULL(?,idGenero), idAlbum = IFNULL(?,idAlbum),duracion = IFNULL(?,duracion) WHERE isrc = ?",
			[titulo, fechaLanzamiento, rutaCancion, idGenero, idAlbum, duracion, req.params.id]
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

const eliminarCancion = async (req, res) => {
	try {
		console.log(req.params.id);
		const [result] = await pool.query(`DELETE FROM canciones WHERE isrc='${req.params.id}'`);

		if (result.affectedRows === 0)
			return res.status(404).json({ msg: `Elartistas con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json({ msg: `Eliminación del artistas con id ${req.params.id} CORRECTA.` });
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { getCancion, getCanciones, getCancionesRecientes, createCancion, updateCancion, eliminarCancion };
