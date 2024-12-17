import Image from "next/image";
import React from "react";
import Feature from "./Feature";

const Choose = () => {
  return (
    <main className="mx-auto w-[90%] max-w-[1200px] mt-20 ">
      <div className="bg-[#aecee4] w-max p-2 rounded-md mx-auto rotate-[-15deg]">
        Why choose us?
      </div>
      <h1 className="font-semibold text-center text-5xl text-[#1D2939] mt-10">
        Why Choose Expat Global Girls
      </h1>
      <h3 className="text-[#344054] font-medium text-xl text-center mt-5">
        Empowering women to travel with confidence and ease worldwide
      </h3>
      <div className="relative w-full flex flex-col lg:flex-row items-center gap-5 justify-between mt-16">
        <div className="flex flex-col gap-14">
          <Feature
            logo="/images/Features/2.png"
            title="Affordable Housing"
            description="Save money and travel smarter by sharing accommodations with fellow members."
            featureClasses="ps-10 pe-[50px] rounded-xl rounded-br-[100px]"
          />
          <Feature
            logo="/images/Features/1.png"
            title="Verified Profiles"
            description="A reliable community with verified profiles for added safety and peace of mind."
            featureClasses="ps-10 pe-[50px] rounded-xl rounded-tr-[100px]"
          />
        </div>
        <Image
          height={500}
          width={500}
          alt="title"
          src="/images/heading.png"
          className="w-[118px] h-[86px]"
        />
        <div className="flex flex-col gap-14">
          <Feature
            logo="/images/Features/3.png"
            title="Flexible Options"
            description="From memberships to travel & lifestyle preferences – you have the power to choose."
            featureClasses="ps-10 ps-[50px] rounded-xl rounded-bl-[100px] pe-5"
          />
          <Feature
            logo="/images/Features/4.png"
            title="Women-Only Spaces"
            description="Safe, supportive spaces for women to connect and thrive period."
            featureClasses="ps-10 ps-[50px] rounded-xl rounded-tl-[100px] pe-5"
          />
        </div>
      </div>
    </main>
  );
};

export default Choose;
