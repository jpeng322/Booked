import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";

// import serviceRouter from "./routes/service.js";
import serviceRouter from "./routes/service.js";
import paymentRouter from "./routes/payment.js";
import Stripe from "stripe";
import cors from "cors";
import passport from "passport";
import setupJWTStrategy from "./auth/index.js";

import bookingRoute from "./routes/booking.js";
import providerRouter from "./routes/provider.js";
import clientRouter from "./routes/client.js";
import profileRouter from "./routes/profile.js";
// import bookingRoute from "./routes/booking.js"

dotenv.config();
export default function createServer() {
  const app = express();

  app.use(cors());

  app.use(express.json({limit: '50mb'}));

  //Here is where you will add the authentication strategies
  setupJWTStrategy(passport);

  app.use("/auth", authRouter);

  app.use(
    "/service",
    serviceRouter(passport)
  );

  app.use("/profile", profileRouter(passport));

  app.use("/payment", paymentRouter);

  app.use("/provider", providerRouter(passport));

  app.use("/client", clientRouter(passport));

  app.use("/booking", bookingRoute(passport));

  return app;
}
