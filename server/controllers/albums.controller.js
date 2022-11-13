import { pool } from "../db/conectionDB.js";
import { verificarExiste } from "../helpers/gestionBD.js";

const getAlbum = async (req, res) => {
	try {
		const [result] = await pool.query(`SELECT * FROM albumes WHERE idAlbum='${req.params.id}'`);

		if (result.length === 0) return res.status(404).json({ msg: `El álbumcon id ${req.params.id} NO EXISTE.` });

		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const getAlbumes = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM albumes");

		if (result.length === 0) return res.status(404).json({ msg: `No existen álbumes en la BD.` });

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const createAlbum = async (req, res) => {
	try {
		const { titulo, fotoAlbum, idGenero, fechaLanzamiento } = req.body;
		// Se verifica en la BD si YA existe el artista en la BD.
		const [existeAlbum] = await pool.query(`SELECT * FROM albumes WHERE titulo = ?`, [titulo]);
		// Si el artista existe en la base de datos, devuelve un mensaje y no crea el registro.
		if (existeAlbum.length > 0) return res.status(400).json({ msg: "El álbum ya está creado en la BD." });

		const [result] = await pool.query("INSERT INTO albumes VALUES (default,?,?,?,?)", [
			titulo,
			fotoAlbum,
			fechaLanzamiento,
			idGenero,
		]);

		return res.status(200).json({
			msg: `Insersión del álbum ${titulo} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const updateAlbum = async (req, res) => {
	try {
		const { titulo, fotoAlbum, idGenero, fechaLanzamiento } = req.body;
		const [result] = await pool.query(
			"UPDATE albumes SET titulo = IFNULL(?,titulo), fotoAlbum = IFNULL(?,fotoAlbum), idGenero = IFNULL(?,idGenero), fechaLanzamiento = IFNULL(?,fechaLanzamiento) WHERE idAlbum = ?",
			[titulo, fotoAlbum, idGenero, fechaLanzamiento, req.params.id]
		);
		if (result.affectedRows === 0)
			return res.status(404).json({
				msg: `El álbum con id ${req.params.id} NO EXISTE.`,
			});

		return res.status(203).json({
			msg: `Actualización del álbum con id ${req.params.id} CORRECTO.`,
		});
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

const eliminarAlbum = async (req, res) => {
	try {
		const [result] = await pool.query(`DELETE FROM albumes WHERE idAlbum='${req.params.id}'`);

		if (result.affectedRows === 0)
			return res.status(404).json({ msg: `El álbum con id ${req.params.id} NO EXISTE.` });

		return res.status(200).json({ msg: `Eliminación del álbum con id ${req.params.id} CORRECTA.` });
	} catch (error) {
		return res.status(500).json({
			msg: error.message,
		});
	}
};

export { getAlbum, getAlbumes, createAlbum, updateAlbum, eliminarAlbum };