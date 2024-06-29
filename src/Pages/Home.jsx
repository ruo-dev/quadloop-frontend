import { React } from "react";
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
     IdunnuPro,
     LampSolar,
     Mass,
     PowerGenerator,
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

import quadlood01 from "../Assets/products/quadlood01.jpeg";
import quadlood02 from "../Assets/products/quadlood02.jpeg";
import quadlood03 from "../Assets/products/quadlood03.jpeg";
import bgquadlood03 from "../Assets/products/quadlood03.jpeg.png";

import useGetAllProducts from "../hooks/Products/useGetAllProducts";

const imageSources = [
     hinckley,
     fate,
     qualcomm,
     Footprint,
     Mass,
     nci,
     ifair,
     Startup,
     nextexplo,
     wef,
     cv,
];

const Home = () => {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
     };

     const { data: products } = useGetAllProducts();
     const productImages = (products ?? []).map((product) => ({
          id: product?.id,
          image: product?.product_image_url ?? quadlood01,
     })) ?? [
          { id: 1, image: quadlood01 },
          { id: 2, image: quadlood02 },
          { id: 3, image: quadlood03 },
     ];

     return (
          <div>
               {/*Hero*/}
               <section
                    className=" bg-no-repeat bg-cover bg-top space-y-40 pt-60 pb-10 lg:py-60 "
                    style={{
                         backgroundImage: `url(${hero})`,
                    }}
               >
                    <div className="flex flex-col lg:flex-row justify-center mx-4 lg:mx-20 xl:mx-48 ">
                         <div className="lg:basis-10/12">
                              <h1 className="text-3xl md:text-5xl text-gray-800 ">
                                   Pioneering{" "}
                                   <span className="text-teal-600 font-bold">
                                        innovative
                                   </span>{" "}
                                   ways to utilize Africa's ever-growing{" "}
                                   <span className="text-teal-600 font-bold">
                                        Electronic waste
                                   </span>{" "}
                                   stream.
                              </h1>
                         </div>
                         <div>
                              <img
                                   src={bgquadlood03}
                                   alt="Solar Lamp"
                                   className="lg:-ml-24 w-30"
                              />
                         </div>
                    </div>
                    <div className="flex justify-center" >
                    <ButtonYellow
                              link="../products"
                              text="ORDER NOW"
                         />
                    </div>
                    <div className="mx-4 lg:mx-24 lg:pt-48 space-y-24">
                   
                         <div className="text-center lg:px-60 ">
                              <h2 className="text-white font-bold text-3xl">
                                   Unlocking true socio economic environmental
                                   potential of e-waste and second life battery
                                   technology.
                              </h2>
                         </div>
                         <div className="flex flex-wrap justify-center items-center gap-8">
                              <Features imgUrl={Coins} feature="Affordable" />
                              <Features
                                   imgUrl={Recycling}
                                   feature="Sustainable"
                              />
                              <Features imgUrl={Solar} feature="Clean Energy" />
                         </div>

                         <div className="flex justify-center">
                              <a href="#about">
                                   <img src={Scroll} alt="arrow down" />
                              </a>
                         </div>
                    </div>
               </section>

               {/*About*/}
               <section
                    id="about"
                    className=" bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 lg:mx-20 xl:mx-48 "
                    style={{
                         backgroundImage: `url(${aboutbg})`,
                    }}
               >
                    <div className=" ">
                         <h2 className="text-teal-600 font-bold text-4xl">
                              About Us
                         </h2>
                    </div>

                    <div className="gap-8 flex flex-col lg:flex-row">
                         <div className="">
                              <p>
                                   Quadloop is a social enterprise company that
                                   aims to develop affordable solar lanterns and
                                   home systems produced with a lower
                                   environmental impact. We are determined to be
                                   at the forefront of the technological
                                   renovation that will lead to a responsible,
                                   carbon – neutral product era.
                                   <br></br>
                                   <br></br>
                                   We relieve the environmental pressures of
                                   exploitation of natural resources for both
                                   battery production and the entire product
                                   design and development by applying a 0 –
                                   mining policy by sourcing 70% of our
                                   materials entirely from Electronic waste.
                                   <br></br>
                                   <br></br>
                                   Our entire operation is based around
                                   principles of circular economy which close
                                   the loop on battery production. We commit on
                                   employing all of our technical capabilities
                                   to innovate on production methods that reduce
                                   waste production and properly dispose of all
                                   materials employed.
                              </p>
                         </div>
                         <div className="slider-container  lg:w-1/2">
                              <Slider {...settings}>
                                   <img
                                        src={About1}
                                        alt=""
                                        className="object-cover object-top h-96 rounded-xl w-full"
                                   />
                                   <img
                                        src={About2}
                                        alt=""
                                        className="object-cover object-top h-96 rounded-xl w-full"
                                   />
                                   <img
                                        src={About3}
                                        alt=""
                                        className="object-cover object-top h-96 rounded-xl w-full"
                                   />
                                   <img
                                        src={About4}
                                        alt=""
                                        className="object-cover object-bottom h-96 rounded-xl w-full"
                                   />
                                   <img
                                        src={About5}
                                        alt=""
                                        className="object-cover object-bottom h-96 rounded-xl w-full"
                                   />
                                   <img
                                        src={About6}
                                        alt=""
                                        className="object-cover object-bottom h-96 rounded-xl w-full"
                                   />
                                   <img
                                        src={About7}
                                        alt=""
                                        className="object-cover object-bottom h-96 rounded-xl w-full"
                                   />
                              </Slider>
                         </div>
                    </div>

                    <div>
                         <h3 className="text-teal-600 font-bold text-3xl">
                              Our Vision
                         </h3>
                         <div className="gap-8 flex flex-col lg:flex-row p-4">
                              <div className="lg:w-1/2">
                                   <p>
                                        Contributing to fight climate change
                                        while improving energy access across the
                                        continent, we are a passionate mission –
                                        driven organization eagerly looking for
                                        innovative ways to Reduce Recycle and
                                        Reuse E-waste generated in Africa.
                                   </p>
                              </div>
                              <div className="lg:w-1/2 flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 justify-center items-center">
                                   <div className="">
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
                              <img src={SDGs} alt="SDGs" />
                         </div>

                         <div className="flex justify-center">
                              <a href="#about">
                                   <img src={Scroll} alt="arrow down" />
                              </a>
                         </div>
                    </div>
               </section>

               {/*Solutions*/}
               <section
                    id="solutions"
                    className=" bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 lg:mx-20 xl:mx-48"
                    style={{
                         backgroundImage: `url(${solutionsbg})`,
                    }}
               >
                    <div className=" ">
                         <h2 className="text-teal-600 font-bold text-4xl">
                              Our Solutions
                         </h2>
                    </div>

                    <div className="">
                         <ProductSlider images={productImages} />
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
                         <h2 className="text-teal-600 font-bold text-4xl">
                              Our Impact
                         </h2>
                    </div>
                    <div>
                         <div className="gap-8 flex flex-col lg:flex-row p-4">
                              <div className="lg:w-1/2">
                                   <p>
                                        For every Quadloop lantern produced,
                                        2.5kg of e-waste is prevented from going
                                        into the landfill other metrics can be
                                        for any lantern used 0.5kg of CO is
                                        prevented from the use of kerosene
                                        lanterns and other dirty sources of
                                        light.
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
                         <h2 className="text-teal-600 font-bold text-4xl">
                              News and Events
                         </h2>
                         <iframe
                              title="instagram"
                              src="https://371881b455594e5f9a575a2a8e27d4b6.elf.site"
                              width="100%"
                              height="460"
                              frameborder="0"
                         ></iframe>
                    </div>
                    <div className="flex justify-center items-center mx-auto">
                         <ButtonYellow
                              link="https://www.instagram.com/quadloopcreate/"
                              text="View All"
                         />
                    </div>

                    {/*Partners*/}
                    <div className=" " id="partners">
                         <h2 className="text-teal-600 font-bold text-4xl">
                              Affiliations
                         </h2>
                    </div>

                    <div className="">
                         <AffiliateSlider images={imageSources} />
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
                         <h2 className="text-teal-600 font-bold text-4xl">
                              Get in Touch{" "}
                         </h2>
                         <div className="flex flex-col lg:flex-row">
                              <div className="w-full px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                                   <form
                                        onSubmit={(e) => e.preventDefault()}
                                        className="space-y-5"
                                   >
                                        <div>
                                             <label className="font-medium">
                                                  Full name
                                             </label>
                                             <input
                                                  type="text"
                                                  required
                                                  className="w-full mt-2 px-3 py-2 text-teal-600 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                                             />
                                        </div>
                                        <div>
                                             <label className="font-medium">
                                                  Email
                                             </label>
                                             <input
                                                  type="email"
                                                  required
                                                  className="w-full mt-2 px-3 py-2 text-teal-600 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                                             />
                                        </div>
                                        <div>
                                             <label className="font-medium">
                                                  Message
                                             </label>
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
                                        <GeoAltFill
                                             class="text-amber-500"
                                             size={24}
                                        />
                                        <span>
                                             10 Hughes Avenue Alagomeji Yaba
                                        </span>
                                   </a>
                                   <a
                                        href="tel:+2348160925033"
                                        className="flex space-x-4"
                                   >
                                        <TelephoneFill
                                             class="text-amber-500"
                                             size={24}
                                        />
                                        <span>+ 234 802 946 3826</span>
                                   </a>
                                   <a
                                        href="mailto:hello@quadloop.africa"
                                        className="flex space-x-4"
                                   >
                                        <EnvelopeOpenFill
                                             class="text-amber-500"
                                             size={24}
                                        />
                                        <span>hello@quadloop.africa</span>
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Home;
