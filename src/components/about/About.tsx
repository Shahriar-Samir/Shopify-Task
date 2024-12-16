import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="flex flex-col lg:flex-row items-baseline md:items-start justify-between mt-20 md:mt-80 mx-auto w-[90%] max-w-[1200px] gap-10">
      <section className="w-full max-w-[500px] mx-auto lg:w-1/2 flex justify-center items-center bg-white h-[561px] rounded-3xl">
        <Image
          alt="title"
          src="/images/about/title.png"
          height={1000}
          width={1000}
          className="w-11/12 max-w-[431px] max-h-[317px]"
        />
      </section>
      <section className="w-full lg:w-1/2 mt-5">
        <div className="w-[57px] h-[8px] bg-[#0872BA] rounded-2xl" />
        <h1 className="text-5xl font-semibold text-[#1D2939] leading-[70px] mt-2">
          Your Community for Women Ready to Go Abroad
        </h1>
        <p className="text-lg font-medium text-[#1D2939] mt-7">
          We’re thrilled you found us! At Expat Global Girls, we empower women
          to pursue their dreams abroad. Our platform connects women seeking
          housemates for international moves and trips, offering a safe,
          supportive community and a searchable directory to help you find the
          perfect living companion. Join us to make your move abroad affordable,
          achievable, and filled with support!
        </p>
        <button className="text-white bg-[#0872BA] py-3 rounded-xl text-sm flex gap-2 items-center justify-center px-6 mt-8">
          Become a Member
          <Image
            alt="arrow-sign"
            width={20}
            height={20}
            src="/icons/arrow.svg"
          />
        </button>
      </section>
    </main>
  );
};

export default About;
