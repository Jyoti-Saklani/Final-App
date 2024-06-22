import React from "react";
import { TryTitle, TryBtnText } from "../data";
import FadeIn from "../components/FadeIn";

const Try = () => {
  const handleClick = () => {
    window.open("https://spiffy-longma-4498df.netlify.app/", "_self");
  };
  return (
    <div
      className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 
        mx-auto  px-10 w-full justify-center items-center 2xl:mt-[140px] 2xl:mt-[200px] mb-[160px] max-w-[1490px]"
    >
      <FadeIn delay={0.2} direction="right">
        <div className="flex flex-col justify-center items-center  ">
          <h6 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
            {TryTitle}
          </h6>
          <button
            className="flex items-center gap-2 text-fontBlack font-bold py-2
              px-4 rounded-lg w-fit border bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] focus:outline-none ease-linear transition-all duration-350 mx-auto
              2xl:mx-0 mb-10 2xl:mb-0 mt-8"
            onClick={handleClick}
          >
            <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium">
              {TryBtnText}
            </h5>
          </button>
        </div>
      </FadeIn>
    </div>
  );
};

export default Try;
