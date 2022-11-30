import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUsers,
  getUserById,
  postStory,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/").post(registerUser).get(protect, admin, getUsers);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, postStory)
  .delete(protect, admin, deleteUser);

export default router;
