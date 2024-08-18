import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = ({ style }) => (
  <div className="flex justify-center items-center h-screen z-50" {...style}>
    <div className="w-60 h-60 sm:w-[150px] sm:h-[150px]">
      <Circles
        height={"100%"}
        width={"100%"}
        color="#0d9488"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  </div>
);

export default Loader;
