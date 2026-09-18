import { signJWT } from "../utils/jwt.js";

import User from "../model/user.js";

import { hashPassword, comparePassword } from "../utils/bcrypt.js";

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password required",
      });
    }

    const user = await User.findOne({ username });

    // Username does not exist
    if (!user) {
      return res.status(404).json({
        error: "Your name is wrong. Please sign up first.",
      });
    }

    // Username exists, now check password
    const isPasswordValid = await comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Your password is wrong.",
      });
    }

    // Username + password both correct
    const token = signJWT({
      username: user.username,
      id: user._id,
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password required",
      });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        error: "Your account already exists. Please login.",
      });
    }

    const encryptedPassword = await hashPassword(password);

    const newUser = new User({
      username: username,
      password: encryptedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};