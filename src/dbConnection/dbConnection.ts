import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis de ambiente do .env

const MONGO_URI = process.env.MONGO_URI as string; // A URL de conexão do MongoDB

export async function connect() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}
