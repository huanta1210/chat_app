import express from "express";
import {
  createChat,
  findChat,
  findUserChats,
} from "../Controllers/chatController";

const chatRouter = express.Router();

chatRouter.post("/", createChat);
chatRouter.get("/:userId", findUserChats);
chatRouter.get("/find/:firstId/:secondId", findChat);

export default chatRouter;
