import React from "react";
import { toast } from "react-toastify";

const Cat2 = ({ setCat, setStep, whiteList, setWhiteList }) => {
  const onChangeHandler = (e) => {
    setWhiteList({ ...whiteList, [e.target.name]: e.target.value });
  };
  const nextStep = (e) => {
    e.preventDefault();
    if (!whiteList.charName.match(/[a-z]/gi) || whiteList.name.length < 3) {
      toast.warn("Character Name is not valid", { theme: "dark" });
    } else if (!whiteList.charEth.match(/[a-z]/gi)) {
      toast.warn("Character Ethincity is not valid", { theme: "dark" });
    } else if (whiteList.charBack.length < 150) {
      toast.warn(
        "Character's Background and Status must be a least 150 letters ",
        {
          theme: "dark",
        }
      );
    } else if (whiteList.reason.length < 150) {
      toast.warn("Reason for Being in the City must be a least 150 letters ", {
        theme: "dark",
      });
    } else if (whiteList.charSkills.length < 150) {
      toast.warn(
        "Character’s Skills and Knowledge must be a least 150 letters ",
        {
          theme: "dark",
        }
      );
    } else {
      setCat("cat3");
      setStep("step5");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className=" h-auto max-lg:w-[640px] w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold text-black  bg-white w-fit mx-auto px-4 py-1 rounded-md  hover:text-white hover:bg-[#131313] hover:cursor-pointer">
        Second Category : RP Knowledge Base 1
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Character Name
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm  "
            type="text"
            placeholder="What is your character's name"
            name="charName"
            value={whiteList.charName}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character Ethnicity
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm"
            type="text"
            placeholder="Be aware of the ethnicity acting other than what you need to be will result a character wipe and/or a ban"
            name="charEth"
            value={whiteList.charEth}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character's Background and Status
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            name="charBack"
            value={whiteList.charBack}
            placeholder="Describe your character’s current socio-economic status. Are they poor or wealthy? What factors have contributed to this status in the context of waking up in a caged city?"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Reason for Being in the City
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Given the server’s story of waking up in a caged city with a massive wall and closed gate, why does your character think they are here? "
            name="reason"
            value={whiteList.reason}
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character’s Skills and Knowledge
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="What specific skills does your character possess? Are they educated, skilled in a trade, or do they have street smarts?How might these skills affect their survival or social standing in the city?"
            name="charSkills"
            value={whiteList.charSkills}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("cat1");
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

export default Cat2;
