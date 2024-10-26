import mongoose from "mongoose";

const whiteListSchema = mongoose.Schema({
  name: { type: String },
  discordId: { type: String },
  age: { type: String },
  timezone: { type: String },
  hearAboutUs: { type: String },
  prevRpExp: { type: String },
  charName: { type: String },
  charEth: { type: String },
  charBack: { type: String },
  reason: { type: String },
  charSkills: { type: String },
  sceneOne: { type: String },
  sceneTwo: { type: String },
  sceneThree: { type: String },
  charLongTermGoals: { type: String },
  potCharDev: { type: String },
  namexistStrate: { type: String },
  obeyLaw: { type: String },
  breakLow: { type: String },
  status: { type: String, default: "Pending" },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Whitelist", whiteListSchema);
