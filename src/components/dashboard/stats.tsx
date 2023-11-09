"use client";
import Image from "next/image";
import React from "react";
import MoreIcon from "@/assets/images/more.png";
import EVCarDetails from "./ev-car-details";
import EVBarChart from "./barchart";

function Stats() {
  return (
    <div className="h-screen w-[470px] rounded-2xl bg-[#212121]  px-3 pt-4  text-white  ">
      <div className="flex justify-between">
        <span>Vehicle Stats</span>
        <div>
          <Image
            title="More"
            className="cursor-pointer"
            src={MoreIcon}
            alt="more"
            width={20}
            height={20}
          />
        </div>
      </div>
      <EVCarDetails
        id="1"
        battery={80}
        batteryStatus="Good"
        range={240}
        temperature={24}
        ev="Tesla"
        avgEnergy={100}
        distance={15}
        vehicleOverview=""
      />
      <section>
        <div className="my-3 flex justify-between">
          <span>Graph</span>
          <div>
            <Image
              title="More"
              className="cursor-pointer"
              src={MoreIcon}
              alt="more"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="rounded-2xl bg-[#2D2D2D] p-2 text-2xl text-white">
          <EVBarChart />
        </div>
      </section>
    </div>
  );
}

export default Stats;
