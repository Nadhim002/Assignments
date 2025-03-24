import './index.css'
import "../src/components/Filter"
import Filter from "./components/Filter"
import { useState } from 'react'
import MainBody from './components/MainBody'

function App() {

  const [ selectedMail , setSelectedMail ] = useState( null )
  const [ filter , setFilter ] = useState(null)

  return (
    <>
      <Filter />
      <MainBody filter = {filter}   />
    </>
  )
}

export default App
