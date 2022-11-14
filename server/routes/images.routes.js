import { Router } from "express";
import { getImagen, upload } from "../controllers/images.controller.js";

const router = Router();

router.get("/uploads/:isrc", getImagen);

router.post("/uploads", upload, (req, res) => {
	// console.log(req.file.path);
});

export default router;
