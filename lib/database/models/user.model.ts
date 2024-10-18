import { Schema, model,models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Normalize to lowercase for consistent email handling
    trim: true, // Remove whitespace
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Remove whitespace from username
    minlength: 3, // Minimum length for username
    maxlength: 30, // Maximum length for username
  },
  file: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true, // Remove whitespace
  },
  lastName: {
    type: String,
    trim: true, // Remove whitespace
  },
  planId: {
    type: Number,
    default: 1,
    min: 1, // Ensure planId is at least 1
  },
  creditBalance: {
    type: Number,
    default: 10,
    min: 0, // Prevent negative credit balances
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Create the model or use existing one
const User = models.User || model("User", UserSchema);

export default User;
