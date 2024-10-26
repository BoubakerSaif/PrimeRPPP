import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const LoginFirst = () => {
  const DiscordLink = `${import.meta.env.VITE_BACK_URL}/auth`;
  return (
    <div>
      <div className="text-white flex items-start justify-around h-[400px] w-[700px] max-xl:w-[600px] mt-12 ">
        <div className="flex flex-col items-center  h-32 w-96 justify-around gap-9 ">
          <h1 className="font-bold text-2xl">You need to Login With Discord</h1>
          <div className="flex gap-8 font-semibold">
            <Link
              to={DiscordLink}
              className="bg-indigo-600 px-2 py-2 rounded-lg hover:bg-[#1d1d1d] flex items-center gap-2"
            >
              <FaDiscord className="text-xl" />
              Login With Discord
            </Link>
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

export default LoginFirst;
