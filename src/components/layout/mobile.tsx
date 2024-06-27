"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clsx } from "clsx";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidLogOut } from "react-icons/bi";
import { BsCalendarMinusFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { HiChartPie, HiClock } from "react-icons/hi";
import { RiSettingsFill } from "react-icons/ri";

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

import { MenuIcon } from "lucide-react";
import type { Session } from "next-auth";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
function MobileNavbar({ session }: { session: Session | null }) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="group">
        <MenuIcon className="group-active:scale-105" />
      </SheetTrigger>
      <SheetContent className="flex w-[400px] flex-col items-start gap-10 dark:bg-zinc-900 sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <p className="flex items-center  text-2xl font-bold tracking-wide">
                <span className=" text-[#6053ED]">power</span>
                <span className=" text-[#30FFFF]">hub</span>
                <span className=" text-[#30FFFF]">.</span>
              </p>
            </Link>
          </SheetTitle>

          <div className="space-y-8 py-10 text-[14px] text-slate-400">
            {navLink.map((link) => (
              <Link
                className={clsx(
                  " flex items-center gap-3  duration-150 hover:text-[#30FFFF] active:opacity-60",
                  pathname === link.href && "text-[#30FFFF]",
                )}
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
        </SheetHeader>
        <SheetFooter>
          <section className=" space-y-8">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="flex flex-col">
                <span className=" text-sm font-medium leading-tight ">
                  {session?.user.name}
                </span>
                <span className=" text-xs text-slate-500 dark:text-slate-300">
                  Tesla Model 3
                </span>
              </p>
            </div>
            <button
              onClick={() =>
                signOut({
                  callbackUrl: "/login",
                })
              }
              className="group flex items-center gap-3 text-sm text-slate-500 duration-150 hover:text-rose-500 active:opacity-60 dark:text-slate-300 "
            >
              <BiSolidLogOut size={20} />
              Log out
            </button>
          </section>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
