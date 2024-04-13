import React from "react";

const ButtonYellow = ({link, text}) => {
  return (
    <div>
      <button>
        <a
          href={link}
          className="block py-3 px-4 font-medium text-center text-white bg-amber-500  active:shadow-none rounded-full shadow md:inline"
        >
          {text}
        </a>
      </button>
    </div>
  );
};

export default ButtonYellow;
