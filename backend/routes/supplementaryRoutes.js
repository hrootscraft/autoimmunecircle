import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc get founder document to display on about us
// @route /api/get-founder
// @access public
router.get(
  "/founder",
  asyncHandler(async (req, res) => {
    const user = await User.findOne(
      { isFounder: true },
      {
        _id: 1,
        name: 1,
        city: 1,
        country: 1,
        disease: 1,
        diagnosedOn: 1,
        story: 1,
        about: 1,
        impact: 1,
        cure: 1,
        gramId: 1,
        photo: 1,
      }
    );
    if (user) {
      res.json(user);
    } else {
      res.status(404).status({ message: "Founder not found" });
    }
  })
);

export default router;
