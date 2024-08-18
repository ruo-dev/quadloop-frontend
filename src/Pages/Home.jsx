import React from "react";
import {
  About1,
  About2,
  About3,
  About4,
  About5,
  About6,
  About7,
  Carbon,
  Co2,
  Coins,
  Cost,
  EnergyCost,
  Footprint,
  Homes,
  Mass,
  Recycling,
  Reuse,
  SDGs,
  Scroll,
  Solar,
  Startup,
  aboutbg,
  challengesbg,
  contactbg,
  cv,
  fate,
  hero,
  hinckley,
  ifair,
  impactbg,
  nci,
  nextexplo,
  p1,
  qualcomm,
  solutionsbg,
  wef,
} from "../Assets";
import { ButtonYellow, Features, FeaturesNumber } from "../Components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  EnvelopeOpenFill,
  GeoAltFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import AffiliateSlider from "../Components/AffiliateSlider";
import ProductSlider from "../Components/ProductSlider";

import about01 from "../Assets/about01.jpeg";
import about03 from "../Assets/about03.jpeg";
import about06 from "../Assets/about06.jpeg";
import about07 from "../Assets/about07.jpeg";

import bgquadlood03 from "../Assets/products/quadlood03.jpeg.png";
import allon from "../Assets/allon.svg";

import { NewsSlider } from "../Components/NewsSlider";
import { TestimonialSlider } from "../Components/TestimonialSlider";
import { useProducts } from "../context/ProductContext";

const imageSources = [
  hinckley,
  fate,
  qualcomm,
  Footprint,
  Mass,
  allon,
  nci,
  ifair,
  Startup,
  nextexplo,
  wef,
  cv,
];

