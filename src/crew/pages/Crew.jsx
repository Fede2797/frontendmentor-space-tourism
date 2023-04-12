import { CrewLayout } from "../layout/CrewLayout";
import { getMemberData } from "../../helper/helper";
import { useState } from "react";

export const Crew = () => {

  const [currentMember, setCurrentMember] = useState( getMemberData(0) );

  return (
    <CrewLayout>
        {/* Main container */}
        <div className="flex flex-col text-white items-center md:relative lg:pl-[10%] lg:h-full">

          {/* Pick destination sign */}
          <div className="flex gap-[18px] mb-8 mt-[28px] font-barlowcondensed uppercase tracking-[2.7px] 
          md:tracking-[3.38px] md:self-start md:pl-4 md:mb-[60px] md:text-xl
          lg:tracking-[4.7px] lg:gap-[28px] lg:text-[28px] lg:pl-0 lg:mt-[90px]">
            <strong className="opacity-25 ">02</strong>
            <h3 className="">Meet your crew</h3>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:w-full lg:h-full lg:justify-between">

            {/* Member image */}
            {/* <img 
              className={`max-h-[222px] md:order-3
              ${ currentMember.name === 'Douglas Hurley' ? 'md:max-h-[562px]' : 'md:max-h-[532px]'}
              lg:max-h-none`} 
              src={currentMember.images.webp} 
              alt="" 
            /> */}
            <div
              className={`max-h-[222px] md:order-3
              ${ currentMember.name === 'Douglas Hurley' ? 'md:max-h-[562px] lg:-top-[58px]' : 'md:max-h-[532px]'}
              lg:max-h-[640px] lg:relative lg:w-full lg:h-full `} 
            >
              <img 
                className="lg:absolute" src={currentMember.images.webp} alt="" 
              />
            </div>
            {/* Separator */}
            <hr className="w-full max-w-[327px] border-[#383B4B] md:hidden"/>

            {/* Slider & Member info */}
            <div className="flex flex-col items-center lg:items-start lg:h-full lg:justify-between
            lg:w-full">
              {/* Members slider */}
              <div className="flex my-8 gap-4 md:order-2 md:my-10 lg:mt-[120px] lg:mb-[94px]">
                <input
                  onClick={ () => setCurrentMember(getMemberData(0)) }
                  name="memberSelected"
                  className={`w-[15px] h-[15px] appearance-none bg-white rounded-full opacity-[17%]
                  hover:cursor-pointer
                  ${ currentMember.name === 'Douglas Hurley' && 'opacity-100' }`}
                  type="radio"
                />
                <input
                  onClick={ () => setCurrentMember(getMemberData(1)) }
                  name="memberSelected"
                  className={`w-[15px] h-[15px] appearance-none bg-white rounded-full opacity-[17%]
                  hover:cursor-pointer
                  ${ currentMember.name === 'Mark Shuttleworth' && 'opacity-100' }`}
                  type="radio"
                />
                <input
                  onClick={ () => setCurrentMember(getMemberData(2)) }
                  name="memberSelected"
                  className={`w-[15px] h-[15px] appearance-none bg-white rounded-full opacity-[17%]
                  hover:cursor-pointer
                  ${ currentMember.name === 'Victor Glover' && 'opacity-100' }`}
                  type="radio"
                />
                <input
                  onClick={ () => setCurrentMember(getMemberData(3)) }
                  name="memberSelected"
                  className={`w-[15px] h-[15px] appearance-none bg-white rounded-full opacity-[17%]
                  hover:cursor-pointer
                  ${ currentMember.name === 'Anousheh Ansari' && 'opacity-100' }`}
                  type="radio"
                />
              </div>
              {/* Member info */}
              <div className="text-center md:order-1 md:max-w-[63%] lg:text-left lg:max-w-none
              lg:mt-[94px]">
                <h2 className="font-bellefair uppercase opacity-50 mb-2
                md:text-2xl lg:text-[32px] lg:mb-[15px]">{currentMember.role}</h2>
                <h1 className="font-bellefair text-2xl uppercase mb-4
                md:text-[40px] lg:text-[56px] lg:mb-[27px] lg:leading-[64px]">{currentMember.name}</h1>
                <p className="font-barlow text-[15px] text-light-blueish leading-[25px]
                md:text-base lg:text-lg lg:max-w-[444px]">{currentMember.bio}</p>
              </div>
            </div>
          </div>

        </div>
    </CrewLayout>
  )
}
