import React from "react";
import LocationIcon from "@/assets/images/location.png";
import Image from "next/image";
import SearchIcon from "@/assets/images/search.png";
import StationCard from "./station-card";
import NavigationMap from "@/assets/images/navigation-map.jpg";
import NextIcon from "@/assets/images/next.png";

function Content() {
  return (
    <div className="flex flex-col justify-between w-full h-screen gap-4 p-5 text-2xl text-white ">
      <section className="flex items-center justify-between ">
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
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
            className="   text-sm rounded-2xl  block w-full pl-10 p-2.5 focus:outline-0 bg-[#2D2D2D]  placeholder-gray-400 text-gray-400  "
            placeholder="Search"
          />
        </div>
      </section>
      <section className="flex justify-center">
        <Image
          className="rounded-2xl"
          src={NavigationMap}
          alt="Location Icon"
          width={640}
          height={640}
        />
      </section>
      <section>
        <h3 className="my-3 text-sm ml-5">12 Stations Nearby</h3>
        <div className="flex justify-center gap-7">
          <StationCard
            classification="Tesla Station"
            distance={1.2}
            chargerType="DC"
            chargerPrice={2}
            slots={5}
          />
          <StationCard
            classification="Shell Station"
            chargerType="DC"
            chargerPrice={2}
            distance={3.8}
            slots={5}
          />

          <StationCard
            classification="Supercharger"
            chargerType="DC"
            chargerPrice={8}
            distance={5.1}
            slots={12}
          />
          <button>
            <Image
              title="Next Page"
              src={NextIcon}
              className="bg-[#212121] hover:scale-125 duration-200 rounded-full p-1 w-7 shadow-white shadow-sm"
              alt="next"
              width={20}
              height={20}
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Content;
