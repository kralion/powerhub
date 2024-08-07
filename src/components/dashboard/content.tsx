import React from "react";
import LocationIcon from "@/assets/images/location.png";
import Image from "next/image";
import SearchIcon from "@/assets/images/search.png";
import StationsCarousel from "./stations-carousel";
import WorldMap from "@/assets/svg/Blank World Map.svg";

function Content() {
  return (
    <div className=" space-y-8 p-5 text-2xl  ">
      <section className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
        <div className="flex items-center gap-2 ">
          <div>
            <Image
              src={LocationIcon}
              alt="Location Icon"
              width={20}
              height={20}
            />
          </div>
          <h3 className="text-xl">Warsaw, Poland</h3>
        </div>
        <div className="relative ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <Image
              src={SearchIcon}
              alt="Location Icon"
              width={20}
              height={20}
            />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="   block w-full  rounded-2xl bg-[#2D2D2D] p-2.5 pl-10 text-sm text-gray-400  placeholder-gray-400 focus:outline-0  "
            placeholder="Search"
          />
        </div>
      </section>
      <section className="animate__animated animate__fadeIn  animate_delay-500 flex justify-center ">
        <Image
          className="h-auto w-auto rounded-2xl"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={WorldMap}
          alt="Location Icon"
        />
      </section>
      <section className="space-y-4 px-9">
        <h3 className="text-sm">12 Stations Nearby</h3>
        <StationsCarousel />
      </section>
    </div>
  );
}

export default Content;
