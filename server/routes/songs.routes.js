import { Router } from "express";
import { getCancion, getCanciones, createCanciones, updateCanciones, eliminarCanciones } from "../controllers/songs.controller.js";

const router = Router();

router.get("/songs/:id", getCancion);

router.get("/songs", getCanciones);

router.post("/songs", createCanciones);

router.patch("/songs/:id", updateCanciones);

router.delete("/songs/:id", eliminarCanciones);

export default router;