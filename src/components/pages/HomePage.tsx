import React from "react";
import { FlightFrom } from "../home/from/FlightFrom";
import { FlightTo } from "../home/to/FlightTo";
import { Departure } from "../home/departure/Departure";
import { Passangers } from "../home/passengers/Passangers";

export const HomePage = () => {
  return (
    <div className="px-5 lg:px-10 py-7 lg:w-[650px] w-full">
      <div className="w-full my-7">
        <div className="text-center text-base font-semibold py-7 pb-12">
          Search Flight
        </div>

        <FlightFrom />
        <FlightTo />
        <Departure />
        <Passangers />
      </div>
    </div>
  );
};
