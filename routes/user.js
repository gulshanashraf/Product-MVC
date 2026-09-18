
import express from "express";

import { createUser, loginUser } from "../controller/user.js";

import {
  saveProductController,
  getProductsController,
} from "../controller/product.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/createuser", createUser);

router.post("/addproduct", saveProductController);

router.get("/products", getProductsController);

export default router;
