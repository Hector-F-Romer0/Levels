import { Router } from "express";
import {
	getCancion,
	getCanciones,
	getCancionesHome,
	createCancion,
	updateCancion,
	eliminarCancion,
	getYear,
	obtenerCancionesFiltroYear,
} from "../controllers/songs.controller.js";

const router = Router();

router.get("/songs/:id", getCancion);

router.get("/songs", getCanciones);

router.get("/home/songs", getCancionesHome);

router.get("/home/songs/years", getYear);
router.get("/home/songs/years/query/:filtro", obtenerCancionesFiltroYear);

// router.get("/songsYearFilter/:filtro", obtenerCancionesFiltroAño);

// router.get("/songsAlbumFilter/:filtro", obtenerCancionesFiltroAlbum);

// router.get("/lastSongs/", getCancionesRecientes);

router.post("/songs", createCancion);

router.patch("/songs/:id", updateCancion);

router.delete("/songs/:id", eliminarCancion);

export default router;
