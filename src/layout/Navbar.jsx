import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    }

    return (
        // Logo & Menu
        <div className='flex justify-between h-[40px] md:h-24 md:items-center lg:mt-10'>
            {/* Logo */}
            <Link to="/">
                <img className='max-h-full md:ml-4' src="./images/shared/logo.svg" alt="" />
            </Link>
            {/* Menu */}
            <button className="md:hidden" onClick={ toggleSideBarOpen }>
                <img className={`max-h-full ${ sideBarOpen && 'hidden' }`} src="./images/shared/icon-hamburger.svg" alt="" />
            </button>
            {/* Menu for medium/large screens */}
            <div className="hidden md:flex w-[58vw] h-full bg-white mr-[-24px] backdrop-blur-2xl bg-opacity-5 text-white
            gap-[10%] uppercase font-barlowcondensed tracking-[2.3625px] text-sm px-12">
                <Link to="/">
                    <span className="flex h-full items-center">Home</span>
                </Link>
                <Link to="/">
                    <span className="flex h-full items-center">Destination</span>
                </Link>
                <Link to="/">
                    <span className="flex h-full items-center">Crew</span>
                </Link>
                <Link to="/">
                    <span className="flex h-full items-center">Technology</span>
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
