import { Router } from "express";
import { createGenero, eliminarGenero, getGenero, getGeneros, updateGenero } from "../controllers/genre.controller.js";

const router = Router();

router.get("/genres/:id", getGenero);

router.get("/genres", getGeneros);

router.post("/genres", createGenero);

router.patch("/genres/:id", updateGenero);

router.delete("/genres/:id", eliminarGenero);

export default router;
