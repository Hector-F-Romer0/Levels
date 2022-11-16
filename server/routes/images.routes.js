import { Router } from "express";
import { getImagen, uploadAlbum } from "../controllers/images.controller.js";

const router = Router();

router.get("/uploads/:isrc", getImagen);

router.post("/uploads/img/album/:id", uploadAlbum, (req, res) => {
	console.log(req.file.path);
});

export default router;
