import React, { useEffect, useState } from "react";
import Slide from "../Components/Slide";
import FAQ from "../Components/FAQ";
import MainHero from "../Components/MainHero";
import MainHero_1 from "../Components/MainHero_1";
import MainHero_2 from "../Components/MainHero_2";
import MainHero_3 from "../Components/MainHero_3";
import MainHero_4 from "../Components/MainHero_4";
import Factions from "../Components/Factions";
import Experience from "../Components/Experience";
import Businesses from "../Components/Businesses";
import Jobs from "../Components/Jobs";
import MainHero_5 from "../Components/MainHero_5";
import MainHero_7 from "../Components/MainHero_7";
import MainHero_6 from "../Components/MainHero_6";
import CookiesShow from "../Components/CookiesShow";

const Home = () => {
  return (
    <div className="relative">
      <CookiesShow />
      <MainHero />
      <MainHero_1 />
      <MainHero_2 />
      <MainHero_3 />
      <MainHero_4 />
      <MainHero_5 />
      <MainHero_6 />
      <MainHero_7 />
      <Experience />
      <Factions />
      <Businesses />
      <Jobs />
      <Slide />
      <FAQ />
    </div>
  );
};

export default Home;
