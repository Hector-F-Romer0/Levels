import { Router } from "express";
import {
	createGenero,
	eliminarGenero,
	getGenero,
	getGeneros,
	updateGenero,
	getIdGenero,
} from "../controllers/genre.controller.js";

const router = Router();

router.get("/genres/:id", getGenero);

router.get("/genres", getGeneros);

router.post("/find/genre", getIdGenero);

router.post("/genres", createGenero);

router.patch("/genres/:id", updateGenero);

router.delete("/genres/:id", eliminarGenero);

export default router;
