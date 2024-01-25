import React, { useState } from "react";
import "./App.css";
import { PageRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { FlightListsDetails } from "./components/services/Data";


const App = (props) => {
  const [dataMap, setDataMap] = useState(FlightListsDetails)
  // const [dataMap, setDataMap] = useState(
  //   new Map([
  //     ["key1", "value1"],
  //     ["key2", "value2"],
  //     // ... more data
  //   ])
  // );
  let FlightFare = FlightListsDetails.TicketFare 
let serviceFare = FlightListsDetails.ServiceCharge

  return (
    <>
      <BrowserRouter>
        <div className="lg:flex justify-center w-full">
            <PageRoutes />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
