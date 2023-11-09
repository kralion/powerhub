import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsCalendarMinusFill } from "react-icons/bs";
import { HiChartPie, HiClock } from "react-icons/hi";
import { RiSettingsFill } from "react-icons/ri";
import { BiSolidLogOut } from "react-icons/bi";

const navLink = [
  {
    label: "Home",
    icon: <GoHomeFill />,
    href: "/powerhub",
  },
  {
    label: "Bookings",
    icon: <BsCalendarMinusFill />,
    href: "/powerhub/bookings",
  },
  {
    label: "Analytics",
    icon: <HiChartPie />,
    href: "/powerhub/analytics",
  },
  {
    label: "History",
    icon: <HiClock />,
    href: "/powerhub/history",
  },
  {
    label: "Settings",
    icon: <RiSettingsFill />,
    href: "/powerhub/settings",
  },
];

import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex flex-col gap-64 ">
      <div className="space-y-8 text-[14px] text-slate-400">
        {navLink.map((link) => (
          <Link
            className=" flex items-center gap-3  duration-150 hover:text-[#30FFFF] "
            href={link.href}
            key={link.href}
          >
            {React.cloneElement(link.icon, {
              size: "20",
            })}
            {link.label}
          </Link>
        ))}
      </div>
      <section className="space-y-10">
        <div className="flex gap-2">
          <Image
            src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"
            className="rounded-full "
            width={40}
            height={25}
            alt="Avatar"
          />
          <p className="flex flex-col">
            <span className="mb-1 text-sm font-medium leading-tight text-white">
              Jhon Ferreiros
            </span>
            <span className=" text-[11px] text-slate-300">Tesla Model X</span>
          </p>
        </div>
        <button className="flex items-center gap-3 text-sm text-slate-300">
          <BiSolidLogOut />
          Log out
        </button>
      </section>
    </div>
  );
}

export default Navbar;
