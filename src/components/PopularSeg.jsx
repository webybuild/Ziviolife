import React from "react";
import product from "../../src/assets/home_outdoor_5.jpg";

const productList = [
  {
    img: product,
    title: "Outdoor",
  },
  {
    img: product,
    title: "Indoor",
  },
  {
    img: product,
    title: "New",
  },
  {
    img: product,
    title: "Solar",
  },
  {
    img: product,
    title: "Poles",
  },
  {
    img: product,
    title: "Facade",
  },
  {
    img: product,
    title: "Poles",
  },
  {
    img: product,
    title: "Trending",
  },
];

const PopularSeg = () => {
  return (
    <>
      <div className="backgroundBodyalt py-16 px-8">
        <div className="flex text-white justify-center pb-16 text-xl">
          <h1 className="font-bold">
            Popular <span className="font-light">Segments</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-16 justify-center items-center">
          {productList.map((item, index) => (
            <div key={index}>
              <div
                style={{ boxShadow: "-20px -20px 0px 0px #092635" }}
                className="relative max-w-[15rem]"
              >
                <img src={item.img} alt="popular-segment" />
                <div className="absolute top-0 p-1">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularSeg;
