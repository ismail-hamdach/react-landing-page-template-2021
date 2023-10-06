import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;
  const [firstItem] = product.items;

  return (
    <section className={`bg-background`} id="product">
      <div className={`container max-w-5xl 2xl:max-w-7xl mx-auto mt-4`}>
        <div className={`flex flex-wrap pt-6 h-screen`}>
          <div className={`w-5/6 sm:w-1/2 flex flex-col items-start justify-center `}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <Divider />
            <p className={`text-gray-600 mb-7 max-w-md 2xl:max-w-xl`}>{firstItem?.description}</p>
            <p className={`text-gray-600 mb-7 max-w-md 2xl:max-w-xl`}>{firstItem?.description2}</p>
            <p className={`text-gray-600 max-w-md 2xl:max-w-xl`}>{firstItem?.description3}</p>
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
  );
};

export default Product;
