import React from 'react'

export default function Loader({message , isError }) {

  const textColor =  isError ?  " text-red-200" : " text-indigo-400"

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <span className = {"bg-white px-4 py-2 rounded-md " + textColor  }>{message}</span>
     </div>
  )
}
