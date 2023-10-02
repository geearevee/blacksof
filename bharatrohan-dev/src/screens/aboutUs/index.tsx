import './aboutUs.css'
import Banner from './banner'
import Intent from './intent'
import ClientBase from './clientBase'
import Journey from './journey'
import TimeLine from './timeLine'
import Vision from './vision'
import ValueSystem from './valueSystem'
import ChangeMakers from './changeMakers'
import JoinUs from './joinUs'
export default function PageAboutUs() {
  return (
    <div>
      <div className="min-h-screen w-full">
        <Banner />
        <Intent />
        <ClientBase />
        <Journey />
        <TimeLine />
        <Vision />
        <ValueSystem />
        <ChangeMakers />
        <JoinUs />
      </div>
    </div>
  )
}
