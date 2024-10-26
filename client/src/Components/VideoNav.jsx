import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/userSlice";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import "./Border.css";
import { getmyBetaApp } from "../Redux/betaAppSlice";
import { LuServerOff } from "react-icons/lu";
import Button from "./Button";

const VideoNav = () => {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    if (show) {
      setShow(!show);
    }
  };
  const music = new Audio(
    "https://res.cloudinary.com/dl6o7cgmp/video/upload/v1729447529/Schubert_-_Ave_Maria_xtgkzw.mp3"
  );

  const playIt = () => {
    music.play();
  };
  const stopIt = () => {
    music.pause();
  };

  useEffect(() => {
    playIt();
  }, []);

  const DiscordLink = `${import.meta.env.VITE_BACK_URL}/auth`;
  const { myBetaApp, createdBetaApp, rejectedApp, acceptedApp } = useSelector(
    (state) => state.beta
  );
  const { userInfo } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    dispatch(getmyBetaApp());
  }, [createdBetaApp, rejectedApp, acceptedApp, dispatch]);
  return (
    <div
      className={`w-full h-full ${
        location.pathname == "/" && "max-sm:h-[750px]"
      }   relative flex justify-center items-center bg-[#010101] ${
        location.pathname == "/dashboard" && "hidden"
      }  `}
    >
      <video
        src={
          "https://res.cloudinary.com/dl6o7cgmp/video/upload/v1729246699/Trailer_usu0kx.mp4"
        }
        autoPlay
        loop
        muted
        className={`w-full  ${location.pathname !== "/" && "hidden"} `}
      />
      <div
        className={`flex justify-around text-white w-full font-Poppins px-5   ${
          location.pathname == "/" && "absolute top-0 "
        }  mt-5`}
      >
        <div className="flex  max-lg:gap-0 text-white    ">
          <div className=" text-4xl flex  gap-1 font-bold  ">
            <div className="lg:hidden max-lg:block max-lg:mt-1">
              {show && (
                <IoMdArrowDropup
                  className="w-fit text-3xl max-sm:text-xl hover:border-2 hover:cursor-pointer rounded-md mt-1 max-sm:mt-3"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              )}
              {show == false && (
                <FaBars
                  className="w-fit text-3xl max-sm:text-xl  hover:border-2 hover:cursor-pointer rounded-md mt-1 max-sm:mt-3"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              )}
            </div>
            <Link to={"/"} className="group lg:hover:scale-125 duration-500  ">
              <span className="text-white text-5xl max-sm:text-xl group-hover:[text-shadow:0px_0px_40px_rgba(255,255,255,1)] group-hover:brightness-200 ">
                P
              </span>
              <span className="group-hover:[text-shadow:0px_0px_40px_rgba(255,255,255,1)] text-4xl max-sm:text-lg group-hover:brightness-200">
                rime
              </span>
            </Link>
          </div>
          <div className=" mt-3 ml-3 h-fit flex items-center gap-2 bg-black bg-opacity-30 p-1  rounded-lg max-2xl:hidden">
            <LuServerOff /> <p>Server in progress</p>
            {/* <IoPeopleSharp className="text-xl" />
            <p>: 0</p> */}
          </div>
        </div>

        <div className="flex justify-between gap-10  mr-48 lg:mr-0 font-medium cursor-pointer h-fit max-lg:hidden text-base mt-4 ">
          <Link
            to={"/"}
            className=" text-white brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105   "
          >
            HOME
          </Link>
          <Link
            to="/joinus"
            className=" card px-1  text-white brightness-90  hover:text-white  hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105 flex justify-center items-center
   "
          >
            <h1>APPLY FOR CLOSED BETA</h1>
          </Link>
          <Link
            to={"/rpguide"}
            className=" text-white brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105  "
          >
            ROLEPLAY GUIDE
          </Link>
          {/* <Link className="  text-white brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105   ">
            CONTACT
          </Link> */}

          {userInfo && userInfo?.role === "Admin" && (
            <Link
              to="/dashboard"
              className="  text-white brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105   "
            >
              DASHBOARD
            </Link>
          )}
        </div>
        {userInfo ? (
          <div className="flex items-center gap-5 ">
            <p className="mt-2 flex flex-col items-center gap-2 text-center ">
              <span className="text-xl max-sm:text-xs">
                {" "}
                {userInfo?.global_name}
              </span>
              <span
                className={`text-xs max-sm:text-[10px] ${
                  myBetaApp && myBetaApp[0] && myBetaApp[0].status === "Pending"
                    ? "bg-orange-600 p-1 rounded-md"
                    : myBetaApp &&
                      myBetaApp[0] &&
                      myBetaApp[0].status === "Accepted"
                    ? "bg-green-600 p-1 rounded-md"
                    : myBetaApp &&
                      myBetaApp[0] &&
                      myBetaApp[0].status === "Rejected"
                    ? "bg-red-600 p-1 rounded-md"
                    : ""
                }  `}
              >
                {myBetaApp && myBetaApp[0] && myBetaApp[0].status
                  ? `App ${myBetaApp && myBetaApp[0] && myBetaApp[0].status} `
                  : ""}
              </span>
            </p>
            <img
              src={`https://cdn.discordapp.com/avatars/${userInfo?.discord_id}/${userInfo?.discord_avatar}`}
              className="w-14 h-14 mt-2 rounded-3xl max-sm:h-10 max-sm:w-10"
            />
            <Link
              onClick={logout}
              className=" max-sm:hidden mt-2 bg-indigo-600 p-2 rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110"
            >
              <span>Logout</span>
            </Link>
          </div>
        ) : (
          <Link
            to={DiscordLink}
            className=" max-sm:text-xs max-sm:mt-3  mt-3 max-lg:mt-2 bg-indigo-600 p-2 rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110"
          >
            <span>Login</span>
            <FaDiscord className="inline text-[20px] max-sm:text-xs" />
          </Link>
        )}
      </div>
      <div className="lg:hidden absolute max-md:top-[30%] max-lg:top-[25%] h-fit max-sm:top-28    ">
        {show && (
          <div className="w-screen text-white text-center flex justify-center gap-4 items-center text-sm font-semibold max-sm:flex-col    ">
            <Link
              onClick={() => {
                setShow(!show);
              }}
              to={"/"}
              className=" rounded-md bg-[##0e0e0f] w-fit  "
            >
              HOME
            </Link>
            <Link
              onClick={() => {
                setShow(!show);
              }}
              to={"/joinus"}
              className=" rounded-lg bg-[##0e0e0f] w-fit  "
            >
              APPLY FOR CLOSED BETA
            </Link>
            <Link
              onClick={() => {
                setShow(!show);
              }}
              to={"/rpguide"}
              className=" rounded-lg bg-[##0e0e0f] w-fit  "
            >
              ROLEPLAY GUIDE
            </Link>
            {userInfo && (
              <Link
                onClick={logout}
                className="  bg-indigo-600 px-2 py-1  rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110"
              >
                <span>Logout</span>
              </Link>
            )}
          </div>
        )}
      </div>
      {location.pathname == "/" && (
        <div className="absolute top-[60%] max-lg:top-[70%] flex flex-col items-center gap-4 max-sm:top-[80%] ">
          <Link
            target="_blank"
            to="https://youtu.be/sk9slehg6Rc?si=qP6i1yfv5_2QqB6Q "
            className={`${
              location.pathname == "/rpguide" ? "hidden" : ""
            } group  flex items-center justify-around py-2 max-lg:w-40 w-60 rounded-full cursor-pointer group-hover:brightness-150 border-[#3d3d3d] border-2  hover:bg-white hover:shadow-[0px_0px_50px] hover:shadow-white   `}
          >
            <FaPlayCircle className="text-5xl  text-white sm:text-3xl group-hover:text-black max-sm:text-2xl " />
            <button className="text-white font-Poppins font-bold text-xl  group-hover:text-black max-lg:text-sm   ">
              Watch Trailer
            </button>
          </Link>
          <Button playIt={playIt} stopIt={stopIt} />
        </div>
      )}
    </div>
  );
};

export default VideoNav;
