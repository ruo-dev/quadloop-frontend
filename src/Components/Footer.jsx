import React from "react";
import { Logo, fb, insta, linkedin } from "../Assets/";
import { Link } from "react-router-dom";

const current = new Date();
const date = current.getFullYear();

const footerNavs = [
     { href: "#", name: "About" },
     { href: "#", name: "Solutions" },
     { href: "#", name: "Impacts" },
     { href: "#", name: "News" },
     { href: "#", name: "Partners" },
     { href: "#", name: "Contact Us" },
];

const Footer = () => {
     return (
          <div className="bg-gray-100">
               <footer className="flex flex-col p-10 text-center items-center space-y-8 text-gray-800 px-4 max-w-screen-xl mx-auto lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="flex flex-col items-center lg:self-start lg:basis-3/12">
                         <img
                              src={Logo}
                              alt="Quadloop"
                              className="w-48"
                              loading="lazy"
                              width="192"
                              height="auto"
                         />
                         <p className="mt-4">
                              Leveraging waste, creating value.
                         </p>
                         <p>&copy; {date} All rights reserved.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:self-start lg:basis-3/12">
                         <h1 className="text-2xl mb-4 text-center">Welcome</h1>
                         <ul className="space-y-2">
                              {footerNavs.map((item, idx) => (
                                   <li
                                        key={idx}
                                        className="text-gray-800 hover:font-bold hover:border-b-2"
                                   >
                                        <a href={item.href}>{item.name}</a>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:self-start lg:basis-3/12">
                         <h1 className="text-2xl mb-4 text-center">Support</h1>
                         <ul className="space-y-2">
                              <li>
                                   <Link to={"/"}>Investor</Link>
                              </li>
                              <li>
                                   <Link to={"/distributor"}>Distributor</Link>
                              </li>
                              <li>
                                   <Link to={"/"}>Repair</Link>
                              </li>
                         </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:self-start lg:basis-3/12">
                         <h1 className="text-2xl mb-4 text-center">Legal</h1>
                         <ul className="space-y-2">
                              <li>
                                   <Link to={"/"}>Warranty</Link>
                              </li>
                              <li>
                                   <Link to={"/"}>Terms and Condition</Link>
                              </li>
                              <li>
                                   <Link to={"/"}>User Manual</Link>
                              </li>
                         </ul>
                    </div>

                    <div className="flex space-x-4 justify-center items-center lg:self-start lg:basis-2/12">
                         <a
                              href="https://www.facebook.com/quadloopcreations/"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <img
                                   src={fb}
                                   alt="Facebook"
                                   className="w-6"
                                   loading="lazy"
                                   width="24"
                                   height="auto"
                              />
                         </a>
                         <a
                              href="https://www.instagram.com/quadloopcreate/"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <img
                                   src={insta}
                                   alt="Instagram"
                                   className="w-6"
                                   loading="lazy"
                                   width="24"
                                   height="auto"
                              />
                         </a>
                         <a
                              href="https://www.linkedin.com/company/quadloop-creations/"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <img
                                   src={linkedin}
                                   alt="LinkedIn"
                                   className="w-6"
                                   loading="lazy"
                                   width="24"
                                   height="auto"
                              />
                         </a>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
