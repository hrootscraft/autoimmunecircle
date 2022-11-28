import express from "express";
const router = express.Router();
import {
  getFounderStory,
} from "../controllers/supplementaryController.js";

router.route("/founder").get(getFounderStory);

export default router;
