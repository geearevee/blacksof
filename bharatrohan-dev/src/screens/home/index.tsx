import React, { useLayoutEffect, useEffect } from 'react'
// import BlogsSection from 'organisms/blogs'
import Testimonials from './testimonials'
import Sustainability from './sustainability'
import Technology from './technology'
import Solutions from './solutions'
import Clients from './clients'
import EcoSystem from './ecosystem'
import './home.css'
import Impact from './impact'
import Banner from './banner'
import Investors from './investors'

export default function PageHome() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/* <Banner />
      <Solutions />
      <Clients />
      <EcoSystem />
      <Technology />
      <Impact />
      <Testimonials />
      <Sustainability />
      <Investors />
      <BlogsSection /> */}
      <div className="h-screen w-full">
        <h1 className="pt-24">Home</h1>
      </div>
    </div>
  )
}
