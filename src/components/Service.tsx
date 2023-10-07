import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Service = () => {
  const { features } = config;
  const {
    title,
  } = features;
  return (
    <div
      className={`py-36 bg-quality bg-no-repeat bg-center bg-cover text-center lg:text-justify`}
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center my-10">
          <p className="text-3xl leading-8 font-bold tracking-tight text-text sm:text-4xl mt-10 mb-5">
            {title}
          </p>
          <Divider center/>
          <p className="mt-4 max-w-6xl text-xl font-bold text-gray-500 lg:mx-auto">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années{" "}
            <span className="text-primary">1500</span>
          </p>
        </div>

        <div className="lg:text-center my-10">
          <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-primary my-10">
            Horaire
          </p>
          <p className="mt-4 max-w-6xl text-xl font-bold text-gray-500 lg:mx-auto">
          Poste du <span className="text-primary">matin</span> [8 h 00 à 15 h 30]  -  Poste de <span className="text-primary">l'après-midi </span> [16 h 00 à 23 h 30]  -  Poste de <span className="text-primary">nuit</span> [00 h 00 à 7 h 30]
            
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Service;
