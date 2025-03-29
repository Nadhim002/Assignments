import React from 'react'

export default function NothingFound({clearAllHandler}) {
  return (
    <div className='flex justify-center items-center '>
        <div className=' flex flex-col justify-center items-center  bg-yellow-200 rounded-sm mb-50 px-10 py-5'>
            <span> {"Kindly Reduce the No of Filter 😼"} </span>
            <button onClick={clearAllHandler} className='px-2 py-1 border border-green-300 bg-red-400'>{"Click here to remove all filters"}</button>
        </div>
    </div>
  )
}
