import React from "react";
import amazon from "../../src/assets/image 6.png";
import Marquee from "react-fast-marquee";

// const brands = [{ img: amazon }];

const Brands = () => {
  return (
    <>
      <div className="backgroundBodyalt py-16 overflow-hidden">
        <div className="flex text-white justify-center py-12 text-xl">
          <h1 className="font-bold">
            International <span className="font-light">Brands</span>
          </h1>
        </div>
        <div className="w-full lg:max-w-[1070px] mx-auto relative">
          <div className="hidden lg:block absolute h-[1px] w-56 bg-[#ffffff4f] top-1/2 -left-56"></div>
          <div className="bg-[#092635] border border-[#ffffff4f]">
            <Marquee autoFill={true}>
              <div className="border-r border-solid border-[#ffffff4f] py-10 px-14">
                <img src={amazon} alt="" />
              </div>
              <div className="border-r border-solid border-[#ffffff4f] py-10 px-14">
                <img src={amazon} alt="" />
              </div>
              <div className="border-r border-solid border-[#ffffff4f] py-10 px-14">
                <img src={amazon} alt="" />
              </div>
              <div className="border-r border-solid border-[#ffffff4f] py-10 px-14">
                <img src={amazon} alt="" />
              </div>
              <div className="border-r border-solid border-[#ffffff4f] py-10 px-14">
                <img src={amazon} alt="" />
              </div>
            </Marquee>
          </div>
          <div className="hidden lg:block absolute h-[1px] w-56 bg-[#ffffff4f] top-1/2 -right-56"></div>
        </div>
      </div>
    </>
  );
};

export default Brands;
