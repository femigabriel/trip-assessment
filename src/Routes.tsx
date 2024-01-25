import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { FlightList } from "./components/pages/FlightList";
import { FlightPayment } from "./components/pages/FlightPayment";

export const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightList />} />
        <Route path="/flights-payment/:id" element={<FlightPayment />} />
      </Routes>
    </div>
  );
};
