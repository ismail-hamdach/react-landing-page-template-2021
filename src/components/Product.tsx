import React from "react";

import Image from "next/image";

import config from "../config/index.json";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;
  const [firstItem] = product.items;

  return (
    <>
      <section className={`bg-background`} id="product">
        {/* Web version */}
        <div
          className={`container max-w-5xl 2xl:max-w-7xl mx-auto mt-4 hidden lg:block`}
        >
          <div className={`flex flex-wrap pt-6 h-screen`}>
            <div
              className={`w-5/6 sm:w-1/2 flex flex-col items-start justify-center `}
            >
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {firstItem?.title}
              </h3>
              <Divider />
              <p className={`text-gray-600 mb-7 max-w-md 2xl:max-w-xl`}>
                {firstItem?.description}
              </p>
              <p className={`text-gray-600 mb-7 max-w-md 2xl:max-w-xl`}>
                {firstItem?.description2}
              </p>
              <p className={`text-gray-600 max-w-md 2xl:max-w-xl`}>
                {firstItem?.description3}
              </p>
            </div>
            <div className={`w-full sm:w-1/2 pt-6`}>
              <img
                className="h-full object-contain"
                src={firstItem?.img}
                alt={firstItem?.title}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mobile version */}
      <div
        className={`lg:hidden flex flex-col items-center justify-between w-screen py-12 max-w-lg mx-auto`}
        id="product"
      >
        <div className="mx-5 text-justify">
          <h3
            className={`text-3xl text-gray-800 font-bold leading-none mb-3 text-center`}
          >
            {firstItem?.title}
          </h3>
          <Divider center />
          <p className={`text-gray-600 mb-7`}>{firstItem?.description}</p>
          <p className={`text-gray-600 mb-7`}>{firstItem?.description2}</p>
          <p className={`text-gray-600`}>{firstItem?.description3}</p>
          <div className="relative w-full mx-auto h-96 mt-5 rounded-lg overflow-hidden">
            <Image
              src={firstItem?.img ?? ""}
              alt={firstItem?.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
