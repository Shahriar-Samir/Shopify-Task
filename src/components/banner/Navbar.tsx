import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto w-[90%] max-w-[1200px] bg-[rgba(244,244,244,0.2)] backdrop-blur-[24px] px-5 py-2 rounded-lg ">
      <Image
        alt="title"
        height={80}
        width={108}
        className="h-[60px] w-[88px] md:h-[80px] md:w-[108px] object-cover"
        src="/images/heading.png"
      />
      <button className="btn border-0 font-semibold text-[#0872BA] bg-white py-2 px-5 rounded-md">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
