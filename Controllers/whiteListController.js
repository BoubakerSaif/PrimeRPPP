import User from "../Models/userModel.js";
import WhiteList from "../Models/whiteListModel.js";
import asyncHandler from "express-async-handler";

const createWhiteList = asyncHandler(async (req, res) => {
  const {
    name,
    discordId,
    age,
    timezone,
    hearAboutUs,
    prevRpExp,
    charName,
    charEth,
    charBack,
    reason,
    charSkills,
    sceneOne,
    sceneTwo,
    sceneThree,
    charLongTermGoals,
    potCharDev,
    existStrat,
    obeyLaw,
    breakLow,
  } = req.body;

  try {
    const whiteApp = await WhiteList.create({
      name,
      discordId,
      age,
      timezone,
      hearAboutUs,
      prevRpExp,
      charName,
      charEth,
      charBack,
      reason,
      charSkills,
      sceneOne,
      sceneTwo,
      sceneThree,
      charLongTermGoals,
      potCharDev,
      existStrat,
      obeyLaw,
      breakLow,
      createdBy: req.User._id,
    });
    const player = await User.findById(req.User._id);
    if (player) {
      player.whiteListStatus = "Pending";
      await player.save();
    } else {
      throw new Error("Player not found");
    }
    res.status(201).json(whiteApp);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllWhiteList = asyncHandler(async (req, res) => {
  try {
    const allWhiteLists = await WhiteList.find().populate("createdBy");
    res.status(200).json(allWhiteLists);
  } catch (error) {
    throw new Error(error);
  }
});

const acceptWhiteList = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const whiteApp = await WhiteList.findById(id).populate("createdBy");
    if (whiteApp) {
      whiteApp.status = "Accepted" || whiteApp.status;
      const acceptedWihteApp = await whiteApp.save();
      const player = await User.findById(whiteApp.createdBy._id);
      if (player) {
        player.WhiteListed = true;
        player.whiteListStatus = "Treated";
        await player.save();
      } else {
        throw new Error("Player not found");
      }

      res.status(201).json(acceptedWihteApp);
    } else {
      throw new Error("WhiteApp Not Found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
const rejectWhiteList = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const whiteApp = await WhiteList.findById(id).populate("createdBy");
    if (whiteApp) {
      whiteApp.status = "Rejected" || whiteApp.status;
      const rejectedWhiteApp = await whiteApp.save();
      const player = await User.findById(whiteApp.createdBy._id);
      if (player) {
        player.WhiteListed = false;
        player.whiteListStatus = "Treated";
        await player.save();
      } else {
        throw new Error("Player not found");
      }

      res.status(201).json(rejectedWhiteApp);
    } else {
      throw new Error("WhiteApp Not Found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const deleteWhiteList = asyncHandler(async (req, res) => {
  res.json("deleted");
});

export {
  createWhiteList,
  getAllWhiteList,
  acceptWhiteList,
  rejectWhiteList,
  deleteWhiteList,
};
