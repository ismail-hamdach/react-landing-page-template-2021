

import React from "react";


import config from "../config/index.json";
import Divider from "./Divider";

const Location = () => {
  const { location } = config;
  const { title } = location;
  return (
    <div
      className={` bg-white bg-no-repeat bg-center bg-cover py-20`}
      id="Location"
    >
      <div className="h-full flex flex-col items-center justify-around gap-y-10 text-center mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <p className=" text-3xl leading-8 font-bold tracking-tight text-text sm:text-4xl  pb-3">
            {title}
          </p>
          <Divider center />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.9712040109453!2d1.8704490265393137!3d46.159788915211635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f97f5489d9cefd%3A0x6f78a2ec2a7b19c0!2sNetto!5e1!3m2!1sfr!2sma!4v1696593556626!5m2!1sfr!2sma"
          className="h-[30rem] w-full mx-auto"
          // style="border:0;"
          // allowfullScreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
