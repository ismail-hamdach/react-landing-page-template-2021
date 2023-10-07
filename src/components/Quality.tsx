
import React from "react";

import Image from "next/image";



const Quality = () => {
  
  return (
    <div
      className={` bg-barber bg-no-repeat bg-right lg:bg-center bg-cover h-96 md:h-screen`}
      id="Quality"
    >
      <div className="flex justify-end mx-auto lg:text-right h-full">
          <Image src="/assets/images/quote.png" width={900} height={350} alt="quote" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Quality;
