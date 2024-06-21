import React from "react";
import { Logo, fb, insta, linkedin } from "../Assets";

const current = new Date();
const date = current.getFullYear();

const footerNavs = [
     {
          href: "#",
          name: "About  ",
     },
     {
          href: "#",
          name: "Solutions",
     },
     {
          href: "#",
          name: "Impacts",
     },
     {
          href: "#",
          name: "News",
     },
     {
          href: "#",
          name: "Partners",
     },
     {
          href: "#",
          name: "Contact Us",
     },
];

const Footer = () => {
     return (
          <div>
               <footer className="flex flex-col p-20 text-center items-center space-y-8 text-gray-800 px-4 max-w-screen-xl mx-auto lg:flex-row lg:j">
                    <div className="basis-4/12 flex flex-col items-center lg:items-start">
                         <img src={Logo} alt="Quadloop" className="w-48" />
                         <p className="">Leveraging waste, creating value.</p>
                         &copy; {date} All rights reserved.
                    </div>

                    <div className="basis-6/12">
                         <ul className="items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                              {footerNavs.map((item, idx) => (
                                   <li
                                        key={idx.toString()}
                                        className="text-gray-800 hover:font-bold hover:border-b-2"
                                   >
                                        <a href={item.href}>{item.name}</a>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    <div className="basis-2/12 flex space-x-4 justify-center items-center">
                         <a
                              href="https://www.facebook.com/quadloopcreations/"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <img src={fb} alt="Quadloop" className="w-4" />
                         </a>
                         <a
                              href="https://www.instagram.com/quadloopcreate/"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <img src={insta} alt="Quadloop" className="w-6" />
                         </a>
                         <a
                              href="https://www.linkedin.com/company/quadloop-creations/"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <img
                                   src={linkedin}
                                   alt="Quadloop"
                                   className="w-6"
                              />
                         </a>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
