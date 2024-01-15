import React from "react";

import Header from "../dashboard/header";
import Navbar from "./navbar";

function Sidebar() {
  return (
    <div className="flex h-screen flex-col gap-8 rounded-r-3xl  bg-[#2D2D2D]  p-6">
      <Header />
      <Navbar />
    </div>
  );
}

export default Sidebar;
