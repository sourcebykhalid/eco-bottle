// src/components/Hero.js
import React from "react";
import Reveal from "./Reveal";
import { FaBottleWater } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-hero-pattern bg-cover bg-center text-neutral-500 text-center py-20"
    >
      <Reveal>
        {" "}
        <h1 className="text-5xl font-bold">Eco-Friendly Water Bottle</h1>
      </Reveal>
      <Reveal>
        {" "}
        <p className="mt-4 text-xl">Stay hydrated and save the planet.</p>
      </Reveal>
      <Reveal>
        <img
          src="https://img.freepik.com/premium-vector/eco-bottle-logo-template-design_316488-534.jpg"
          alt=""
          className=" w-1/3 mx-auto"
        />
      </Reveal>
      <a
        href="#buy"
        className="mt-8 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-400"
      >
        Buy Now
      </a>
    </section>
  );
};

export default Hero;
