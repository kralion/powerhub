import React from "react";

import Navbar from "./navbar";
import { getServerSession } from "next-auth";
import MobileNavbar from "./mobile";
import Link from "next/link";

async function Sidebar() {
  const session = await getServerSession();
  return (
    <div>
      <Navbar session={session} />
      <div className="flex items-center justify-between p-4 lg:hidden">
        <Link href="/">
          <p className="flex items-center  text-2xl font-bold tracking-wide">
            <span className=" text-[#6053ED]">power</span>
            <span className=" text-[#30FFFF]">hub</span>
            <span className=" text-[#30FFFF]">.</span>
          </p>
        </Link>

        <MobileNavbar session={session} />
      </div>
    </div>
  );
}

export default Sidebar;
