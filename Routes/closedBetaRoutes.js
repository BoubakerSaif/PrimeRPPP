import express from "express";
import { protect } from "../Middlewares/authMiddleWare.js";
import {
  acceptBetaApp,
  createBetaApp,
  getAllBetaApps,
  rejectBetaApp,
  getmyBetaApp,
} from "../Controllers/betaControllers.js";

const router = express.Router();

router.post("/betaApp", protect, createBetaApp);
router.get("/betaApp/myapp", protect, getmyBetaApp);
router.get("/betaApp", protect, getAllBetaApps);
router.put("/betaApp/accept/:id", protect, acceptBetaApp);
router.put("/betaApp/reject/:id", protect, rejectBetaApp);

// router.delete("/:id", protect);

export default router;
