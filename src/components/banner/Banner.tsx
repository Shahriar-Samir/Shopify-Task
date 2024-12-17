import React from "react";
import Navbar from "./Navbar";
import BannerMain from "./BannerMain";
import BannerFooter from "./BannerFooter";

const Banner = () => {
  return (
    <section
      className="bg-[url('/images/banner.png')] bg-cover bg-center h-[180vh] lg:h-[120vh] lg:max-h-[800px] max-w-[1600px] w-full pt-5 mx-auto relative"
      aria-label="Banner"
    >
      <Navbar />
      <BannerMain />
      <BannerFooter type="bannerFooter" />
    </section>
  );
};

export default Banner;
