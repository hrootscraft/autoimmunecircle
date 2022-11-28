import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import validator from "validator";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne(
    { email },
    { _id: 1, name: 1, email: 1, isAdmin: 1, password: 1, hasPostedStory: 1 }
  );
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      hasPostedStory: user.hasPostedStory,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc post a story ie store info on user
// @route /api/users/post-story
// @access private
const postStory = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  if (!user) {
    res.status(403);
    throw new Errror("Unauthorized access; Sign up or Login first");
  }
  if (user && user.hasPostedStory) {
    res.status(405);
    throw new Error("Story already posted");
  }

  const {
    about = "",
    story = "",
    cure = "",
    impact = "",
    gramId = "",
    photo = "",
  } = req.body;

  if (
    validator.isEmpty(about) ||
    validator.isEmpty(story) ||
    validator.isEmpty(cure) ||
    validator.isEmpty(impact)
  ) {
    res.status(400);
    throw new Error("Invalid story data");
  }

  // validate photo type and size
  const createdPost = await User.updateOne(
    { _id: user._id },
    {
      about,
      story,
      cure,
      impact,
      gramId,
      photo,
      hasPostedStory: true,
    }
  );

  if (createdPost) {
    res.status(200);
    res.json({
      message: "Story posted",
    });
  } else {
    res.status(400);
    throw new Error("Invalid story data");
  }
});

// @desc Register a new user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    password = "",
    confirmPassword = "",
    email = "",
    name = "",
    isPatient = "",
    gender = "",
    dob = "",
    diagnosedOn = "",
    disease = "",
    city = "",
    state = "",
    country = "",
    phone = "",
  } = req.body;

  if (
    validator.isEmpty(password) ||
    validator.isEmpty(confirmPassword) ||
    validator.isEmpty(email) ||
    validator.isEmpty(name) ||
    validator.isEmpty(isPatient) ||
    validator.isEmpty(gender) ||
    validator.isEmpty(dob) ||
    validator.isEmpty(diagnosedOn) ||
    validator.isEmpty(disease) ||
    validator.isEmpty(city) ||
    validator.isEmpty(state) ||
    validator.isEmpty(country)
  ) {
    res.status(400);
    throw new Error("Invalid user data: One or more empty fields");
  }
  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Invalid email");
  }
  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Passwords don't match");
  }

  const isUser = await User.findOne({ email }, { _id: 1 });
  if (isUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    isPatient: isPatient === "patient",
    email,
    password,
    dob,
    city,
    state,
    country,
    phone,
    name,
    diagnosedOn,
    gender,
    disease,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      hasPostedStory: user.hasPostedStory,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, postStory, registerUser };
