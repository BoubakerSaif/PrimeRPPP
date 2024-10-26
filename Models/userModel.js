import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    discord_id: { type: String, unique: true },
    discord_username: { type: String },
    global_name: { type: String },
    discord_avatar: { type: String },
    email: { type: String, unique: true },
    verified: { type: Boolean },
    guilds: [{}],
    BetaStatus: { type: String, default: "noApp" },
    whiteListStatus: { type: String, default: "noApp" },
    WhiteListed: { type: Boolean, default: false },
    role: { type: String, default: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
