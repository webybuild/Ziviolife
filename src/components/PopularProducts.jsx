import React from "react";
import product from "../../src/assets/home_outdoor_5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productList = [
  {
    img: product,
    title: "Trick",
  },
  {
    img: product,
    title: "Underscore InOut",
  },
  {
    img: product,
    title: "Underscore InOut",
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
    title: "Underscore InOut",
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
    title: "Underscore InOut",
  },
];

const PopularProducts = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white pt-12 pb-16">
      <div className="flex text-[#263D42] justify-start px-8 pb-12 text-xl">
        <h1 className="font-bold text-4xl">
          Popular <span className="font-light">Products</span>
        </h1>
      </div>
      <div className="w-[80%] lg:w-full mx-auto px-4 lg:px-16">
        <Slider {...settings}>
          {productList.map((item, index) => (
            <div key={index}>
              <div className="bg-white mx-4">
                <div>
                  <img
                    className="w-full  lg:min-h-[18rem]"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="category-title bg-[#092635] min-h-[4rem] flex items-center px-4 text-white">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularProducts;
