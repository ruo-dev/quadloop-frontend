import React from "react";
import { Link } from "react-router-dom";

const ButtonYellow = ({ link, text, style }) => {
     return (
          <div style={{ ...style }}>
               <button>
                    <Link
                         to={link}
                         className="block py-3 px-4 font-medium text-center text-white bg-amber-500  active:shadow-none rounded-full shadow md:inline"
                    >
                         {text}
                    </Link>
               </button>
          </div>
     );
};

export default ButtonYellow;
