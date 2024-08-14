import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
     {
          type: "image",
          imageUrl:
               "https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2022/07/Circular-Economy.png?w=1000&ssl=1",
          title: "Premium Times",
          link: "https://www.premiumtimesng.com/opinion/545738-circular-economy-a-seat-at-the-table-for-african-entrepreneurs-by-natalie-beinisch.html?tztc=1",
     },
     {
          type: "image",
          imageUrl:
               "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FWCQAWOTKSVMCPLTFAQ74J3TBBQ.jpg?auth=7e98ca6327d8de3befdf31b1df70daa67ad4de7bad439286a4cb0bdf3e02e5ae&width=960&quality=80",
          title: "Reuters",
          link: "https://www.reuters.com/technology/nigerian-company-turns-e-waste-into-solar-powered-lanterns-2022-10-13/",
     },
     {
          type: "video",
          videoUrl: "https://www.youtube.com/embed/kFY5WAXL0WY",
          title: "YouTube Video",
          link: "https://www.youtube.com/watch?v=kFY5WAXL0WY",
     },
     {
          type: "image",
          imageUrl:
               "https://www.all-on.com/impact-stories-from-inside-all-on/local-innovative-solutions-to-solve-nigerias-power-problem/_jcr_content/par/article_framework_co/par-container/standalone_image/image.img.960.png/1633683807247/inner-story-image-2.png?imwidth=960",
          title: "All-on.com",
          link: "https://www.all-on.com/impact-stories-from-inside-all-on/local-innovative-solutions-to-solve-nigerias-power-problem.html",
     },
     {
          type: "image",
          imageUrl:
               "https://springwise.com/wp-content/uploads/2023/08/innovationcomputing-techturning-e-waste-into-solar-lamps.png",
          title: "Spring Wise",
          link: "https://springwise.com/innovation/computing-tech/turning-e-waste-into-solar-lamps/",
     },
     {
          type: "image",
          imageUrl:
               "https://www.preo.org/wp-content/uploads/2020/06/PREO-logo-6.svg",
          title: "P R E O",
          link: "https://www.preo.org/projects/hinckley/",
     },
     {
          type: "image",
          imageUrl: "https://cdn.jwplayer.com/thumbs/sXR93rUP-1920.jpg",
          title: "World Economic Forum",
          link: "https://www.weforum.org/videos/this-nigerian-company-turns-electronic-waste-into-solar-powered-lamps/",
     },
];

export const NewsSlider = ({ newsItems = items, style }) => {
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

     return (
          <div
               className="relative max-w-screen-xl w-full overflow-x-hidden mx-auto"
               style={{ ...style }}
          >
               <Slider {...settings}>
                    {newsItems.map((item, index) => (
                         <div key={index} className="p-4">
                              <div className="bg-white rounded-lg shadow-md">
                                   {item.type === "image" ? (
                                        <img
                                             src={item.imageUrl}
                                             alt={item.title}
                                             className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                   ) : (
                                        <iframe
                                             src={item.videoUrl}
                                             title={item.title}
                                             className="w-full h-48 object-cover rounded-t-lg"
                                             allowFullScreen
                                        />
                                   )}
                                   <div className="p-4">
                                        <h3 className="text-xl font-bold">
                                             {item.title}
                                        </h3>
                                        <a
                                             href={item.link}
                                             target="_blank"
                                             className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                        >
                                             Read More
                                        </a>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
};
