import app from "./app.js";
import { openDB } from "./config/DB.js";

openDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
