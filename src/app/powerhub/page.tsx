import Content from "@/components/dashboard/content";
import Stats from "@/components/dashboard/stats";
import React from "react";

export default function Page() {
  return (
    <div className="flex ">
      <Content />
      <Stats />
    </div>
  );
}
