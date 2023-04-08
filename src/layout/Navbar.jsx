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
        <div className='flex justify-between h-[88px] p-6'>
            {/* Logo */}
            <Link to="/">
                <img className='max-h-full' src="./images/shared/logo.svg" alt="" />
            </Link>
            {/* Menu */}
            <button onClick={ toggleSideBarOpen }>
                <img className={`max-h-full ${ sideBarOpen && 'hidden' }`} src="./images/shared/icon-hamburger.svg" alt="" />
            </button>
            {
                sideBarOpen && (
                    <Sidebar toggleSideBarOpen={toggleSideBarOpen}/>
                )
            }
        </div>
    )
}
