import React from "react";

import About from "../components/About";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import Location from "../components/Location";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import Product from "../components/Product";
import Quality from "../components/Quality";
import Reservation from "../components/Reservation";
import Services from "../components/Service";

const App = () => {
  return (
    <div className={`bg-background grid overflow-hidden scroll-smooth`}>
      <div className={`relative bg-background`}>
        <div className="fixed w-full ">
          <Header />
        </div>
        <div className="flex mx-auto">
          <MainHeroImage />
          <MainHero />
        </div>
      </div>
      {/* <Canvas /> */}
      <LazyShow>
        <>
          <Product />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Services />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Quality />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <Location />
      </LazyShow>
      <LazyShow>
        <Reservation />
      </LazyShow>
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
