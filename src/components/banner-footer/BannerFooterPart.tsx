import React from "react";
import BannerFooter from "../banner/BannerFooter";

const BannerFooterPart = () => {
  return (
    <div className="md:hidden">
      <BannerFooter type={"bannerPart"} />
    </div>
  );
};

export default BannerFooterPart;
