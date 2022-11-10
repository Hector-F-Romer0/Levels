import { Router } from "express";
import { createUsuarios, getUsuarios, updateUsuarios } from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsuarios);

router.post("/users", createUsuarios);

router.put("/users", updateUsuarios);

export default router;
