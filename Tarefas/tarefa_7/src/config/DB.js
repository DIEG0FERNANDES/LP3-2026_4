import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDB() {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

export async function createTable() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME TEXT NOT NULL
    )
  `);
}
