import ElectricIcon from "@/assets/images/electric.png";
import EVCarOverview from "@/assets/images/ev-car.png";
import GPSRoute from "@/assets/images/gps-route.png";
import type { Vehicle } from "@/types/vehicle";
import React from "react";
import Image from "next/image";
import { DetailsAlert } from "../alert-dialog";

import { FiCornerUpRight } from "react-icons/fi";

import AvgEnergyGraph from "./avgenergy-graph";
import { Badge } from "../ui/badge";

function EVCarDetails({
  battery,
  batteryStatus,
  range,
  temperature,
  ev,
  avgEnergy,
  distance,
}: Vehicle) {
  return (
    <div className="space-y-8">
      <DetailsAlert
        trigger={
          <Image
            src={EVCarOverview}
            className="cursor-pointer active:opacity-70"
            onClick={
              () => {
                console.log("clicked");
              }
              // router.push(`/dashboard/ev-car/${id}`)
            }
            alt="ev car"
            title="Details"
            width={300}
            height={300}
          />
        }
        successText="Got it"
        image={EVCarOverview}
        title="EV Car Information "
        description={
          <div className="flex flex-col gap-8">
            <span className="text-gray-400">
              <strong>The Tesla Model 3</strong> is a battery electric mid-size
              sedan with a fastback body style built by Tesla, Inc. since 2017.
              The Model 3 was marketed as being more affordable to more people
              than previous models by Tesla.
            </span>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 text-white">
                <span className="text-xs  text-gray-400">Model</span>
                <span className="font-semibold">Tesla 3S</span>
              </div>
              <div className="flex flex-col gap-1 text-white">
                <span className="text-xs text-gray-400 ">Model Year</span>
                <span className="font-semibold">2017</span>
              </div>
              <div className="flex flex-col gap-1 text-white">
                <span className="text-xs text-gray-400">Weight</span>
                <span className="font-semibold ">1.3 Tons</span>
              </div>
              <div className="flex flex-col gap-1 text-white">
                <span className="text-xs text-gray-400">Mileage</span>
                <span className="font-semibold ">12000 Km</span>
              </div>
            </div>
          </div>
        }
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
        <div className="flex w-[120px] flex-col gap-3">
          <div className="rounded-2xl bg-[#2D2D2D] ">
            <p className="flex flex-col gap-1 p-3">
              <span className="text-xs text-gray-400">Avg Energy</span>
              <span className="text-md">
                <span className="text-xl font-semibold">{avgEnergy}</span> wh
              </span>
            </p>
            <AvgEnergyGraph />
          </div>
          <div className="rounded-2xl  bg-[#2D2D2D] p-3">
            <p className="space-y-2">
              <span className="text-xs text-gray-400">Battery Status</span>
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
          <div className="flex flex-col gap-1 p-3 ">
            <span className=" text-xs text-gray-400">Nearby Station</span>
            <div className="flex  justify-between">
              <h3 className="text-xl">
                <strong>{distance}</strong> km
              </h3>
              <DetailsAlert
                trigger={
                  <FiCornerUpRight
                    className=" cursor-pointer rounded bg-zinc-700 p-1 active:opacity-70"
                    size="20"
                  />
                }
                successText="Understood"
                image="https://img.freepik.com/free-vector/electric-car-concept-illustration_114360-1161.jpg?size=626&ext=jpg&ga=GA1.1.1214943181.1703785948&semt=ais"
                title="Station Info"
                description={
                  <div className="flex flex-col gap-8">
                    <p className="flex items-center gap-2">
                      <span className="text-2xl font-bold tracking-tight text-white">
                        M4E-COMROD, Warsaw
                      </span>
                      <Badge className="bg-cyan-500 ">Poland</Badge>
                    </p>
                    <span className="text-gray-400">
                      <strong>Supercharged Station</strong>
                      This particular stations is a supercharged station with a
                      power output of 120kW. And with this you can charge your
                      car in 30 minutes. But remember that the charging time
                      depends on the battery capacity of your car.
                    </span>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-1 text-white">
                        <span className="text-xs  text-gray-400">Model</span>
                        <span className="font-semibold">Tesla 3S</span>
                      </div>
                      <div className="flex flex-col gap-1 text-white">
                        <span className="text-xs text-gray-400 ">
                          Model Year
                        </span>
                        <span className="font-semibold">2017</span>
                      </div>
                      <div className="flex flex-col gap-1 text-white">
                        <span className="text-xs text-gray-400">Weight</span>
                        <span className="font-semibold ">1.3 Tons</span>
                      </div>
                      <div className="flex flex-col gap-1 text-white">
                        <span className="text-xs text-gray-400">Mileage</span>
                        <span className="font-semibold ">12000 Km</span>
                      </div>
                    </div>
                  </div>
                }
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
