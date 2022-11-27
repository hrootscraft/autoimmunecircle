import { mongoose } from "mongoose";

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

const User = mongoose.model("User", userSchema);

export default User;
