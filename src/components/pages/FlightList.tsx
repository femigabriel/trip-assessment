import React from "react";
import { Airports, FlightListsDetails } from "../services/Data";
import { Flights } from "../flights/Flights";
import { useParams } from "react-router-dom";
import { FlightListDetails } from "../flights/FlightListDetails";
import { FlightsHeader } from "../flights/FlightsHeader";

export const FlightList = () => {
  const availableFlightsNumber = FlightListsDetails?.length;
  const { id } = useParams();

  return (
    <div className="px-5 lg:px-10 py-7 lg:w-[650px] w-full ">
      <FlightsHeader title="Flight Listings" />
      <Flights data={FlightListsDetails[id || 0]} />

      <h3 className="text text-base text-[#080403] font-semibold mb-5">
        Available Flights:
        <span className="text-[#223E7C] text-xs ml-[5px]">
          {availableFlightsNumber} Flights
        </span>
      </h3>

      <div className="w-full">
        {FlightListsDetails.map((lists, index) => {
          return <FlightListDetails data={lists} key={index} />;
        })}
      </div>
    </div>
  );
};
