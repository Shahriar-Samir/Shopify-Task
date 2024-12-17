import React from "react";
import Carousel from "./carousel";

const Review = () => {
  return (
    <main className="mx-auto w-[90%] max-w-[1200px]">
      <h1 className="font-bold text-5xl text-[#263238] text-center">
        What Our Members Say
      </h1>
      <p className="mt-3 text-center text-gray-700 text-lg font-medium">
        Hear from women who share your passion for exploring new cultures,
        experiencing life abroad, and making the most of every opportunity.
      </p>
      <Carousel />
    </main>
  );
};

export default Review;
