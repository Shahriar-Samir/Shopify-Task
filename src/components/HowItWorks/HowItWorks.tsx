import React from "react";
import Timeline from "./Timeline";

const HowItWorks = () => {
  return (
    <main className="w-full bg-white mt-20 pt-10">
      <section className="mx-auto w-[90%] max-w-[1200px]  ">
        <h1 className="text-center mt-3 font-bold text-[#263238] text-5xl">
          How it works{" "}
        </h1>
        <p className="text-center mt-5 text-gray-700 text-xl font-medium">
          Search and find other travelers heading to the same destination.
        </p>
        <Timeline />
      </section>
    </main>
  );
};

export default HowItWorks;
