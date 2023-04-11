import { DestinationLayout } from "../layout/DestinationLayout";
import { destinations } from "../../data/data.json";
import { useState } from "react";
import { DestinationsMenu } from "../components/DestinationsMenu";

const getDestinationData = ( destinationName ) => {
  return destinations.find( 
    destination => (destination.name).toLowerCase() === (destinationName).toLowerCase()
  );
}

export const Destination = () => {

  const [currentDestination, setCurrentDestination] = useState( getDestinationData('moon') );

  return (
    <DestinationLayout>
        {/* Main container */}
        <div className="flex flex-col text-white my-[28px] justify-between items-center md:mt-10 lg:mt-[72px] mx-[5%]">

          {/* Pick destination sign */}
          <div className="flex gap-[18px] mb-8 font-barlowcondensed uppercase tracking-[2.7px] 
          md:tracking-[3.38px] md:self-start md:pl-4 md:mb-[60px] md:text-xl
          lg:tracking-[4.7px] lg:gap-[28px] lg:text-[28px]">
            <strong className="opacity-25 ">01</strong>
            <h3 className="">Pick your destination</h3>
          </div>

          {/* Main content */}
          <div className="lg:flex lg:gap-[11.5%] lg:justify-center">
            {/* Destination image */}
            <img className="mx-auto w-[45%] max-w-[240px] mb-[26px] 
            md:w-[39%] md:max-w-full md:mb-14 
            lg:w-full lg:max-w-[445px] lg:max-h-[445px] lg:mx-0 lg:ml-[5%]" src={ currentDestination.images.png } alt="" />
            {/* Destination body */}
            <div className="flex flex-col items-center text-center 
            lg:items-start lg:w-full lg:max-w-[35%]">
              {/* Destinations menu */}
              <DestinationsMenu
                setCurrentDestination={setCurrentDestination}
                getDestinationData={getDestinationData}
                currentDestination={currentDestination}
              />
              {/* Destination name */}
              <h1 className="font-bellefair text-[56px] uppercase leading-[64px]
              md:text-[80px] md:mb-2 md:leading-[92px]
              lg:text-[100px] lg:leading-[115px]">{ currentDestination.name }</h1>
              {/* Destination description */}
              <p className="max-w-[570px] font-barlow text-[15px] leading-[25px] text-light-blueish
              md:w-[79%] md:max-w-full md:text-base
              lg:max-w-none lg:w-full lg:text-left lg:text-lg lg:leading-8">{ currentDestination.description }</p>
              {/* Separator */}
              <hr className="w-full mt-8 border-[#383B4B] mb-8
              lg:mt-[54px]"/>
              {/* Avg. distance to the destination */}
              <div className="flex flex-col md:flex-row md:gap-24">
                <div className="mb-8">
                  <h4   className="text-light-blueish font-barlowcondensed text-sm uppercase tracking-[2.36px]
                  md:mb-[12px]">Avg. distance</h4>
                  <span className="uppercase text-[28px] font-bellefair">{ currentDestination.distance }</span>
                </div>
                {/* Estimated travel time */}
                <div>
                  <h4   className="text-light-blueish font-barlowcondensed text-sm uppercase tracking-[2.36px]
                  md:mb-[12px]">Est. travel time</h4>
                  <span className="uppercase text-[28px] font-bellefair">{ currentDestination.travel }</span>
                </div>
              </div>
            </div>
          </div>

        </div>
    </DestinationLayout>
  )
}
