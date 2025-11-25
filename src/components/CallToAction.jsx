import React from "react";
import imgOne from "../../src/assets/CtaImg/imgOne.svg";
import imgTwo from "../../src/assets/CtaImg/imgTwo.svg";
import imgThree from "../../src/assets/CtaImg/imgThree.png";
import imgFour from "../../src/assets/CtaImg/imgFour.svg";
import circle from "../../src/assets/Ellipse 5.svg";
import circleTwo from "../../src/assets/Ellipse 4.svg";
import circleThree from "../../src/assets/Ellipse 3.svg";

const CallToAction = () => {
  return (
    <div className="backgroundBodyTwoMobile h-[full]">
      <div>
        <div className="text-white flex justify-center items-center py-8">
          <h1 className="max-w-[75%] lg:max-w-[50%] text-xs lg:text-sm font-light text-center">
            Now that this concept has become a collective duty, strengthened by
            the life-blood in us for over 40 years, we are still in the
            forefront of the race towards Zero Emission
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row text-white justify-center gap-20 py-8 px-4 lg:px-32">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="h-28">
              <img src={imgOne} alt="" />
            </div>
            <div className="border border-white rounded-full p-2">
              <div className="circle"></div>
            </div>
            <div>
              <h1>166</h1>
            </div>
            <div>
              <p className="text-center">Up to 166lm/W system efﬁciency</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="h-28">
              <img src={imgTwo} alt="" />
            </div>
            <div className="border border-white rounded-full p-2">
              <div className="circle"></div>
            </div>
            <div>
              <h1>60%</h1>
            </div>
            <div>
              <p className="text-center">More than 60% Energy Saving</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="h-28">
              <img src={imgThree} alt="" />
            </div>
            <div className="border border-white rounded-full p-2">
              <div className="circle"></div>
            </div>

            <div>
              <h1>100%</h1>
            </div>
            <div>
              <p className="text-center">
                Manufactured using electricity from renewable sources
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="h-28">
              <img src={imgFour} alt="" />
            </div>
            <div className="border border-white rounded-full p-2">
              <div className="circle"></div>
            </div>
            <div>
              <h1>100%</h1>
            </div>
            <div>
              <p className="text-center">
                We support the use of recycled and recyclable materials
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pb-16">
        <div className="relative h-[65dvh] lg:h-[105dvh] flex items-center justify-center w-full">
          <div className="relative flex flex-col items-center justify-center w-[90%] lg:w-1/2 ">
            <p className="text-white text-center font-semibold text-xs lg:text-2xl leading-5 tracking-widest mb-4">
              Explore Artizelite latest products, boasting high wattage, long
              lasting capacity, and a consistently bright performance
            </p>
            <button className="text-[#263D42] text-xs lg:text-base px-5 py-1 md:py-2 rounded-full uppercase bg-white">
              Contact Us
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full flex justify-center items-center">
            <img src={circle} alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-non">
            <img src={circleTwo} alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={circleThree} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
