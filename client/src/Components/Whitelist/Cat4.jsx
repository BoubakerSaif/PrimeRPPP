import React from "react";
import { toast } from "react-toastify";

export const Cat4 = ({ setCat, setStep, whiteList, setWhiteList }) => {
  const onChangeHandler = (e) => {
    setWhiteList({ ...whiteList, [e.target.name]: e.target.value });
  };
  const nextStep = (e) => {
    e.preventDefault();
    if (whiteList.charLongTermGoals.length < 150) {
      toast.warn("Character’s Long-Term Goals must be a least 150 letters", {
        theme: "dark",
      });
    } else if (whiteList.potCharDev.length < 150) {
      toast.warn(
        "Potential Character Development must be a least 150 letters ",
        {
          theme: "dark",
        }
      );
    } else if (whiteList.existStrat.length < 150) {
      toast.warn("Exit Strategy must be a least 150 letters ", {
        theme: "dark",
      });
    } else {
      setCat("cat5");
      setStep("step5");
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className=" h-auto w-[900px] max-lg:w-[640px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold text-black bg-white w-fit mx-auto px-4 py-1 rounded-md  hover:text-white hover:bg-[#131313] hover:cursor-pointer">
        Fourth Category : RP Knowledge Base 3
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Character’s Long-Term Goals
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="What are your character’s long-term goals in the city?"
            name="charLongTermGoals"
            value={whiteList.charLongTermGoals}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Potential Character Development
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="How do you see your character evolving after 3 months of roleplay"
            name="potCharDev"
            value={whiteList.potCharDev}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Exit Strategy
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="If your character were to leave the city or die, how would you roleplay their exit? (Assesses commitment to the roleplay and creative handling of character endings)"
            name="existStrat"
            value={whiteList.existStrat}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("cat3");
                setStep("step5");
                window.scrollTo(0, 0);
              }}
              className="text-center  font-Poppins font-semibold bg-[#131313] text-white w-fit mx-auto px-2 py-1 rounded-md  hover:cursor-pointer"
            >
              Go back
            </button>
            <button
              onClick={nextStep}
              className="text-center  font-Poppins font-semibold  bg-white text-black  w-fit mx-auto px-5 py-1 rounded-md  hover:text-white hover:bg-[#131313] hover:cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
