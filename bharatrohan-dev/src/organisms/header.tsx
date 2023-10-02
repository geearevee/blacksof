import React, {
  useReducer,
  useRef,
  useState,
  useEffect,
  MouseEventHandler,
} from 'react'
import logoWhite from 'assets/globals/header_logo_white_new.svg'
import logo from 'assets/globals/header_logo.svg'
import { Transition } from 'react-transition-group'
import { gsap } from 'gsap'
import MobileNavModal from 'molecules/mobileNavModal'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useNavigate, Link } from 'react-router-dom'
import { Popover, Transition as PopTransition } from '@headlessui/react'

gsap.registerPlugin(ScrollTrigger)
export default function Header() {
  const [mobileNav, toggleMobileNav] = useReducer((s) => !s, false)
  const [isNavFixed, setisNavFixed] = useState(false)
  const headerWrapperRef = useRef(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const [isTop, setIsTop] = useState(true)

  const organizationsBtn = useRef<HTMLButtonElement>(null)
  const sustainabilityBtn = useRef<HTMLButtonElement>(null)
  const techBtn = useRef<HTMLButtonElement>(null)
  const farmersBtn = useRef<HTMLButtonElement>(null)
  const companyBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileNav])

  const handleScroll = (e: Event) => {
    const scrollPos = window.scrollY

    if (scrollPos > 80) {
      setisNavFixed(true)
    } else {
      setisNavFixed(false)
    }

    if (document.documentElement.scrollTop > 80) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const showAnim = gsap
      .from(headerWrapperRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1)
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play()
        } else {
          showAnim.reverse()
        }
      },
    })
  }, [])

  const modalAnimation = (node: any) => {
    const tl = gsap.timeline()
    tl.fromTo(
      node,
      { opacity: 0, zIndex: -1 },
      { opacity: 1, duration: 0.3, zIndex: 200 },
    )
    tl.fromTo(
      modalRef.current,
      {
        opacity: 0,
        xPercent: 100,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.3,
      },
    )
    return tl
  }

  const popNavigation = (
    target: string,
    popId: 'farmers' | 'organizations' | 'sustainability' | 'company' | 'tech',
  ) => {
    switch (popId) {
      case 'farmers': {
        navigate('/coming-soon')
        return farmersBtn.current?.click()
      }
      case 'organizations': {
        navigate('/coming-soon')
        return organizationsBtn.current?.click()
      }
      case 'sustainability': {
        navigate('/coming-soon')
        return sustainabilityBtn.current?.click()
      }
      case 'company': {
        navigate(target)
        return companyBtn.current?.click()
      }
      case 'tech': {
        navigate('/coming-soon')
        return techBtn.current?.click()
      }
      default:
    }
  }

  return (
    <>
      <Transition
        appear
        timeout={500}
        in={mobileNav}
        onEnter={(node: any) => modalAnimation(node).play()}
        onExit={(node: any) => modalAnimation(node).reverse(0)}
        mountOnEnter
        unmountOnExit
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 lg:hidden block z-[9999] bg-black">
          <div ref={modalRef} className="h-full overflow-y-auto z-[9999]">
            <MobileNavModal toggle={toggleMobileNav} />
          </div>
        </div>
      </Transition>

      <header
        ref={headerWrapperRef}
        className={`fixed top-0 left-0 right-0 lg:py-2 z-50  ${
          isNavFixed ? 'bg-[#fff]' : 'bg-transparent'
        }`}
      >
        <nav className="w-container-lg  flex flex-nowrap top-0 left-0 right-0 bottom-0 items-center gap-x-10 w-container-full z-50 py-3 lg:py-0 xl:py-3 ">
          <div className=" max-w-md">
            <Link to="/">
              <img
                src={isTop ? logoWhite : logo}
                alt="BharatRohan Logo"
                title="BharatRohan Logo"
                className="h-[2.5rem] w-full min-h-fit min-w-fit sm:h-14 xl:h-16"
              />
            </Link>
          </div>
          <div className=" border border-[#163e33] max-w-fit ml-auto bg-white lg:py-[0.75rem] lg:px-7 flex-1 rounded-full flex-nowrap items-center lg:gap-x-4 xl:gap-x-8 xl:py-4 justify-around lg:flex mr-2">
            <Popover className={'hidden lg:block'}>
              {({ open }) => (
                <>
                  <Popover.Button
                    ref={techBtn}
                    className="text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center focus:outline-none  focus-visible:text-orange hover:text-orange "
                  >
                    Technology
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#163e33"
                      className={` ${
                        open ? 'rotate-180' : ''
                      } transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Popover.Button>

                  <PopTransition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="absolute   top-20"
                  >
                    <Popover.Panel className="md:w-[15rem] p-3 rounded-md grid  gap-x-6 bg-white">
                      <div className="basis-96  grow shrink  flex flex-col p-2 divide-y-1 divide-slate-200 gap-1">
                        <PopOption
                          text="UAVs"
                          callback={() => popNavigation('case-studies', 'tech')}
                        />
                        <PopOption
                          text="SaaS"
                          callback={() => popNavigation('newsroom', 'tech')}
                        />
                      </div>
                    </Popover.Panel>
                  </PopTransition>
                </>
              )}
            </Popover>

            <Popover className={'hidden lg:block'}>
              {({ open }) => (
                <>
                  <Popover.Button
                    ref={farmersBtn}
                    className="text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center focus:outline-none  focus-visible:text-orange hover:text-orange "
                  >
                    For farmers
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#163e33"
                      className={` ${
                        open ? 'rotate-180' : ''
                      } transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Popover.Button>

                  <PopTransition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="absolute top-20"
                  >
                    <Popover.Panel className="md:w-[15rem] p-3 rounded-md grid  gap-x-6 bg-white">
                      <div className="basis-96 grow shrink  flex flex-col px-2 divide-y-1 divide-slate-200 gap-1">
                        <PopOption
                          text="CropAssure®"
                          callback={() =>
                            popNavigation('case-studies', 'farmers')
                          }
                        />
                      </div>
                    </Popover.Panel>
                  </PopTransition>
                </>
              )}
            </Popover>

            <Popover className={'hidden lg:block'}>
              {({ open }) => (
                <>
                  <Popover.Button
                    ref={organizationsBtn}
                    tabIndex={0}
                    className="text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center focus:outline-none  focus-visible:text-orange hover:text-orange "
                  >
                    For organisations
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#163e33"
                      className={` ${
                        open ? 'rotate-180' : ''
                      } transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Popover.Button>

                  <PopTransition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="absolute   top-20"
                  >
                    <Popover.Panel className="md:w-[15rem] p-3 rounded-md grid  gap-x-6 bg-white">
                      <div className="basis-96 grow shrink  flex flex-col px-2 divide-y-1 divide-slate-200 gap-1">
                        <PopOption
                          text="SourceAssure®"
                          callback={() =>
                            popNavigation('case-studies', 'organizations')
                          }
                        />
                        <PopOption
                          text="SeedAssure®"
                          callback={() =>
                            popNavigation('newsroom', 'organizations')
                          }
                        />
                      </div>
                    </Popover.Panel>
                  </PopTransition>
                </>
              )}
            </Popover>

            <Popover className={'hidden lg:block'}>
              {({ open }) => (
                <>
                  <Popover.Button
                    ref={sustainabilityBtn}
                    className="text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center focus:outline-none  focus-visible:text-orange hover:text-orange "
                  >
                    Sustainability
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#163e33"
                      className={` ${
                        open ? 'rotate-180' : ''
                      } transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Popover.Button>

                  <PopTransition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="absolute   top-20"
                  >
                    <Popover.Panel className="md:w-[20rem] p-3 rounded-md grid  gap-x-6 bg-white relative right-16">
                      <div className="basis-96 grow shrink  flex flex-col px-2 divide-y-1 divide-slate-200 gap-1">
                        <PopOption
                          text="How we see sustainability?"
                          callback={() =>
                            popNavigation('case-studies', 'sustainability')
                          }
                        />
                        <PopOption
                          text="Supply chain traceability"
                          callback={() =>
                            popNavigation('newsroom', 'sustainability')
                          }
                        />
                        <PopOption
                          text="Carbon farming"
                          callback={() =>
                            popNavigation('blogs', 'sustainability')
                          }
                        />
                        <PopOption
                          text="IPM implementations"
                          callback={() =>
                            popNavigation('faq', 'sustainability')
                          }
                        />
                      </div>
                    </Popover.Panel>
                  </PopTransition>
                </>
              )}
            </Popover>
            <Popover className={'hidden lg:block'}>
              {({ open }) => (
                <>
                  <Popover.Button
                    ref={companyBtn}
                    className="text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center focus:outline-none  focus-visible:text-orange hover:text-orange "
                  >
                    About us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#163e33"
                      className={` ${
                        open ? 'rotate-180' : ''
                      } transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Popover.Button>

                  <PopTransition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="absolute   top-20"
                  >
                    <Popover.Panel className="md:w-[15rem] p-3 rounded-md grid  gap-x-6 bg-white relative right-24">
                      <div className="basis-96  grow shrink  flex flex-col px-2 divide-y-1 divide-slate-200 gap-1">
                        <PopOption
                          text="Our company"
                          callback={() =>
                            popNavigation('/coming-soon', 'company')
                          }
                        />
                        <PopOption
                          text="Resources"
                          callback={() =>
                            popNavigation('/coming-soon', 'company')
                          }
                        />
                        <PopOption
                          text="Blogs and updates"
                          callback={() =>
                            popNavigation('/coming-soon', 'company')
                          }
                        />
                        <PopOption
                          text="Contact us"
                          callback={() => popNavigation('contact', 'company')}
                        />
                        <PopOption
                          text="Careers"
                          callback={() => popNavigation('careers', 'company')}
                        />
                      </div>
                    </Popover.Panel>
                  </PopTransition>
                </>
              )}
            </Popover>
            <div className="flex gap-2 lg:hidden">
              {/* search button */}
              {/* <button
                type="button"
                className="rounded-full  hover:bg-gray-200 outline-none p-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#163e33"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button> */}

              <button
                onClick={() => {
                  toggleMobileNav()
                }}
                type="button"
                className="rounded-full  p-2 md:p-3 hover:bg-gray-200 outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#163e33"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

function PopOption({
  callback,
  text,
}: {
  text: string
  callback: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      type="button"
      onClick={callback}
      className=" py-2 flex flex-nowrap items-center gap-1 group stroke-violet fill-violet font-semibold  outline-none focus:outline-none"
    >
      <span className="group-hover:text-violet group-focus:text-violet text-dark">
        {text}
      </span>
    </button>
  )
}
