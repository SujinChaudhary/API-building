import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
    unique: true,
  },
});
export default mongoose.model("User", userSchema);
