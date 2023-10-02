import React from 'react'
import Partition from 'molecules/partition'
import globeImage from 'assets/home/globeImage.png'

export default function Impact() {
  return (
    <div className=" ">
      <div className="bg-green blade-top-padding  pb-4 md:pb-6">
        <div className="w-container pt-2 md:pt-5">
          <div>
            <Partition
              text="Impact"
              color="light"
              title="Pushing the envelope with tech proficiency"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-container ">
          <div className="blade-top-padding-lg blade-bottom-padding-lg flex-1">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
              <DataCard stat="19,000" text="farmers enrolled" />
              <DataCard stat="50,000" text="acres of farmland coverage" />
              <DataCard
                stat="32%"
                text="reduction in input costs per acre for farmers"
              />
              <DataCard stat="26%" text="increase in profits for farmers" />
            </div>
          </div>
          <div className="flex-1  pt-10 md:py-10">
            <div className="grid place-content-center max-w-xl mx-auto">
              <img
                src={globeImage}
                alt="Globe shoowing verticals of the BharatRohan"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DataCard({ stat, text }: { stat: string; text: string }) {
  return (
    <article>
      <div className="grid gap-2 w-full">
        <h2 className="font-semibold tracking-wide text-white">{stat}</h2>
        <h6 className="text-white text-opacity-90 max-w-[250px] leading-tight">
          {text}{' '}
        </h6>
      </div>
    </article>
  )
}
