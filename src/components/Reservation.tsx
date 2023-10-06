/* eslint-disable prettier/prettier */

import React from "react";

import Image from "next/image";

import config from "../config/index.json";
import Divider from "./Divider";

const Reservation = () => {
  const { features } = config;
  const {
    title,
    subtitle,
    description,
    items: featuresList,
    background,
  } = features;
  return (
    <div
      className={` bg-barber bg-no-repeat bg-center bg-cover h-screen`}
      id="Reservation"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        
      </div>
    </div>
  );
};

export default Reservation;
