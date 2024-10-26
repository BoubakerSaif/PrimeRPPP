import express from "express";
import { loginUser, logoutUser } from "../Controllers/userControllers.js";
import { protect } from "../Middlewares/authMiddleWare.js";

const router = express.Router();
router.get("/auth/user/me", protect, loginUser);
router.post("/auth/logout", logoutUser);
export default router;
