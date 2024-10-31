import User from "../Models/userModel";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: "10d" });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json("All fields are required");
    }
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User with the given email already exists",
      });
    }
    user = new User({ name, email, password });
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);

    await user.save();

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    return res.status(500).json("Error register user");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("All fields are required");
    }
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json("Invalid email or password");
    }
    const isValidPassword = await bcryptjs.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json("Invalid email or password");
    }
    const token = createToken(user._id);
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      accessToken: token,
    });
  } catch (error) {
    return res.status(500).json("Error register user");
  }
};
export const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await User.find({});

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
