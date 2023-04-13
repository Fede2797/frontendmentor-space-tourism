import { TechnologyLayout } from "../layout/TechnologyLayout";
import { getTechnologyData } from "../../helper/helper";
import { useState } from "react";
import { TechOptions } from "../components/TechOptions";

export const Technology = () => {

  const [currentTechnology, setCurrentTechnology] = useState( getTechnologyData(0) );

  console.log(currentTechnology.name);

  return (
    <TechnologyLayout>
        {/* Main container */}
        <div className="flex flex-col text-white">

          {/* Space launch sign */}
          <div className="flex gap-[18px] justify-center mb-8 mt-[28px] font-barlowcondensed uppercase tracking-[2.7px] 
          md:justify-self-start md:pl-4 md:mb-[60px] md:tracking-[3.38px] md:text-xl
          lg:tracking-[4.7px] lg:gap-[28px] lg:text-[28px] lg:pl-0 lg:mt-[90px]">
            <strong className="opacity-25 ">03</strong>
            <h3 className="">Space Launch 101</h3>
          </div>

          {/* Secondary container */}
          <div>
            {/* Rocket img */}
            <div className="mx-[-24px]">
              <img className="w-full lg:hidden" src={currentTechnology.images.landscape} alt="" />
              <img className="hidden lg:block" src={currentTechnology.images.portrait} alt="" />
              {/* <img className="w-full h-screen z-50" src="./images/technology/image-launch-vehicle-portrait.jpg" alt="" /> */}
            </div>

            {/* Slider & Info container */}
            <div>
              {/* Options menu */}
              <TechOptions currentTechnology={currentTechnology} setCurrentTechnology={setCurrentTechnology} />
              {/* Info */}
              <div className="text-center">
                <h2 className="mb-[9px] text-sm font-barlowcondensed text-light-blueish tracking-[2.36px] uppercase">
                  The terminology...
                </h2>
                <h1 className="mb-[16px] text-2xl font-bellefair uppercase">
                  {currentTechnology.name}
                </h1>
                <p className="text-[15px] leading-[25px] font-barlow text-light-blueish">
                  {currentTechnology.description}
                </p>
              </div>
            </div>
          </div>

        </div>
    </TechnologyLayout>
  )
}
