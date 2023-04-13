import { TechnologyLayout } from "../layout/TechnologyLayout";
import { getTechnologyData } from "../../helper/helper";
import { useState } from "react";
import { TechOptions } from "../components/TechOptions";

export const Technology = () => {

  const [currentTechnology, setCurrentTechnology] = useState( getTechnologyData(0) );

  return (
    <TechnologyLayout>
        {/* Main container */}
        <div className="flex flex-col text-white max-w-[1500px] mx-auto">

          {/* Space launch sign */}
          <div className="flex gap-[18px] justify-center mb-8 mt-[28px] font-barlowcondensed uppercase tracking-[2.7px] md:self-start md:pl-4 md:mb-[60px] md:mt-[40px] md:tracking-[3.38px] md:text-xl lg:mt-[76px] lg:mb-[26px] lg:pl-0 lg:gap-[28px] lg:tracking-[4.7px] lg:text-[28px]">
            <strong className="opacity-25 ">03</strong>
            <h3 className="">Space Launch 101</h3>
          </div>

          {/* Secondary container */}
          <div className="lg:flex lg:w-full lg:flex-row-reverse lg:ml-auto lg:justify-between lg:gap-[50px] 2xl:gap-[100px]">
            {/* Rocket img */}
            <div className="mx-[-24px] lg:w-auto xl:min-w-[515px] lg:ml-0">
              <img className="w-full lg:hidden" src={currentTechnology.images.landscape} alt="" />
              <img className="hidden lg:block lg:ml-auto lg:my-auto" src={currentTechnology.images.portrait} alt="" />
            </div>

            {/* Slider & Info container */}
            <div className="lg:flex lg:mt-[111px] lg:ml-[1%] xl:ml-[10%]">
              <div className="lg:flex lg:items-start">
                {/* Options menu */}
                <TechOptions currentTechnology={currentTechnology} setCurrentTechnology={setCurrentTechnology} />
                {/* Info */}
                <div className="text-center md:max-w-[59.5%] md:mx-auto md:mb-6 lg:max-w-none lg:ml-[80px] lg:text-left">
                  <h2 className="mb-[9px] text-sm font-barlowcondensed text-light-blueish tracking-[2.36px] uppercase md:text-base md:mb-4 lg:mb-[11px] lg:tracking-[2.7px]">
                    The terminology...
                  </h2>
                  <h1 className="mb-[16px] text-2xl font-bellefair uppercase md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[64px] lg:w-[470px]">
                    {currentTechnology.name}
                  </h1>
                  <p className="text-[15px] leading-[25px] font-barlow text-light-blueish md:text-base md:leading-[28px] lg:w-[444px] lg:text-lg lg:leading-[32px]">
                    {currentTechnology.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
    </TechnologyLayout>
  )
}
