import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Permite que o servidor entenda JSON
app.use(express.json());

// Permite que eu faça um teste genérico do servidor local
app.get("/", (req, res) => {
  res.send("Servidor Funcionando. ");
});

export { app };
