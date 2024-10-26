import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
import Caroussel from "./Caroussel";
import { motion } from "framer-motion";
const Slide = () => {
  return (
    <div className="bg-[#010101] max-sm:h-auto max-lg:h-[500px] ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        className="  text-white h-screen  w-full  flex justify-around items-center max-2xl:flex-col max-2xl:gap-24 max-xl:justify-between     "
      >
        <Caroussel />
        <div className=" flex flex-col justify-around items-center h-[400px] w-[750px] max-md:w-[600px] max-sm:w-[300px] 2xl:mt-24 max-sm:gap-4     ">
          <div>
            <p className="font-Poppins font-bold text-2xl max-md:text-xl max-sm:mt-24 max-sm:text-base max-sm:text-center ">
              How do I start playing?
            </p>
            <p className="font-Poppins max-md:text-sm max-sm:text-xs max-sm:mt-2 ">
              Just two simple steps and you're ready to go!
            </p>
          </div>

          <div className="flex justify-between items-center w-[650px] max-sm:flex-col max-sm:h-auto max-sm:gap-3 max-sm:w-[300px] max-sm:text-center   max-sm:mt-5  h-28 bg-[#131313] border-[1px]  border-[#3d3d3d] rounded-md p-3 max-md:w-[500px] lg:mt-3   ">
            <img
              src={
                "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259719/gta5_ke2fnq.png"
              }
              className="w-28"
            />
            <div className="font-Poppins text-sm">
              <p>Buy Grand Theft Auto V.</p>
              <p>If you do not already have a licensed version</p>
            </div>
            <Link
              target="_blank"
              to={
                "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
              }
              className="flex gap-2 items-center px-8 py-1 bg-white brightness-125 rounded-md  w-44 justify-center  "
            >
              <FaShoppingCart className="text-black" />
              <p className="text-black font-bold">Buy</p>
            </Link>
          </div>
          <div className="flex justify-between items-center w-[650px] max-sm:flex-col max-sm:h-auto max-sm:w-[300px] max-sm:gap-8  max-sm:text-center  h-28 bg-[#131313] p-3 border-[1px] border-[#3d3d3d] rounded-md max-md:w-[500px]    ">
            <img
              src={
                "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259753/fivemlogo_gqzwht.png"
              }
              className="w-28 h-12"
            />
            <div className="font-Poppins text-sm">
              <p>Download FiveM Launcher</p>
              <p>Launcher will download necessary server files</p>
            </div>
            <Link
              to={"https://fivem.net/"}
              target="_blank"
              className="flex gap-2 items-center px-8 py-1 bg-white brightness-125 rounded-md w-44 justify-center "
            >
              <IoMdDownload className="text-black" />
              <p className="text-black font-bold">Download</p>
            </Link>
          </div>
          <p className=" text-slate-300 flex items-center gap-2 font-Poppins mb-9 max-sm:flex-col max-sm:text-xs  ">
            Any questions or issues? Let us help you
            <span className="flex items-center justify-center gap-1 text-white brightness-200   hover:cursor-pointer">
              <IoMailOpenOutline className="text-2xl text-white mb-1  " />
              Get in touch!
              <span className="decoration-white decoration-2 underline">
                support@primerolelpaytn.site
              </span>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide;
