import express from "express";
import userRoute from "./userRoute";
import chatRouter from "./chatRoute";
import messageRoute from "./messageRoute";

const router = express.Router();
router.use("/users", userRoute);
router.use("/chats", chatRouter);
router.use("/messages", messageRoute);

export default router;
