import React from "react";

export const Flights = (props) => {
  const {
    ArrivalAirportCode,
    DepartureAirportCode,
    DepartureDate,
    DepartureAirportName,
    ArrivalAirportName,
  } = props.data;

  return (
    <div className=" w-full">
      <div className="flight-route bg-white rounded-[5px] px-5 py-5 mb-7 shadow-sm cursor-pointer">
        <div className="border border-[#BABABA] border-dashed lg:w-[450px] w-4/5 relative top-2 left-10 "></div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex mx-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="6" fill="white" stroke="#223E7C" />
              </svg>
            </div>
            <div className="div">
              <h3 className="text-[#080403] font-semibold text-xl">
                {DepartureAirportCode}
              </h3>
              <p className="text-black text-xs ">{DepartureAirportName}</p>
            </div>
          </div>

          <div className="z-50 flex relative left-14 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.4375 1.575L9.375 6.5625H12.8125C13.3312 6.5625 13.75 6.98125 13.75 7.5C13.75 8.01875 13.3312 8.4375 12.8125 8.4375H9.375L6.4375 13.425C6.325 13.625 6.10625 13.75 5.875 13.75C5.4375 13.75 5.125 13.3313 5.24375 12.9125L6.55625 8.4375H3.125L2.28125 9.85C2.225 9.94375 2.11875 10 2.0125 10H1.7H1.65C1.44375 10 1.29375 9.80625 1.34375 9.6125L1.8 7.7875L1.875 7.5L1.81875 7.2625L1.75 7L1.45 5.8125L1.34375 5.39375C1.29375 5.19375 1.44375 5.00625 1.65 5.00625H1.88125H2.0125C2.125 5.00625 2.225 5.0625 2.28125 5.15625L3.125 6.5625L6.5625 6.5625L5.25 2.0875C5.125 1.66875 5.4375 1.25 5.875 1.25C6.10625 1.25 6.325 1.375 6.4375 1.575Z"
                fill="#223E7C"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-end mr-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="6" fill="white" stroke="#223E7C" />
              </svg>
            </div>
            <div className="div">
              <h3 className="text-[#080403] text-xl text-end font-semibold ">
                {ArrivalAirportCode}
              </h3>
              <p className="text-black text-xs">{ArrivalAirportName}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
            <div className="w-[21px] h-[21px] bg-[#D3D8E5] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M4.88041 7.58333H1.62499C1.32708 7.58333 1.08333 7.82708 1.08333 8.125C1.08333 8.42292 1.32708 8.66667 1.62499 8.66667H4.88041V9.63625C4.88041 9.88 5.17291 9.99917 5.34083 9.82583L6.84666 8.31458C6.94958 8.20625 6.94958 8.03833 6.84666 7.93L5.34083 6.41875C5.17291 6.24542 4.88041 6.37 4.88041 6.60833V7.58333ZM8.11958 6.38625V5.41667H11.375C11.6729 5.41667 11.9167 5.17292 11.9167 4.875C11.9167 4.57708 11.6729 4.33333 11.375 4.33333H8.11958V3.36375C8.11958 3.12 7.82708 3.00083 7.65916 3.17417L6.15333 4.68542C6.05041 4.79375 6.05041 4.96167 6.15333 5.07L7.65916 6.58125C7.82708 6.74917 8.11958 6.63 8.11958 6.38625Z"
                  fill="#223E7C"
                />
              </svg>
            </div>
            <h3 className="text-[#080403] text-[10px] font-semibold flex items-center">
              {/* Sat, 12 Mar */}
              {DepartureDate.substring(2, 10)}
            </h3>
          </div>

          <div className="flex gap-2">
            <div className="w-[21px] h-[21px] bg-[#D3D8E5] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M4.11125 2.93042C3.68875 2.50792 3.68875 1.82 4.11125 1.3975C4.53375 0.975002 5.22167 0.975002 5.64417 1.3975C6.06667 1.82 6.06667 2.50792 5.64417 2.93042C5.21625 3.35834 4.53375 3.35834 4.11125 2.93042ZM3.25 8.66667V4.33334C3.25 4.03542 3.00625 3.79167 2.70833 3.79167C2.41042 3.79167 2.16667 4.03542 2.16667 4.33334V8.66667C2.16667 10.1617 3.38 11.375 4.875 11.375H7.58333C7.88125 11.375 8.125 11.1313 8.125 10.8333C8.125 10.5354 7.88125 10.2917 7.58333 10.2917H4.875C3.97583 10.2917 3.25 9.56583 3.25 8.66667ZM10.4433 10.4813L8.40125 8.43917C8.20083 8.23875 7.92458 8.125 7.6375 8.125H6.22917V6.13167C6.81958 6.61375 7.67 7.0525 8.50417 7.22584C8.86708 7.30167 9.20833 7.03084 9.20833 6.6625C9.20833 6.37542 8.99708 6.1425 8.71 6.09375C7.94083 5.96375 7.15 5.54667 6.67875 5.02667L5.92042 4.18709C5.8175 4.07334 5.6875 3.98125 5.54667 3.91625C5.38958 3.84042 5.21083 3.79167 5.02667 3.79167H5.01042C4.33875 3.79167 3.79167 4.33875 3.79167 5.01042V8.125C3.79167 9.02417 4.5175 9.75 5.41667 9.75H8.16292L9.66875 11.2558C9.88 11.4671 10.2321 11.4671 10.4433 11.2558C10.66 11.0446 10.66 10.6979 10.4433 10.4813Z"
                  fill="#223E7C"
                />
              </svg>
            </div>
            <nav className="flex gap-3 text-[8px] font-bold text-[#080403] mt-1">
              <li className="">3 Adults</li>
              <li className="flex gap-1">
                <div className="flex mt-1.5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="3"
                    viewBox="0 0 2 3"
                    fill="none"
                  >
                    <circle cx="1" cy="1.5" r="1" fill="#223E7C" />
                  </svg>
                </div>
                2 Children
              </li>
              <li className="flex gap-1">
                <div className="flex mt-1.5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="3"
                    viewBox="0 0 2 3"
                    fill="none"
                  >
                    <circle cx="1" cy="1.5" r="1" fill="#223E7C" />
                  </svg>
                </div>
                1 infant
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
