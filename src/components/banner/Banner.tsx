import React from "react";
import Navbar from "./Navbar";
import BannerMain from "./BannerMain";

const Banner = () => {
  return (
    <section
      className="bg-[url('/images/banner.png')] bg-cover bg-center h-[180vh] lg:h-[100vh] w-full pt-5"
      aria-label="Banner"
    >
      <Navbar />
      <BannerMain />
    </section>
  );
};

export default Banner;
