import { Link } from "react-router-dom";

const menus = [
    'home',
    'destination',
    'crew',
    'technology'
];

export const MenuLinks = ({currentSection}) => {
  return (
    <div className="hidden md:flex w-[58vw] h-full bg-white mr-[-24px] backdrop-blur-2xl bg-opacity-5 text-white
    gap-[10%] uppercase font-barlowcondensed tracking-[2.3625px] text-sm px-[10%] lg:text-base">

        {
            menus.map( (menu, index) => (
                <Link key={index} to={`/${ menu }`}>
                    <span className={`flex h-full items-center border-opacity-50 hover:border-b-[3px]
                        ${currentSection === menu ? 'border-b-[3px] !border-opacity-100' : ''}`}
                    >
                        <strong className="hidden lg:block">0{ index }&nbsp;</strong>
                        { menu }
                    </span>
                </Link>
            ))
        }
        
    </div>
  )
}
