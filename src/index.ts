// src/index.js
import express, { Express, Request } from "express";
import dotenv from "dotenv";
import router from "./Routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//app use
app.use(express.json());
app.use(cors<Request>());
app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
