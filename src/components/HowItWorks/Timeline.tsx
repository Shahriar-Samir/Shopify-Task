import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="mt-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <div className="rounded-full border-2 border-[#4394cb] flex justify-center items-center h-[68px] w-[68px]">
              <p className="font-bold text-2xl text-black">1</p>
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end flex flex-col items-center">
            <div className="w-full text-2xl text-start font-semibold text-[#1d2939]">
              Plan Your Trip
            </div>
            <p className="text-start mt-3 text-lg text-gray-600">
              Start by setting your travel dates, destinations, and preferences.
              This helps you tailor your search for housemates who align with
              your journey.
            </p>
            <Image
              width={300}
              height={300}
              alt="woman-communicating"
              src="/images/timeline/1.png"
              className="w-100 mt-3 max-w-[200px]"
            />
          </div>
          <hr className="!bg-transparent !w-[15px] ms-[10px] !border-l-[5px] !border-dashed !border-[#4394cb]" />
        </li>
        <li>
          <hr className="!bg-transparent !w-[15px] ms-[10px] !border-l-[5px] !border-dashed !border-[#4394cb]" />
          <div className="timeline-middle">
            <div className="rounded-full border-2 border-[#4394cb] flex justify-center items-center h-[68px] w-[68px]">
              <p className="font-bold text-2xl text-black">2</p>
            </div>
          </div>
          <div className="timeline-end mb-10 md:text-end flex flex-col items-center">
            <div className="w-full text-2xl text-start font-semibold text-[#1d2939]">
              Explore Matching Profiles
            </div>
            <p className="text-start mt-3 text-lg text-gray-600">
              Browse through profiles of like-minded women who are traveling to
              similar locations. You can filter results based on your travel
              dates, needs, and values.
            </p>
            <Image
              width={300}
              height={300}
              alt="woman-communicating"
              src="/images/timeline/2.png"
              className="w-100 mt-3 max-w-[200px]"
            />
          </div>
          <hr className="!bg-transparent !w-[15px] ms-[10px] !border-l-[5px] !border-dashed !border-[#4394cb]" />
        </li>
        <li>
          <hr className="!bg-transparent !w-[15px] ms-[10px] !border-l-[5px] !border-dashed !border-[#4394cb]" />
          <div className="timeline-middle">
            <div className="rounded-full border-2 border-[#4394cb] flex justify-center items-center h-[68px] w-[68px]">
              <p className="font-bold text-2xl text-black">3</p>
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end flex flex-col items-center">
            <div className="w-full text-2xl text-start font-semibold text-[#1d2939]">
              Connect and Build Relationships
            </div>
            <p className="text-start mt-3 text-lg text-gray-600">
              Send messages, ask questions, and get to know potential housemates
              before committing. Building rapport ensures a comfortable and
              trusted connection for your shared journey
            </p>
            <Image
              width={300}
              height={300}
              alt="woman-communicating"
              src="/images/timeline/3.png"
              className="w-100 mt-3 max-w-[200px]"
            />
          </div>
          <hr className="!bg-transparent !w-[15px] ms-[10px] !border-l-[5px] !border-dashed !border-[#4394cb]" />
        </li>
        <li>
          <div className="timeline-middle">
            <div className="rounded-full border-2 border-[#4394cb] flex justify-center items-center h-[68px] w-[68px]">
              <p className="font-bold text-2xl text-black">4</p>
            </div>
          </div>
          <div className="timeline-end mb-10 md:text-end flex flex-col items-center">
            <div className="w-full text-2xl text-start font-semibold text-[#1d2939]">
              Secure Your Plans & Enjoy the Journey
            </div>
            <p className="text-start mt-3 text-lg text-gray-600">
              Once you’ve found the right housemate, finalize your arrangements
              with confidence. With a trusted companion, you can travel with
              peace of mind and enjoy every moment.
            </p>
            <Image
              width={300}
              height={300}
              alt="woman-communicating"
              src="/images/timeline/4.png"
              className="w-100 mt-3 max-w-[200px]"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
