import React from "react"

export default function PieceSelector( { pieceSelected , setPiece , setSelectedCell   } ) {
  const pieces = ["bishop", "rook", "king", "knight", "queen"]

  return (
    <div className="flex gap-6 p -6 justify-center">
      {pieces.map( (piece , index ) => (
        <div key={index} >
          <input type="checkbox" id={piece} className="sr-only peer" checked = { pieceSelected == piece } onChange={ () =>  {
            setPiece(piece)
            setSelectedCell(null)
            }}/>
          <label htmlFor={piece} className="peer-checked:bg-blue-600 px-4 py-2 rounded-2xl" >{piece}</label>
        </div>
      ))}
    </div>
  )
}
