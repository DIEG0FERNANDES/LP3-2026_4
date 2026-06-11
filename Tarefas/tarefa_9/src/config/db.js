// src/database.js
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/produtosDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado!");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
  }
}
