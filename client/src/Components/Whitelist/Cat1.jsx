import React from "react";
import { toast } from "react-toastify";

const Cat1 = ({ setCat, setStep, whiteList, setWhiteList }) => {
  const onChangeHandler = (e) => {
    setWhiteList({ ...whiteList, [e.target.name]: e.target.value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (!whiteList.name.match(/[a-z]/gi) || whiteList.name.length < 3) {
      toast.warn("Name is not valid", { theme: "dark" });
    } else if (!whiteList.discordId.match(/[a-z]#[0-9]/gi)) {
      toast.warn("DiscordId is not valid", { theme: "dark" });
    } else if (whiteList.age.length < 2) {
      toast.warn("Age is not valid", { theme: "dark" });
    } else if (whiteList.prevRpExp.length < 150) {
      toast.warn("Previus Roleplay Experience must be a least 150 letters ", {
        theme: "dark",
      });
    } else {
      setCat("cat2");
      setStep("step5");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className=" max-lg:w-[640px]  w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins text-black font-semibold bg-white w-fit mx-auto px-4 py-1 rounded-md  hover:text-white hover:bg-[#131313] hover:cursor-pointer">
        First Category : General Info
      </h1>
      <form
        id="form"
        className="flex flex-col h-full gap-6 font-Poppins mt-3   "
        novalidate
      >
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Name
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2    "
            type="text"
            placeholder="What is your real name"
            name="name"
            value={whiteList.name}
            required
          />
          <p class="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
            Please provide your first name.
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Discord ID
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="e.g., username#1234"
            name="discordId"
            value={whiteList.discordId}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Age
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="Must be 18+ to apply"
            name="age"
            value={whiteList.age}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Timezone
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="What is your timezone? "
            name="timezone"
            value={whiteList.timezone}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            How Did You Hear About Us?
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="How did you find out about our server ?"
            name="hearAboutUs"
            value={whiteList.hearAboutUs}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Previous Roleplay Experience:
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-80 max-lg:w-[640px] px-2  "
            placeholder="Briefly describe your previous experience in roleplay servers or communities"
            name="prevRpExp"
            value={whiteList.prevRpExp}
          ></textarea>
        </div>
        <div className="flex justify-end max-lg:w-[600px] ">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("");
                setStep("step3");
              }}
              className="text-center  font-Poppins font-semibold bg-[#131313] text-white w-fit mx-auto px-2 py-1 rounded-md  hover:cursor-pointer"
            >
              Cancel
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

export default Cat1;
