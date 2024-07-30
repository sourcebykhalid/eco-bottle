// src/components/Header.js
import React from "react";
import { FaBottleWater, FaCartPlus } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-neutral-900 text-neutral-200 p-4">
      <nav className="container mx-auto flex flex-wrap text-sm md:text-base  justify-between items-center">
        <div className="text-2xl mb-2 md:mb-0 md:text-xl font-bold flex justify-center items-center border-b-4 px-1 border-green-500 rounded-md animate-pulse mx-auto md:mx-0">
          EcoBottle
          <FaBottleWater />
        </div>
        <ul className="flex space-x-4">
          <li>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className=" hover:border-b-2 border-green-400 transition-all cursor-pointer"
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="hover:border-b-2 border-green-400 transition-all cursor-pointer"
            >
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:border-b-2 border-green-400 transition-all cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="buy"
              smooth={true}
              duration={500}
              className="hover:border-b-2 border-green-400 transition-all cursor-pointer"
            >
              Buy Now
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="cart"
              smooth={true}
              duration={500}
              className="hover:scale-110 cursor-pointer flex justify-center items-center gap-x-1 text-green-400"
            >
              Cart <FaCartPlus />
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
