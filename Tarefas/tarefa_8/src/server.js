import app from "./app.js";
import { createTable, openDB } from "./config/DB.js";

openDB();

const PORT = 3000;
createTable().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
