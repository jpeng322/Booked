import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import serviceRoute from "./routes/service.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();
export default function createServer() {
  const app = express();

  app.use(express.json());

  //Here is where you will add the authentication strategies
  // app.use()

  app.use("/auth", authRouter);

  app.use("/service", serviceRoute);

  app.use("/booking", bookingRoute());

  return app;
}
