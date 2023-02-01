import React from "react";
import Bitcoin from "../bitcoin.jpg";
const Hero = () => {
  return (
    //  <!-- Hero section -->
    <section
      id="hero"
      className=" h-4/6 pb-[50px] bg-[#9ecbe0] flex justify-center items-center px-10 dark:bg-black"
    >
      <div className="w-full flex justify-between items-center flex-col md:flex-row ">
        {/* <div className="w-full "> */}
        <div className="text-[2rem] text-[#e49a33]  justify-center text-center md:justify-start md:text-[3rem]  font-[700]  dark:text-white ">
          <h1>The World's </h1>
          <h1> Fastest Growing</h1>
          <h1> Crypto Wep App</h1>
        </div>
        <div className=" flex justify-center items-center w-1/2">
          <img src={Bitcoin} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
