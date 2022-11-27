import { mongoose } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hasPostedStory: {
      type: String,
      default: false,
    },
    isFounder: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
    },
    gender: {
      type: String,
    },
    dob: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    isPatient: {
      type: Boolean,
      default: true,
    },
    disease: {
      type: String,
    },
    diagnosedOn: {
      type: String,
    },
    story: {
      type: String,
    },
    about: {
      type: String,
    },
    impact: {
      type: String,
    },
    cure: {
      type: String,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    gramId: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
