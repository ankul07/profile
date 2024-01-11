import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("user", userSchema);
