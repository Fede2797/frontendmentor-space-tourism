
import { getTechnologyData } from "../../helper/helper";

const technologies = [
    "Launch vehicle",
    "Spaceport",
    "Space capsule"
]

export const TechOptions = ({currentTechnology, setCurrentTechnology}) => {

  return (
    <div className="flex mb-[26px] mt-[34px] justify-center gap-4 font-bellefair">
        {
            technologies.map( (tech, index) => (
                <button 
                    key={index}
                    className={`w-10 h-10 border border-opacity-25 rounded-full 
                        ${ currentTechnology.name === tech ? 'bg-white text-[#0B0D17]' : ''}`}
                    onClick={ () => setCurrentTechnology( getTechnologyData(index) ) }
                >
                    {index+1}
                </button>
            ))
        }
    </div>
  )
}
