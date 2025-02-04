import React from "react";

import About from "../components/About";
import Analytics from "../components/Analytics";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import Location from "../components/Location";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import Product from "../components/Product";
import Quality from "../components/Quality";
import Reservation from "../components/Reservation";
import Services from "../components/Service";
import MainHeroMobile from "../components/MainHeroMobile";
import Galery from "../components/Galery";

const App = () => {
  return (
    <div className={`bg-background  overflow-hidden scroll-smooth`}>
      <div className={`relative bg-background`}>
        <div className="fixed z-50 w-full ">
          <Header />
        </div>
        <div className="mx-auto hidden lg:flex">
          <MainHeroImage />
          <MainHero />
        </div>
        <div className="flex mx-auto lg:hidden">
          {/* <MainHeroImage /> */}
          <MainHeroMobile />
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
        <Galery />
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
