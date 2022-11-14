import { validationResult } from "express-validator";

const validarCampos = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json(errors);
	}

	// El parámetro next en un middleware significa que el flujo del programa saltará al siguiente middleware que exista.
	next();
};

export { validarCampos };
