import React from "react";
import LoginSection from "./LoginSection";

const BannerMain = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-5 justify-between mx-auto w-[90%] max-w-[1200px] mt-8">
      <section className="mt-8">
        <h1 className="text-white font-bold text-5xl lg:text-6xl">
          The Premier <br /> Co-living Travel Network for Women
        </h1>
        <div className="mt-7 ">
          <div className="flex gap-3 items-center">
            <div className="w-[38px] bg-white h-[3px]" />
            <p className="text-white font-bold text-sm">
              Find your perfect housemate,
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[38px] bg-transparent h-[3px]" />
            <p className="text-white font-bold text-sm">
              move faster, stay longer, and travel with confidence.
            </p>
          </div>
        </div>
      </section>
      <LoginSection />
    </section>
  );
};

export default BannerMain;
