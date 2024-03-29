import Link from "next/link";
import React from "react";

function Header() {
  return (
    <Link href="/">
      <p className="flex items-center  text-2xl font-bold tracking-wide">
        <span className=" text-[#6053ED]">power</span>
        <span className=" text-[#30FFFF]">hub</span>
        <span className=" text-[#30FFFF]">.</span>
      </p>
    </Link>
  );
}

export default Header;
