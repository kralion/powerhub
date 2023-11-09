import Image from "next/image";
import React from "react";
import StationIcon from "@/assets/images/station.png";
import NextIcon from "@/assets/images/next.png";
import { FiCornerUpRight } from "react-icons/fi";
import type { Station } from "@/types";

function StationCard({
  classification,
  chargerPrice,
  chargerType,
  slots,
  distance,
}: Station) {
  return (
    <div className="h-56 w-56 rounded-2xl bg-[#212121] p-3 text-sm duration-150 hover:bg-[#2D2D2D]">
      <div className="flex items-stretch justify-between">
        <Image src={StationIcon} alt="station" width={50} height={50} />
        <div>
          <Image
            src={NextIcon}
            className="cursor-pointer"
            alt="next"
            width={20}
            title="Details"
            height={20}
          />
        </div>
      </div>
      <div className="my-4 flex justify-between">
        <h3 className="text-xl">
          <strong> {distance}</strong> km
        </h3>

        <FiCornerUpRight
          className="bg-dark-primary hover:bg-dark-secondary cursor-pointer rounded p-1"
          size="20"
        />
      </div>
      <span className="text-md my-3">{classification}</span>
      <div className="flex justify-between">
        <p className="space-y-1">
          <span className="text-sm text-gray-400">Type</span>
          <span className="text-md">{chargerType}</span>
        </p>
        <p className="space-y-1">
          <span className="text-sm text-gray-400">Price</span>
          <span className="text-md">${chargerPrice} min</span>
        </p>
        <p className="space-y-1">
          <span className="text-sm text-gray-400">Slot</span>
          <span className="text-md">{slots}</span>
        </p>
      </div>
    </div>
  );
}

export default StationCard;
