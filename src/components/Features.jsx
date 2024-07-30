// src/components/Features.js

import { FcReuse } from "react-icons/fc";
import { FaRecycle } from "react-icons/fa";
import { RiTempColdFill } from "react-icons/ri";
import Reveal from "./Reveal";
const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="flex flex-col w-full md:flex-row justify-center items-center gap-x-2 gap-y-6">
          <Reveal>
            {" "}
            <div className=" flex flex-col justify-start items-center gap-y-1">
              <FcReuse className=" text-5xl font-bold" />
              <h3 className="text-xl font-semibold">Reusable</h3>
              <p>Our bottle is designed for multiple uses, reducing waste.</p>
            </div>
          </Reveal>
          <Reveal>
            {" "}
            <div className=" flex flex-col justify-start items-center gap-y-1">
              <FaRecycle className="text-5xl font-bold" />
              <h3 className="text-xl font-semibold">Eco-Friendly Materials</h3>
              <p>Made from 100% recycled materials.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <RiTempColdFill className=" text-5xl font-bold" />
              <h3 className="text-xl font-semibold">Insulated</h3>
              <p>Keeps your drinks cold for 24 hours and hot for 12 hours.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
