import express from "express";
const router = express.Router();
import {
  getAdminStories,
  getApprovedStories,
  getStoryById,
} from "../controllers/aiStoryController.js";

router.route("/approved").get(getApprovedStories);
router.route("/:id").get(getStoryById);
router.route("/").get(getAdminStories);

export default router;
