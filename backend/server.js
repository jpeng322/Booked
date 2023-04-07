import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";

dotenv.config();
export default function createServer() {
  const app = express();

  app.use(express.json());

  //Here is where you will add the authentication strategies
  // app.use()

  app.use("/auth", authRouter);


  return app;
}