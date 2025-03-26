import React, { useState } from "react"
import Cell from "./Cell"

export default function ChessBoard() {

  const [selectedCell, setSelectedCell] = useState(null)

  function calculateCellsToHighlight(selectedCell) {

    const cellsToHighlight = new Set()
    const boardLength = 8

    if(! selectedCell ){ return cellsToHighlight }

    // Top-left diagonal (-9)
    let topLeftMover = selectedCell
    while (
      topLeftMover > boardLength &&
      (topLeftMover - 1) % boardLength !== 0
    ) {
      topLeftMover -= boardLength + 1
      cellsToHighlight.add(topLeftMover)
    }

    // Top-right diagonal (-7)
    let topRightMover = selectedCell
    while (topRightMover > boardLength && topRightMover % boardLength !== 0) {
      topRightMover -= boardLength - 1
      cellsToHighlight.add(topRightMover)
    }

    // Bottom-left diagonal (+7)
    let bottomLeftMover = selectedCell
    while (
      bottomLeftMover <= 64 - boardLength &&
      (bottomLeftMover - 1) % boardLength !== 0
    ) {
      bottomLeftMover += boardLength - 1
      cellsToHighlight.add(bottomLeftMover)
    }

    // Bottom-right diagonal (+9)
    let bottomRightMover = selectedCell
    while (
      bottomRightMover <= 64 - boardLength &&
      bottomRightMover % boardLength !== 0
    ) {
      bottomRightMover += boardLength + 1
      cellsToHighlight.add(bottomRightMover)
    }

    return cellsToHighlight.add( selectedCell )
  }

  const cellsToHighlight = calculateCellsToHighlight(selectedCell)


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
        />
      )
    }

    return holder
  }

  return (
    <div className="grid grid-cols-8 gap-0  m-0 p-0 w-160">{gridMaker(64)}</div>
  )
}
