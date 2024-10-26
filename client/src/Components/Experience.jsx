import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className=" w-full h-[300px] max-sm:h-[150px] flex items-center justify-center    bg-[#010101] text-white text-center max-md:h-[400px] font-Poppins  relative  ">
      <FaArrowUp
        className=" border-[1px] fixed top-[95%] right-[2%] w-8 h-5 z-50   text-white z-99 hover:cursor-pointer"
        onClick={() => {
          window.scroll(0, 0);
        }}
      />
      <motion.div
        className="font-Poppins font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      >
        <p className=" uppercase  text-6xl max-sm:text-sm max-md:text-xl max-lg:text-3xl max-sm:mb-60">
          We give our players a unique world of factions,businesses and jobs
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;
