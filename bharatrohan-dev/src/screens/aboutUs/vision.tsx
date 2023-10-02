import { useState, useEffect, useRef } from 'react'
import VisionImage from '../../assets/aboutus/visionbg.jpg'
import intentImage from '../../assets/aboutus/visionelementwhite.svg'
export default function Vision() {
  const [visionActive, setVisionActive] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisionActive(false)
        }
      })
    }, options)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <div
      ref={sectionRef}
      className="py-36 relative before:content-[''] bg-cover bg-no-repeat max-[1145px]:bg-[length:100%_2000px] before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:absolute"
      style={{ backgroundImage: `url(${VisionImage})` }}
    >
      <div className="w-[min(90%,1100px)] mx-auto flex gap-64 max-[1145px]:gap-4 max-[1145px]:flex-col">
        <div className="relative text-white flex-[0_0_max-content] max-[1145px]:ml-12">
          <h3
            onClick={() => setVisionActive(true)}
            className={`border-b-2 w-32 py-2 pr-2 pl-1 border-white border-solid cursor-pointer select-none transition-all ease-in-out duration-300 ${
              visionActive ? 'text-white' : 'text-slate-100/80'
            }`}
          >
            Vision
          </h3>
          <h3
            onClick={() => setVisionActive(false)}
            className={`border-t-2 w-32 py-2 pr-2 pl-1 border-white border-solid cursor-pointer select-none transition-all ease-in-out duration-300 ${
              !visionActive ? 'text-white' : 'text-slate-100/80'
            }`}
          >
            Mission
          </h3>
          <img
            src={intentImage}
            className={`absolute top-5 left-[-50px] transition-all ease-in-out duration-300 ${
              visionActive
                ? 'translate-y-0 max-[1145px]:translate-y-[-5px]'
                : 'translate-y-14 max-[1145px]:translate-y-12'
            }`}
            alt="intent"
          />
          {/* translate-y-14 */}
        </div>
        <div
          className={` text-white h-[430px] overflow-hidden ${
            !visionActive && 'max-[1145px]:h-max'
          }`}
        >
          <p
            className={`text-2xl relative z-10 transition-all ease-in-out duration-300 ${
              visionActive ? 'mt-60' : 'translate-y-[-100%] opacity-0'
            }`}
          >
            Revitalizing Indian agriculture by enabling farmers to grow
            profitably for a sustainable food supply chain with the use of
            technology
          </p>
          <div
            className={`text-2xl relative z-10 gap-4 flex flex-col  transition-all  ease-in-out duration-300 ${
              !visionActive
                ? 'mt-[-100px] max-[1145px]:mt-[-60px]'
                : 'mt-8 opacity-0'
            }`}
          >
            <p>
              To empower the agricultural community through our end-to-end
              decision support system and drone technology.
            </p>
            <p className="text-2xl relative z-10">
              We are committed to transform the traditional farming practices
              with technological integration to provide precise, actionable
              insights that enhance crop health, optimize resource utilization,
              and promote sustainable agriculture. Through our innovative
              solutions, we aim to bridge the technological divide, ensuring
              that the farmers are well-equipped with the knowledge and tools
              they need to thrive in a rapidly changing world, thereby securing
              food sustainability, for the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
