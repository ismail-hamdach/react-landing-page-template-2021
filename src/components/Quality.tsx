
import React from "react";

import Image from "next/image";



const Quality = () => {
  
  return (
    <div
      className={` bg-barber bg-no-repeat bg-center bg-cover h-screen`}
      id="Location"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-right">
          <Image src="/assets/images/quote.png" width={900} height={900} alt="quote" objectFit="contain"/>
        </div>
      </div>
    </div>
  );
};

export default Quality;
