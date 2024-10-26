import express from "express";
import {
  acceptWhiteList,
  createWhiteList,
  deleteWhiteList,
  getAllWhiteList,
  rejectWhiteList,
} from "../Controllers/whiteListController.js";
import { protect } from "../Middlewares/authMiddleWare.js";

const router = express.Router();

router.post("/whiteApp", protect, createWhiteList);
router.get("/whiteApp", protect, getAllWhiteList);
router.put("/whiteApp/accept/:id", protect, acceptWhiteList);
router.put("/whiteApp/reject/:id", protect, rejectWhiteList);
router.delete("/whiteApp/:id", protect, deleteWhiteList);

export default router;
