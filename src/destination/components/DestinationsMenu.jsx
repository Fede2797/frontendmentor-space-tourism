import { destinations } from "../../data/data.json";

export const DestinationsMenu = ({currentDestination, setCurrentDestination, getDestinationData}) => {
  return (
    <div className="flex uppercase h-[28px] items-start gap-7 mb-[20px] text-sm tracking-[2.36px] font-barlowcondensed 
    text-light-blueish md:mb-8 lg:text-base lg:gap-8">
        {/* Destination options */}
        {
            destinations.map( destination => (
                <div 
                    key={destination.name}
                    onClick={ () => setCurrentDestination(getDestinationData(destination.name)) }
                    className={`h-full lg:border-opacity-50 lg:hover:border-b-[3px] hover:cursor-pointer
                    ${ currentDestination.name === destination.name && 'border-b-[3px] !border-opacity-100'}`}
                >
                    {destination.name}
                </div> 
            ))
        }
    </div>
  )
}
