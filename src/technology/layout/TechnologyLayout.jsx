import { Navbar } from '../../layout/Navbar';

export const TechnologyLayout = ({children}) => {
  return (
    <div className="flex flex-col bg-technology-mobile bg-cover min-h-screen p-6 bg-no-repeat md:bg-technology-tablet md:pt-0 md:pb-0 md:bg-center lg:bg-technology-desktop">
        <Navbar currentSection='technology'/>
        {children}
    </div>
  )
}
