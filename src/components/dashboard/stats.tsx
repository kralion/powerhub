"use client";
import { BsThreeDots } from "react-icons/bs";
import EVBarChart from "./barchart";
import EVCarDetails from "./ev-car-details";
import { MoreDetails } from "./more-details";

function Stats() {
  return (
    <div className=" rounded-2xl bg-[#212121]  p-3  text-white  ">
      <p className="flex justify-between">
        <span>Vehicle Stats</span>
        <MoreDetails
          options={[
            { label: "Details", value: "tesla", href: "/powerhub/ev-car/1" },
            { label: "BMW", value: "bmw", href: "/powerhub/ev-car/2" },
            { label: "Audi", value: "audi", href: "/powerhub/ev-car/3" },
          ]}
          menuTrigger={
            <BsThreeDots className="cursor-pointer active:opacity-70" />
          }
        />
      </p>
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
        <div className="my-4 flex justify-between">
          <span>Statistics</span>
          <MoreDetails
            options={[
              { label: "Weekly", value: "weekly", href: "/dashboard/ev-car/1" },
              {
                label: "Monthly",
                value: "monthly",
                href: "/dashboard/ev-car/2",
              },
              {
                label: "Quarter",
                value: "quarter",
                href: "/dashboard/ev-car/3",
              },
            ]}
            titleOption="By Period"
            menuTrigger={
              <BsThreeDots className="cursor-pointer active:opacity-70" />
            }
          />
        </div>
        <div className=" rounded-2xl bg-[#2D2D2D] p-2 text-2xl text-white">
          <EVBarChart />
        </div>
      </section>
    </div>
  );
}

export default Stats;
