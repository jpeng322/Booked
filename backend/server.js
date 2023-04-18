import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";

import serviceRouter from "./routes/service.js";
import paymentRouter from "./routes/payment.js";
import Stripe from "stripe";
import cors from "cors";

import bookingRoute from "./routes/booking.js";


dotenv.config();
export default function createServer() {
  const app = express();


  app.use(cors())

  app.use(express.json());

  //Here is where you will add the authentication strategies
  setupJWTStrategy(passport);

  app.use("/auth", authRouter);

  app.use("/service", serviceRouter);

  app.use("/payment", paymentRouter);


  app.use("/provider", providerRouter(passport));

  app.use("/client", clientRouter(passport));

  app.use("/booking", bookingRoute());


  return app;
}
