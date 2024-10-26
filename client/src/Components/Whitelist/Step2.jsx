import React from "react";
import { Link } from "react-router-dom";

const Step2 = ({ setStep }) => {
  return (
    <div className="text-white flex items-start justify-around max-lg:justify-center h-[400px] w-[700px] max-xl:w-[600px]  mt-12 ">
      <img
        src={
          "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259753/fivemlogo_gqzwht.png"
        }
        className="w-60 "
      />
      <div className="flex flex-col items-center  h-32 w-96 justify-around ">
        <h1 className="font-bold text-2xl">Have you installed FiveM ?</h1>
        <div className="flex gap-8 max-lg:gap-3 font-semibold">
          <button
            onClick={() => {
              setStep("step3");
            }}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[#1d1d1d] hover:text-white "
          >
            Yeah, I installed it
          </button>
          <Link
            target="_blank"
            to={"https://fivem.net/"}
            className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
          >
            No,download it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step2;
