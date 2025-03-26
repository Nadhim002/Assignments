import React, { useState } from "react"
import Cell from "./Cell"

import { bishopMovement , rookMovement , kingMovement  } from "../movementHelper/movementHelper.js"

export default function ChessBoard({
  pieceSelected,
  setSelectedCell,
  selectedCell,
}) {

  let cellsToHighlight 

  if( ! selectedCell ){
    cellsToHighlight = new Set()
  }
  else if (pieceSelected == "bishop") {
    cellsToHighlight = bishopMovement(selectedCell)
  } else if (pieceSelected == "rook") {
    cellsToHighlight = rookMovement(selectedCell)
  }else if (pieceSelected == "queen") {
    cellsToHighlight = new Set( [...rookMovement(selectedCell) , ...bishopMovement(selectedCell) ]  ) 
  }else if (pieceSelected == "king") {
    cellsToHighlight =   kingMovement( selectedCell )
  }

  function gridMaker(noOfSquares) {
    let holder = []

    for (let index = 1; index <= noOfSquares; index++) {
      let isInRange = false
      if (cellsToHighlight.has(index)) {
        isInRange = true
      }

      holder.push(
        <Cell
          cellNo={index}
          key={index}
          setSelectedCell={setSelectedCell}
          isInRange={isInRange}
          selectedCell = {selectedCell}
        />
      )
    }

    return holder
  }

  return (
    <div className="grid grid-cols-8 gap-0  m-0 p-0 w-160 justify-center">
      {gridMaker(64)}
    </div>
  )
}
