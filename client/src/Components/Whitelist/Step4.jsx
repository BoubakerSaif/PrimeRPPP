import React from "react";
import { Link } from "react-router-dom";

const Step4 = ({ setStep, setCat }) => {
  return (
    <div className="text-white flex items-start justify-around  h-[400px] w-full  max-xl:w-[600px] mt-12 ">
      <div className=" flex items-center justify-center w-full   ">
        <img
          src={
            "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729259777/white_epcawp.png"
          }
          className="w-36 h-32 "
        />
        <div className="flex flex-col justify-around gap-3 w-96 ">
          <h1 className="font-bold text-2xl  ">Rules</h1>
          <p className="text-[14px]">
            I hereby acknowledge that I have read and accept the
            <Link target="_blank" to={"/terms"} className="underline">
              {` Terms of Services `}
            </Link>
            and the
            <Link to={"/rpguide"} target="_blank" className="underline">
              {` General Guidelines.`}
            </Link>
          </p>
          <p className="text-[14px]">
            I understand that I have a limited number of attempts to pass the
            whitelist, and once these attempts are exhausted, I will no longer
            be eligible to try again.
          </p>
          <p className="text-[14px]">
            I acknowledge that being accepted on the app does not automatically
            grant me access to the server.
          </p>
          <p className="text-[14px]">
            I confirm that I am prepared to complete the application process.
          </p>
          <div className="flex gap-8 font-semibold  ">
            <button
              onClick={() => {
                setCat("cat1");
                setStep("step5");
              }}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[#1d1d1d] hover:text-white"
            >
              Accept Rules
            </button>
            <Link
              to={"/"}
              className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
            >
              Do it later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
