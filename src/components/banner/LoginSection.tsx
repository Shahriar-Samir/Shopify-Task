import Image from "next/image";
import React from "react";

const LoginSection = () => {
  return (
    <section className="rounded-lg backdrop-blur-[24px] bg-[rgba(56,56,56,0.2)] p-6 text-white w-full max-w-[500px] mx-auto">
      <h1 className="text-center font-bold text-2xl">Sign up with email</h1>

      {/* first name and last name */}
      <div className="w-full flex-col md:flex-row flex justify-center items-center gap-4 mt-5 text-sm">
        <div className="flex flex-col w-full">
          <label className="font-semibold ">First name</label>
          <input
            placeholder="Enter your first name"
            className="bg-transparent p-2 outline-none rounded-md border border-white mt-3"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold text-sm">Last name</label>
          <input
            placeholder="Enter your last name"
            className="bg-transparent p-2 outline-none rounded-md border border-white mt-3"
          />
        </div>
      </div>

      <div className="flex flex-col mt-5 text-sm">
        <label className="font-semibold ">Email address</label>
        <input
          placeholder="Enter your email address"
          className="bg-transparent p-2 outline-none rounded-md border border-white mt-3"
        />
      </div>
      <div className="flex flex-col mt-5 text-sm">
        <label className="font-semibold ">Password</label>
        <input
          className="bg-transparent p-2 outline-none rounded-md border border-white mt-3"
          placeholder="Enter your password"
        />
      </div>
      <p className=" text-center font-medium mt-5">
        You are already member <span className="underline">log in</span>
      </p>
      <button className="mt-6 w-full bg-[#0872BA] py-3 rounded-xl text-sm flex gap-2 items-center justify-center">
        <Image alt="arrow-sign" width={20} height={20} src="/icons/arrow.svg" />
        Sign up
      </button>
    </section>
  );
};

export default LoginSection;
