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
		const [result] = await pool.query("INSERT INTO artistas VALUES (default,?,?,?,?,?,?)", [
			nombres,
			apellidos,
			nombreArtistico,
			fechaNacimiento,
			lugarNacimiento,
			fotoArtista,
		]);

		return res.status(200).json({
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
		console.log(req.body);
		const [result] = await pool.query(
			"UPDATE artistas SET nombres = IFNULL(?,nombres), apellidos = IFNULL(?,apellidos), nombreArtistico = IFNULL(?,nombreArtistico), fechaNacimiento = IFNULL(?,fechaNacimiento), lugarNacimiento = IFNULL(?,lugarNacimiento), fotoArtista = IFNULL(?,fotoArtista) WHERE idArtista = ?",
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

const eliminarArtista = async (req, res) => {
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

export { getArtista, getArtistas, createArtistas, updateArtistas, eliminarArtista };
