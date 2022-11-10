import { Router } from "express";
import {
	createArtistas,
	eliminarArtista,
	getArtista,
	getArtistas,
	updateArtistas,
} from "../controllers/artists.controller.js";

const router = Router();

router.get("/artists/:id", getArtista);

router.get("/artists", getArtistas);

router.post("/artists", createArtistas);

router.patch("/artists/:id", updateArtistas);

router.delete("/artists/:id", eliminarArtista);

export default router;
