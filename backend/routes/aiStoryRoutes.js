import express from "express";
const router = express.Router();
import {
  getApprovedStories,
  getStoryById,
  updateStory,
} from "../controllers/aiStoryController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/approved").get(getApprovedStories);
router
  .route("/:id")
  .get(protect, getStoryById)
  .put(protect, admin, updateStory);

export default router;
