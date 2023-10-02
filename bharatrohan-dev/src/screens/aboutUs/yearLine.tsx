import arrowImage from '../../assets/aboutus/arrow-right.svg'
interface YearLineProps {
  year: number
  incrementYear: () => void
}
export default function YearLine({ year, incrementYear }: YearLineProps) {
  return (
    <div className="flow-root w-max mr-0 ml-auto max-[1145px]:mx-auto">
      {/* 2 grid container */}
      <div
        className="relative flex my-6 items-center h-[32px]"
        onClick={incrementYear}
      >
        {/* years */}
        <div className="grid grid-cols-[repeat(17,max-content)] transition-all ease-in-out duration-300 grid-rows-[max-content] relative text-white items-center cursor-pointer mobile-timeline-container">
          <h4
            className={`w-20 flex justify-center text-lg relative z-20 col-span-1 col-start-1 select-none col-end-2 transition-all duration-300 ease-in-out text-green ${
              year > 1 && 'max-[920px]:w-0 overflow-hidden'
            }`}
          >
            2016
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-300 ${
              year >= 1 ? 'w-0' : 'w-6'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-3 select-none col-end-4 transition-all duration-300 ease-in-out ${
              year >= 1 ? 'text-green w-[calc(5rem+1.5rem)]' : 'text-white w-20'
            } ${year > 2 && 'max-[920px]:w-0 overflow-hidden'}`}
          >
            2017
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-300 ${
              year >= 2 ? 'w-0' : 'w-6'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-5 select-none col-end-6 transition-all duration-300 ease-in-out ${
              year >= 2 ? 'text-green w-[calc(5rem+1.5rem)]' : 'text-white w-20'
            } ${year > 3 && 'max-[920px]:w-0 overflow-hidden'}`}
          >
            2018
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-300 ${
              year >= 3 ? 'w-0' : 'w-6'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-7 select-none col-end-8 transition-all duration-300 ease-in-out ${
              year >= 3 ? 'text-green w-[calc(5rem+1.5rem)]' : 'text-white w-20'
            } ${year > 4 && 'max-[920px]:w-0 overflow-hidden'}`}
          >
            2019
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-300 ${
              year >= 4 ? 'w-0' : 'w-6'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-9 select-none col-end-10 transition-all duration-300 ease-in-out ${
              year >= 4 ? 'text-green w-[calc(5rem+1.5rem)]' : 'text-white w-20'
            } ${year > 5 && 'max-[920px]:w-0 overflow-hidden'}`}
          >
            2020
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-300 ${
              year >= 5 ? 'w-0' : 'w-6'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-11 select-none col-end-12 transition-all duration-300 ease-in-out ${
              year >= 5 ? 'text-green w-[calc(5rem+1.5rem)]' : 'text-white w-20'
            } ${year > 5 && 'max-[920px]:w-0 overflow-hidden'}`}
          >
            2021
          </h4>
          <div className="h-full w-10"></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-13 select-none col-end-14`}
          >
            2022
          </h4>
          <div className="h-full w-10"></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-[15] select-none col-end-[16]`}
          >
            2023
          </h4>
          <div className="h-full w-10"></div>
          <h4
            className={` flex justify-center text-lg relative z-20 col-span-1 col-start-[17] select-none col-end-[18]`}
          >
            2024
          </h4>
        </div>
        {/* white arrow */}
        <div
          className={`grid grid-rows-1 absolute top-0 transition-all duration-300 ease-in-out ${
            year > 1 && 'max-[920px]:mobile-timeline'
          }`}
          style={{
            gridTemplateColumns: `${Number(6.5 + year * 6.5) + 'rem'}`,
          }}
        >
          <div className="flex justify-end bg-white h-max rounded-3xl col-start-1 w-full z-10">
            <img src={arrowImage} className="h-8 w-auto pr-1" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}
