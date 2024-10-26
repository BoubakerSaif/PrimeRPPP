import React from "react";
import { Link } from "react-router-dom";
const FAQ = () => {
  return (
    <div className="relative h-full w-full flex justify-center bg-[#010101]  ">
      <div className="text-white w-full h-auto flex flex-col items-center justify-center gap-7 mt-6   ">
        <p className="font-bold text-2xl ">FAQ</p>
        <div className="flex max-lg:flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-5 2xl:w-[1500px] ">
          <div className="bg-[#131313] w-[450px] max-sm:w-[300px] flex flex-col rounded-md p-4 border-[1px] border-[#3d3d3d]  font-Poppins ">
            <p className="font-semibold">What is Prime RP?</p>
            <p className="text-[12px] text-slate-300 ">
              It is a unique project based on GTA V, allowing thousands of
              players to interact with each other in real-time.
            </p>
          </div>
          <div className="bg-[#131313] w-[450px] max-sm:w-[300px] flex flex-col rounded-md p-4 border-[1px] border-[#3d3d3d]  font-Poppins ">
            <p className="font-semibold">What RP (RolePlay) stands for?</p>
            <p className="text-[12px] text-slate-300 ">
              This is a game mode where players create characters and scenarios,
              and then act according to their roles within the gameplay.
            </p>
          </div>
          <div className="bg-[#131313] w-[450px] max-sm:w-[300px] flex flex-col rounded-md p-4 border-[1px] border-[#3d3d3d]  font-Poppins ">
            <p className="font-semibold">How do I start on Prime RP?</p>
            <p className="text-[12px] text-slate-300 ">
              First you need to download a licensed GTA V and then install the
              Fivem Launcher.
            </p>
          </div>
          <div className="bg-[#131313] w-[450px] max-sm:w-[300px] flex flex-col rounded-md p-4 border-[1px] border-[#3d3d3d]  font-Poppins ">
            <p className="font-semibold">What is Fivem Launcher?</p>
            <p className="text-[12px] text-slate-300 ">
              This is a launcher for connecting to the servers. Launcher is
              safe, able to download necessary files.
            </p>
          </div>
          <div className="bg-[#131313] w-[450px] max-sm:w-[300px] flex flex-col rounded-md p-4 border-[1px] border-[#3d3d3d]  font-Poppins ">
            <p className="font-semibold">What to do on the server?</p>
            <p className="text-[12px] text-slate-300 ">
              In addition to a large choice of jobs and player interactions, we
              have regular updates and seasonal events available.
            </p>
          </div>
          <div className="bg-[#131313] w-[450px] max-sm:w-[300px] flex flex-col rounded-md p-4 border-[1px] border-[#3d3d3d]  font-Poppins ">
            <p className="font-semibold">Where can I find the server rules?</p>
            <p className="text-[12px] text-slate-300 ">
              {`  You can find a section with server rules, complaints about players
              and other topics on this `}

              <Link
                to={"/rpguide"}
                className="underline decoration-2 decoration-white font-semibold  "
              >
                Link
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
