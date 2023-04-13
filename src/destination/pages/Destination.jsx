import { DestinationLayout } from "../layout/DestinationLayout";
import { destinations } from "../../data/data.json";
import { useEffect, useState } from "react";
import { DestinationsMenu } from "../components/DestinationsMenu";
import { DestinationBody } from "../components/DestinationBody";
import { getDestinationData } from "../../helper/helper";

// const getDestinationData = ( destinationName ) => {
//   return destinations.find( 
//     destination => (destination.name).toLowerCase() === (destinationName).toLowerCase()
//   );
// }

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
            <img 
              className="mx-auto w-[45%] max-w-[240px] mb-[26px] md:w-[39%] md:max-w-full md:mb-14 lg:w-full lg:max-w-[445px] lg:max-h-[445px] lg:mx-0 lg:ml-[5%] animate__animated animate__fadeIn"
              src={ currentDestination.images.webp } 
              alt="" 
            />
            
            {/* Text section */}
            <div className="flex flex-col items-center text-center lg:items-start lg:w-full lg:max-w-[35%]">
              {/* Destinations menu */}
              <DestinationsMenu
                setCurrentDestination={setCurrentDestination}
                currentDestination={currentDestination}
              />
              {/* Destination name, desc, etc */}
              <DestinationBody currentDestination={currentDestination} />
            </div>
          </div>

        </div>
    </DestinationLayout>
  )
}
