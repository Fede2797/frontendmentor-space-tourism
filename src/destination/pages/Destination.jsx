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
        <div className="flex flex-col text-white my-[28px] justify-between items-center
        md:mt-[106px] lg:flex-row lg:items-end lg:px-[10%] lg:mb-28 lg:my-auto"
        >
          {/* Pick destination sign */}
          <div className="flex gap-[18px] mb-8 font-barlowcondensed uppercase tracking-[2.7px] 
          md:tracking-[3.38px] lg:tracking-[4.7px] lg:gap-[28px]">
            <strong className="opacity-25 ">01</strong>
            <h3 className="">Pick your destination</h3>
          </div>
          {/* Destination image */}
          <img className="w-[45%] max-w-[240px] mb-[26px] md:w-[39%] md:max-w-full lg:[31%]" src={ currentDestination.images.png } alt="" />
          {/* Destination body */}
          <div className="flex flex-col items-center text-center">

            {/* Destinations menu */}
            <DestinationsMenu 
              setCurrentDestination={setCurrentDestination} 
              getDestinationData={getDestinationData}
              currentDestination={currentDestination}
            />

            {/* Destination name */}
            <h1 className="font-bellefair text-[56px] uppercase leading-[64px]">{ currentDestination.name }</h1>
            {/* Destination description */}
            <p className="max-w-[570px] font-barlow text-[15px] leading-[25px] text-light-blueish
            md:w-[56%] md:max-w-full">{ currentDestination.description }</p>
            {/* Separator */}
            <hr className="w-full my-8 border-[#383B4B]"/>
            {/* Avg. distance to the destination */}
            <div className="mb-8">
              <h4   className="text-light-blueish text-barlowcondensed text-sm uppercase tracking-[2.36px]">Avg. distance</h4>
              <span className="uppercase text-[28px] font-bellefair">{ currentDestination.distance }</span>
            </div>
            {/* Estimated travel time */}
            <div>
              <h4   className="text-light-blueish text-barlowcondensed text-sm uppercase tracking-[2.36px]">Est. travel time</h4>
              <span className="uppercase text-[28px] font-bellefair">{ currentDestination.travel }</span>
            </div>
          </div>

        </div>
    </DestinationLayout>
  )
}
