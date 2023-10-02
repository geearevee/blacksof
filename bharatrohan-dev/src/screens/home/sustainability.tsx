import Partition from 'molecules/partition'
import React, { useEffect, useState } from 'react'
import cardIcon from 'assets/dummy/cardIcon.svg'
import Testimonials from './testimonials'

import chain from 'assets/home/final/supply-chain 1.png'
import ipm from 'assets/home/final/ipm.png'
import farming from 'assets/home/final/carbon_farming.png'

const touchPoints = [
  {
    title: 'Supply chain traceability',
    desc: 'Ensuring a safe and transparent supply chain that guarantees residue-free produce for our families, peers, and fellow humans.',
    icon: chain,
    target: '/',
  },
  {
    title: 'Integrated Pest Management',
    desc: 'Ensuring an ecological and cost-efficient approach to pest management that controls pests with minimal pesticides for residue-free and safe-to-consume produce.',
    icon: ipm,
    target: '/',
  },
  {
    title: 'Carbon farming',
    desc: 'Ensuring continuity in the battle against climate change through farming advisories and practices that increase absorption and storage of carbon in the soil for a healthier planet.',
    icon: farming,
    target: '/',
  },
]

export default function Sustainability() {
  return (
    <section className="bg-[url('assets/home/sustainability_bg.png')] bg-cover bg-top">
      <section className="blade-top-padding-sm blade-bottom-padding-sm 2xl:blade-bottom-padding-lg  2xl:blade-top-padding">
        <section className="pt-5 lg:pt-10 blade-bottom-padding-sm 2xl:blade-bottom-padding-lg">
          <div className=" w-container-lg 2xl:w-container pb-1">
            <Partition text="Sustainability" color="light" />
          </div>
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 w-container-lg 2xl:w-container pt-7 xl:pt-7">
            <div>
              <h3 className="font-medium text-white">Giving back to nature</h3>
            </div>
            <div>
              <span className="text-sm block lg:text-lg font-light text-white md:pr-10 w-full leading-normal max-w-xl xl:max-w-2xl mr-4 ml-0 lg:ml-auto">
                BharatRohan’s passion for changing the face of agriculture with
                tech is fueled by a sense of sustainability. Every day, we are
                steadily inching towards a more robust and sustainable world
                with our focus on{' '}
                <strong className="font-bold">
                  nine United Nations Sustainable Development Goals (SDGs)
                </strong>
                . Backing us are our partners, clients, and patrons.
              </span>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 w-container-lg 2xl:w-container gap-y-8 lg:gap-10 blade-top-padding-sm blade-top-margin-sm">
          {touchPoints.map((elem, index) => {
            const key = `${index}`
            return <Card data={elem} key={key} />
          })}
        </section>
      </section>
    </section>
  )
}

type Props = {
  icon: string
  title: string
  desc: string
  target: string
}
function Card({ data }: { data: Props }) {
  const { icon, title, desc, target } = data
  return (
    <article className="pb-10 max-w-lg">
      <div className="flex items-center justify-between gap-3 pb-3 2xl:pb-4 w-11/12 ">
        <div>
          <img className="h-12 xl:h-14 2xl:h-16" src={icon} alt={title} />
        </div>
        <div>
          <button
            type="button"
            className="hidden place-content-center p-3 rounded-full hover:bg-green focus-visible:bg-green outline-none stroke-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="inherit"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white pt-3 pb-3">{title}</h4>
        <span className="font-light text-sm md:text-base w-11/12 text-opacity-70 pr-3 block text-white leading-normal">
          {desc}
        </span>
      </div>
    </article>
  )
}
