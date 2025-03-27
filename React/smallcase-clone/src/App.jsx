import './index.css'
import Filters from "./components/Filters"
import Smallcases from './components/SmallCases'

function App() {

  return (

   <div className='w-[80vw] bg-gray-500 grid grid-cols-[1fr_2fr] '>

      <Filters />
      <Smallcases />


   </div>
  )
}

export default App
