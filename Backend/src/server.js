import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import { connectDB } from "./config/db.js";
connectDB();

import userRoutes from "./Routes/userRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));
