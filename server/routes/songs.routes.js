import { Router } from "express";
import {
	getCancion,
	getCanciones,
	getCancionesHome,
	createCancion,
	updateCancion,
	eliminarCancion,
	obtenerCancionesFiltroAño,
	obtenerCancionesFiltroAlbum,
} from "../controllers/songs.controller.js";

const router = Router();

router.get("/songs/:id", getCancion);

router.get("/songs", getCanciones);

router.get("/home/songs", getCancionesHome);

// router.get("/songsYearFilter/:filtro", obtenerCancionesFiltroAño);

// router.get("/songsAlbumFilter/:filtro", obtenerCancionesFiltroAlbum);

// router.get("/lastSongs/", getCancionesRecientes);

router.post("/songs", createCancion);

router.patch("/songs/:id", updateCancion);

router.delete("/songs/:id", eliminarCancion);

export default router;
