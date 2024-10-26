import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useDispatch } from "react-redux";
import { loginUser } from "./Redux/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import VideoNav from "./Components/VideoNav";
import Button from "./Components/Button";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <div>
      <ToastContainer />
      <VideoNav />
      <Outlet />
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
