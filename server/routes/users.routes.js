import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.send("Hola mundo - GET");
});

router.put("/", (req, res) => {
	res.send("Hola mundo - PUT");
});

export default router;
