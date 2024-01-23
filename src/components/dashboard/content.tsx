import React from "react";
import LocationIcon from "@/assets/images/location.png";
import Image from "next/image";
import SearchIcon from "@/assets/images/search.png";
import StationsCarousel from "./stations-carousel";

function Content() {
  return (
    <div className=" space-y-8 p-5 text-2xl text-white ">
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
      <section className="animate__animated animate__fadeInUp  animate_delay-500 flex justify-center ">
        <Image
          className="rounded-2xl"
          src="https://img.freepik.com/free-vector/worldwide-global-map-outline-black-background_1017-46153.jpg?w=1800&t=st=1706022868~exp=1706023468~hmac=4d529c179289ee86123f2955b798bf438d2a3c711cdca3b449e2c5ae96f16473"
          alt="Location Icon"
          width={900}
          height={900}
        />
      </section>
      <section className="space-y-4 px-16">
        <h3 className="text-sm">12 Stations Nearby</h3>
        <StationsCarousel />
      </section>
    </div>
  );
}

export default Content;
