import React from "react";

import Header from "../dashboard/header";
import Navbar from "./navbar";

function Sidebar() {
  return (
    <div className="flex h-screen w-80 flex-col gap-10 rounded-r-3xl  bg-[#2D2D2D]  p-7">
      <Header />
      <Navbar />
    </div>
  );
}

export default Sidebar;
