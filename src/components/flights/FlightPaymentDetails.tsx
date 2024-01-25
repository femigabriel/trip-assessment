import React from "react";

export const FlightPaymentDetails = (props) => {
  const { id,TicketFare, ServiceCharge, TotalFare } = props.data;


  
  return (
    <div className="w-full">
      <p className="text-[#565656] text-xs font-semibold">Summary</p>
      <div className="bg-white px-5 py-5 w-full mb-5 rounded-[5px]">
        <div className="flex justify-between mb-3">
          <p className="text-[#BABABA] text-xs font-semibold">Ticket fare</p>
          <p className="text-[#000000] font-semibold text-sm">
            N {TicketFare}.00
          </p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-[#BABABA] text-xs font-semibold">
            Service Charges
          </p>
          <p className="text-[#000000] font-semibold text-sm">
            N {ServiceCharge}.00
          </p>
        </div>
      </div>
      <div className="bg-white px-5 py-5 w-full mb-5 rounded-[5px]">
        <div className="flex justify-between">
          <p className="text-[#223E7C] text-xs font-semibold">Total</p>
          <p className="text-[#000000] font-semibold text-sm">
            N {TotalFare}.00
          </p>
        </div>
      </div>
    </div>
  );
};
