import ElectricIcon from "@/assets/images/electric.png";
import EVCarOverview from "@/assets/images/ev-car.png";
import GPSRoute from "@/assets/images/gps-route.png";
import type { Vehicle } from "@/types/vehicle";
import Image from "next/image";
import { FiCornerUpRight } from "react-icons/fi";

import AvgEnergyGraph from "./avgenergy-graph";

function EVCarDetails({
  id,
  battery,
  batteryStatus,
  range,
  temperature,
  ev,
  avgEnergy,
  distance,
  vehicleOverview,
}: Vehicle) {
  return (
    <div className="space-y-4">
      <Image
        src={vehicleOverview || EVCarOverview}
        className="cursor-zoom-in rounded-2xl"
        alt="ev car"
        width={300}
        height={100}
        title="Details"
      />

      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">EV</span>
          <span className="text-md font-semibold tracking-wide">{ev}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Battery</span>
          <span className="text-md font-semibold tracking-wide">
            {battery}%
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Range</span>
          <span className="text-md font-semibold tracking-wide">
            {range} km
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Temp</span>
          <span className="text-md font-semibold tracking-wide">
            {temperature} °C
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <div className="w-[120px] rounded-2xl bg-[#2D2D2D] ">
            <p className="p-3">
              <span className="text-[11px] text-gray-400">Avg Energy</span>
              <span className="text-md">
                <span className="text-xl">{avgEnergy}</span> wh
              </span>
            </p>
            <AvgEnergyGraph />
          </div>
          <div className="rounded-2xl  bg-[#2D2D2D] p-3">
            <p className="space-y-2">
              <span className="text-[11px]  tracking-wide text-gray-400">
                Battery Status
              </span>
              <div className="flex items-center">
                <div>
                  <Image src={ElectricIcon} alt="next" width={20} height={20} />
                </div>

                <span className="text-md">{batteryStatus}</span>
              </div>
            </p>
          </div>
        </div>
        <div className="row-span-2 w-full rounded-2xl bg-[#2D2D2D] ">
          <div className="p-3 ">
            <span className="text-[11px] text-gray-400">Nearby Station</span>
            <div className="my-2 flex justify-between">
              <h3 className="text-xl">
                <strong> {distance}</strong> km
              </h3>

              <FiCornerUpRight
                className="bg-dark-primary hover:bg-dark-secondary cursor-pointer rounded p-1"
                size="20"
              />
            </div>
          </div>
          <Image
            width={120}
            height={100}
            className="object-fill"
            src={GPSRoute}
            alt="next"
          />
        </div>
      </div>
    </div>
  );
}

export default EVCarDetails;
