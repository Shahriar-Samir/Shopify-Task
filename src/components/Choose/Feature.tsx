import Image from "next/image";
import React from "react";

const Feature = ({
  featureClasses,
  logo,
  title,
  description,
}: {
  featureClasses: string;
  logo: string;
  title: string;
  description: string;
}) => {
  return (
    <article
      className={`w-full py-7 border-2  border-[#c7dcea] ${featureClasses}`}
    >
      <Image
        width={500}
        height={500}
        className="h-[67px] w-[78px] object-cover"
        alt=""
        src={logo}
      />
      <h1 className="font-semibold text-[#1D2939] text-2xl mt-2">{title}</h1>
      <p className="text-lg text-gray-600 mt-2">{description}</p>
    </article>
  );
};

export default Feature;
