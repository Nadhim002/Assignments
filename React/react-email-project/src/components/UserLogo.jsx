import React from 'react'

export default function UserLogo( {letter} ) {
  return (
    <div className="h-15 w-15 bg-red-500 flex items-center justify-center text-white font-bold">
    { letter.toUpperCase() }
  </div>
  )
}
