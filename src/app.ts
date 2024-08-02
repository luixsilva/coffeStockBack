import express from "express";
import cors from "cors";  // Importe o pacote CORS
import { router } from "./routes/routes";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Substitua pelo domínio do front-end
  })
);

app.use(express.json());
app.use(router);

export { app };
