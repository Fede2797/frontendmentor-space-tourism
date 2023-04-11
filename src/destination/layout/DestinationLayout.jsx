import { Navbar } from '../../layout/Navbar'

export const DestinationLayout = ({children}) => {
  return (
    <div className="flex flex-col bg-destination-mobile bg-cover h-screen p-6 bg-no-repeat 
    md:bg-destination-tablet md:pt-0
    lg:bg-destination-desktop">
        <Navbar />
        {children}
    </div>
  )
}
