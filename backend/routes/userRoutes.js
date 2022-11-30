import express from "express";
const router = express.Router();
import {
  authUser,
  postStory,
  registerUser,
  getUsers,
  getUserById,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/post-story").post(protect, postStory);
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/:id").get(protect, admin, getUserById);

export default router;
