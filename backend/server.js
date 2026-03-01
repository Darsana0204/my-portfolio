import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
