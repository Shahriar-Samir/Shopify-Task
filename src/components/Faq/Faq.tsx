import React from "react";
import Faqs from "./Faqs";

const Faq = () => {
  return (
    <main className="mx-auto w-[90%] max-w-[1200px] mt-20">
      <h1 className="text-5xl font-bold text-center text-black ">Faqs</h1>
      <p className="mt-6 text-center text-lg text-[#1d2939]">
        If you have any questions that aren’t listed below, please send your
        question to: info@ExpatGlobalGirls.com
      </p>
      <Faqs />
    </main>
  );
};

export default Faq;
