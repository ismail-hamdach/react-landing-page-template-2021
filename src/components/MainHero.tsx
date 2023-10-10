import React from "react";

import Image from "next/image";

import config from "../config/index.json";
import { Link } from "react-scroll";

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className=" mx-auto max-w-7xl px-4  h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl  tracking-tight font-black uppercase text-primary sm:text-4xl md:text-5xl">
          <span className="block ">{mainHero.title}</span>{" "}
          <span className={`block text-primary `}>{mainHero.subtitle}</span>
        </h1>
        <Image
          src={"/assets/images/trace2.png"}
          alt=""
          width="200"
          height="100"
          objectFit="contain"
        />
      </div>
      <Link
        spy={true}
        active="active"
        smooth={true}
        duration={1000}
        key={"product"}
        to={"product"}
      >
        <div className="relative -top-28 w-full text-center my-5 bg-montrez bg-center bg-contain bg-no-repeat h-12 cursor-pointer"></div>
      </Link>
    </main>
  );
};

export default MainHero;
