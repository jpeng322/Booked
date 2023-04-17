import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import serviceRoute from "./routes/service.js";

dotenv.config();
export default function createServer() {
  const app = express();

  app.use(cors())

  app.use(express.json());

  //Here is where you will add the authentication strategies
  setupJWTStrategy(passport);

  app.use("/auth", authRouter);

  app.use("/service", serviceRoute);

  app.use("/provider", providerRouter(passport));

  app.use("/client", clientRouter(passport));

  return app;
}