import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-white py-[40px]">
      <footer className="footer bg-transparent items-center text-base-content mx-auto !w-[90%] !max-w-[1200px] ">
        <nav>
          <Image
            alt="title"
            src="/images/heading.png"
            height={500}
            width={500}
            className="w-[140px]"
          />
          <p className="max-w-[588px] text-lg text-gray-700 mt-7">
            Scan a Turning Hearts Medallion to learn about and interact with
            those who have passed on. You can also begin documenting the legacy
            you wish to leave behind.
          </p>
          <div className="mt-5">
            <h2 className="text-lg font-medium text-gray-800">Social Media:</h2>
            <div className="flex items-center gap-3 mt-3 ">
              <Image
                alt=""
                width={24}
                height={24}
                src="/images/social-media/1.png"
              />
              <Image
                alt=""
                width={24}
                height={24}
                src="/images/social-media/2.png"
              />
              <Image
                alt=""
                width={24}
                height={24}
                src="/images/social-media/3.png"
              />
              <Image
                alt=""
                width={24}
                height={24}
                src="/images/social-media/4.png"
              />
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg !text-[#1d2939]">Quick Link</h6>
          <a className="link link-hover text-gray-700">Home</a>
          <a className="link link-hover text-gray-700">FAQ</a>
          <a className="link link-hover text-gray-700">Country search</a>
          <a className="link link-hover text-gray-700">Register</a>
        </nav>
        <nav>
          <h6 className="footer-title invisible">Contact</h6>
          <a className="link link-hover text-gray-700">(316) 555-0116</a>
          <a className="link link-hover text-gray-700">
            deanna.curtis@example.com
          </a>
        </nav>
      </footer>
      <footer className="mt-5 footer text-base-content border-gay-500 border-t pt-5 mx-auto !w-[90%] !max-w-[1200px] !bg-transparent justify-end">
        <p className="text-gray-600">
          © [2024] Ash and Fire. All Rights Reserved.
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
