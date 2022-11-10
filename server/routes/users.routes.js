import { Router } from "express";
import {
	createUsuarios,
	eliminarUsuario,
	getUsuario,
	getUsuarios,
	updateUsuarios,
} from "../controllers/users.controller.js";

const router = Router();

// Capturo el id en la URL usando los params de la request
router.get("/users/:id", getUsuario);

router.get("/users", getUsuarios);

router.post("/users", createUsuarios);

router.patch("/users/:id", updateUsuarios);

router.delete("/users/:id", eliminarUsuario);

export default router;
