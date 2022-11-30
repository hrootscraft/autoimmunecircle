import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aiStoriesRoutes from "./routes/aiStoryRoutes.js";
import supplementaryRoutes from "./routes/supplementaryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

connectDB();
// foll. line must be placed before all routes
app.use(express.json());

app.use("/api/ai-stories", aiStoriesRoutes);
app.use("/api", supplementaryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
// the uploads folder won't be accessible in the browser,
// we need to make it static so that it can get loaded in the browser,
// which is done in express as follows:
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // every route that is not our api end pt. is rendered with index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

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
