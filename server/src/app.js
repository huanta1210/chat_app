import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes";
import { connect } from "mongoose";

dotenv.config();
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api", router);

connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log("MongoDB connection falied", err.message));

export const viteNodeApp = app;
