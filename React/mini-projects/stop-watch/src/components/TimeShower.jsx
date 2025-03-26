import React from 'react'

export default function TimeShower( { timeInMs } ) {

  const timeInMinutes = Math.floor(timeInMs / 60000 )
  const timeInSeconds = Math.floor(( timeInMs%60000 )/1000)
  const timeInMilliSeconds = timeInMs%1000 

  return (
    <div> {`${timeInMinutes}:${timeInSeconds}:${timeInMilliSeconds}`} </div>
  )
}
