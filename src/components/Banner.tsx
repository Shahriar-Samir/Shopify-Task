import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <section
      className="bg-[url('/images/banner.png')] bg-cover bg-center h-[100vh] w-full pt-5"
      aria-label="Banner"
    >
      <Navbar />
    </section>
  );
};

export default Banner;
