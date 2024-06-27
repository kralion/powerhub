import Sidebar from "@/components/layout/sidebar";
import React from "react";
import { GeistSans } from "geist/font/sans";
import "animate.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={` ${GeistSans.className}`}>
      <Sidebar />
      {children}
    </div>
  );
}
