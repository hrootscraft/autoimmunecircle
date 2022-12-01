import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc get founder document to display on about us
// @route /api/founder
// @access public
const getFounderStory = asyncHandler(async (req, res) => {
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
    res.status(404).json({ message: "Founder not found" });
  }
});

// @desc    Get top 3 approved stories that are updated latest
// @route   /api/ai-stories/approved-carousel
// @access  Public
const getTopStories = asyncHandler(async (req, res) => {
  const users = await User.find(
    { isApproved: true },
    {
      _id: 1,
      name: 1,
      city: 1,
      country: 1,
      disease: 1,
      about: 1,
      diagnosedOn: 1,
      photo: 1,
    }
  )
    .sort({ updatedAt: -1 })
    .limit(3);
  res.json(users);
});

export { getFounderStory, getTopStories };

// when there's Cast to ObjectId error it's probably the mismatching of routes in backend or priority of placement of routes in frontend
