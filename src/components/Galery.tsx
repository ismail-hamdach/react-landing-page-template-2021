import React from "react";

import Image from "next/image";
import Divider from "./Divider";

const Galery = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-10">
        <p className=" text-3xl leading-8 font-bold tracking-tight text-text sm:text-4xl  pb-3">
          Notre travail
        </p>
        <Divider center />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative h-60 w-80 brightness-50 hover:brightness-100 cursor-pointer transition-all">
              <Image
                src="/assets/images/happyTeam.jpeg"
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Galery;
