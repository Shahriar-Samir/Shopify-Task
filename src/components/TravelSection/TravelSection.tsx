import Image from "next/image";
import React from "react";

const TravelSection = () => {
  return (
    <main className="mx-auto w-[90%] max-w-[1200px] bg-white rounded-2xl p-5 mt-32">
      <div className="w-[57px] h-[8px] bg-[#0872BA] rounded-2xl mx-auto" />
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-4">
        Perfect for every type of traveler
      </h1>
      <Image
        alt="traveling-duration"
        width={1000}
        height={500}
        src="/images/travel-section/traveling-duration.png"
        className="w-full rounded-xl mt-8"
      />
    </main>
  );
};

export default TravelSection;
