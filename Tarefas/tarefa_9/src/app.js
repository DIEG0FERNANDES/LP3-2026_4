import express from "express";
import produtoRouter from "./routes/router";

const app = express();
app.use(express.json());
app.use(produtoRouter);

export default app;
