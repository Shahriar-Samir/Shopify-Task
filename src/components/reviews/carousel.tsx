import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <main className="flex flex-col items-center pt-5 lg:flex-row  bg-white rounded-xl gap-10 mt-16">
      <section className="w-full max-w-[550px]">
        <section
          style={{
            transform: "perspective( 600px ) rotateY( 20deg ) ",
            scale: "0.87",
          }}
          className="bg-[#0872ba] w-full max-w-[500px]  text-white p-10 rounded-2xl "
        >
          <div className="flex justify-between w-full">
            <Image
              alt="left arrow"
              width={88}
              height={88}
              src="/images/user-review.png"
            />
            <div className="flex gap-2">
              <Image
                alt="left arrow"
                width={18}
                height={18}
                src="/images/star.png"
                className="w-[18px] h-[18px]"
              />
              <p>5.0</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5 ">
            <h1 className="font-semibold text-2xl">Sarah Thompson</h1>
            <p className="text-lg">Teacher • Non - smoker • Married</p>
            <p className="text-lg">Silom, Bangkok</p>
            <p className="text-lg">Dec 3-8</p>
          </div>
        </section>
      </section>
      <section className="p-6">
        <div className="flex w-full justify-end gap-3">
          <button className="btn !px-4 rounded-xl bg-transparent border-2 border-[#dfdfdf]">
            <Image
              alt="left arrow"
              width={15}
              height={15}
              src="/images/arrows/left.png"
            />
          </button>
          <button className="btn !px-4 rounded-xl bg-transparent border-2 border-[#dfdfdf]">
            <Image
              alt="left arrow"
              width={15}
              height={15}
              src="/images/arrows/right.png"
            />
          </button>
        </div>
        <Image
          width={50}
          height={50}
          className="w-[50px]"
          src="/images/qoutes/1.png"
          alt="quote"
        />
        <p className="text-gray-700 font-medium">
          Our smart developers build innovative, efficient, and high-
          performance solutions. efficient, and high- performance solutions.
          efficient, and high- performance solutions.
        </p>
        <div className="flex justify-end w-full">
          <Image
            width={50}
            height={50}
            className="w-[50px]"
            src="/images/qoutes/2.png"
            alt="quote"
          />
        </div>
      </section>
    </main>
  );
};

export default Carousel;
