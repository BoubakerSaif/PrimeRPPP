import React, { useEffect, useState } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiFivem } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
import { FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle } from "react-icons/fa";
import Step1 from "../Components/Whitelist/Step1";
import Step2 from "../Components/Whitelist/Step2";
import Step3 from "../Components/Whitelist/Step3";
import Step4 from "../Components/Whitelist/Step4";
import Cat1 from "../Components/Whitelist/Cat1";
import Cat2 from "../Components/Whitelist/Cat2";
import Cat3 from "../Components/Whitelist/Cat3";
import { Cat4 } from "../Components/Whitelist/Cat4";
import Cat5 from "../Components/Whitelist/Cat5";
import JoinDiscord from "../Components/Whitelist/JoinDiscord";
import LoginFirst from "../Components/Whitelist/LoginFirst";
import Beta from "../Components/Whitelist/Beta";
import { getmyBetaApp } from "../Redux/betaAppSlice";
import { loginUser } from "../Redux/userSlice";

const How = () => {
  const [step, setStep] = useState("step1");
  const [cat, setCat] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const { myBetaApp } = useSelector((state) => state.beta);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginUser());
    dispatch(getmyBetaApp());
  }, []);
  const [whiteList, setWhiteList] = useState({
    name: "",
    discordId: "",
    age: "",
    timezone: "",
    hearAboutUs: "",
    prevRpExp: "",
    charName: "",
    charEth: "",
    charBack: "",
    reason: "",
    charSkills: "",
    sceneOne: "",
    sceneTwo: "",
    sceneThree: "",
    charLongTermGoals: "",
    potCharDev: "",
    existStrat: "",
    obeyLaw: "",
    breakLow: "",
  });

  return (
    <div>
      <main className="bg-[#010101] flex items-center text-white font-Poppins flex-col gap-12">
        <div className="flex h-fit gap-16 mt-8">
          <div
            onClick={() => {
              setStep("step1");
              setCat("");
            }}
            className="flex flex-col items-center gap-3 hover:cursor-pointer   "
          >
            <IoGameControllerOutline
              className={`bg-[#131313]  text-4xl p-2 rounded-xl ${
                step == "step1" ? "bg-white text-black  " : ""
              } `}
            />
            <p className="text-sm font-semibold">Step 1</p>
          </div>
          <div
            onClick={() => {
              setStep("step2");
              setCat("");
            }}
            className="flex flex-col items-center gap-3 hover:cursor-pointer   "
          >
            <SiFivem
              className={`bg-[#131313]  text-4xl p-2 rounded-xl ${
                step == "step2" ? "bg-white text-black " : ""
              } `}
            />
            <p className="text-sm font-semibold">Step 2</p>
          </div>
          <div
            onClick={() => {
              setStep("step3");
              setCat("");
            }}
            className="flex flex-col items-center gap-3 hover:cursor-pointer   "
          >
            <FaQuestion
              className={`bg-[#131313]  text-4xl p-2 rounded-xl ${
                step == "step3" ? "bg-white text-black " : ""
              } `}
            />
            <p className="text-sm font-semibold">Step 3</p>
          </div>
          {step == "step4" && (
            <div
              onClick={() => {
                setStep("step4");
                setCat("");
              }}
              className="flex flex-col items-center gap-3 hover:cursor-pointer   "
            >
              <FaRegCheckCircle
                className={`bg-[#131313]  text-4xl p-2 rounded-xl ${
                  step == "step4" ? "bg-white text-black " : ""
                } `}
              />
              <p className="text-sm font-semibold">Step 4</p>
            </div>
          )}

          {step == "step5" && (
            <div
              onClick={() => {
                setStep("step5");
              }}
              className="flex flex-col items-center gap-3 hover:cursor-pointer   "
            >
              <SlNotebook
                className={`bg-[#131313] text-4xl p-2 rounded-xl ${
                  step == "step5" ? "bg-white text-black " : ""
                } `}
              />
              <p className="text-sm font-semibold">Step 5</p>
            </div>
          )}
        </div>

        {step == "step1" && <Step1 setStep={setStep} />}
        {step == "step2" && <Step2 setStep={setStep} />}

        {step == "step3" && !userInfo ? <LoginFirst /> : ""}
        {step == "step3" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Step3 setStep={setStep} myBetaApp={myBetaApp} />
        ) : (
          ""
        )}

        {step == "step3" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 0 ? (
          <JoinDiscord />
        ) : (
          ""
        )}

        {step == "step4" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Step4 setStep={setStep} setCat={setCat} />
        ) : (
          ""
        )}

        {step == "step5" &&
        cat == "cat1" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Beta setStep={setStep} />
        ) : (
          ""
        )}

        {/* {step == "step5" &&
        cat == "cat1" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Cat1
            setCat={setCat}
            setStep={setStep}
            whiteList={whiteList}
            setWhiteList={setWhiteList}
          />
        ) : (
          ""
        )}
        {step == "step5" &&
        cat == "cat2" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Cat2
            setCat={setCat}
            setStep={setStep}
            whiteList={whiteList}
            setWhiteList={setWhiteList}
          />
        ) : (
          ""
        )}
        {step == "step5" &&
        cat == "cat3" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Cat3
            setCat={setCat}
            setStep={setStep}
            whiteList={whiteList}
            setWhiteList={setWhiteList}
          />
        ) : (
          ""
        )}
        {step == "step5" &&
        cat == "cat4" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Cat4
            setCat={setCat}
            setStep={setStep}
            whiteList={whiteList}
            setWhiteList={setWhiteList}
          />
        ) : (
          ""
        )}
        {step == "step5" &&
        cat == "cat5" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <Cat5
            setCat={setCat}
            setStep={setStep}
            cat={cat}
            whiteList={whiteList}
            setWhiteList={setWhiteList}
          />
        ) : (
          ""
        )} */}
      </main>
    </div>
  );
};

export default How;
