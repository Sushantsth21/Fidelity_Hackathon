import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoURL } from "./config.mjs";
import userRoutes from "./routes/user.route.mjs";
import authRoutes from "./routes/auth.route.mjs";

dotenv.config();

mongoose
  .connect(MongoURL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Running of Port ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
