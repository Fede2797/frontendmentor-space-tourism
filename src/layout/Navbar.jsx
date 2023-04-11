import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

export const Navbar = ({currentSection}) => {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    }

    return (
        // Logo & Menu
        <div className='relative flex justify-between h-[40px] md:h-24 md:items-center lg:mt-10'>
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img className='max-h-full md:ml-4' src="./images/shared/logo.svg" alt="" />
                </Link>
                <hr className="hidden absolute w-[32%] left-[11.5%] z-50 opacity-[25%] lg:block"/>
            </div>

            {/* Menu mobile (Hamburger)*/}
            <button className="md:hidden" onClick={ toggleSideBarOpen }>
                <img className={`max-h-full ${ sideBarOpen && 'hidden' }`} src="./images/shared/icon-hamburger.svg" alt="" />
            </button>
            {/* Menu for medium/large screens */}
            <div className="hidden md:flex w-[58vw] h-full bg-white mr-[-24px] backdrop-blur-2xl bg-opacity-5 text-white
            gap-[10%] uppercase font-barlowcondensed tracking-[2.3625px] text-sm px-[10%] lg:text-base">
                
                {/* TODO: Make solid white border bottom when option selected */}

                <Link to="/">
                    <span className={`flex h-full items-center border-opacity-50 hover:border-b-[3px]
                    ${currentSection === 'home' && 'border-b-[3px] border-opacity-100'}`}>
                        <strong className="hidden lg:block">00&nbsp;</strong>
                        Home
                    </span>
                </Link>
                <Link to="/destination">
                    <span className={`flex h-full items-center border-opacity-50 hover:border-b-[3px]
                    ${currentSection === 'destination' && 'border-b-[3px] border-opacity-100'}`}>
                        <strong className="hidden lg:block">01&nbsp;</strong>
                        Destination
                    </span>
                </Link>
                <Link to="/">
                    <span className="flex h-full items-center border-opacity-50 hover:border-b-[3px]">
                        <strong className="hidden lg:block">02&nbsp;</strong>
                        Crew
                    </span>
                </Link>
                <Link to="/">
                    <span className="flex h-full items-center border-opacity-50 hover:border-b-[3px]">
                        <strong className="hidden lg:block">03&nbsp;</strong>
                        Technology
                    </span>
                </Link>
            </div>
            {
                sideBarOpen && (
                    <Sidebar toggleSideBarOpen={toggleSideBarOpen}/>
                )
            }
        </div>
    )
}
