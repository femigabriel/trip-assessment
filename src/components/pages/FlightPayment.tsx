import React from "react";
import { useParams } from "react-router-dom";
import { Flights } from "../flights/Flights";
import { FlightListsDetails } from "../services/Data";
import { Airports } from "../services/Data";
import { FlightPaymentDetails } from "../flights/FlightPaymentDetails";
import { FlightsHeader } from "../flights/FlightsHeader";

export const FlightPayment = () => {
  const { id } = useParams();

  console.log({ id, Airports, FlightListsDetails });

  return (
    <div className="px-5 lg:px-10 py-7 lg:w-[650px] w-full">
      <FlightsHeader title="Make Payment" />
      <Flights 
       data={FlightListsDetails[id || 0]}
      />

      <div className="w-full">
        <FlightPaymentDetails
          data={FlightListsDetails[id || 0]}
        />
      </div>
    </div>
  );
};
