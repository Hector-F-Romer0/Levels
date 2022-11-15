import { Router } from "express";

import { check } from "express-validator";

import { existeIdUsuario } from "../helpers/dbValidators.js";
import { validarCampos } from "../middlewares/validarCampos.js";

import {
	createUsuarios,
	eliminarUsuario,
	getUsuario,
	getUsuarios,
	updateUsuarios,
	loginUsuario,
} from "../controllers/users.controller.js";

const router = Router();

//* .exist verifica si existe en el cuerpo del request, '.not().isEmpty()' verifica que la información guardada no sea vacía.
const validarCrearUsuarios = [
	check("numId", "El número de identificación ni puede estar vacío.").exists().not().isEmpty(),
	check("numId", "El usuario ya existe en la BD").custom(existeIdUsuario),
	validarCampos,
];

// Capturo el id en la URL usando los params de la request
router.get("/users/:id", getUsuario);

router.get("/users", getUsuarios);

router.post("/users", validarCrearUsuarios, createUsuarios);

router.post("/login", loginUsuario);

router.patch("/users/:id", updateUsuarios);

router.delete("/users/:id", eliminarUsuario);

export default router;
