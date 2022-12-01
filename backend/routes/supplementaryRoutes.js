import express from "express";
const router = express.Router();
import {
  getFounderStory,
  getTopStories,
} from "../controllers/supplementaryController.js";

router.route("/founder").get(getFounderStory);

router.route("/top-stories").get(getTopStories);

export default router;
