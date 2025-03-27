import React from 'react'

export default function LaunchDateSelector() {
  return (
    <div className='flex gap-2 p-4 items-center' >

      <input type="checkbox"  id="launch-date" className='mb-2'/>
      <label htmlFor="launch-date">{"Include new smallcases"}</label>

    </div>
  )
}
