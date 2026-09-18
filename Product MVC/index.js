import cors from "cors";
import express from "express";
import { connectDB } from "./utils/DB.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.js";
import UserRoute from "./routes/user.js";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({
  
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/products", productRouter);
app.use("/user", UserRoute);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});