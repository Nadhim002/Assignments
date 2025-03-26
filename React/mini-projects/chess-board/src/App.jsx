import './index.css'
import ChessBoard from "./components/ChessBoard"
import PieceSelector from "./components/PieceSelector"
import { useState } from 'react'

function App() {

  const [ piece , setPiece ] = useState("bishop")
  const [selectedCell, setSelectedCell] = useState(null)
  

  return (
    <>
      <h1 className='text-3xl p-5 m-5 text-center'>Chess Board</h1>
      <PieceSelector pieceSelected  = {piece}  setPiece = { setPiece } setSelectedCell = {setSelectedCell} />
      <div className='flex justify-center py-8'>
        <ChessBoard pieceSelected  = {piece}  setSelectedCell = {setSelectedCell} selectedCell = {selectedCell} />
      </div>
    </>
  )
}

export default App
