import droneImg from '../../assets/aboutus/droneimg.png'
import intentImg from '../../assets/aboutus/intent.svg'
export default function Intent() {
  return (
    <div className="bg-white h-max pt-28">
      <div className="flex w-[min(90%,1100px)] mx-auto max-[720px]:flex-wrap">
        <div className="flex-[1_1_50%] pr-2">
          <div className="flex gap-4 items-center">
            <img src={intentImg} alt="intent" />
            <p className="text-green font-semibold text-lg">The intent</p>
            <div className="w-36 block border-t-2 border-green border-solid self-center rounded-md"></div>
          </div>
          <h2 className="pt-10 text-4xl font-medium">
            There's a lot to be <br /> done in very little time.
          </h2>
          <p className="mt-7">
            Deepening climate changes, loss-heavy conventional farming, and
            flawed agri value chain threaten food security and profitability.
            Our intent finds shelter in value-driven change-making for crop
            production and management.
          </p>
          <div className="mt-10 grid grid-rows-[max-content_max-content] grid-cols-[max-content_max-content] gap-x-16 max-[1070px]:gap-x-2 max-[410px]:gap-x-6 max-[410px]:grid-cols-[min-content_min-content]">
            <h2 className="font-medium">19,000</h2>
            <h2 className="col-start-2 font-medium col-span-1">50,000</h2>
            <p>heads-strong farmer base</p>
            <p>acres of farm coverage</p>
          </div>
        </div>
        <div className="flex-[1_1_50%] pl-2 max-[720px]:pl-0 max-[720px]:mt-12">
          <img src={droneImg} className="w-full h-auto" alt="drone" />
        </div>
      </div>
    </div>
  )
}
