import { Navbar } from '../../layout/Navbar'

export const CrewLayout = ({children}) => {
  return (
    <div className="flex flex-col bg-crew-mobile bg-cover min-h-screen p-6 bg-no-repeat 
    md:bg-crew-tablet md:pt-0 md:pb-0 md:bg-center 
    lg:bg-crew-desktop">
        <Navbar currentSection='crew'/>
        {children}
    </div>
  )
}
