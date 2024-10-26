import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createBetaApp } from "../../Redux/betaAppSlice";
import { useNavigate } from "react-router-dom";
const Beta = ({ setStep }) => {
  const [betaApp, setBetaApp] = useState({
    name: "",
    age: "",
    prevRpExp: "",
    charEth: "",
    charBack: "",
    liveEmail: "",
    streamLink: "",
    steamProfile: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setBetaApp({ ...betaApp, [e.target.name]: e.target.value });
  };
  const confirmbetaApp = (e) => {
    e.preventDefault();
    if (!betaApp.name.match(/[a-z]/gi) || betaApp.name.length < 3) {
      toast.warn("Name is not valid", { theme: "dark" });
    } else if (!betaApp.age.match(/[0-9]/gi) || betaApp.age.length < 2) {
      toast.warn("Age is not valid", { theme: "dark" });
    } else if (betaApp.prevRpExp.split(" ").length < 60) {
      toast.warn("Previous Roleplay Experience must be a least 60 words ", {
        theme: "dark",
      });
    } else if (betaApp.prevRpExp.split(" ").length > 200) {
      toast.warn("Previous Roleplay Experience must under 200 words ", {
        theme: "dark",
      });
    } else if (!betaApp.charEth.match(/[a-z]/gi)) {
      toast.warn("Character Ethnicity is not valid", { theme: "dark" });
    } else if (betaApp.charBack.split(" ").length < 150) {
      toast.warn("Character background must be a least 150 words", {
        theme: "dark",
      });
    } else if (betaApp.charBack.split(" ").length > 350) {
      toast.warn("Character background must be under 350 words", {
        theme: "dark",
      });
    } else if (!betaApp.liveEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.warn("Email is not valid", {
        theme: "dark",
      });
    } else if (!betaApp.steamProfile.match(/(https?:\/\/[^\s]+)/gi)) {
      toast.warn("Steam Profile is not valid", {
        theme: "dark",
      });
    } else {
      dispatch(createBetaApp(betaApp));
      navigate("/");
      window.scroll(0, 0);
      toast.success("Your Beta App have been submitted successfully");
    }
  };
  return (
    <div className=" max-lg:w-[640px]  w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins text-black font-semibold bg-white w-fit mx-auto px-4 py-1 rounded-md  hover:text-white hover:bg-[#131313] hover:cursor-pointer">
        Closed Beta Application
      </h1>
      <form
        id="form"
        className="flex flex-col h-full gap-6 font-Poppins mt-3   "
      >
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Name
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2    "
            type="text"
            placeholder="What is your real name"
            name="name"
            required
            value={betaApp.name}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Age
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="Must be 18+ to apply"
            name="age"
            value={betaApp.age}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Previous Roleplay Experience:
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-60 max-lg:w-[640px] px-2  "
            placeholder="Briefly describe your previous experience in roleplay servers or communities"
            name="prevRpExp"
            value={betaApp.prevRpExp}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character Ethnicity
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="Ex: Amerian, Mexican,Arabian etc.."
            name="charEth"
            value={betaApp.charEth}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Tell us about your Character
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-60 max-lg:w-[640px] px-2  "
            placeholder="Briefly describe your Character"
            name="charBack"
            value={betaApp.charBack}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Your Live Email
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="email"
            placeholder="Type your email here"
            name="liveEmail"
            value={betaApp.liveEmail}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            If you are streaming, can you provide us your streaming channel ? If
            not disregard
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="Streaming Channel Link"
            name="streamLink"
            value={betaApp.streamLink}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Your Steam Profile
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="Steam Profile Link"
            name="steamProfile"
            value={betaApp.steamProfile}
          />
        </div>
        <div className="flex justify-end max-lg:w-[600px] ">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setStep("step3");
              }}
              className="text-center  font-Poppins font-semibold bg-[#131313] text-white w-fit mx-auto px-2 py-1 rounded-md  hover:cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={confirmbetaApp}
              className="text-center  font-Poppins font-semibold  bg-white text-black  w-fit mx-auto px-5 py-1 rounded-md  hover:text-white hover:bg-[#131313] hover:cursor-pointer"
            >
              Confirm Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Beta;
