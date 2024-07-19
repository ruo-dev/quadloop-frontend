import React, { useEffect, useRef } from "react";

const AffiliateSlider = ({ images, style }) => {
     const sliderRef = useRef(null);

     useEffect(() => {
          const slider = sliderRef.current;
          let scrollAmount = 0;
          const scrollStep = 1;
          const maxScroll = slider.scrollWidth - slider.clientWidth;

          const scrollInterval = setInterval(() => {
               slider.scrollLeft += scrollStep;
               scrollAmount += scrollStep;

               if (scrollAmount >= maxScroll) {
                    slider.scrollLeft = 0;
                    scrollAmount = 0;
               }
          }, 16);

          return () => clearInterval(scrollInterval);
     }, []);

     return (
          <div className="relative w-full overflow-hidden" style={{ ...style }}>
               <div
                    ref={sliderRef}
                    className="flex space-x-16"
                    style={{ whiteSpace: "nowrap", overflowX: "hidden" }}
               >
                    {images?.concat(images)?.map((image, index) => (
                         <div
                              key={index}
                              className="flex-shrink-0 px-1 w-25 h-10"
                         >
                              {" "}
                              <img
                                   src={image}
                                   alt={`Slide ${index + 1}`}
                                   className="w-full h-full object-cover"
                                   loading="lazy"
                              />
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default AffiliateSlider;
