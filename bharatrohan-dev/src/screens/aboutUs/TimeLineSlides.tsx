import ringImage from '../../assets/aboutus/Ellipse 101.svg'
interface TimeLineSlidesProps {
  year: number
}
export default function TimeLineSlides({ year }: TimeLineSlidesProps) {
  return (
    <div className="flex gap-28 justify-between items-center relative  max-[1145px]:flex-wrap">
      <div className="rounded-full flex flex-[0_0_320px] h-80  mt-[-60px] overflow-hidden flex-nowrap max-[1145px]:mx-auto max-[680px]:h-[280px] max-[680px]:flex-[0_0_280px]">
        <img
          src={ringImage}
          alt="ring"
          className="absolute bottom-0 left-[-20px] rotate-[-10deg] w-96 z-40 max-[1145px]:top-0 max-[1145px]:mx-auto max-[1145px]:left-0 max-[1145px]:right-0 max-[1145px]:bottom-auto "
        />
        <div
          className="h-full w-full bg-white flex-shrink-0 rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-red-400 flex-shrink-0 relative rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-purple-500 flex-shrink-0 rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-yellow flex-shrink-0 rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-cyan-400 flex-shrink-0 rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-lime-400 flex-shrink-0 rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
      </div>
      <div className="flex  flex-[0_0_650px] max-[680px]:flex-[0_0_90%] h-52 overflow-hidden text-white max-[1145px]:mx-auto">
        <div
          className="w-full min-w-full h-72 pt-4 px-4 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-4xl font-semibold">2016</h1>
          <p className="text-lg">The inception of BharatRohan in 2016</p>
        </div>
        <div
          className="w-full min-w-full h-72 pt-4 px-4 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-4xl font-semibold">2017</h1>
          <p className="text-lg">
            Operations flags of with 42 farms and farmers as pilot in
            partnership with CSIR-CIMAP Lucknow
          </p>
        </div>
        <div
          className="w-full min-w-full h-72 pt-4 px-4 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-4xl font-semibold">2018</h1>
          <p className="text-lg">Raises Grant from </p>
          <p>a-idea</p>
          <p>BIRAC-BIG</p>
        </div>
        <div
          className="w-full min-w-full h-72 pt-4 px-4 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-4xl font-semibold">2019</h1>
          <p className="text-lg">Outreach expands to 1000 farmers</p>
          <p className="text-lg">Onboards ITC as client for 2 crop cycle</p>
          <p className="text-lg">Raises convertible not from startup Oasis.</p>
        </div>
        <div
          className="w-full min-w-full h-72 pt-4 px-4 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-4xl font-semibold">2020</h1>
          <p className="text-lg">
            Farmer counts jumps to 2,000 followed by 3,600 within 4 months
          </p>
          <p>Enters Rajasthan with cumin and moong bean crops </p>
        </div>
        <div
          className="w-full min-w-full h-72 pt-4 px-4 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-4xl font-semibold">2021</h1>
          <p className="text-lg">Raises revolving credit from Samunnati</p>
          <p className="text-lg">
            6,000 head strong farmer network spanning 30,000 acres becomes a
            reality
          </p>
        </div>
      </div>
    </div>
  )
}
