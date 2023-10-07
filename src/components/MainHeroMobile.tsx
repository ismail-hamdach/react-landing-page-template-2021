import React from "react";

import Image from "next/image";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="h-screen w-screen text-center bg-hero bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl tracking-tight font-bold text-primary sm:text-4xl md:text-5xl shadow-lg">
          <span className="block">{mainHero.title}</span>{" "}
          <span className={`block`}>{mainHero.subtitle}</span>
          <Image src={"/assets/images/trace2.png"} alt="" width="200" height="100" objectFit="contain"/>
        </h1>
      </div>
    </main>
  );
};

export default MainHero;
