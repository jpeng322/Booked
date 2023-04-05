import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/auth", authRouter);

app.listen(process.env.PORT, (request, response) => {
  console.log(`Server listening on ${process.env.PORT}`);
});
