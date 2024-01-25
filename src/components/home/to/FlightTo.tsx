import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Airports } from "../../services/Data";

export const FlightTo = () => {
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
    <div className="div">
      <div
        className="div w-full flex gap-2 lg:w-[318p] h-[50p] bg-white rounded-[5px] mb-5 px-5 py-7 text-[#D3D3D3] text-xs font-semibold cursor-pointer shadow-sm"
        onClick={showModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M12.8125 11.875H2.1875C1.84375 11.875 1.5625 12.1563 1.5625 12.5C1.5625 12.8438 1.84375 13.125 2.1875 13.125H12.8125C13.1562 13.125 13.4375 12.8438 13.4375 12.5C13.4375 12.1563 13.1562 11.875 12.8125 11.875ZM2.19375 7.25626L12.0875 9.90626C12.5875 10.0375 13.1 9.74376 13.2375 9.24376C13.3688 8.74376 13.075 8.23126 12.575 8.09376L9.25625 7.20626L7.64375 1.92501C7.575 1.70001 7.4 1.53126 7.175 1.46876C6.75 1.35626 6.33125 1.67501 6.33125 2.11876V6.41876L3.21875 5.59376L2.75 4.43126C2.675 4.25001 2.525 4.11251 2.33125 4.06251L2.125 4.00626C1.925 3.95001 1.73125 4.10001 1.73125 4.30626V6.65001C1.73125 6.93751 1.91875 7.18126 2.19375 7.25626Z"
            fill="#D3D3D3"
          />
        </svg>

        <span> To</span>
      </div>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-10">
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
      </Modal>
    </div>
  );
};
