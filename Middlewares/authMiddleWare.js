import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.JWT;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.User = await User.findById(decoded.userId);
    next();
  } catch (error) {
    next();
  }
});

export { protect };
