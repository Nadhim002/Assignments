import React from 'react'

export default function ButtonHolder( { startTimer , stopTimer , resetTimer , timeId  } ) {

  const isTimerRunning = (timeId != null )

  return (
    <div className = "flex gap-6" >
        <button className ="border border-black" onClick = {() => startTimer()  } >Start</button >
        <button className ="border border-black" onClick = {() => stopTimer()  } >Stop</button >
        <button className ="border border-black"  onClick = {() => resetTimer() } >Reset</button >
    </div>
  )
}
