import { pool } from "../db/conectionDB.js";

const getGenero = async (req, res) => {
	try {
		const [result] = await pool.query(`SELECT * FROM generos WHERE idGenero='${req.params.id}'`);

		if (result.length === 0) return res.status(404).json({ msg: `El género con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getIdGenero = async (req, res) => {
	try {
		const { nombreGenero } = req.body;
		const [existe] = await pool.query(`SELECT idGenero FROM generos WHERE nombreGenero = ?;`, [nombreGenero]);

		const idGeneroBuscado = existe[0].idGenero;

		if (existe.length === 0) return res.status(404).json({ msg: `El género ${nombreGenero} NO EXISTE.` });

		const [result] = await pool.query(
			"SELECT axc.isrc, a.nombreArtistico AS artista, a.fotoArtista, c.titulo AS tituloCancion, c.fechaLanzamiento, c.duracion, g.nombreGenero, al.titulo AS tituloAlbum,al.fotoAlbum FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum WHERE g.idGenero = ?;",
			[idGeneroBuscado]
		);

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getGeneros = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM generos");

		if (result.length === 0) return res.status(404).json({ msg: `No existen generos en la BD.` });

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const createGenero = async (req, res) => {
	try {
		const { nombreGenero } = req.body;
		const [result] = await pool.query("INSERT INTO generos VALUES (default,?)", [nombreGenero]);

		return res.status(200).json({
			msg: `Insersión del genero ${nombreGenero}  CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateGenero = async (req, res) => {
	try {
		const { nombreGenero } = req.body;
		const [result] = await pool.query(
			"UPDATE generos SET nombreGenero = IFNULL(?, nombreGenero) WHERE idGenero = ?",
			[nombreGenero, req.params.id]
		);

		if (result.affectedRows === 0)
			return res.status(404).json({
				msg: `El genero con id ${req.params.id} NO EXISTE.`,
			});

		return res.status(203).json({
			msg: `Actualización del genero con id ${req.params.id} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const eliminarGenero = async (req, res) => {
	try {
		const [result] = await pool.query(`DELETE FROM generos WHERE idGenero='${req.params.id}'`);

		if (result.affectedRows === 0)
			return res.status(404).json({ msg: `El género con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json({ msg: `Eliminación del género con id ${req.params.id} CORRECTA.` });
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { getGenero, getGeneros, createGenero, updateGenero, eliminarGenero, getIdGenero };
