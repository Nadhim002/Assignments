import React, { useState , useRef } from "react"
import ButtonHolder from "./ButtonHolder"
import TimeShower from "./TimeShower"

export default function StopWatch() {

  const [time, setTime] = useState(0)
  const timeId = useRef(null)

  function startTimer() {

    console.log( timeId.current )

    if ( timeId.current != null ){ return }

    const startTime = Date.now() - time

    const timer = setInterval(() => {
      setTime( Date.now() -  startTime )
    }, 3 )

    timeId.current = timer

  }

  function stopTimer() {

    clearInterval(timeId.current)
    timeId.current = null

  }

  function resetTimer() {
    clearInterval(timeId.current)
    setTime(0)
    timeId.current = null
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>StopWatch</h1>
      <TimeShower timeInMs={time} />
      <ButtonHolder
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        timeId = {timeId.current}
      />
    </div>
  )
}
