import { Link } from "react-router-dom"

export const Sidebar = ({toggleSideBarOpen}) => {
  return (
    <div className="flex">
        <div className='fixed flex flex-col gap-7 top-0 right-0 z-10 h-screen bg-white bg-opacity-5 p-6 pl-8 w-2/3 text-white backdrop-blur-2xl font-barlowcondensed uppercase tracking-[2.7px]'>
            <div className="flex justify-end">
                <button 
                  onClick={ toggleSideBarOpen }
                  className='mt-[11px] mr-[2px] mb-8'
                >
                    <img src="./images/shared/icon-close.svg" alt="" />
                </button>
            </div>
            <Link to="/"><strong>00</strong> Home</Link>
            <Link to="/destination"><strong>01</strong> Destination</Link>
            <Link to="/crew"><strong>02</strong> Crew</Link>
            <Link to="/technology"><strong>03</strong> Technology</Link>
        </div>
    </div>
  )
}
