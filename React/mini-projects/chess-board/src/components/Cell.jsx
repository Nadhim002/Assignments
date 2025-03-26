import React from 'react'

export default function Cell( { cellNo , setSelectedCell , isInRange  } ) {

  let bgColour = "bg-amber-200"

  const rowNo = Math.ceil(cellNo/8)

  if( isInRange ){
    bgColour = "bg-red-600"
  } else if( (  rowNo%2 != 0 && cellNo %2 == 0) || (  rowNo%2 == 0 && cellNo %2 != 0)  ){
    bgColour = "bg-black"
  }

//   console.log(  cellNo , rowNo ,  bgColour )

  return (

    <div className={'cursor-pointer w-20 h-20 p-0 m-0  ' +  bgColour } onClick={()=> { setSelectedCell(cellNo) }} >
    </div>

  )
}
