import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aiStoriesRoutes from "./routes/aiStoryRoutes.js";
import supplementaryRoutes from "./routes/supplementaryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

connectDB();
// foll. line must be placed before all routes
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/ai-stories", aiStoriesRoutes);
app.use("/api", supplementaryRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
