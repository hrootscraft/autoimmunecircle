import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc get all stories approved by admin with only those fields needed for user stories
// @route /api/ai-stories/approved
// @access public
router.get(
  "/approved",
  asyncHandler(async (req, res) => {
    const users = await User.find(
      // get founder (who is also an admin) story but not the admin, so always keep isApproved of admin to false
      { isApproved: true },
      {
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
    if (users) {
      res.json(users);
    } else {
      res.status(404);
      throw new Error("Users not found");
    }
  })
);

// @desc get a story based on id requested by client
// @route /api/ai-stories/:id
// @access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.find(
      { _id: req.params.id },
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
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// @desc get all stories for admin dashboard
// @route /api/ai-stories
// @access private
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await User.find(
      { isAdmin: false },
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
    if (users) {
      res.json(users);
    } else {
      res.status(404);
      throw new Error("Users not found for admin dashboard");
    }
  })
);

export default router;
