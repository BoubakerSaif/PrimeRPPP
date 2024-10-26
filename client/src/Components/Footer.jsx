import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  const DiscordInvite = "https://discord.com/invite/UJEgUBMBT8";

  return (
    <div className="   bg-[#010101] max-sm:flex-col max-sm:gap-0   max-xl:flex-wrap lg:flex-nowrap lg:h-[300px]   text-white  flex justify-center gap-2 items-center  ">
      <div className="h-[200px] w-[280px] max-sm:h-[150px] flex flex-col mt-10 gap-2 font-Poppins   ">
        <p className="text-white font-Poppins text-xl font-bold">
          <span className="text-white text-2xl">P</span>rime
        </p>
        <p className="text-gray-400 text-xs font-se">
          PRIME is not affiliated with or endorsed by Rockstar North, Take-Two
          Interactive or other rightsholders.
        </p>
        <p className="text-gray-400 text-xs">
          Any trademarks used belong to their respective owners. PRIME reserves
          all rights on rightly owned images and other visual content provided
          on PRIME.
        </p>
      </div>

      <div className="h-[200px] w-[200px] max-sm:h-[80px] flex flex-col gap-2 mt-16 font-Poppins  ">
        <p className="text-white font-Poppins text-sm font-semibold underline decoration-1 decoration-white underline-offset-2">
          Link & Ressources
        </p>
        <Link
          target="_blank"
          to="https://discord.gg/UJEgUBMBT8"
          className="text-gray-400 text-sm font-medium hover:translate-x-2 duration-300 w-fit"
        >
          <p>Discord</p>
        </Link>
        <Link
          to={"/rpguide"}
          className="text-gray-400 hover:translate-x-2 font-medium text-sm duration-300 w-fit "
        >
          <p>Role Play Guide</p>
        </Link>
      </div>
      <div className="h-[200px] w-[200px] max-sm:h-[80px] flex flex-col gap-2 mt-16 font-Poppins  ">
        <p className="text-white font-Poppins text-sm font-semibold underline decoration-1 decoration-white underline-offset-2">
          Need Help ?
        </p>
        <Link
          target="_blank"
          to={DiscordInvite}
          className="text-gray-400 hover:translate-x-2 text-sm font-medium duration-300 w-fit"
        >
          <p>Technical Support in Discord</p>
        </Link>
        <Link className="text-gray-400 hover:translate-x-2 duration-300 w-fit font-medium text-[10px] ">
          <p>support@primerolelpaytn.site</p>
        </Link>
      </div>
      <div className="h-[200px] w-[200px] max-sm:h-[80px] flex flex-col  gap-2 mt-16 font-Poppins  ">
        <p className="text-white font-Poppins text-sm font-semibold underline decoration-1 decoration-white underline-offset-2">
          Important Informations
        </p>
        <Link to={"/terms"}>
          <p className="text-gray-400 hover:translate-x-2 duration-300 w-fit text-sm font-medium ">
            Terms & Conditions
          </p>
        </Link>
        <Link to="/privacypolicy">
          <p className="text-gray-400 hover:translate-x-2 duration-300 w-fit text-sm font-medium ">
            Privacy Policy
          </p>
        </Link>
        <Link to="/cookiespolicy">
          <p className="text-gray-400 hover:translate-x-2  duration-300 w-fit text-sm font-medium ">
            Cookies Policy
          </p>
        </Link>
      </div>

      <div className="h-[200px] w-[280px] max-sm:h-[150px] flex flex-col  gap-4 mt-16 font-Poppins   ">
        <p className="text-white font-Poppins text-sm font-semibold underline decoration-1 decoration-white underline-offset-2 text-center">
          Follow us
        </p>
        <div className="flex gap-4 text-xl justify-center ">
          <Link
            to="https://x.com/primeroleplaytn"
            target="_blank"
            className="w-fit"
          >
            <FaXTwitter className="text-white hover:brightness-200 hover:scale-110 duration-200 " />
          </Link>
          <Link
            to="https://www.instagram.com/prime_roleplay_tn/"
            target="_blank"
            className="w-fit"
          >
            <FaInstagram className="text-white hover:brightness-200 hover:scale-110 duration-200" />
          </Link>

          <Link
            to="https://www.youtube.com/@PrimeRoleplayTn"
            target="_blank"
            className="w-fit"
          >
            <FaYoutube className="text-white hover:brightness-200 hover:scale-110 duration-200 " />
          </Link>
          <Link
            to="https://www.tiktok.com/@prime.roleplay.tn"
            target="_blank"
            className="w-fit"
          >
            <FaTiktok className="text-white hover:brightness-200 hover:scale-110 duration-200 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
