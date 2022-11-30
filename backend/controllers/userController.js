import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import validator from "validator";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
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

// @desc    Register a new user
// @route   POST /api/users/
// @access  public
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

// @desc    Get all users
// @route   GET /api/users/
// @access  private/admin
const getUsers = asyncHandler(async (req, res) => {
  const pageSize = 10; //10
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.countDocuments({});

  const users = await User.find(
    {},
    {
      _id: 1,
      name: 1,
      email: 1,
      isAdmin: 1,
      hasPostedStory: 1,
      isApproved: 1,
      disease: 1,
      diagnosedOn: 1,
      city: 1,
      state: 1,
      country: 1,
      dob: 1,
      gender: 1,
    }
  )
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ users, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Post a story ie store info on user (update)
// @route   PUT /api/ai-stories
// @access  Private
const postStory = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(403);
    throw new Errror("Unauthorized access; Sign up or Login first");
  } else if (user && user.hasPostedStory) {
    res.status(405);
    throw new Error("Story already posted");
  } else if (user) {
    if (
      validator.isEmpty(req.body.about) ||
      validator.isEmpty(req.body.story) ||
      validator.isEmpty(req.body.cure) ||
      validator.isEmpty(req.body.impact)
    ) {
      res.status(400);
      throw new Error("Invalid story data");
    }

    if (validator.isEmpty(req.body.photo)) {
      req.body.photo = "/images/users/profile.svg";
    }

    user.about = req.body.about || user.about;
    user.story = req.body.story || user.story;
    user.cure = req.body.cure || user.cure;
    user.impact = req.body.impact || user.impact;
    user.photo = req.body.photo || user.photo;
    user.gramId = req.body.gramId || user.gramId;
    user.hasPostedStory = true;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      about: updatedUser.about,
      story: updatedUser.story,
      cure: updatedUser.cure,
      impact: updatedUser.impact,
      photo: updatedUser.photo,
      gramId: updatedUser.gramId,
      hasPostedStory: updatedUser.hasPostedStory,
      isApproved: updatedUser.isApproved,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, registerUser, getUsers, getUserById, postStory, deleteUser };
