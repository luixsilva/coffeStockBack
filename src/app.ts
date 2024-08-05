import express from "express";
import cors from "cors";  // Importe o pacote CORS
import { router } from "./routes/routes";
import { connect } from "../src/dbConnection/dbConnection"
const app = express();

connect();

app.use(
  cors({
    origin: "http://localhost:3000", // Substitua pelo domínio do front-end
  })
);

app.use(express.json());
app.use(router);

export { app };
