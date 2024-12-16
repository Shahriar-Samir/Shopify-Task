import Image from "next/image";
import React from "react";

const InfoSection = (props: {
  image: string;
  title: string;
  details: string;
}) => {
  const { image, title, details } = props;
  return (
    <div className="w-[271px]">
      <Image
        alt="Girl with globe"
        className="w-[83px] h-[83px]"
        width={83}
        height={83}
        src={image}
      />
      <h1 className="text-2xl font-semibold text-[#1D2939] mt-3">{title}</h1>
      <p className="mt-2 text-gray-600">{details}</p>
    </div>
  );
};

export default InfoSection;
