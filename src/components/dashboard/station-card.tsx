"use client";
import StationIcon from "@/assets/images/station.png";
import type { Station } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { FiCornerUpRight } from "react-icons/fi";

function StationCard({
  classification,
  chargerPrice,
  chargerType,
  slots,
  distance,
}: Station) {
  return (
    <div className="w-56 space-y-4 rounded-2xl bg-[#212121] p-3 text-sm duration-150 hover:bg-[#2D2D2D]">
      <div className="flex justify-between">
        <Image src={StationIcon} alt="station" width={50} height={50} />
        <ChevronRight
          onClick={() => {
            alert("clicked");
          }}
          className="cursor-pointer p-1 active:opacity-70"
          size={25}
        />
      </div>
      <div className=" flex justify-between">
        <h3 className="text-xl">
          <strong> {distance}</strong> km
        </h3>

        <FiCornerUpRight
          onClick={() => alert("clicked")}
          className=" cursor-pointer rounded bg-zinc-700 p-1 active:opacity-70"
          size="20"
        />
      </div>
      <span className="text-[16px]">{classification}</span>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Type</span>
          <span className="font-semibold">{chargerType}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Price</span>
          <span className="font-semibold">${chargerPrice} min</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Slot</span>
          <span className="font-semibold">{slots}</span>
        </div>
      </div>
    </div>
  );
}

export default StationCard;
