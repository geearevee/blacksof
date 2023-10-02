import React, { useEffect, useRef, useState } from 'react'
import Partition from 'molecules/partition'
import dummyEcosystem from 'assets/home/ecosystem.png'
import { Autoplay, Navigation, Pagination } from 'swiper'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import slide1 from 'assets/home/ecocsystem/slide_one.svg'
import slide2 from 'assets/home/ecocsystem/slide (2).png'
import slide3 from 'assets/home/ecocsystem/slide (3).png'
import slide4 from 'assets/home/ecocsystem/slide (4).png'
import slide5 from 'assets/home/ecocsystem/slide (5).png'
import slide6 from 'assets/home/ecocsystem/slide (6).png'

const data = [
  {
    coverImage: slide1,
    title: 'Geo Tagging',
    subtitle: 'Geo tagging of fields through drones for vital farmland data.',
  },
  {
    coverImage: slide2,

    title: 'Drone surveys and advisory generation',
    subtitle:
      'Routine farm and trial plot assessment to identify threats and generate yield trails.',
  },
  {
    coverImage: slide3,

    title: 'Implementation of the UAV / drone-generated advisory',
    subtitle: 'On-ground action by farmers and growers to mitigate threats.',
  },
  {
    coverImage: slide4,

    title: 'Buyback and sorting of the harvest',
    subtitle: 'Purchase of the produce by BharatRohan.',
  },
  {
    coverImage: slide5,

    title: 'Packaging and labelling for end-to-end traceability',
    subtitle:
      'Error-free packaging with farm tags for crystal clear insights. ',
  },
  {
    coverImage: slide6,

    title: 'Final delivery',
    subtitle: 'Timely supply to the end buyers with easily accessible data.',
  },
]

let timeoutId: any

export default function Ecosystem() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [instance, setInstance] = useState<any>(null)

  const numRef = useRef<any>()
  const titleRef = useRef<any>()
  const swiperRef = useRef<any>(null)

  const getSwiperInstance = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      return swiperRef.current.swiper
    }
    return null
  }

  useEffect(() => {
    const ins = getSwiperInstance()
    setInstance(ins)
  }, [])

  useEffect(() => {
    timeoutId = setInterval(() => {
      setActiveIndex((prev) => {
        return (prev + 1) % data.length
      })
      instance.slideNext()
    }, 2500)
    return () => {
      clearInterval(timeoutId)
    }
  }, [instance])

  function clearTimeoutHandler() {
    clearInterval(timeoutId)
    timeoutId = setInterval(() => {
      setActiveIndex((prev) => {
        return (prev + 1) % data.length
      })
      instance.slideNext()
    }, 2500)
  }

  return (
    <section className="bg-green blade-top-padding-sm 2xl:blade-top-padding border-1 border-transparent">
      <section className="w-container">
        <section className="pb-5">
          <section>
            <Partition
              title="An ecosystem that ensures impact"
              color="light"
              text="Ecosystem"
            />
          </section>
        </section>
        <section className="ecosystem blade-bottom-padding-lg 2xl:pt-16">
          <Swiper
            autoHeight
            speed={400}
            navigation={{
              nextEl: '.eco-next-btn',
              prevEl: '.eco-prev-btn',
            }}
            onSlideChange={(swiper) =>
              setActiveIndex((swiper.activeIndex - 1) % data.length)
            }
            modules={[Navigation, Pagination, Autoplay]}
            effect="creative"
            centeredSlides
            ref={swiperRef}
            initialSlide={0}
            slidesPerView={1}
            loop
          >
            {data.map((elem, index: number) => {
              const key = `${index}`
              return (
                <SwiperSlide
                  key={key}
                  className="h-[280px] md:h-[320px] 2xl:h-[350px]"
                >
                  <div className="grid place-content-center h-[280px] md:h-[320px] 2xl:h-[350px]">
                    <img
                      src={elem.coverImage}
                      alt={elem.title}
                      className="w-full object-contain object-center h-[280px] md:h-[320px] 2xl:h-[350px]"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className=" md:pt-7 flex md:flex-row flex-col gap-y-6 items-start md:w-[95%] 2xl:blade-top-padding-sm 2xl:pb-3 min-h-[15rem] md:min-h-max">
            <div className=" pr-3  md:pt-5 lg:pr-10 leading-none">
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={activeIndex}
                  timeout={300}
                  classNames={'fade-show'}
                  nodeRef={numRef}
                >
                  <span
                    ref={numRef}
                    className="text-4xl block md:-translate-y-5 md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-opacity-30"
                  >
                    0{activeIndex + 1}
                  </span>
                </CSSTransition>
              </SwitchTransition>
            </div>

            <div className="flex-1 pr-7">
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={activeIndex}
                  timeout={300}
                  classNames={'fade-show'}
                  nodeRef={titleRef}
                >
                  <div ref={titleRef} className="flex flex-col gap-2 ">
                    <h4 className="text-white font-semibold leading-tight max-w-lg">
                      {data[activeIndex].title}
                    </h4>
                    <h6 className="text-white max-w-md">
                      {data[activeIndex].subtitle}
                    </h6>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>

            <div>
              <div className="grid place-content-start">
                <div className="p-[6px] flex gap-4 rounded-full border-1 border-solid border-white">
                  <button
                    onClick={clearTimeoutHandler}
                    type="button"
                    className="p-1 2xl:p-2 stroke-white hover:fill-white hover:stroke-black rounded-full focus-visible:fill-white focus-visible:stroke-black focus-visible:bg-white fill-black hover:bg-white outline-none eco-prev-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="inherit"
                      className="w-5 h-5 2xl:w-6 2xl:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={clearTimeoutHandler}
                    className="p-1 2xl:p-2 stroke-white hover:fill-white hover:stroke-black rounded-full focus-visible:fill-white focus-visible:stroke-black focus-visible:bg-white fill-black hover:bg-white outline-none eco-next-btn"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="inherit"
                      className="w-5 h-5 2xl:w-6 2xl:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
