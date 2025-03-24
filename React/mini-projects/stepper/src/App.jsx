import "./index.css"
import Stepper from "./components/Stepper"
import { useState } from "react"
import {data , pageData } from "./data/data.js"

function App() {

  const [ currPage , setCurrPage ] = useState(1)

  function prevOnClickHandler( e ){
      e.preventDefault()
      setCurrPage( currPage - 1 )
  }

  function nextOnClickHandler( e ){
    e.preventDefault()
    setCurrPage( currPage + 1 )
  }

  return (
    < div >
      <h2 className="text-center text-3xl p-6">Stepper</h2>
      <Stepper currPage = {currPage} pageData = {pageData} />
      <div className="flex justify-center" > { data[ currPage - 1 ]}</div>
      <div className="buuton-holder flex justify-center gap-12">
        <button onClick={ ( e ) => prevOnClickHandler( e ) }  disabled = { currPage == 1 }  className = {"p-2 border border-black bg-gray-400" + (( currPage == 1  ) ? "opacity-50" : "") } >Previous</button>
        <button onClick={ ( e ) => nextOnClickHandler( e ) }  disabled = { currPage == 5 } className = {"p-2 border border-black bg-gray-400" + (( currPage == 5  ) ? "opacity-50" : "" )} >{ (currPage < 4) ? "Next" : "Finish" }</button>
      </div>
    </div>
  )
}

export default App
