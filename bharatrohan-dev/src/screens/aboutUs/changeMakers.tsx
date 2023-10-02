import { useState } from 'react'
import teamImage from '../../assets/aboutus/ourteam.jpg'
import whiteLeftArrow from '../../assets/aboutus/silider-left-white.svg'
import whiteRightArrow from '../../assets/aboutus/silider-right-white.svg'
import leftArrow from '../../assets/aboutus/silider-left.svg'
import rightArrow from '../../assets/aboutus/silider-right.svg'
export default function ChangeMakers() {
  const [activeSlide, setActiveSlide] = useState(0)
  function nextSlide() {
    if (activeSlide === 2) return
    setActiveSlide((prev) => prev + 1)
  }
  function prevSlide() {
    if (activeSlide === 0) return
    setActiveSlide((prev) => prev - 1)
  }
  return (
    <div className="bg-white">
      <div className="w-[min(90%,1100px)] mx-auto flow-root pb-20">
        <div className="mt-20">
          <h4 className="text-center">Our team</h4>
          <h2 className="text-center">Changemakers in action</h2>
        </div>
        <div className="mt-14 relative h-max w-max mx-auto">
          <div className="flex w-[900px] w-max-[900px] max-[1000px]:w-[500px] max-[1000px]:w-max-[500px] max-[550px]:w-[400px] max-[550px]:w-max-[400px]  max-[500px]:w-[350px] max-[500px]:w-max-[350px]  overflow-hidden flex-nowrap">
            <div
              className={`flex-[0_0_100%] h-max  transition-transform duration-300 ease-in-out`}
              style={{ transform: `translateX(-${100 * activeSlide}%)` }}
            >
              <img
                src={teamImage}
                className="w-full h-auto rounded-xl"
                alt="team"
              />
            </div>
            <div
              className={`flex-[0_0_100%] h-max transition-transform duration-300 ease-in-out`}
              style={{ transform: `translateX(-${100 * activeSlide}%)` }}
            >
              <img
                src={teamImage}
                className="w-full h-auto rounded-xl"
                alt="team"
              />
            </div>
            <div
              className={`flex-[0_0_100%] h-max transition-transform duration-300 ease-in-out`}
              style={{ transform: `translateX(-${100 * activeSlide}%)` }}
            >
              <img
                src={teamImage}
                className="w-full h-auto rounded-xl"
                alt="team"
              />
            </div>
          </div>
          {/* slide controls */}
          <div className="absolute bg-white rounded-[100px] w-24 h-12 p-2 bottom-5 left-5 flex justify-between">
            {activeSlide > 0 ? (
              <div
                className="h-8 w-8 flex justify-center items-center rounded-full bg-green cursor-pointer"
                onClick={prevSlide}
              >
                <img src={whiteLeftArrow} className="w-4/5 h-auto" alt="" />
              </div>
            ) : (
              <div
                className="h-8 w-8 flex justify-center items-center rounded-full cursor-not-allowed"
                onClick={prevSlide}
              >
                <img src={leftArrow} className="w-4/5 h-auto" alt="" />
              </div>
            )}
            {activeSlide < 2 ? (
              <div
                className="h-8 w-8 flex justify-center items-center rounded-full bg-green cursor-pointer"
                onClick={nextSlide}
              >
                <img src={whiteRightArrow} className="w-4/5 h-auto" alt="" />
              </div>
            ) : (
              <div
                className="h-8 w-8 flex justify-center items-center rounded-full cursor-not-allowed"
                onClick={nextSlide}
              >
                <img src={rightArrow} className="w-4/5 h-auto" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
