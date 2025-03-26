import { useRef, useState } from "react"
import "./index.css"
import TimerBlock from "./components/TimerBlock"

function App() {
  const [time, setTime] = useState({
    hours: [0, 0],
    minutes: [0, 0],
    seconds: [0, 0],
  })

  const clockId = useRef(null)


  function timeStateSetter() {
    
    const a = new Date()

    const [hours, minutes, seconds] = [
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
    ]

    setTime({
      hours: [ Math.floor(hours / 10) , hours % 10],
      minutes: [  Math.floor(minutes / 10 ) , minutes % 10],
      seconds: [ Math.floor(seconds / 10 ) ,  seconds % 10],
    })
  }

  function startTimer() {
    if (clockId.current) return

    clockId.current = setInterval(() => {
      timeStateSetter()
    }, 1000)
  }

  startTimer()

  return (
    <>
      <TimerBlock time={time} />
    </>
  )
}

export default App
