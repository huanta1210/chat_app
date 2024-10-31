import express from "express";
import {
  findUser,
  getUsers,
  loginUser,
  registerUser,
} from "../Controllers/userController";

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.get("/find/:userId", findUser);
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

export default userRoute;
