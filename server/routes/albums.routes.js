import { Router } from "express";
import {
	createAlbum,
	eliminarAlbum,
	getAlbum,
	getAlbumes,
	updateAlbum,
	getIdAlbumAndFilter,
} from "../controllers/albums.controller.js";

const router = Router();

router.get("/albums/:id", getAlbum);

router.get("/albums", getAlbumes);

router.post("/find/album", getIdAlbumAndFilter);

router.post("/albums", createAlbum);

router.patch("/albums/:id", updateAlbum);

router.delete("/albums/:id", eliminarAlbum);

export default router;
