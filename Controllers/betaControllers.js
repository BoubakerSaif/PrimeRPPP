import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import closedBeta from "../Models/closedBeta.js";
import nodemailer from "nodemailer";
const createBetaApp = asyncHandler(async (req, res) => {
  const {
    name,
    age,
    prevRpExp,
    charEth,
    charBack,
    liveEmail,
    streamLink,
    steamProfile,
  } = req.body;

  try {
    const betaApp = await closedBeta.create({
      name,
      age,
      prevRpExp,
      charEth,
      charBack,
      liveEmail,
      streamLink,
      steamProfile,
      createdBy: req.User._id,
    });
    const player = await User.findById(req.User._id);
    if (player) {
      player.BetaStatus = "Pending";
      await player.save();
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,

          pass: process.env.PASS,
        },
      });
      const mailOptions = {
        from: "support@primeroleplaytn.site", // Sender address
        to: liveEmail, // List of recipients
        subject: "Thank You for Your Application to Prime Roleplay Closed Beta", // Subject line
        text: "Dear Roleplayer, Thank you for your interest in joining the Prime Roleplay Closed Beta! We have received your application and will be reviewing it shortly. Please keep an eye on your email for updates, and feel free to check our website to monitor the status of your application.We appreciate your patience and look forward to the possibility of welcoming you to our roleplay community!.Best regards,Prime Roleplay Team",
        html: "<b> <h3>Dear Roleplayer, </h3> <p>Thank you for your interest in joining the Prime Roleplay Closed Beta! We have received your application and will be reviewing it shortly. Please keep an eye on your email for updates, and feel free to check our website to monitor the status of your application.</p> <p>We appreciate your patience and look forward to the possibility of welcoming you to our roleplay community!</p> <p>Best regards, Prime Roleplay Team</p></b>", // HTML body (optional)
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(`Error: ${error}`);
        }
        console.log(`Email sent: ${info.response}`);
      });
    } else {
      throw new Error("Player not found");
    }
    res.status(201).json(betaApp);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllBetaApps = asyncHandler(async (req, res) => {
  try {
    const allBetaApps = await closedBeta
      .find()
      .populate("createdBy")
      .populate("treatedBy");
    res.status(200).json(allBetaApps);
  } catch (error) {
    throw new Error(error);
  }
});

const acceptBetaApp = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const betaApp = await closedBeta.findById(id).populate("createdBy");
    if (betaApp) {
      betaApp.status = "Accepted" || betaApp.status;
      betaApp.treatedBy = req.User._id;
      const acceptedWihteApp = await betaApp.save();
      const player = await User.findById(betaApp.createdBy._id);
      if (player) {
        player.BetaStatus = "Accepted";
        await player.save();
        const transporter = nodemailer.createTransport({
          host: "smtp.hostinger.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,

            pass: process.env.PASS,
          },
        });
        const mailOptions = {
          from: "support@primeroleplaytn.site", // Sender address
          to: betaApp.liveEmail, // List of recipients
          subject:
            "Congratulations! Your Prime Roleplay Closed Beta Application Has Been Accepted", // Subject line
          text: "Dear Roleplayer,We are excited to inform you that your application to the Prime Roleplay Closed Beta has been accepted! To complete your onboarding process, we will schedule an interview on Discord in the coming days. Please keep an eye on our Discord server for the announcement regarding your interview time.We can't wait to have you on board and look forward to seeing you in the world of Prime Roleplay!Best regards,Prime Roleplay Team",
          html: "<b> <h3>Dear Roleplayer, </h3> <p>We are excited to inform you that your application to the Prime Roleplay Closed Beta has been accepted! To complete your onboarding process, we will schedule an interview on Discord in the coming days. Please keep an eye on our Discord server for the announcement regarding your interview time.<p> <p>We can't wait to have you on board and look forward to seeing you in the world of Prime Roleplay!</p> <p>Best regards, Prime Roleplay Team</p></b>", // HTML body (optional)
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(`Error: ${error}`);
          }
          console.log(`Email sent: ${info.response}`);
        });
      } else {
        throw new Error("Player not found");
      }

      res.status(201).json(acceptedWihteApp);
    } else {
      throw new Error("BetaApp Not Found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
const rejectBetaApp = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const betaApp = await closedBeta.findById(id).populate("createdBy");
    if (betaApp) {
      betaApp.treatedBy = req.User._id;
      betaApp.status = "Rejected" || betaApp.status;
      const rejectedBetaApp = await betaApp.save();
      const player = await User.findById(betaApp.createdBy._id);
      if (player) {
        player.BetaStatus = "Rejected";
        await player.save();
        const transporter = nodemailer.createTransport({
          host: "smtp.hostinger.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,

            pass: process.env.PASS,
          },
        });
        const mailOptions = {
          from: "support@primeroleplaytn.site", // Sender address
          to: betaApp.liveEmail, // List of recipients
          subject: "Prime Roleplay Closed Beta Application Update", // Subject line
          text: "Dear Roleplayer, Thank you for taking the time to apply to the Prime Roleplay Closed Beta. After careful review, we regret to inform you that your application has not been accepted. While we won’t provide specific feedback, this decision is based on the specific type of roleplayers we are looking for at this time.Please don’t be discouraged! You are welcome to reapply once we open the whitelist applications after the closed beta period.We appreciate your interest and hope to see you again in the future.Best regards,Prime Roleplay Team",
          html: "<b> <h3>Dear Roleplayer, </h3> <p>Thank you for taking the time to apply to the Prime Roleplay Closed Beta. After careful review, we regret to inform you that your application has not been accepted. While we won’t provide specific feedback, this decision is based on the specific type of roleplayers we are looking for at this time.</p>Please don’t be discouraged! You are welcome to reapply once we open the whitelist applications after the closed beta period.<p> <p>We appreciate your interest and hope to see you again in the future.</p>  <p>Best regards, Prime Roleplay Team</p></b>", // HTML body (optional)
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(`Error: ${error}`);
          }
          console.log(`Email sent: ${info.response}`);
        });
      } else {
        throw new Error("Player not found");
      }

      res.status(201).json(rejectedBetaApp);
    } else {
      throw new Error("WhiteApp Not Found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getmyBetaApp = asyncHandler(async (req, res) => {
  try {
    const myBetaApp = await closedBeta.find({
      createdBy: req.User._id,
    });
    res.json(myBetaApp);
  } catch (error) {}
});

export {
  createBetaApp,
  getAllBetaApps,
  acceptBetaApp,
  rejectBetaApp,
  getmyBetaApp,
};
