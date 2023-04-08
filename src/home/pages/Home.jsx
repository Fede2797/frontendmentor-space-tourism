import { HomeLayout } from "../layout/HomeLayout"

export const Home = () => {
  return (
    <HomeLayout>
        <div className="flex grow flex-col text-white my-16 justify-between items-center md:mt-[106px]">
            {/* Main description */}
            <div className="flex flex-col gap-4 text-center max-w-[450px]">
                <h2 className="uppercase font-barlowcondensed tracking-[2.7px] md:text-xl">So, you want to travel to</h2>
                <h1 className="text-[80px] uppercase font-bellefair leading-[100px] md:text-[150px] md:leading-[150px]">Space</h1>
                <p className="text-[15px] font-barlow md:text-base">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            {/* Explore Button */}
            <button className="w-[150px] h-[150px] rounded-full bg-white text-black text-xl mx-auto uppercase
            font-bellefair tracking-[1.25px] justify-self-end md:w-[242px] md:h-[242px] md:text-[32px] md:tracking-[2px]">
                Explore
            </button>
        </div>
    </HomeLayout>
  )
}
