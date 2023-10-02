import React from 'react'
import Partition from 'molecules/partition'

import ecoInvestor1 from 'assets/home/investors/Ecosystem_Partners/Group 39907.svg'
import ecoInvestor2 from 'assets/home/investors/Ecosystem_Partners/image 339.svg'
import ecoInvestor3 from 'assets/home/investors/Ecosystem_Partners/CIIE final 3.png'
import ecoInvestor4 from 'assets/home/investors/Ecosystem_Partners/image 341.svg'
import ecoInvestor5 from 'assets/home/investors/Ecosystem_Partners/image 342.svg'
import ecoInvestor6 from 'assets/home/investors/Ecosystem_Partners/image 343.svg'

import investor1 from 'assets/home/investors/INVESTORS/Group 39905.svg'
import investor2 from 'assets/home/investors/INVESTORS/Villgro.svg'
import investor3 from 'assets/home/investors/INVESTORS/image 333.png'
import investor4 from 'assets/home/investors/INVESTORS/image 335.svg'
import investor5 from 'assets/home/investors/INVESTORS/image 336.svg'
import investor6 from 'assets/home/investors/INVESTORS/image 338.svg'

import supplyChain1 from 'assets/home/investors/Supplychain/image 345.svg'
import supplyChain2 from 'assets/home/investors/Supplychain/final 2.png'
import supplyChain3 from 'assets/home/investors/Supplychain/image 347.svg'
import supplyChain4 from 'assets/home/investors/Supplychain/image 348.svg'
import supplyChain5 from 'assets/home/investors/Supplychain/image 349.svg'

const ecosystemInvestors = [
  investor1,
  investor2,
  investor3,
  investor4,
  investor5,
  investor6,
]
const investors = [
  ecoInvestor1,
  ecoInvestor2,
  ecoInvestor3,
  ecoInvestor5,
  ecoInvestor6,
]
const supplyChain = [
  supplyChain1,
  supplyChain2,
  supplyChain3,
  supplyChain4,
  supplyChain5,
]

export default function Investors() {
  return (
    <section className="bg-cream blade-top-padding 2xl:blade-top-padding-lg blade-bottom-padding-lg">
      <section className=" w-container-xl 2xl:w-container">
        <section className="md:grid md:grid-cols-5 grid-cols-1 ">
          <section className="col-start-1 col-end-3">
            <div className="md:sticky top-36 blade-bottom-padding-lg">
              <Partition
                color="dark"
                text="Investors and partners"
                title="Believers of our resolve"
              />
            </div>
          </section>
          <section className="col-start-3 pt-8 md:pt-0 col-end-6 w-11/12 md:ml-auto ">
            <div>
              <h5 className="font-semibold text-green">Investors</h5>
              <div className="grid grid-cols-3 gap-x-3 gap-y-2  pt-3  md:pt-6">
                {ecosystemInvestors.map((elem, index: number) => {
                  const key = `${index}`
                  return <Elem cover={elem} key={key} />
                })}
              </div>
            </div>
            <div className="pt-8 md:pt-12 lg:pt-20">
              <h5 className="font-semibold text-green">Ecosystem partners</h5>
              <div className="grid grid-cols-3 gap-x-3 gap-y-2  pt-3  md:pt-4 ">
                {investors.map((elem, index: number) => {
                  const key = `${index}`
                  return <Elem cover={elem} key={key} />
                })}
              </div>
            </div>
            <div className="pt-8 md:pt-12 lg:pt-20">
              <h5 className="font-semibold text-green">
                Supply chain finance partners
              </h5>
              <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-2 gap-x-5 lg:gap-x-10  pt-4">
                {supplyChain.map((elem, index: number) => {
                  const key = `${index}`
                  return <Elem cover={elem} key={key} />
                })}
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}

function Elem({
  cover,
  desc = 'Logo of investors of BharatRohan',
}: {
  cover: string
  desc?: string
}) {
  return (
    <article className="overflow-hidden rounded-md p-3 lg:p-6 place-items-center">
      <div className="grid place-content-center place-items-center ">
        <img
          src={cover}
          alt={desc}
          className="object-contain h-14 lg:h-16 my-auto object-center select-none pointer-events-none"
        />
      </div>
    </article>
  )
}
