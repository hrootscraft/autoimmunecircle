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
      type: Boolean,
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
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    isPatient: {
      type: Boolean,
      required: true,
    },
    disease: {
      type: String,
      required: true,
    },
    diagnosedOn: {
      type: String,
      required: true,
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

// middleware: when a user registers, their password is encrypted before saving to user model
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
