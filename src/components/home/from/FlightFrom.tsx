import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Airports } from "../../services/Data";

export const FlightFrom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full">
      <div
        className="div w-full flex gap-2 lg:w-[318p] h-[50p] bg-white rounded-[5px] mb-5 px-5 py-7 text-[#D3D3D3] text-xs font-semibold cursor-pointer shadow-sm"
        onClick={showModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
        >
          <path
            d="M11.4943 9.56865H0.869279C0.525529 9.56865 0.244279 9.8499 0.244279 10.1937C0.244279 10.5374 0.525529 10.8187 0.869279 10.8187H11.4943C11.838 10.8187 12.1193 10.5374 12.1193 10.1937C12.1193 9.8499 11.838 9.56865 11.4943 9.56865ZM12.4755 3.71865C12.338 3.21865 11.8255 2.9249 11.3255 3.05615L8.00678 3.94365L3.96928 0.181154C3.80053 0.0186537 3.55678 -0.0375963 3.33178 0.0249037C2.90678 0.143654 2.70678 0.631154 2.92553 1.0124L5.07553 4.7374L1.96928 5.56865L0.988029 4.79365C0.831779 4.6749 0.631779 4.63115 0.438029 4.68115L0.231779 4.7374C0.031779 4.7874 -0.0619709 5.01865 0.0442791 5.19365L1.21928 7.2249C1.36303 7.46865 1.65053 7.5874 1.91928 7.51865L11.8068 4.86865C12.3068 4.73115 12.6068 4.21865 12.4755 3.71865Z"
            fill="#D3D3D3"
          />
        </svg>
        <span> From</span>
      </div>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-10">
          <div className="">
            {Airports.map((lists, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between py-[12px] border-b-2 border-[#EFEFEF] mb-3 cursor-pointer"
                >
                  <div className="div">
                    <h3 className=" text-sm font-medium">
                      {lists.StateName}, {lists.CountryCode}
                    </h3>
                    <p className="text-[#434455] text-xs">{lists?.Name}</p>
                  </div>
                  <p className=" text-sm font-medium">{lists.StateCode}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};
