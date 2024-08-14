import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quadlood01 from "../Assets/products/quadlood01.jpeg";

function TestimonialCard({ name, title, company, testimonial }) {
     return (
          <div className="bg-white rounded-lg shadow-md p-6 my-8 mx-3">
               <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    "{testimonial}"
               </p>
               <div className="flex items-center">
                    <img
                         src={quadlood01}
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
          title: "CEO",
          company: "Acme Corp",
          testimonial:
               "This product is amazing! It has completely changed the way we work.",
     };

     return (
          <div className="relative overflow-x-hidden mx-auto" style={{ ...style }}>
               <Slider {...settings}>
                    <TestimonialCard {...testimonialData} />
                    <TestimonialCard {...testimonialData} />
                    <TestimonialCard {...testimonialData} />
                    <TestimonialCard {...testimonialData} />
                    <TestimonialCard {...testimonialData} />
                    <TestimonialCard {...testimonialData} />
               </Slider>
          </div>
     );
};
