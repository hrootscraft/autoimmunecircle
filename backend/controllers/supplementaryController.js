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



export { getFounderStory };
