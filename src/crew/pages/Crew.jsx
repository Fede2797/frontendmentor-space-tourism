import { CrewLayout } from "../layout/CrewLayout";
import { getMemberData } from "../../helper/helper";
import { useState } from "react";
import { MembersSlider } from "../components/MembersSlider";

export const Crew = () => {

  const [currentMember, setCurrentMember] = useState( getMemberData(0) );

  return (
    <CrewLayout>
        {/* Main container */}
        <div className="grid grid-cols-1 text-white justify-center lg:grid-cols-2 lg:auto-rows-min lg:grid-rows-3 lg:pl-[10%] lg:h-full lg:max-h-[750px] lg:max-w-[1500px] 2xl:mx-auto 2xl:w-[1500px]">

          {/* Pick destination sign */}
          <div className="flex gap-[18px] justify-center mb-8 mt-[28px] font-barlowcondensed uppercase tracking-[2.7px] md:order-1 md:justify-self-start md:pl-4 md:mb-[60px] md:tracking-[3.38px] md:text-xl lg:tracking-[4.7px] lg:gap-[28px] lg:text-[28px] lg:pl-0 lg:mt-[90px]">
            <strong className="opacity-25 ">02</strong>
            <h3 className="">Meet your crew</h3>
          </div>

          {/* Member image */}
          <div className="flex w-full justify-center md:order-4 lg:order-2 lg:row-span-3">
            <img 
              className={`max-h-[222px] ${ currentMember.name === 'Douglas Hurley' ? 'md:max-h-[572px]' : 'md:max-h-[548px]'} lg:max-w-full lg:max-h-none lg:mt-auto`} src={currentMember.images.webp} alt="" 
            />
          </div>

          {/* Separator */}
          <hr className="w-full max-w-[327px] border-[#383B4B] md:hidden"/>

          {/* Members slider */}
          <MembersSlider currentMember={currentMember} setCurrentMember={setCurrentMember} />

          {/* Member info */}
          <div className="text-center md:order-2 md:max-w-[63%] md:justify-self-center lg:text-left lg:max-w-none lg:justify-self-start">
            <h2 className="font-bellefair uppercase opacity-50 mb-2 md:text-2xl lg:text-[32px] lg:mb-[15px]">
              {currentMember.role}
            </h2>
            <h1 className="font-bellefair text-2xl uppercase mb-4 md:text-[40px] lg:text-[56px] lg:mb-[27px] lg:leading-[64px]">
              {currentMember.name}
            </h1>
            <p className="font-barlow text-[15px] text-light-blueish leading-[25px] md:text-base lg:text-lg lg:max-w-[444px]">
              {currentMember.bio}
            </p>
          </div>

        </div>
    </CrewLayout>
  )
}
