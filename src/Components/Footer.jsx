import React from "react";
import { fb, insta, linkedin } from "../Assets/";
import Logo from "../Assets/quadloop.svg";
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
      <footer className="flex flex-col p-8 text-center items-center space-y-8 text-gray-800 px-4 max-w-screen-xl mx-auto lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col items-center lg:self-start lg:basis-1/5">
          <img
            src={Logo}
            alt="Quadloop"
            className="w-40 lg:w-48"
            loading="lazy"
            width="192"
            height="auto"
          />
          <p className="mt-4 text-sm lg:text-base">
            Leveraging waste, creating value.
          </p>
          <p className="text-sm lg:text-base">
            &copy; {date} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center lg:self-start lg:basis-1/5">
          <h1 className="text-xl lg:text-2xl mb-4">Welcome</h1>
          <ul className="space-y-2">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 hover:font-bold hover:border-b-2"
              >
                <a href={item.href} className="text-sm lg:text-base">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center lg:self-start lg:basis-1/5">
          <h1 className="text-xl lg:text-2xl mb-4">Support</h1>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="text-sm lg:text-base">
                Investor
              </Link>
            </li>
            <li>
              <Link to={"/distributor"} className="text-sm lg:text-base">
                Distributor
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-sm lg:text-base">
                Repair
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center lg:self-start lg:basis-1/5">
          <h1 className="text-xl lg:text-2xl mb-4">Legal</h1>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="text-sm lg:text-base">
                Warranty
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-sm lg:text-base">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <a
                href="/IDUNNU PORTABLE SOLAR WALL LANTERN (USER MANUAL) FFF.pdf"
                download="IDUNNU PORTABLE SOLAR WALL LANTERN (USER MANUAL) FFF.pdf"
                className="text-sm lg:text-base"
              >
                User Manual
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center lg:self-start lg:basis-1/5">
          <h1 className="text-xl lg:text-2xl mb-4">Social Media</h1>
          <div className="flex space-x-4 lg:space-x-6 justify-center items-center">
            <a
              href="https://www.facebook.com/quadloopcreations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fb}
                alt="Facebook"
                className="w-6 lg:w-8"
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
                className="w-6 lg:w-8"
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
                className="w-6 lg:w-8"
                loading="lazy"
                width="24"
                height="auto"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
