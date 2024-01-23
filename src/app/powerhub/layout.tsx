import Sidebar from "@/components/layout/sidebar";
import React from "react";
import { GeistSans } from "geist/font/sans";
import "animate.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex items-start bg-zinc-900 ${GeistSans.className}`}>
      <Sidebar />
      {children}
    </div>
  );
}
