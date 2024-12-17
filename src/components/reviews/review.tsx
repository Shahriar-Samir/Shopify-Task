import React from "react";
import Carousel from "./carousel";

const Review = () => {
  return (
    <main className="mx-auto w-[90%] max-w-[1200px] mt-20">
      <div className="bg-[#aecee4] w-max p-2 rounded-md mx-auto rotate-[-15deg] text-black">
        Testimonial
      </div>
      <h1 className="font-bold text-5xl text-[#263238] text-center mt-10">
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
