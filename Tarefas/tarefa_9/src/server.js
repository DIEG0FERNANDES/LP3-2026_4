import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
