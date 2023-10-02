import ringImage from '../../assets/aboutus/Ellipse 101.svg'
import img1 from '../../assets/aboutus/Mask group-1.jpg'
import img3 from '../../assets/aboutus/Mask group-3.jpg'
import img4 from '../../assets/aboutus/Mask group-4.jpg'
export default function JoinUs() {
  return (
    <div className="bg-white ">
      <div className="mx-auto w-[min(90%,1100px) flex justify-center items-center relative py-48">
        <div className="absolute top-[40%] left-[10%] h-24 w-24 max-[1170px]:h-16 max-[1170px]:w-16 max-[1170px]:top-[20%] max-[1170px]:left-[5%] rounded-full transition-all ease-in-out duration-300 hover:scale-[1.75]">
          <img
            src={img1}
            alt=""
            className="h-ful w-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-[40%] right-[10%] h-24 w-24 max-[1170px]:h-16 max-[1170px]:w-16 max-[1170px]:top-0 max-[1170px]:right-[5%] rounded-full  transition-all ease-in-out duration-300 hover:scale-[1.75]">
          <img
            src={img1}
            alt=""
            className="h-ful w-full object-cover rounded-full"
          />
        </div>
        <div className="absolute left-[20%] bottom-[20%] max-[1170px]:left-[10%] max-[1170px]:bottom-[10%] h-28 w-28 rounded-full  transition-all ease-in-out duration-300 hover:scale-[1.75]">
          <img
            src={img3}
            alt=""
            className="h-ful w-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-[10%] right-[20%] h-28 w-28 rounded-full  transition-all ease-in-out duration-300 hover:scale-[1.75]">
          <img
            src={img3}
            alt=""
            className="h-ful w-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-[10%] left-[20%] h-20 w-20 rounded-full  transition-all ease-in-out duration-300 hover:scale-[1.75]">
          <img
            src={img4}
            alt=""
            className="h-ful w-full object-cover rounded-full"
          />
        </div>
        <div className="absolute right-[20%] bottom-[20%] max-[1170px]:right-[15%] max-[1170px]:bottom-[10%] h-20 w-20 rounded-full  transition-all ease-in-out duration-300 hover:scale-[1.75]">
          <img
            src={img4}
            alt=""
            className="h-ful w-full object-cover rounded-full"
          />
        </div>
        <div className="absolute h-20 w-20 left-[20%] top-[50%] rounded-full bg-yellow-dark opacity-40"></div>
        <div className="absolute h-20 w-20 right-[20%] top-[35%] rounded-full bg-yellow opacity-40"></div>
        <div className="relative bg-cream2 justify-center flex items-center rounded-full w-[600px] h-[600px] max-[1365px]:h-[500px] max-[1365px]:w-[500px] max-[570px]:h-[300px] max-[570px]:w-[300px]">
          <img
            src={ringImage}
            alt="ring"
            className="absolute bottom-4 left-4 h-auto w-[200%] rotate-6"
          />
          <div>
            <h3 className="w-2/3 mx-auto text-center">
              Want to be one among Us?
            </h3>
            <button className="block rounded-3xl mx-auto w-max text-center bg-green px-10 py-3 mt-4 text-white relative z-40">
              Join us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
