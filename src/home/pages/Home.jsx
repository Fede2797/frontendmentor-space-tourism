import { HomeLayout } from "../layout/HomeLayout"

export const Home = () => {
  return (
    <HomeLayout>
        <div className="flex flex-col text-white">
            {/* Main description */}
            <div className="text-center">
                <h2 className="uppercase font-barlowcondensed tracking-[2.7px]">So, you want to travel to</h2>
                <h1 className="text-[80px] uppercase font-bellefair">Space</h1>
                <p className="text-[15px] font-barlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            {/* Explore Button */}
            <button className="w-[150px] h-[150px] rounded-full bg-white text-black text-xl mx-auto uppercase font-bellefair tracking-[1.25px]">
                Explore
            </button>
        </div>
    </HomeLayout>
  )
}
