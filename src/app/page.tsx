import About from "@/components/about/About";
import BannerFooterPart from "@/components/banner-footer/BannerFooterPart";
import Banner from "@/components/banner/Banner";
import Choose from "@/components/Choose/Choose";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Review from "@/components/reviews/review";
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
      <HowItWorks />
      <Review />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
