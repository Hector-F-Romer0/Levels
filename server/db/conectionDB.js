import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Las connections pools ayudan a reducir el tiempo en conectarse al servidor de mysql reusando conexiones previamente creadas
export const pool = createPool({
	host: process.env.HOST,
	user: process.env.USER_DB,
	password: process.env.PASSWORD_DB,
	port: process.env.PORT_DB,
	database: process.env.DATABASE,
});
