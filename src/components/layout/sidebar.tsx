import React from "react";

import Header from "../dashboard/header";
import Navbar from "./navbar";
import { getServerSession } from "next-auth";

async function Sidebar() {
  const session = await getServerSession();
  return (
    <div className="flex h-screen flex-col gap-8 rounded-r-3xl  bg-[#2D2D2D]  p-6">
      <Header />
      <Navbar session={session} />
    </div>
  );
}

export default Sidebar;
