import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all stories approved by admin with only those fields needed for user stories
// @route   /api/ai-stories/approved
// @access  Public
const getApprovedStories = asyncHandler(async (req, res) => {
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
  res.json(users);
});

// @desc    Get a story based on id requested by client
// @route   /api/ai-stories/:id
// @access  Public
const getStoryById = asyncHandler(async (req, res) => {
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
});

// @desc    Update user info
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateStory = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.about = req.body.about || user.about;
    user.story = req.body.story || user.story;
    user.cure = req.body.cure || user.cure;
    user.impact = req.body.impact || user.impact;
    user.isApproved = req.body.isApproved === true ? true : false;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      about: updatedUser.about,
      story: updatedUser.story,
      cure: updatedUser.cure,
      impact: updatedUser.impact,
      isApproved: updatedUser.isApproved,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { getApprovedStories, getStoryById, updateStory };
