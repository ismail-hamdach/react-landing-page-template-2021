/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className=" mx-auto max-w-7xl px-4  h-screen">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl tracking-tight font-bold text-primary sm:text-4xl md:text-5xl">
          <span className="block ">{mainHero.title}</span>{' '}
          <span className={`block text-primary `}>
            {mainHero.subtitle}
          </span>
        </h1>
      </div>
    </main>
  );
};

export default MainHero;
