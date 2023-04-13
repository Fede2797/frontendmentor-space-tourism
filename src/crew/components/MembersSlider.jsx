import { getMemberData } from "../../helper/helper"

const members = [
    'Douglas Hurley',
    'Mark Shuttleworth',
    'Victor Glover',
    'Anousheh Ansari',
]

export const MembersSlider = ({currentMember, setCurrentMember}) => {
  return (
    <div className="flex my-8 gap-4 justify-center md:order-3 lg:justify-start lg:items-end lg:mb-20">
        {
            members.map(( member, index ) => (
                <input
                    key={index}
                    onClick={ () => setCurrentMember(getMemberData( index )) }
                    name="memberSelected"
                    className={`w-[15px] h-[15px] appearance-none bg-white rounded-full opacity-[17%] hover:cursor-pointer ${ currentMember.name === member && '!opacity-100' }`}
                    type="radio"
                />
            ))
        }
    </div>
  )
}
