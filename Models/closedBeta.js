import mongoose from "mongoose";

const closedBetaSchema = mongoose.Schema({
  name: { type: String },
  discordId: { type: String },
  age: { type: String },
  prevRpExp: { type: String },
  charEth: { type: String },
  charBack: { type: String },
  liveEmail: { type: String },
  streamLink: { type: String },
  steamProfile: { type: String },
  status: { type: String, default: "Pending" },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  treatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Beta", closedBetaSchema);
