/* eslint-disable no-duplicate-imports */
import React from 'react'
import Partition from 'molecules/partition'

import client1 from 'assets/home/clients/image 322.svg'
import client2 from 'assets/home/clients/image 323.svg'
import client3 from 'assets/home/clients/image 324.svg'
import client4 from 'assets/home/clients/image 326.svg'
import client5 from 'assets/home/clients/image 327.svg'
import client6 from 'assets/home/clients/image 328.svg'
import client7 from 'assets/home/clients/image 329.svg'

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,

  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,

  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
]

export default function Clients() {
  return (
    <section className="bg-darkCream   blade-bottom-padding-sm 2xl:blade-top-padding blade-bottom-padding-sm 2xl:blade-bottom-padding">
      <section className="blade-bottom-padding-sm 2xl:blade-bottom-padding">
        <section className="pt-5 w-container">
          <section>
            <Partition
              title=" Enriching the agri value chain one client at a time"
              color="dark"
              text="Clients"
            />
          </section>
        </section>
        <section className="blade-top-padding-sm">
          <div className="flex gap-4 md:gap-8 select-none w-full overflow-hidden">
            <div className="flex gap-4 pt-6 md:gap-8 marquee">
              {logos.map((elem) => {
                return (
                  <div
                    key={elem}
                    className="h-fit  grid place-content-center max-w-[140px] md:max-w-[240px] mx-6"
                  >
                    <img
                      src={elem}
                      aria-hidden
                      alt="dummy icon"
                      className="h-full w-full object-contain object-center scale-90"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

function ClientCard({ icon, name }: { icon: string; name?: string }) {
  return (
    <article className="py-10 grid place-content-center">
      <div>
        <img src={icon} alt={name} className="scale-90" />
      </div>
    </article>
  )
}
function Client() {
  return (
    <svg
      width="110"
      height="125"
      viewBox="0 0 110 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x="0.805176"
          y="0.533203"
          width="108.356"
          height="123.836"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.0142857 0.0125)" />
        </pattern>
        <image id="image0_1_2364" width="70" height="80" />
      </defs>
    </svg>
  )
}
