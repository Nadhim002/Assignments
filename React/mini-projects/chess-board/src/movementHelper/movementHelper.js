export function bishopMovement(selectedCell) {
  const cellsToHighlight = new Set([selectedCell])
  const boardLength = 8

  let topLeftMover = selectedCell
  while (topLeftMover > boardLength && (topLeftMover - 1) % boardLength !== 0) {
    topLeftMover -= boardLength + 1
    cellsToHighlight.add(topLeftMover)
  }

  let topRightMover = selectedCell
  while (topRightMover > boardLength && topRightMover % boardLength !== 0) {
    topRightMover -= boardLength - 1
    cellsToHighlight.add(topRightMover)
  }

  let bottomLeftMover = selectedCell
  while (
    bottomLeftMover <= 64 - boardLength &&
    (bottomLeftMover - 1) % boardLength !== 0
  ) {
    bottomLeftMover += boardLength - 1
    cellsToHighlight.add(bottomLeftMover)
  }

  let bottomRightMover = selectedCell
  while (
    bottomRightMover <= 64 - boardLength &&
    bottomRightMover % boardLength !== 0
  ) {
    bottomRightMover += boardLength + 1
    cellsToHighlight.add(bottomRightMover)
  }

  return cellsToHighlight
}

export function rookMovement(selectedCell) {

  const cellsToHighlight = new Set([selectedCell])
  const boardLength = 8

  // Curr Col

  let top = selectedCell

  while (top > boardLength) {
    top -= boardLength
    cellsToHighlight.add(top)
  }

  let bottom = selectedCell

  while (bottom + boardLength <= 64) {
    bottom += boardLength
    cellsToHighlight.add(bottom)
  }

  // Curr Row
  const rowStarting = Math.floor((selectedCell - 1) / 8) * 8 + 1
  const rowEnding = rowStarting + 7
  for (let i = rowStarting; i < rowEnding + 1; i++) {
    cellsToHighlight.add(i)
  }

  return cellsToHighlight
}

export function kingMovement(selectedCell) {
  
  const cellsToHighlight = new Set([selectedCell])

  const isColStarting = (selectedCell - 1) % 8 == 0
  const isColEnding = selectedCell % 8 == 0
  const isRowStarting = selectedCell - 8 < 1
  const isRowEnding = selectedCell + 8 > 64

  if (!isColStarting) 
    cellsToHighlight.add(selectedCell - 1)

  if (!isColEnding) 
    cellsToHighlight.add(selectedCell + 1)

  if (!isRowStarting) 
    cellsToHighlight.add(selectedCell - 8)

  if (!isRowEnding) 
    cellsToHighlight.add(selectedCell + 8)

  if (!isColStarting && !isRowStarting) 
    cellsToHighlight.add(selectedCell - 9)

  if (!isColEnding && !isRowStarting) 
    cellsToHighlight.add(selectedCell - 7)

  if (!isColStarting && !isRowEnding) 
    cellsToHighlight.add(selectedCell + 7)

  if (!isColEnding && !isRowEnding) 
    cellsToHighlight.add(selectedCell + 9)

  return cellsToHighlight
}



export function kinghtMovement( selectedCell ){

  const cellsToHighlight = new Set([selectedCell])



}