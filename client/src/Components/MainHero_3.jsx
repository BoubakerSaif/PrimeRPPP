import React from "react";
import { motion } from "framer-motion";

const MainHero_3 = () => {
  return (
    <div className=" bg-[#010101] text-center relative h-[650px] font-Poppins max-sm:h-[300px]     ">
      <motion.div
        className="flex items-center absolute top-[-45%] right-[5%] gap-8 max-sm:gap-3 "
        initial={{ opacity: 0 }}
        s
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div>
          <p className=" text-slate-400 text-3xl  text-opacity-80  font-bold flex-col max-sm:text-xl ">
            BECOME
          </p>
          <p className=" text-white font-bold flex-col text-5xl max-lg:text-4xl max-sm:text-2xl ">
            SCIENTIST
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729374064/scientist_qe7yjx.png"
          className="w-[600px] max-lg:w-96  max-sm:w-40  "
        />
      </motion.div>
    </div>
  );
};

export default MainHero_3;
