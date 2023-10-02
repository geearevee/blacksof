import intentImg from '../../assets/aboutus/intent.svg'
export default function Journey() {
  return (
    <div className="bg-cream2">
      <div className="w-[min(90%,1100px)] mx-auto py-24">
        <div className="flex  gap-4 items-center">
          <img src={intentImg} alt="intent" />
          <p className="text-green font-semibold text-lg">The intent</p>
          <div className=" block border-t-2 border-green border-solid self-center rounded-md flex-[1_1_auto]"></div>
        </div>
        <div className="flex m-4 max-[600px]:flex-col max-[600px]:gap-4">
          <h2 className="flex-[1_1_50%]">A journey in the making</h2>
          <div className="flex-[1_1_50%] flex gap-3 flex-col">
            <p>
              Two emerging aerounautical engineers, Amandeep Panwar and Rishabh
              Choudharyk stumbled upon farmers plight while testing drones in
              farms of Barabanki. Uttar Pradesh. The idea of creting an
              end-to-end decision support system for farmers practising
              conventional farming sprouted in their curious minds{' '}
            </p>
            <p>
              With research and Dr K.D. singh's guidance. they spotted a
              solution in drone-based hyperspatial imagery technology
            </p>
            <p>The rest, as they say, is history in making</p>
          </div>
        </div>
      </div>
    </div>
  )
}
