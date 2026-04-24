import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Permite que o servidor entenda JSON
app.use(express.json());

export { app };
