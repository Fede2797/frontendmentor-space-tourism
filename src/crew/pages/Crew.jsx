import { CrewLayout } from "../layout/CrewLayout";
import { getMemberData } from "../../helper/helper";
import { useState } from "react";

export const Crew = () => {

  const [currentMember, setCurrentMember] = useState( getMemberData(0) );

  console.log(currentMember);

  return (
    <CrewLayout>
        {/* Main container */}
        <div className="flex flex-col text-white items-center">

          {/* Pick destination sign */}
          <div className="flex gap-[18px] mb-8 mt-[28px] font-barlowcondensed uppercase tracking-[2.7px] 
          md:tracking-[3.38px] md:self-start md:pl-4 md:mb-[60px] md:text-xl
          lg:tracking-[4.7px] lg:gap-[28px] lg:text-[28px]">
            <strong className="opacity-25 ">02</strong>
            <h3 className="">Meet your crew</h3>
          </div>

          <div className="flex flex-col items-center">
            {/* Member image */}
            <img className="max-h-[222px]" src={currentMember.images.webp} alt="" />
            {/* Separator for mobile */}
            <hr className="w-full max-w-[327px] border-[#383B4B] md:hidden"/>
            {/* Members slider */}
            <div className="flex my-8 gap-4">

              <input 
                onClick={ () => setCurrentMember(getMemberData(0)) } 
                name="memberSelected" 
                className={`w-[10px] h-[10px] appearance-none bg-white rounded-full opacity-[17%] 
                ${ currentMember.name === 'Douglas Hurley' && 'opacity-100' }`} 
                type="radio" 
              />
              <input 
                onClick={ () => setCurrentMember(getMemberData(1)) } 
                name="memberSelected" 
                className={`w-[10px] h-[10px] appearance-none bg-white rounded-full opacity-[17%] 
                ${ currentMember.name === 'Mark Shuttleworth' && 'opacity-100' }`} 
                type="radio" 
              />
              <input 
                onClick={ () => setCurrentMember(getMemberData(2)) } 
                name="memberSelected" 
                className={`w-[10px] h-[10px] appearance-none bg-white rounded-full opacity-[17%] 
                ${ currentMember.name === 'Victor Glover' && 'opacity-100' }`} 
                type="radio" 
              />
              <input 
                onClick={ () => setCurrentMember(getMemberData(3)) } 
                name="memberSelected" 
                className={`w-[10px] h-[10px] appearance-none bg-white rounded-full opacity-[17%] 
                ${ currentMember.name === 'Anousheh Ansari' && 'opacity-100' }`} 
                type="radio" 
              />

            </div>
            {/* Member info */}
            <div className="text-center">
              <h2 className="font-bellefair uppercase opacity-50 mb-2">{currentMember.role}</h2>
              <h1 className="font-bellefair text-2xl uppercase mb-4">{currentMember.name}</h1>
              <p className="font-barlow text-[15px] text-light-blueish leading-[25px]">{currentMember.bio}</p>
            </div>
          </div>

        </div>
    </CrewLayout>
  )
}
