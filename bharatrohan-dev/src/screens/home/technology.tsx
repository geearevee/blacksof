import React, { useRef, useState } from 'react'
import Partition from 'molecules/partition'
import droneImage from 'assets/home/tech/drone-updated.png'
import saas from 'assets/home/tech/saas-full.png'
import dashboardImage from 'assets/home/dashboard.svg'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const techList = [
  {
    title: 'UAVs (Unmanned Aerial Vehicles) and UAV cameras',
    coverImage: droneImage,
    desc: (
      <>
        Taking agricultural advisories off the shelf and into the skies, our
        drones equipped with multispectral and hyperspectral sensors hover over
        the farms and trial plots to gather data for the agronomy engines.
      </>
    ),
  },
  {
    title: 'SaaS',
    coverImage: saas,
    desc: (
      <ul className="list-disc list-inside">
        <li>
          <strong>UAV-based Hyperspectral Imaging Technology</strong> derives
          key data points from the data collected by the drone sensors.
        </li>
        <li className=" py-5 lg:py-7">
          <strong>Data-driven agronomy models</strong> analyse the data points
          and match them with pre-set parameters and benchmarks. The models then
          generate suitable <strong>agronomy</strong> advisories (vetted by
          agronomists) with prescription maps for growers.
        </li>
        <li>
          <strong>Dashboard</strong> features the historical backdrop of all
          cluster farms. Each farm’s unique <strong>QR code</strong> adds new
          dimensions to holistic tracking, comparison, and analysis of the crop.
        </li>
      </ul>
    ),
  },
]

export default function Technology() {
  // const [active, dispatch] = useReducer((s: number, u: number) => u, 0)
  const [currActiveIndex, setCurrActiveIndex] = useState<number>(0)

  function slideHandler(index: number) {
    setCurrActiveIndex(index)
  }

  const nodeRef = useRef<any>()
  const imageRef = useRef<any>()
  return (
    <section className="bg-cream blade-top-padding-sm blade-bottom-padding-sm">
      <section className="w-container pt-4 xl:pt-6 2xl:pt-6">
        <div>
          <Partition color="dark" text="Technology" />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1  gap-y-4 lg:gap-y-10 xl:gap-20 pt-8">
          <div>
            <h3 className="font-semibold leading-tight max-w-md lg:max-w-none">
              From ground to skies and back, making the most out of technology
            </h3>
          </div>
          <div>
            <h6 className="leading-normal font-light max-w-[600px] lg:ml-auto text-sm md:text-base lg:text-lg 2xl:text-lg">
              Harnessing the true potential of hyperspectral imaging, cameras,
              drones, and data-driven decision models on farms, our growers are
              reaping the fruits of precision farming. The combination unlocks
              deep, multi-dimensional assessment of farms from which an accurate
              and versatile database of advisories is derived.
            </h6>
          </div>
        </div>
      </section>
      <section className="blade-top-padding 2xl:blade-top-padding-lg">
        <section className="grid grid-cols-2 place-content-center w-full w-container-lg lg:max-w-none gap-2">
          <Tab
            activeIndex={currActiveIndex}
            index={0}
            text="UAVs & UAV cameras"
            handleClick={slideHandler}
          />
          <Tab
            activeIndex={currActiveIndex}
            index={1}
            text="SaaS"
            handleClick={slideHandler}
          />
        </section>
        <section
          className={` bg-center bg-cover bg-no-repeat md:py-8 lg:py-16 2xl:py-24 relative
          ${
            currActiveIndex === 0
              ? 'bg-[url("assets/home/tech/bg.png")]'
              : 'xl:bg-[url("assets/home/tech/saas-full.png")] bg-right'
          }
          `}
        >
          <div className="flex xl:flex-row flex-col-reverse  ">
            <div className="flex-1">
              <div className="bg-white p-6 h-full md:p-10 lg:p-16 xl:p-20 md:w-11/12">
                <SwitchTransition>
                  <CSSTransition
                    key={currActiveIndex}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="slide"
                    unmountOnExit
                  >
                    <div
                      ref={nodeRef}
                      className="  py-6 max-w-2xl ml-auto 2xl:py-16"
                    >
                      <h3 className="font-medium text-green leading-tight max-w-2xl">
                        {techList[currActiveIndex].title}
                      </h3>
                      <h6 className="max-w-xl mt-4 text-sm md:text-base lg:text-lg 2xl:text-xl">
                        {techList[currActiveIndex].desc}
                      </h6>
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
            <div className="grow shrink basis-72">
              <div className=" grid h-full">
                <SwitchTransition>
                  <CSSTransition
                    key={currActiveIndex}
                    nodeRef={imageRef}
                    timeout={300}
                    classNames="slide"
                    unmountOnExit
                  >
                    <div ref={imageRef} className="">
                      <img
                        src={techList[currActiveIndex].coverImage}
                        alt="baharatrohan's website graphics"
                        className={`w-full md:w-11/12 h-full object-cover object-right ${
                          currActiveIndex === 1 ? 'xl:hidden' : ''
                        }`}
                      />
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

function Tab({
  index,
  text,
  handleClick,
  activeIndex,
}: {
  text: string
  index: number
  activeIndex: number
  handleClick: (index: number) => void
}) {
  return (
    <button
      onClick={() => handleClick(index)}
      type="button"
      className={`h-[90%] py-1 border-green border rounded-sm ${
        index == activeIndex
          ? 'bg-green stroke-white fill-white text-white'
          : 'stroke-green fill-green text-green'
      } group outline-none focus-visible:bg-green hover:bg-green grid place-content-center`}
    >
      <div className="flex flex-nowrap items-center gap-7 justify-center  py-2 md:py-5 2xl:py-8  px-3 md:px-5">
        <div className="group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white stroke-inherit fill-inherit md:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 2xl:h-8 2xl:w-8"
            viewBox="0 0 28 32"
            fill="inherit"
          >
            <rect
              y="0.536377"
              width="10.4199"
              height="10.9161"
              fill="inherit"
            />
            <rect
              x="-0.000183105"
              y="20.3101"
              width="10.4199"
              height="10.9161"
              fill="inherit"
            />
            <rect
              x="11.442"
              y="12.1414"
              width="16.1252"
              height="7.48477"
              fill="inherit"
            />
          </svg>
        </div>
        <div className="font-medium text-inherit group-focus:text-white  group-hover:text-white ">
          <h6 className=" text-base leading-tight md:text-xl">{text}</h6>
        </div>
        <div className="group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white  stroke-inherit fill-inherit rotate-180 md:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 2xl:h-8 2xl:w-8"
            viewBox="0 0 28 32"
            fill="inherit"
          >
            <rect
              y="0.536377"
              width="10.4199"
              height="10.9161"
              fill="inherit"
            />
            <rect
              x="-0.000183105"
              y="20.3101"
              width="10.4199"
              height="10.9161"
              fill="inherit"
            />
            <rect
              x="11.442"
              y="12.1414"
              width="16.1252"
              height="7.48477"
              fill="inherit"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}
