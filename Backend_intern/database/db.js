import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config(); 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASSWORD), 
  port: Number(process.env.DB_PORT),          
});

pool.on("error", (err) => {
  console.error("Unexpected error", err);
  process.exit(1);
});

export const query = (text, params) => pool.query(text, params);
