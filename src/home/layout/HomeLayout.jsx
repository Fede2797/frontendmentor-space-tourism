import React from 'react'
import { Navbar } from '../../layout/Navbar'

export const HomeLayout = ({children}) => {
  return (
    <div className="flex flex-col bg-mobile bg-cover min-h-screen p-6 bg-no-repeat md:bg-tablet md:pt-0 lg:bg-desktop">
        <Navbar currentSection='home'/>
        {children}
    </div>
  )
}
