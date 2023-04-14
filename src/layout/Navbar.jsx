import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { MenuLinks } from "./MenuLinks";

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
                <Link to="/home">
                    <img className='max-h-full md:ml-4' src="images/shared/logo.svg" alt="" />
                </Link>
                <hr className="hidden absolute w-[32%] left-[11.5%] z-50 opacity-[25%] lg:block"/>
            </div>

            {/* Menu mobile (Hamburger)*/}
            <button className="md:hidden" onClick={ toggleSideBarOpen }>
                <img className={`max-h-full ${ sideBarOpen && 'hidden' }`} src="images/shared/icon-hamburger.svg" alt="" />
            </button>

            {/* Menu for medium/large screens */}
            <MenuLinks currentSection={currentSection}/>

            {/* Sidebar for mobile screen */}
            {
                sideBarOpen && (
                    <Sidebar toggleSideBarOpen={toggleSideBarOpen}/>
                )
            }
        </div>
    )
}
