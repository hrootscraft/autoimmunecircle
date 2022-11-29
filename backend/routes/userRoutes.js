import express from "express";
const router = express.Router();
import {
  authUser,
  postStory,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/post-story").post(postStory);
router.route("/").post(registerUser);

export default router;
