import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="mx-5 md:mx-10 flex flex-col items-center mt-10 justify-center border-t-2 border-gray-400">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        {/* leftside */}

        <div>
          <div className="text-2xl font-bold">Egram.</div>

          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, hic!
          </p>
        </div>
        {/* centerside */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9845939245</li>
            <li>egram@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center md:w-full">
          &copy; 2025 Easy Document Services. All rights reserved.
        </p>
      </div>


      <div className="w-fit h-fit p-4 rounded-full fixed bottom-0 right-0 md:bottom-5 md:right-5 border border-gray-500 cursor-pointer hover:bg-gray-400 transition-all duration-300"
      onClick={()=>{
        scrollTo(0,0)
      }}>
        <img className="w-7 h-7" src={assets.upArrow} alt="" />
      </div>
    </div>
  );
};

export default Footer;
