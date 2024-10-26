import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

const Button = ({ stopIt, playIt }) => {
  return (
    <div className="  flex rounded-md    ">
      <CiPlay1
        className="text-white text-xl cursor-pointer"
        onClick={() => {
          playIt();
        }}
      />
      <CiPause1
        className="text-white text-xl cursor-pointer"
        onClick={() => {
          stopIt();
        }}
      />
    </div>
  );
};

export default Button;
