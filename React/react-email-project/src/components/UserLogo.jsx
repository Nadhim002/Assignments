import React from 'react'

export default function UserLogo( {letter} ) {
  return (
    <div className="h-16 w-16 bg-red-500 flex items-center justify-center text-white font-bold shrink-0" >
      { letter.toUpperCase() }
    </div>
  )
}
