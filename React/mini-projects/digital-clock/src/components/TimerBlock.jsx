import React from 'react'
import Number from './Number'

export default function TimerBlock( { time } ) {

  return (

    <div className='flex gap-3 justify-center p-10 m-10 bg-black'>

        { time["hours"].map( (number) =>  <Number number = {number}/> ) }
        { time["minutes"].map( (number) =>  <Number number = {number}/> ) }
        { time["seconds"].map( (number) =>  <Number number = {number}/> ) }

    </div>
  )
}
