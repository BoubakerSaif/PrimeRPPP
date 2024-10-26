import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const loginUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req?.User?._id);

    res.status(200).json(user);
  } catch (error) {
    throw new Error(error);
  }
});
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("JWT", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User Logged Out" });
});
export { loginUser, logoutUser };
