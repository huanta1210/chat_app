import express from "express";
import { createMessage, getMessage } from "../Controllers/messageController";

const messageRoute = express.Router();

messageRoute.get("/:chatId", getMessage);
messageRoute.post("/", createMessage);

export default messageRoute;
