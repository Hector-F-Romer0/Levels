import { Router } from "express";
import {
	getCancion,
	getCanciones,
	createCancion,
	updateCancion,
	eliminarCancion,
} from "../controllers/songs.controller.js";

const router = Router();

router.get("/songs/:id", getCancion);

router.get("/songs", getCanciones);

router.post("/songs", createCancion);

router.patch("/songs/:id", updateCancion);

router.delete("/songs/:id", eliminarCancion);

export default router;
