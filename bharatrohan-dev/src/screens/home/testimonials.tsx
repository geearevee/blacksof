import Partition from 'molecules/partition'
import React, { useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const testimonialsList = [
  {
    feedback:
      '"Earlier, I used to consult local pesticide shopkeepers after identifying visible crop damage on my farm. They lacked scientific knowledge about pests. Ever since I started using BharatRohan’s CropAssure® services, damage control has been very easy. I get early alerts and scientific advisories to restrict damages well in advance. It guides me about the timing, quantity, and names of the inputs to be applied."',
    name: 'Ashish Kumar, Barabanki ',
    role: '(Beneficiary of CropAssure® programme)',
  },
  {
    feedback:
      '"BharatRohan CropAssure® services provide me with ground-level support for my crops. It helps me resolve challenges across all growth stages. I have thus been able to deliver the exact variety and quality as asked for by large buyers. BharatRohan’s promptness has helped me earn better and make farming profitable."',
    name: 'Umesh Kumar, Barabanki',
    role: '(Beneficiary of CropAssure® programme)',
  },
  {
    feedback:
      '"The next few years are going to be crucial for the procurement of good quality seed spices with minimal residues. With direct sourcing from farmers and the introduction of contract farming through their CropAssure® services, BharatRohan will emerge as a gamechanger in the industry.”',
    name: 'Jayprakash Gurgela',
    role: (
      <>
        Sr Purchase Manager, Aachi Special Foods
        <br />
        (Beneficiary of SourceAssure® programme)
      </>
    ),
  },
  {
    feedback:
      '"Quality has never been an issue with BharatRohan. It always matches our purchase parameters. With them on our side, we are assured of sustainably sourced practices grown employing good farming practices."',
    name: 'Basant Yadav',
    role: (
      <>
        Sr Spices Purchase Manager, MORE Retail Pvt Ltd
        <br />
        (Beneficiary of SourceAssure® programme)
      </>
    ),
  },
]

export default function Testimonials() {
  const [viewIndex, setViewIndex] = useState(0)
  const nodeRef = useRef<any>()

  function slideHandler(type: string) {
    switch (type) {
      case '+':
        if (viewIndex < testimonialsList.length - 1) {
          setViewIndex((prev) => ++prev)
        }
        break
      case '-':
        if (viewIndex > 0) {
          setViewIndex((prev) => --prev)
        }
        break

      default:
        break
    }
  }

  return (
    <section className=" border border-transparent bg-cream blade-top-padding 2xl:blade-top-padding-lg blade-bottom-padding-sm 2xl:blade-bottom-padding">
      <section className="w-container">
        <div>
          <Partition
            text="Testimonials"
            color="dark"
            title=" Stories of impact straight from the ground"
          />
        </div>
      </section>
      <section className="px-2 2xl:blade-top-padding-sm ">
        <section className="max-w-5xl 2xl:max-w-7xl px-1 md:w-11/12  rounded-xl mx-auto">
          <section className="rounded-lg ">
            <SwitchTransition>
              <CSSTransition
                key={viewIndex}
                nodeRef={nodeRef}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <div className="flex p-4 md:p-7 lg:p-9" ref={nodeRef}>
                  <div className="flex-1">
                    <div className="pt-4">
                      <h6 className="font-normal text-base  md:text-lg lg:text-xl xl:text-xl leading-normal px-3 md:px-6 xl:px-10 mx-auto max-w-3xl 2xl:max-w-4xl text-center">
                        {testimonialsList[viewIndex].feedback}
                      </h6>
                    </div>
                    <div className="pt-6 md:pt-8 xl:pt-10 grid gap-1 place-content-center text-center">
                      <h6 className="font-semibold">
                        {testimonialsList[viewIndex].name}
                      </h6>
                      {/* <span className="text-dark text-sm md:text-base"> */}
                      <div className="text-dark">
                        {testimonialsList[viewIndex].role}
                      </div>
                    </div>
                  </div>
                  {/* <div className="grid place-content-start">
                  <img
                    src="https://res.cloudinary.com/rakesh-gupta/image/upload/v1692183459/img_main-case-logo_i60d5x.png"
                    alt=""
                    className="2xl:h-auto xl:h-48 h-20 md:h-36"
                  />
                </div> */}
                </div>
              </CSSTransition>
            </SwitchTransition>
          </section>
          <section className="px-9 mt-1 pb-7 2xl:pb-7 grid place-content-center">
            <div className=" p-[6px] flex gap-4 items-center rounded-full border-1 border-solid border-dark">
              <button
                onClick={() => slideHandler('-')}
                type="button"
                disabled={viewIndex == 0}
                className=" disabled:opacity-30   disabled:cursor-not-allowed p-2 stroke-black hover:fill-white hover:stroke-white rounded-full focus-visible:fill-white focus-visible:stroke-white focus-visible:bg-green fill-black hover:bg-green outline-none"
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
                disabled={viewIndex === testimonialsList.length - 1}
                onClick={() => slideHandler('+')}
                className=" disabled:opacity-30   disabled:cursor-not-allowed  p-2 stroke-black hover:fill-white hover:stroke-white rounded-full focus-visible:fill-white focus-visible:stroke-white focus-visible:bg-green fill-black hover:bg-green outline-none"
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
          </section>
        </section>
      </section>
    </section>
  )
}