const Home = () => {
  const { data: products = [], fetchData: getProducts } = useProducts();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/*Hero*/}
      <section
        className="bg-no-repeat bg-cover bg-top space-y-20 pt-32 pb-10 lg:py-60"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row max-w-screen-xl justify-center items-center mx-4 md:mx-8 lg:mx-20 xl:mx-auto">
          <div className="lg:flex-1 md:px-4 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-gray-800">
              Pioneering{" "}
              <span className="text-teal-600 font-bold">innovative</span> ways
              to utilize Africa's ever-growing{" "}
              <span className="text-teal-600 font-bold">Electronic waste</span>{" "}
              stream.
            </h1>
          </div>
          <div className="flex justify-center lg:flex-[1] lg:justify-end lg:h-[450px]">
            <img
              src={bgquadlood03}
              alt="Solar Lamp"
              className="w-60 lg:w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonYellow link="../products" text="ORDER NOW" />
        </div>
        <div className="mx-4 md:mx-12 lg:mx-24 lg:pt-24 space-y-16 md:space-y-24">
          <div className="text-center lg:px-40 ">
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
              Unlocking true socio-economic environmental potential of e-waste
              and second-life battery technology.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Features imgUrl={Coins} feature="Affordable" />
            <Features imgUrl={Recycling} feature="Sustainable" />
            <Features imgUrl={Solar} feature="Clean Energy" />
          </div>

          <div className="flex justify-center">
            <a href="#about">
              <img src={Scroll} alt="arrow down" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/*About*/}
      <section
        id="about"
        className="bg-no-repeat bg-cover bg-center space-y-12 py-12 md:py-24 px-4 md:px-8 lg:mx-20 xl:mx-48"
        style={{
          backgroundImage: `url(${aboutbg})`,
        }}
      >
        <div>
          <h2 className="text-teal-600 font-bold text-3xl md:text-4xl">
            About Us
          </h2>
        </div>

        <div className="gap-8 flex flex-col lg:flex-row">
          <div>
            <p className="text-sm md:text-base">
              Quadloop is a social enterprise company that aims to develop
              affordable solar lanterns and home systems produced with a lower
              environmental impact. We are determined to be at the forefront of
              the technological renovation that will lead to a responsible,
              carbon-neutral product era.
              <br />
              <br />
              We relieve the environmental pressures of exploitation of natural
              resources for both battery production and the entire product
              design and development by applying a 0-mining policy by sourcing
              70% of our materials entirely from Electronic waste.
            </p>
          </div>
          <div className="slider-container lg:w-1/2">
            <Slider {...settings}>
              <img
                loading="lazy"
                src={about01}
                alt=""
                className="object-cover object-top h-72 md:h-96 rounded-xl w-full"
              />
              <img
                loading="lazy"
                src={About2}
                alt=""
                className="object-cover object-top h-72 md:h-96 rounded-xl w-full"
              />
              <img
                loading="lazy"
                src={about03}
                alt=""
                className="object-cover object-top h-72 md:h-96 rounded-xl w-full"
              />
              <img
                loading="lazy"
                src={About4}
                alt=""
                className="object-cover object-bottom h-72 md:h-96 rounded-xl w-full"
              />
              <img
                loading="lazy"
                src={About5}
                alt=""
                className="object-cover object-bottom h-72 md:h-96 rounded-xl w-full"
              />
              <img
                loading="lazy"
                src={about06}
                alt=""
                className="object-cover object-bottom h-72 md:h-96 rounded-xl w-full"
              />
              <img
                loading="lazy"
                src={about07}
                alt=""
                className="object-cover object-bottom h-72 md:h-96 rounded-xl w-full"
              />
            </Slider>
          </div>
        </div>

        <div>
          <h3 className="text-teal-600 font-bold text-2xl md:text-3xl">
            Our Vision
          </h3>
          <div className="gap-8 flex flex-col lg:flex-row p-4">
            <div className="lg:w-1/2">
              <p className="text-sm md:text-base">
                To be the leading provider of affordable and innovative
                eco-friendly products that support the global transition towards
                clean energy.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 justify-center items-center">
              <div>
                <FeaturesNumber
                  imgUrl={Reuse}
                  feature="Reuse rate of batteries"
                  number={100}
                  ending={"%"}
                  point={0}
                />
              </div>
              <div className="lg:-mt-8 lg:-ml-4">
                <FeaturesNumber
                  imgUrl={EnergyCost}
                  feature="Cost of Energy"
                  number={50}
                  ending={"%"}
                  point={0}
                />
              </div>
              <div className="lg:-ml-4">
                <FeaturesNumber
                  imgUrl={Carbon}
                  feature="Carbon Neutral Energy Storage"
                  number={0}
                  ending={"% CO"}
                  point={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Challenges*/}
      <section
        id="challenges"
        className=" bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 lg:px-60 "
        style={{
          backgroundImage: `url(${challengesbg})`,
        }}
      >
        <div className="space-y-8 ">
          <h2 className="text-white font-bold text-4xl">
            The four global challenges <br />
            we are tackling
          </h2>

          <div className="flex justify-center">
            <img loading="lazy" src={SDGs} alt="SDGs" />
          </div>

          <div className="flex justify-center">
            <a href="#about">
              <img loading="lazy" src={Scroll} alt="arrow down" />
            </a>
          </div>
        </div>
      </section>

      {/*Solutions*/}
      <section
        id="solutions"
        className=" bg-no-repeat bg-cover max-w-screen-xl bg-center space-y-12 py-24 px-4 lg:mx-20 xl:mx-auto"
        style={{
          backgroundImage: `url(${solutionsbg})`,
        }}
      >
        <div className="">
          <h2 className="text-teal-600 font-bold text-4xl">Our Solutions</h2>
        </div>

        <div className="">
          <ProductSlider
            products={products ?? []}
            getProducts={getProducts}
            style={{ height: "650px", border: "2px solid #333" }}
          />
        </div>

        <div className="flex justify-center items-center mx-auto">
          <ButtonYellow link="../products" text="View All" />
        </div>
      </section>

      {/*Impact and News*/}
      <section
        className=" bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 lg:mx-20 xl:mx-48 "
        style={{
          backgroundImage: `url(${impactbg})`,
        }}
      >
        {/*Impact*/}
        <div className=" " id="impacts">
          <h2 className="text-teal-600 font-bold text-4xl">Our Impact</h2>
        </div>
        <div>
          <div className="gap-8 flex flex-col lg:flex-row p-4">
            <div className="lg:w-1/2">
              <p>
                For every Quadloop lantern produced, 2.5kg of e-waste is
                prevented from going into the landfill other metrics can be for
                any lantern used 0.5kg of CO is prevented from the use of
                kerosene lanterns and other dirty sources of light.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 justify-center items-center">
              <div className="">
                <FeaturesNumber
                  imgUrl={Co2}
                  feature="Trapped"
                  number={0.678}
                  point={1}
                  ending={"kg"}
                />
              </div>
              <div className="lg:-mt-8 lg:-ml-4">
                <FeaturesNumber
                  imgUrl={Cost}
                  feature="Utilized E-waste"
                  number={362.5}
                  point={1}
                  ending={"kg"}
                />
              </div>
              <div className="lg:-ml-4">
                <FeaturesNumber
                  imgUrl={Homes}
                  feature="Homes with power"
                  number={100}
                  point={0}
                  ending={"+"}
                />
              </div>
            </div>
          </div>
        </div>

        {/*News and Events*/}
        <div className=" " id="news">
          <h2 className="text-teal-600 font-bold text-4xl">News and Events</h2>
          <iframe
            title="instagram"
            src="https://371881b455594e5f9a575a2a8e27d4b6.elf.site"
            width="100%"
            height="460"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <ButtonYellow
            link="https://www.instagram.com/quadloopcreate/"
            text="View All"
          />
        </div>
        {/* News Blogs */}
        <div className="">
          <NewsSlider images={imageSources} style={{ height: "500px" }} />
        </div>
        {/* Testimonial */}
        <div className="">
          <h2 className="text-teal-600 font-bold text-4xl">Testimonials</h2>
          <TestimonialSlider style={{ height: "450px" }} />
        </div>
        {/* Affiliates */}
        <div className="py-24 px-4 lg:px-20 xl:px-48 bg-gray-100">
          <div className="flex flex-col gap-8">
            <h2 className="text-teal-600 font-bold text-4xl text-center">
              Our Affiliates
            </h2>
            <AffiliateSlider images={imageSources} />
          </div>
        </div>
      </section>
      {/*Contact*/}
      <section
        id="contact"
        className=" bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 xl:px-60 "
        style={{
          backgroundImage: `url(${contactbg})`,
        }}
      >
        <div className=" p-4 lg:p-8 bg-white rounded-2xl">
          <h2 className="text-teal-600 font-bold text-4xl">Get in Touch </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-medium">Full name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-teal-600 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-teal-600 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-amber-500 active:bg-gray-900 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>

            <div className="p-8 space-y-8 my-auto">
              <a
                href="https://www.google.com/maps/place/QuadLoop/@6.499162,3.3771986,17z/data=!3m1!4b1!4m5!3m4!1s0x103bede75f4c5e8d:0xa1cb0afbdb0b306e!8m2!3d6.4991567!4d3.3793873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex space-x-4"
              >
                <GeoAltFill className="text-amber-500" size={24} />
                <span>10 Hughes Avenue Alagomeji Yaba</span>
              </a>
              <a href="tel:+2348160925033" className="flex space-x-4">
                <TelephoneFill className="text-amber-500" size={24} />
                <span>+ 234 802 946 3826</span>
              </a>
              <a href="mailto:hello@quadloop.africa" className="flex space-x-4">
                <EnvelopeOpenFill className="text-amber-500" size={24} />
                <span>
                  hello@quadloop.africa <br /> support@quadloop.africa
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
