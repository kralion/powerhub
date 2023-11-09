import Sidebar from "@/components/layout/sidebar";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center  bg-zinc-900 ">
      <Sidebar />
      {children}
    </div>
  );
}
