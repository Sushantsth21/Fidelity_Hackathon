import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoURL } from "./config.mjs";

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

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Running of Port ${PORT}`);
});
