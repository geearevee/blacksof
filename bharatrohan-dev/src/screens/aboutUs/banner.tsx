import { useEffect } from 'react'
import SlidingWords from './slidingWords'
import ringSvg from '../../assets/aboutus/Ellipse 101.svg'
export default function Banner() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="h-max bg-green">
      {/* section title */}
      {/* <h1 className="pt-24">Banner</h1> */}
      <div className="flex text-white  pt-24  mx-auto min-h-screen w-[min(90%,1100px)] max-[940px]:flex-wrap">
        <div className="flex-[1_1_55%] pr-2 pt-24 relative max-[940px]:flex-[1_1_100%]">
          <div className="text-4xl font-normal relative leading-normal max-[940px]:w-[70%] text-left mr-auto ml-0 max-[640px]:w-[90%] max-[500px]:mx-0 max-[500px]:w-full max-[500px]:text-3xl">
            Between creating and piloting drones and rising upto the challenges
            with them, we discovered <SlidingWords />
            <img
              className="absolute left-[120px] bottom-[-180px] max-[940px]:hidden"
              src={ringSvg}
              alt=""
            />
          </div>
        </div>
        <div className="flex-[1_1_40%] text-2xl self-end pb-20 px-4 max-[760px]:px-0 max-[940px]:flex-[1_1_100%] max-[640px]:mt-4 max-[500px]:mt-0">
          <p className="max-[940px]:w-[60%] text-left mr-0 ml-auto max-[760px]:w-full max-[760px]:pt-4 max-[760px]:ml-0 max-[500px]:text-xl">
            we optimize endeavouring globalize undivided impact in the agri
            value chain... we increased crop production, sustainable practices,
            and food security.
          </p>
        </div>
      </div>
    </div>
  )
}
