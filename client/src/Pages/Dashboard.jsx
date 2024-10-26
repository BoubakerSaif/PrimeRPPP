import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import BetaApps from "../Components/Dashboard/BetaApps";
import Players from "../Components/Dashboard/Players";

const Dashboard = () => {
  const [side, setSide] = useState("dash");
  return (
    <div className="flex">
      <Sidebar setSide={setSide} />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 bg-gray-100 p-4">
          {side === "Whitelist" && <BetaApps />}
          {side === "players" && <Players />}
          {side === "dash" && <p> Dashboard</p>}
        </main>
      </div>
    </div>
  );
  Z;
};

export default Dashboard;
