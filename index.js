import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./Config/DB.js";
import userRoutes from "./Routes/userRotues.js";
import axios from "axios";
import User from "./Models/userModel.js";
import jwt from "jsonwebtoken";
import whiteListRoutes from "./Routes/whiteListRoutes.js";
import closedBetaRoutes from "./Routes/closedBetaRoutes.js";

const app = express();
dotenv.config();
connectDB();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.CLIENT_REDIRECT_URL }));
app.use(cookieParser());
app.use("/api", userRoutes);
app.use("/api", whiteListRoutes);
app.use("/api", closedBetaRoutes);

app.get("/test", async (req, res) => {
  res.json({ test: "tested" });
});

app.get("/auth", async (req, res) => {
  res.redirect(process.env.CLIENT_URL);
});

app.get("/auth/redirect", async (req, res) => {
  const { code } = req.query;
  const params = new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.CLIENT_REDIRECT,
  });

  const response = await axios.post(
    "https://discord.com/api/oauth2/token",
    params
  );
  const userResponse = await axios.get("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${response.data.access_token}`,
    },
  });

  const userGuilds = await axios.get(
    "https://discord.com/api/users/@me/guilds",
    {
      headers: {
        Authorization: `Bearer ${response.data.access_token}`,
      },
    }
  );
  // res.send(userGuilds.data);
  const { id, username, avatar, email, verified, global_name } =
    userResponse.data;

  const user = await User.findOne({ discord_id: id });
  if (!user) {
    const newUser = await User.create({
      discord_id: id,
      global_name: global_name,
      discord_username: username,
      guilds: userGuilds.data,
      discord_avatar: avatar,
      email: email,
      verified: verified,
    });
    const token = await jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.cookie("JWT", token);
    res.redirect(process.env.CLIENT_REDIRECT_URL);
  } else {
    user.discord_username = username || user.discord_username;
    user.global_name = global_name || user.global_name;
    user.discord_avatar = avatar || user.discord_avatar;
    user.guilds = userGuilds.data;
    user.email = email || user.email;
    user.verified = verified || user.verified;
    const updatedUser = await user.save();

    const token = await jwt.sign(
      { userId: updatedUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.cookie("JWT", token);
    res.redirect(process.env.CLIENT_REDIRECT_URL);
  }
});
app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
