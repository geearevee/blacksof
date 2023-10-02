import React, { useLayoutEffect } from 'react'

export default function PageError404() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg min-h-[450px] bg-cream">
      <section className="h-96 grid place-content-center gap-1 md:gap-4 text-center blade-top-padding">
        <h1 className="font-bold tracking-wide md:block hidden">
          Coming Soon...
        </h1>
        <h2 className="font-bold tracking-wide md:hidden block">
          Coming Soon...
        </h2>
        <h6 className="font-medium md:block hidden ">
          We&apos;ll be live quite soon.
        </h6>
        <small className=" text-sm md:hidden block font-medium">
          We&apos;ll be live quite soon.
        </small>
      </section>
    </section>
  )
}
