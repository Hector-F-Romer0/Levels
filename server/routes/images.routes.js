import { Router } from "express";
import { getImagen, uploadImage } from "../controllers/images.controller.js";

const router = Router();

router.get("/uploads/:isrc", getImagen);

router.post("/uploads", uploadImage, (req, res) => {
	// console.log(req.file.path);
});

export default router;
