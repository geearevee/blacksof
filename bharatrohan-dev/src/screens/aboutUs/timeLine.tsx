import { useState, useEffect } from 'react'
import YearLine from './yearLine'
import TimeLineSlides from './TimeLineSlides'
export default function TimeLine() {
  const [year, setYear] = useState(0) // year 0 is 2016
  function incrementYear() {
    if (year < 5) {
      setYear(year + 1)
    } else {
      setYear(0)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      incrementYear()
    }, 2000)
    return () => clearInterval(interval)
  }, [year])
  return (
    <div className="min-h-[100px] bg-green pb-14">
      <div className="mx-auto w-[min(90%,1100px)]">
        <TimeLineSlides year={year} />
        <YearLine year={year} incrementYear={incrementYear} />
      </div>
    </div>
  )
}
