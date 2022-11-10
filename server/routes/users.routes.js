import { Router } from "express";
import { createUsuarios, getUsuario, getUsuarios, updateUsuarios } from "../controllers/users.controller.js";

const router = Router();

// Capturo el id en la URL usando los params de la request
router.get("/users/:id", getUsuario);

router.get("/users", getUsuarios);

router.post("/users", createUsuarios);

router.put("/users", updateUsuarios);

export default router;
