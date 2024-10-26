import React from "react";
import { motion } from "framer-motion";

const Factions = () => {
  return (
    <div className=" w-full h-[750px] max-sm:h-auto flex flex-col items-center justify-evenly   bg-[#010101] text-white text-center font-bold  font-Poppins ">
      <motion.div
        className="font-Poppins font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      >
        <p className="font-bold text-4xl max-lg:text-2xl max-sm:text-xl">
          GOVERNMENT AND LEGAL FACTIONS
        </p>
        <p className="text-2xl mt-1 max-sm:mt-12 max-sm:px-4 max-lg:text-xl max-sm:text-xs">
          Check out our wide variety and new concept for the legal podium
        </p>
      </motion.div>
      <motion.div
        className="flex w-full justify-center gap-24 max-sm:gap-8 max-sm:mt-4   text-lg max-lg:flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247027/warden_v8zpzc.png"
            className="w-64 max-sm:w-32 max-lg:w-56"
          />

          <p>Warden Branch</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247025/ems_cesul1.png"
            className="w-64 max-sm:w-32 max-lg:w-56"
          />

          <p>Scientist federation</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247028/ranger_hyu699.png"
            className="w-64 max-sm:w-32 max-lg:w-56"
          />

          <p>Ranger Legion</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247028/keepers_f7b3hk.png"
            className="w-64 max-sm:w-32 max-lg:w-56"
          />

          <p>Wall Keepers Correction</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Factions;
