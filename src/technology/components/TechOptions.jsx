
import { getTechnologyData } from "../../helper/helper";

const technologies = [
    "Launch vehicle",
    "Spaceport",
    "Space capsule"
]

export const TechOptions = ({currentTechnology, setCurrentTechnology}) => {

  return (
    <div className="flex mb-[26px] mt-[34px] justify-center gap-4 font-bellefair md:mt-[56px] md:mb-[44px] lg:flex-col lg:m-0 lg:gap-8">
        {
            technologies.map( (tech, index) => (
                <button 
                    key={index}
                    className={`w-10 h-10 border border-opacity-25 rounded-full ${ currentTechnology.name === tech ? 'bg-white text-[#0B0D17]' : ''} md:w-[60px] md:h-[60px] md:text-2xl lg:hover:border-opacity-100 lg:text-[32px] lg:w-[80px] lg:h-[80px]`}
                    onClick={ () => setCurrentTechnology( getTechnologyData(index) ) }
                >
                    {index+1}
                </button>
            ))
        }
    </div>
  )
}
