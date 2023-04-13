
export const DestinationBody = ({currentDestination}) => {
  return (
    <>
        <h1 className="font-bellefair text-[56px] uppercase leading-[64px] md:text-[80px] md:mb-2 md:leading-[92px] lg:text-[100px] lg:leading-[115px] animate__animated animate__fadeIn">{ currentDestination.name }</h1>
        {/* Destination description */}
        <p className="max-w-[570px] font-barlow text-[15px] leading-[25px] text-light-blueish md:w-[79%] md:max-w-full md:text-base lg:max-w-none lg:w-full lg:text-left lg:text-lg lg:leading-8 animate__animated animate__fadeIn">
          { currentDestination.description }
        </p>
        {/* Separator */}
        <hr className="w-full mt-8 border-[#383B4B] mb-8 lg:mt-[54px]"/>
        {/* Avg. distance to the destination */}
        <div className="flex flex-col md:flex-row md:gap-24">
            <div className="mb-8 animate__animated animate__fadeIn">
                <h4 className="text-light-blueish font-barlowcondensed text-sm uppercase tracking-[2.36px] md:mb-[12px]">
                  Avg. distance
                </h4>
                <span className="uppercase text-[28px] font-bellefair">{ currentDestination.distance }</span>
            </div>
            {/* Estimated travel time */}
            <div className="animate__animated animate__fadeIn">
                <h4 className="text-light-blueish font-barlowcondensed text-sm uppercase tracking-[2.36px] md:mb-[12px]">
                  Est. travel time
                </h4>
                <span className="uppercase text-[28px] font-bellefair">
                  { currentDestination.travel }
                </span>
            </div>
        </div>
    </>
  )
}
