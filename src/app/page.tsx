import About from "@/components/about/About";
import BannerFooterPart from "@/components/banner-footer/BannerFooterPart";
import Banner from "@/components/banner/Banner";
import React from "react";

const Home = () => {
  return (
    <main className="bg-[#f6f6f6]">
      <Banner />
      <BannerFooterPart/>
      <About />
    </main>
  );
};

export default Home;
