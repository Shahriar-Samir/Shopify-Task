import About from "@/components/about/About";
import BannerFooterPart from "@/components/banner-footer/BannerFooterPart";
import Banner from "@/components/banner/Banner";
import Choose from "@/components/Choose/Choose";
import TravelSection from "@/components/TravelSection/TravelSection";
import React from "react";

const Home = () => {
  return (
    <main className="bg-[#f6f6f6]">
      <Banner />
      <BannerFooterPart />
      <About />
      <TravelSection />
      <Choose />
    </main>
  );
};

export default Home;
