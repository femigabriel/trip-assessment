import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Passangers = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <div className="flex gap-3 my-5 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="mt-1"
        >
          <path
            d="M4.74375 3.38126C4.25625 2.89376 4.25625 2.10001 4.74375 1.61251C5.23125 1.12501 6.025 1.12501 6.5125 1.61251C7 2.10001 7 2.89376 6.5125 3.38126C6.01875 3.87501 5.23125 3.87501 4.74375 3.38126ZM3.75 10V5.00001C3.75 4.65626 3.46875 4.37501 3.125 4.37501C2.78125 4.37501 2.5 4.65626 2.5 5.00001V10C2.5 11.725 3.9 13.125 5.625 13.125H8.75C9.09375 13.125 9.375 12.8438 9.375 12.5C9.375 12.1563 9.09375 11.875 8.75 11.875H5.625C4.5875 11.875 3.75 11.0375 3.75 10ZM12.05 12.0938L9.69375 9.73751C9.4625 9.50626 9.14375 9.37501 8.8125 9.37501H7.1875V7.07501C7.86875 7.63126 8.85 8.13751 9.8125 8.33751C10.2312 8.42501 10.625 8.11251 10.625 7.68751C10.625 7.35626 10.3812 7.08751 10.05 7.03126C9.1625 6.88126 8.25 6.40001 7.70625 5.80001L6.83125 4.83126C6.7125 4.70001 6.5625 4.59376 6.4 4.51876C6.21875 4.43126 6.0125 4.37501 5.8 4.37501H5.78125C5.00625 4.37501 4.375 5.00626 4.375 5.78126V9.37501C4.375 10.4125 5.2125 11.25 6.25 11.25H9.41875L11.1562 12.9875C11.4 13.2313 11.8063 13.2313 12.05 12.9875C12.3 12.7438 12.3 12.3438 12.05 12.0938Z"
            fill="#080403"
          />
        </svg>
        <span className="font-semibold text-base">Passangers</span>
      </div>
      <div className="w-full">
        <div className=" w-full flex justify-between  h-[50p] bg-white rounded-[5px] mb-5 px-5 py-5 text-[#D3D3D3] text-xs font-semibold cursor-pointer shadow-sm">
          <span className="mt-2"> Adults</span>
          <div className="flex gap-4 ">
            <button className="bg-[#FAFAFA] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g opacity="0.5">
                  <rect width="40" height="40" rx="8" fill="#FAFAFA" />
                  <rect x="14" y="19" width="12" height="2" fill="#15162B" />
                </g>
              </svg>
            </button>
            <span className="text text-base font-medium mt-2">{count}</span>
            <button className="bg-[#FAFAFA] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1163)">
                  <path
                    d="M15.8333 10.8333H10.8333V15.8333H9.16666V10.8333H4.16666V9.16666H9.16666V4.16666H10.8333V9.16666H15.8333V10.8333Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1163">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-between  h-[50p] bg-white rounded-[5px] mb-5 px-5 py-5 text-[#D3D3D3] text-xs font-semibold cursor-pointer shadow-sm">
          <span className="mt-2"> Children</span>
          <div className="flex gap-4 ">
            <button className="bg-[#FAFAFA] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g opacity="0.5">
                  <rect width="40" height="40" rx="8" fill="#FAFAFA" />
                  <rect x="14" y="19" width="12" height="2" fill="#15162B" />
                </g>
              </svg>
            </button>
            <span className="text text-base font-medium mt-2">{count}</span>
            <button className="bg-[#FAFAFA] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1163)">
                  <path
                    d="M15.8333 10.8333H10.8333V15.8333H9.16666V10.8333H4.16666V9.16666H9.16666V4.16666H10.8333V9.16666H15.8333V10.8333Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1163">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-between h-[50p] bg-white rounded-[5px] mb-5 px-5 py-5 text-[#D3D3D3] text-xs font-semibold cursor-pointer shadow-sm">
          <span className="mt-2">Infants</span>
          <div className="flex gap-4 ">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="bg-[#FAFAFA] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g opacity="0.5">
                  <rect width="40" height="40" rx="8" fill="#FAFAFA" />
                  <rect x="14" y="19" width="12" height="2" fill="#15162B" />
                </g>
              </svg>
            </button>
            <span className="text text-base font-medium mt-2">{count}</span>
            <button className="bg-[#FAFAFA] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1163)">
                  <path
                    d="M15.8333 10.8333H10.8333V15.8333H9.16666V10.8333H4.16666V9.16666H9.16666V4.16666H10.8333V9.16666H15.8333V10.8333Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1163">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-40 my-5 w-full">
        <Link to={"/flights"} className="">
          <button className="bg-[#223E7C] w-full rounded-[5px] h-[50px] text-[#fff] text-sm font-semibold">
            Search Flight
          </button>
        </Link>
      </div>
    </div>
  );
};
