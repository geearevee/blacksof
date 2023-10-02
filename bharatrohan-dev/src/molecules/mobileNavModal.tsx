import React, { DispatchWithoutAction } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from 'assets/globals/header_logo.svg'
import { Disclosure } from '@headlessui/react'

export default function MobileNavModal({
  toggle,
}: {
  toggle: DispatchWithoutAction
}) {
  const navigate = useNavigate()
  const navigateTo = (target: string) => {
    navigate(target)
    toggle()
  }

  return (
    <section className="min-h-full bg-white text-dark overflow-auto flex flex-col flex-nowrap   z-[999] ">
      <div className=" flex-0 flex flex-nowrap gap-5 items-center justify-between pl-5 pr-3 border-b-1 border-slate-300 py-3">
        <img src={logo} alt="Buyerr Logo" className="h-[3.125rem]" />
        <button
          type="button"
          onClick={toggle}
          className="rounded-full p-2 stroke-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="inherit"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="bg-slate-50 flex flex-col gap-1 p-2 flex-1">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-lg font-semibold hover:bg-slate-200 w-full py-3 px-3 rounded-md flex  flex-nowrap items-center justify-between gap-2 text-dark">
                <span>For organisations</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-dark`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="mx-1 mt-1 p-3  border-1 border-slate-300 rounded-md grid gap-2 text-base leading-relaxed">
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  SourceAssure®
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  SeedAssure®
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-lg font-semibold hover:bg-slate-200 w-full py-3 px-3 rounded-md flex  flex-nowrap items-center justify-between gap-2 text-dark">
                <span>For farmers</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-dark`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="mx-1 mt-1 p-3  border-1 border-slate-300 rounded-md grid gap-2 text-base leading-relaxed">
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  CropAssure®
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="text-lg font-semibold hover:bg-slate-200 w-full py-3 px-3 rounded-md flex  
              flex-nowrap items-center justify-between gap-2 text-dark"
              >
                <span>Technology</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-dark`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel
                className="mx-1 mt-1 p-3  border-1 border-slate-300 rounded-md grid gap-2 text-base 
              leading-relaxed"
              >
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  UAVs
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  SaaS
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-lg font-semibold hover:bg-slate-200 w-full py-3 px-3 rounded-md flex  flex-nowrap items-center justify-between gap-2 text-dark">
                <span>Sustainability</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-dark`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="mx-1 mt-1 p-3  border-1 border-slate-300 rounded-md grid gap-2 text-base leading-relaxed">
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  How we see sustainability?
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Supply chain traceabilty
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Carbon farming
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  IPM implementations
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-lg font-semibold hover:bg-slate-200 w-full py-3 px-3 rounded-md flex  flex-nowrap items-center justify-between gap-2 text-dark">
                <span>About us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-dark`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="mx-1 mt-1 p-3  border-1 border-slate-300 rounded-md grid gap-2 text-base leading-relaxed">
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Our company
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Resources
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/coming-soon')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Blogs and updates
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/contact')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Contact us
                </button>
                <button
                  role="link"
                  type="button"
                  onClick={() => navigateTo('/careers')}
                  className="hover:underline underline-offset-2 text-left outline-offset-4 "
                >
                  Careers
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <div className="mt-auto pt-10">
          <button
            role="link"
            type="button"
            onClick={() => navigateTo('/coming-soon')}
            className=" bg-violet text-white text-lg font-semibold mb-3  py-3 px-3 rounded-md grid  place-content-center  w-full hover:bg-opacity-90 "
          >
            Get In Touch
          </button>
        </div> */}
      </div>
    </section>
  )
}
