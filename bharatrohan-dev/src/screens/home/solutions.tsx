import React, { useState, useRef, useEffect, useCallback } from 'react'
import Partition from 'molecules/partition'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCreative, Pagination } from 'swiper'
import 'swiper/css'

import cropAssure from 'assets/home/final/cropAssure.png'
import seedAssure from 'assets/home/final/seedAssure.png'
import sourceAssure from 'assets/home/final/sourceAssure.png'

const elems = [
  {
    cover: cropAssure,
    title: 'CropAssure®',
    subtitle: 'Leading farmers to a new era of agriculture. ',
    desc: 'CropAssure® combines hyperspectral imaging technology via drone farm scouting to recommend farm-specific actionable advisories for farmers. Supported by agronomists, this decision support system employs sustainable practices to minimise input, labour, and crop loss and maximise yield quality and quantity.',
    points: [
      'Recommends suitable crop and cultivar.',
      'Prevents pest and disease infestation.',
      'Enables a residue-free harvest.',
      'Reduces agri inputs application and overall operational costs.',
    ],
  },

  {
    cover: sourceAssure,

    title: 'SourceAssure®',
    subtitle: 'Where transparency augments traceability.',
    desc: 'SourceAssure® converges accurate data insights starting right from pre-sowing up to harvest to forge a strong and forward-looking supply chain management (SCM). It ensures the enduring trust of corporate buyers by sorting regulatory compliance issues through transparent data sharing on crop history.',
    points: [
      'Facilitates residue-free procurement.	',
      'Provides farm-level traceability data.',
      'Ensures transparent and efficient market linkage.',
    ],
  },

  {
    cover: seedAssure,
    title: 'SeedAssure®',
    subtitle: 'Where breakthroughs find shape.',
    desc: 'SeedAssure® provides accurate phenotypic data sets through drone monitoring to help seed growers and researchers fast-track yield trials. The drones collect the data and prescription maps are generated to provide information on the phenotypic traits detected from the plots during hybrid seed evaluation for accurate R&D. ',
    points: [
      'Simplifies crop data management.',
      'Improves efficient R&D through out with unmanned scouting.',
      'Issues timeline-centric data insights for easy data management.',
      'Shares well-structured hybrid evaluation plot-specific data insights.',
    ],
  },
]

