import React from "react";
import InfoSection from "./BannerFooter/InfoSection";

const BannerFooter = ({ type }: { type: string }) => {
  return (
    <section
      className={`flex-col ${
        type === "bannerPart"
          ? "flex mt-20"
          : "hidden md:flex absolute bottom-[-180] left-1/2 transform -translate-x-1/2"
      } md:flex-row gap-5 items-center md:items-start justify-between mx-auto w-[90%] max-w-[1200px] bg-white  rounded-lg p-6`}
    >
      <InfoSection
        image="/images/BannerFooter/1.png"
        title="150+ Countries"
        details="Empowering women to explore destinations globally."
      />
      <InfoSection
        image="/images/BannerFooter/2.png"
        title="Connect & Travel"
        details="A trusted community of verified members."
      />
      <InfoSection
        image="/images/BannerFooter/3.png"
        title="Find Your Tribe"
        details="Find like-minded housemates faster and easier."
      />
    </section>
  );
};

export default BannerFooter;
