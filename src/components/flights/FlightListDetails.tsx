import React from "react";
import { Link } from "react-router-dom";

export const FlightListDetails = (props) => {
  const {
    id,
    Duration,
    ArrivalAirportCode,
    ArrivalDate,
    DepartureDate,
    DepartureAirportCode,
    OperatingAirlineName,
    FlightClass,
    TotalFare,
    StopOvers,
  } = props.data;

  return (
    <div>
      <div
        // key={index}
        className="bg-[white] text-[#72737F]  rounded-[10px] border border-[#F0F0F0] shadow-sm px-4 py-5 mb-5"
      >
        <div className="flex justify-between">
          <div className="flex gap-2 mt-2">
            <div className="flex flex-col">
              <h3 className="font-semibold text-base">
                {DepartureDate.substring(11, 16)}
              </h3>
              <p className="text-[#434455] text-xs mt-1">
                {DepartureAirportCode}
              </p>
            </div>
            <div className="flex justify-center mt-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="3.5" stroke="#72737F" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className=" text-xs ">{Duration}</p>
            <div className="flex justify-center my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <rect
                  width="15"
                  height="15"
                  transform="matrix(0 -1 -1 0 15 15)"
                  fill="white"
                />
                <path
                  d="M6.4375 1.575L9.375 6.5625H12.8125C13.3312 6.5625 13.75 6.98125 13.75 7.5C13.75 8.01875 13.3312 8.4375 12.8125 8.4375H9.375L6.4375 13.425C6.325 13.625 6.10625 13.75 5.875 13.75C5.4375 13.75 5.125 13.3313 5.24375 12.9125L6.55625 8.4375H3.125L2.28125 9.85C2.225 9.94375 2.11875 10 2.0125 10H1.7H1.65C1.44375 10 1.29375 9.80625 1.34375 9.6125L1.8 7.7875L1.875 7.5L1.81875 7.2625L1.75 7L1.45 5.8125L1.34375 5.39375C1.29375 5.19375 1.44375 5.00625 1.65 5.00625H1.88125H2.0125C2.125 5.00625 2.225 5.0625 2.28125 5.15625L3.125 6.5625L6.5625 6.5625L5.25 2.0875C5.125 1.66875 5.4375 1.25 5.875 1.25C6.10625 1.25 6.325 1.375 6.4375 1.575Z"
                  fill="#223E7C"
                />
              </svg>
            </div>
            <p className=" text-xs ">
              <span className="text-[10px]"> Stop Over:</span> {StopOvers || "Non-stop"}
            </p>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="flex justify-center mt-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="3.5" stroke="#72737F" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-base">
                {ArrivalDate?.substring(11, 16)}
              </h3>
              <p className="text-[#434455] text-xs text-end mt-1">
                {ArrivalAirportCode}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-7">
          <nav className="flex gap-3 text-xs">
            <li className="">{OperatingAirlineName}</li>
            <li className="flex gap-1">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="2"
                  viewBox="0 0 2 2"
                  fill="none"
                >
                  <circle cx="1" cy="1" r="1" fill="#72737F" />
                </svg>
              </div>
              {FlightClass}
            </li>
          </nav>
          <h3 className="text-sm font-medium">N {TotalFare}.00</h3>
        </div>
        <Link to={`/flights-payment/${id + 1}`}>
          <button className="bg-[#223E7C] text-white h-[48px] text-xs font-semibold w-full rounded-[5px]">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
};