let timeoutId: any

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [instance, setInstance] = useState<any>(null)
  const swiperRef = useRef<any>(null)

  const getSwiperInstance = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      return swiperRef.current.swiper
    }
    return null
  }

  useEffect(() => {
    // Example: Set an event listener on the Swiper instance
    const ins = getSwiperInstance()
    setInstance(ins)
  }, [])

  useEffect(() => {
    timeoutId = setInterval(() => {
      setActiveIndex((prev) => {
        const ans = (prev + 1) % 3
        return ans
      })
      instance.slideNext()
    }, 2500)
    return () => {
      clearInterval(timeoutId)
    }
  }, [instance])

  function slideHandler(type: string) {
    clearInterval(timeoutId)

    if (type === 'prev') {
      setActiveIndex((prev) => {
        if (prev === 0) return elems.length - 1
        return prev - 1
      })
      instance.slidePrev()
    }

    if (type === 'next') {
      setActiveIndex((prev) => {
        if (prev === elems.length - 1) return 0
        return prev + 1
      })
      instance.slideNext()
    }

    timeoutId = setInterval(() => {
      setActiveIndex((prev) => {
        const ans = (prev + 1) % 3
        return ans
      })
      instance.slideNext()
    }, 2500)
  }

  const wrapperRef = useRef<any>()
  return (
    <section className="bg-cream blade-top-padding-sm 2xl:blade-top-padding blade-bottom-padding-sm 2xl:blade-bottom-padding">
      <section className="w-container-lg pt-8 blade-bottom-padding">
        <div>
          <Partition color="dark" text="Solutions" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-y-6 md:gap-10 lg:gap-16 xl:gap-20 pt-8">
          <div>
            <h3 className="font-semibold leading-tight md:max-w-md lg:max-w-none">
              Driving transformation with innovation and technology excellence
            </h3>
          </div>
          <div>
            <h6 className=" text-greeb  pb-2 md:pb-3 leading-normal font-semibold max-w-[600px] lg:ml-auto ">
              “A healthy outside starts from the inside” – Robert Urich
            </h6>
            <h6 className="leading-normal font-light max-w-[600px] lg:ml-auto">
              We are disrupting conventional agriculture with tech-centric
              integration across all touchpoints from pre-sowing to harvest. The
              ambit caters to farmers, seed growers, researchers, and corporate
              buyers across the{' '}
              <b className="font-semibold"> agri value chain</b>.
            </h6>
          </div>
        </div>
      </section>

      <section className="w-container-lg pt-5 lg:pt-10 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full flex flex-col justify-between min-h-[570px] lg:min-h-max 2xl:min-h-[730px]">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeIndex + 'slide'}
              timeout={300}
              classNames={'fade-show'}
              nodeRef={wrapperRef}
            >
              <div ref={wrapperRef}>
                <h3 className="text-green font-bold pb-1 md:pb-2 md:block hidden ">
                  {elems[activeIndex].title}
                </h3>
                <h2 className=" md:hidden block text-green font-bold  pb-1 md:pb-2 ">
                  {elems[activeIndex].title}
                </h2>
                <h5 className="font-semibold pb-2 md:pb-5 md:block hidden">
                  {elems[activeIndex].subtitle}
                </h5>
                <span className="font-semibold text-sm pb-2 md:pb-5 md:hidden block">
                  {elems[activeIndex].subtitle}
                </span>
                <span className=" font-normal md:block hidden leading-normal text-base 2xl:text-xl max-w-xl">
                  {elems[activeIndex].desc}
                </span>
                <small className="block md:hidden text-sm font-normal leading-normal max-w-xl">
                  {elems[activeIndex].desc}
                </small>
                <ul className="flex flex-col gap-1 pt-6 2xl:pt-10 max-w-xl 2xl:max-w-lg">
                  {elems[activeIndex].points.map((elem, index: number) => {
                    const key = `${index}`
                    return (
                      <li
                        key={key}
                        className="flex items-center gap-2 first-of-type:border-none py-1.5 2xl:py-2.5 border-t-1 border-opacity-10 border-dashed border-green text-sm md:text-base 2xl:text-lg font-medium"
                      >
                        <div className="grid place-content-center  px-3 basis-10 grow-0 shrink">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1272_7006)">
                              <path
                                d="M23.0728 10.9231C23.561 11.4114 23.561 12.2029 23.0728 12.6909L14.687 21.0769C14.1987 21.5649 13.4075 21.5649 12.9192 21.0769L8.92725 17.0847C8.43896 16.5967 8.43896 15.8052 8.92725 15.3171C9.41528 14.8289 10.2068 14.8289 10.6948 15.3171L13.803 18.4253L21.3049 10.9231C21.7932 10.4351 22.5847 10.4351 23.0728 10.9231ZM32 16C32 24.844 24.8428 32 16 32C7.15601 32 0 24.8428 0 16C0 7.15601 7.15723 0 16 0C24.844 0 32 7.15723 32 16ZM29.5 16C29.5 8.53784 23.4612 2.5 16 2.5C8.53784 2.5 2.5 8.53882 2.5 16C2.5 23.4622 8.53882 29.5 16 29.5C23.4622 29.5 29.5 23.4612 29.5 16Z"
                                fill="#FDC20C"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1272_7006">
                                <rect width="32" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        {elem}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </CSSTransition>
          </SwitchTransition>

          <div className="grid place-content-start py-6">
            <div className=" p-[6px] flex gap-4 rounded-full border-1 border-solid border-dark">
              <button
                type="button"
                onClick={() => {
                  slideHandler('') //to reset time interval
                  setActiveIndex((prev) => {
                    return prev - 1 < 0 ? elems.length - 1 : prev - 1
                  })

                  instance.slidePrev()
                }}
                className="p-2 stroke-black hover:fill-white hover:stroke-white rounded-full focus-visible:fill-white focus-visible:stroke-white focus-visible:bg-green fill-black hover:bg-green  solutions-prev-btn outline-none "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="inherit"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  slideHandler('')
                  setActiveIndex((prev) => {
                    const ans = (prev + 1) % 3
                    return ans
                  })
                  instance.slideNext()
                }}
                className="p-2 stroke-black hover:fill-white hover:stroke-white rounded-full focus-visible:fill-white focus-visible:stroke-white focus-visible:bg-green fill-black hover:bg-green outline-none solutions-next-btn "
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="inherit"
                  className="w-6 h-6"
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

        <div className="md:block hidden w-full h-full relative 2xl:h-[737px] 2xl:w-[737px]">
          <div
            className="absolute top-[11.5%] left-[11.5%] w-[17%] h-[17%] rounded-full cursor-pointer z-10"
            onClick={() => {
              slideHandler('prev')
            }}
          >
            <img
              className="h-full w-full"
              src={
                elems[activeIndex === 0 ? elems.length - 1 : activeIndex - 1]
                  .cover
              }
              alt={
                elems[activeIndex === 0 ? elems.length - 1 : activeIndex - 1]
                  .title
              }
            />
          </div>
          <div
            className="absolute bottom-[11.5%] right-[11.5%] w-[17%] h-[17%] rounded-full cursor-pointer z-10"
            onClick={() => {
              slideHandler('next')
            }}
          >
            <img
              className="h-full w-full"
              src={
                elems[activeIndex === elems.length - 1 ? 0 : activeIndex + 1]
                  .cover
              }
              alt={
                elems[activeIndex === elems.length - 1 ? 0 : activeIndex + 1]
                  .title
              }
            />
          </div>
          <Swiper
            className="w-full min-h-max"
            autoHeight
            noSwiping
            touchRatio={0}
            draggable={false}
            speed={400}
            initialSlide={0}
            loop
            creativeEffect={{
              limitProgress: 1,
              prev: {
                scale: 0.25,
                translate: ['-30%', '-30%', 0],
              },
              next: {
                translate: ['30%', '30%', 0],
                scale: 0.25,
              },
            }}
            modules={[EffectCreative]}
            ref={swiperRef}
            effect="creative"
            centeredSlides
            slidesPerView={1}
          >
            {elems.map((elem, index) => {
              const key = `${index}`
              return (
                <SwiperSlide className="w-full scale-75" key={key}>
                  <div className="rounded-full aspect-square overflow-hidden scale-100 md:scale-[0.65] relative">
                    <img
                      src={elem.cover}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        {/* mobile section */}
        <div className="md:hidden block pb-3 ">
          <Swiper
            modules={[Navigation, Pagination]}
            className="w-full pb-10"
            autoHeight
            speed={1500}
            navigation={{
              nextEl: '.solutions-next-btn',
              prevEl: '.solutions-prev-btn',
            }}
            loop={false}
            centeredSlides
            slidesPerView={1}
            spaceBetween={20}
            pagination
          >
            {elems.map((elem, index) => {
              const key = `${index}`
              return (
                <SwiperSlide className=" w-full scale-100" key={key}>
                  <div className="rounded-full aspect-square overflow-hidden  scale-100 md:scale-75 ">
                    <img
                      src={elem.cover}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </section>
  )
}

/*
          <button
            type="button"
            className={`${
              activeIndex === 0
                ? 'opacity-30 hover:border-white hover:stroke-white'
                : 'opacity-100'
            } hover:stroke-yellow stroke-white p-3  prev-btn rounded-full border-2 border-white hover:border-yellow  flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="inherit"
              className="w-6 h-6 stroke-inherit"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            className={` ${
              activeIndex === 1
                ? 'opacity-30 hover:border-white hover:stroke-white'
                : 'opacity-100'
            } hover:stroke-yellow stroke-white next-btn p-3 rounded-full border-2 border-white hover:border-yellow  flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="inherit"
              className="w-6 h-6 stroke-inherit"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>


*/
