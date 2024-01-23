import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StationCard from "./station-card";
import carStations from "@/data/car-stations.json";

import React from "react";

export default function StationsCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
    >
      <CarouselContent className="max-w-screen-md">
        {carStations.map((station, index) => (
          <CarouselItem key={index} className="md:basis-1/3">
            <StationCard
              classification={station.classification}
              chargerPrice={station.chargerPrice}
              chargerType={station.chargerType}
              slots={station.slots}
              distance={station.distance}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
