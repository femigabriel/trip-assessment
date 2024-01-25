import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

export const FlightsHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex ju justify-between py-7">
      <button
        className="w-[32px] h-[32px] bg-white rounded-md flex justify-center items-center"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M11.875 6.875H4.89375L7.94375 3.825C8.1875 3.58125 8.1875 3.18125 7.94375 2.9375C7.7 2.69375 7.30625 2.69375 7.0625 2.9375L2.94375 7.05625C2.7 7.3 2.7 7.69375 2.94375 7.9375L7.0625 12.0562C7.30625 12.3 7.7 12.3 7.94375 12.0562C8.1875 11.8125 8.1875 11.4187 7.94375 11.175L4.89375 8.125H11.875C12.2188 8.125 12.5 7.84375 12.5 7.5C12.5 7.15625 12.2188 6.875 11.875 6.875Z"
            fill="#223E7C"
          />
        </svg>
      </button>
      <p className="text text-center">{title}</p>
      <span></span>
    </div>
  );
};
