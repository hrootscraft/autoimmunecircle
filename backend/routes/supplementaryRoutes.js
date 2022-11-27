import express from "express";
const router = express.Router();
import { getFounderStory } from "../controllers/supplementaryController.js";

// @desc get founder document to display on about us
// @route /api/get-founder
// @access public
router.route("/founder").get(getFounderStory);

export default router;
