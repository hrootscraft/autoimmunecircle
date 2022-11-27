import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc get all stories approved by admin with only those fields needed for user stories
// @route /api/ai-stories/approved
// @access public
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

// @desc get a story based on id requested by client
// @route /api/ai-stories/:id
// @access public
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

// @desc get all stories for admin dashboard
// @route /api/ai-stories
// @access private
const getAdminStories = asyncHandler(async (req, res) => {
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
  res.json(users);
});

export { getApprovedStories, getStoryById, getAdminStories };
