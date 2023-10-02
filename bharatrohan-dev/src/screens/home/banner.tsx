import React, { useEffect, useRef } from 'react'
import logo from 'assets/globals/logo.svg'
import bannerVideo from 'assets/home/banner_bg_new.mp4'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Banner() {
  const imgWrapper = useRef<any>()
  const wrapper = useRef<any>()

  useEffect(() => {
    const selector = gsap.utils.selector(wrapper)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: 1,
          start: 'top top',
          end: 'bottom top',
          pin: true,
        },
      })

      tl.fromTo(
        '.target',
        {
          clipPath: 'circle(0 at 50% 50%)',
        },
        {
          duration: 3,
          clipPath: 'circle(100% at 50% 50%)',
        },
      )
    })

    return () => ctx.revert()
  })

  return (
    <section ref={wrapper} className="relative overflow-hidden h-screen">
      <section className='h-screen overflow-hidden min-h-[500px] bg-[url("assets/home/banner.png")] bg-no-repeat bg-cover bg-center absolute inset-0 overlay-wrapper'>
        <section className="absolute inset-0  flex flex-col items-center gap-3 pt-32">
          <div className="flex-1 flex justify-center flex-col gap-5">
            <div
              className="grid place-content-center mx-auto  relative"
              ref={imgWrapper}
            >
              <div className="absolute overlay inset-0 bg-yellow opacity-0 rounded-full" />
              <div className="xl:h-48 2xl:h-52 w-full grid place-content-center">
                <img
                  loading="eager"
                  src={logo}
                  alt="Logo of the BharatRohan"
                  className=" w-full object-cover object-center"
                />
              </div>
            </div>
            <h3 className="font-semibold text-center max-w-3xl mx-auto 2xl:max-w-5xl text-white">
              Nurturing empathy, technology, and impact for a revitalised agri
              value chain
            </h3>
          </div>
          <div className="flex flex-nowrap items-center gap-7 justify-center px-5 pt-10 pb-10 2xl:pb-20 ">
            <div className="stroke-white fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={32}
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
            <div className="font-medium text-white group-focus:text-yellow  group-hover:text-yellow ">
              <h6>Scroll to explore</h6>
            </div>
            <div className="stroke-white fill-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={29}
                height={31}
                viewBox="0 0 29 31"
                fill="none"
              >
                <rect
                  width="10.4549"
                  height="10.9528"
                  transform="matrix(-1 0 0 1 28.3329 0.183105)"
                  fill="#D9D9D9"
                />
                <rect
                  width="10.4549"
                  height="10.9528"
                  transform="matrix(-1 0 0 1 28.3329 20.0229)"
                  fill="#D9D9D9"
                />
                <rect
                  width="16.1794"
                  height="7.50991"
                  transform="matrix(-1 0 0 1 16.852 11.8271)"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </section>
      </section>

      <section className="absolute inset-0 h-screen min-h-[500px] bg-black  flex items-end  text-white target bg-gradient-to-r from-slate-800 to-slate-500">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-screen w-screen min-h-screen min-w-screen object-cover object-right "
        >
          <source
            // src="https://dfrlz e9c0ze95.cloudfront.net/Home_page.mp4"
            src={bannerVideo}
            type="video/mp4"
          />
        </video>
        <div className="sm:hidden absolute inset-0 top-1/3 bg-gradient-to-t from-[#000000] to-[rgba(0,0,0,0)]"></div>
        <div className="w-10/12 flex items-end  absolute inset-0  mx-auto pb-20 ">
          <h4 className="max-w-2xl leading-relaxed text-white">
            BharatRohan is strengthening the agri <strong>value chain</strong>{' '}
            by uniting farmers, seed growers, and corporates with Unmanned
            Aerial Vehicle (UAV) / drone-based hyperspectral imagery to ensure
            optimum harvest and profitability.
          </h4>
        </div>
      </section>
    </section>
  )
}
