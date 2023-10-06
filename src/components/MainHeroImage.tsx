import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:w-[50%]">
      {/* <img
        className="absolute  h-12 w-full object-cover"
        src={"/assets/images/trace.png"}
        alt="happy team image"
      /> */}
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-screen"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
