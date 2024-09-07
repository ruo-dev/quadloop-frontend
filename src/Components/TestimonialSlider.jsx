import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quadlood01 from "../Assets/products/quadlood01.jpeg";
import kene from "../Assets/products/kene.jpeg";
import Isaac from "../Assets/products/Isaac.png";

function TestimonialCard({ name, title, company, testimonial, pix }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8 mx-3">
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        "{testimonial}"
      </p>
      <div className="flex items-center">
        <img
          src={pix}
          alt="User Image"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-gray-900 font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export const TestimonialSlider = ({ newsItems, style }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialData = {
    name: "John Doe",
    pix: quadlood01,
    title: "CEO",
    company: "Acme Corp",
    testimonial:
      "This product is amazing! It has completely changed the way we work.",
  };

  const testimonialData1 = {
    name: "Mr. Peter",
    pix: quadlood01,
    title: "CEO",
    company: "Peter Digitals",
    testimonial:
      "I don't have to spend money on torches every 2 to 3 months since I ordered 2units of IDunnu my children are able to do their assignments conveniently.",
  };

  const testimonialData2 = {
    name: "Mr. Kene",
    pix: kene,
    title: "CEO",
    company: "Kene Techhub",
    testimonial:
      "I needed lighting to make my work place conducive i had to order 2units of IDunnu my children are able to do their assignments conveniently.",
  };
  const testimonialData3 = {
    name: "Mr. Isaac",
    pix: Isaac,
    title: "CEO",
    company: "IsaacWorks",
    testimonial:
      "The Solar is working, My people around need it. How can I know the cost price boss. ordering 2units of IDunnu my staff are able to do their work relaxed.",
  };

  return (
    <div className="relative overflow-x-hidden mx-auto" style={{ ...style }}>
      <Slider {...settings}>
        <TestimonialCard {...testimonialData1} />
        <TestimonialCard {...testimonialData2} />
        <TestimonialCard {...testimonialData3} />
        <TestimonialCard {...testimonialData} />
        <TestimonialCard {...testimonialData} />
        <TestimonialCard {...testimonialData} />
      </Slider>
    </div>
  );
};
