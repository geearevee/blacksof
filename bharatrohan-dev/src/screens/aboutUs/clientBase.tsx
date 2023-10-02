import { useEffect, useRef, useState } from 'react'
import client1 from '../../assets/aboutus/logo-aachi.png'
import client2 from '../../assets/aboutus/logo_More.png'
import client3 from '../../assets/aboutus/logo_dabur.png'
import client4 from '../../assets/aboutus/logo_itc.png'
import client5 from '../../assets/aboutus/Logo_UPL.png'
import client6 from '../../assets/aboutus/suhan-logo-new.png'
import client7 from '../../assets/aboutus/advanta_logo.png'
import baseMap from '../../assets/aboutus/worldmap.png'
import overlayMap from '../../assets/aboutus/worldmapdark.png'

export default function ClientBase() {
  const clientList = [
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

  const imageRef = useRef<HTMLImageElement>(null)
  //   observing targetRef instead of imageRef because if a image is clipped completely then it will not be visible to observer
  const targetRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageRef.current?.classList.add('remove-clip')
          } else {
            imageRef.current?.classList.remove('remove-clip')
          }
        })
      },
      { rootMargin: '0px', threshold: 1.0 },
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])
  return (
    <div className="bg-cream py-24 flow-root">
      <h4 className="text-center text-2xl font-medium">Strong clients base</h4>
      <div className="min-[900px]:hidden overflow-hidden my-14 w-full ">
        <div className="flex gap-8 w-max marquee-aboutUs ">
          {clientList.concat(clientList).map((client, index) => (
            <img
              key={`aboutus-${index}-${client}}`}
              src={client}
              alt="client"
              aria-hidden={index > clientList.length}
              className="h-14 w-auto grayscale-[1]"
            />
          ))}
        </div>
      </div>
      <div className="flex gap-5 justify-between my-10 w-[min(90%,1000px)] mx-auto max-[900px]:hidden overflow-hidden">
        <img
          src={client1}
          alt="client1"
          className="h-14 w-auto grayscale-[1]"
        />
        <img
          src={client2}
          alt="client2"
          className="h-14 w-auto grayscale-[1]"
        />
        <img
          src={client3}
          alt="client3"
          className="h-14 w-auto grayscale-[1]"
        />
        <img
          src={client4}
          alt="client4"
          className="h-14 w-auto grayscale-[1]"
        />
        <img
          src={client5}
          alt="client5"
          className="h-14 w-auto grayscale-[1]"
        />
        <img
          src={client6}
          alt="client6"
          className="h-14 w-auto grayscale-[1]"
        />
        <img
          src={client7}
          alt="client7"
          className="h-14 w-auto grayscale-[1]"
        />
      </div>
      <div className="w-[min(90%,1100px)] mx-auto">
        <div className="mt-28 relative">
          <img
            src={overlayMap}
            ref={imageRef}
            className="absolute top-0  z-20 clipImage"
            alt=""
          />
          <img ref={targetRef} src={baseMap} alt="map" />
        </div>
      </div>
    </div>
  )
}
