import './index.css'
import TopNav from './components/TopNav'
import Filters from "./components/Filters"
import Smallcases from './components/SmallCases'
import { useState } from 'react'
import { dataFilterHelper , dataSortHelper } from './FilterHelper/filterHelper'

import smallCases from "./data/smallcases.json"

function App() {

  const [ subscriptionType , setSubscriptionType ] = useState( null )
  const [ investmentAmount , setInvestmentAmount ] = useState( null )
  const [ desiredVolatilities , setDesiredVolatilities ] = useState( new Set() )
  const [ includeNewSmallCase , setIncludeNewSmallCase ] = useState( false )
  const [ preferredInvestmentStrategy , setPreferredInvestmentStrategy ] = useState(  new Set() )

  const [ smallCaseData , setSmallCaseData ] = useState( smallCases["data"] )

  const [ sortBy , setSortBy ] = useState( 

      {
          selectedFilter: null,
          selectedTimePeriod: "1M",
          sortAscending : true
      }

   )

  const [ filterByName , setFilterByName ] = useState( "" )

  const filters = {
    subscriptionType,
    investmentAmount,
    desiredVolatilities,
    includeNewSmallCase,
    preferredInvestmentStrategy
  }

  const filteredData = dataFilterHelper( filters , smallCaseData )
  const sortedData = dataSortHelper( sortBy ,   smallCaseData )

  return (

    <div>  
      <TopNav setSortBy = { setSortBy } sortBy = { sortBy }  setFilterByName = {setFilterByName} filterByName = {filterByName} />
   <div className='w-[80vw] bg-gray-500 grid grid-cols-[1fr_2fr] '>

      <Filters 
      subscriptionType = {subscriptionType}  
      setSubscriptionType = {setSubscriptionType}
      investmentAmount  = { investmentAmount } 
      setInvestmentAmount = {setInvestmentAmount}
      desiredVolatilities  = { desiredVolatilities }
      setDesiredVolatilities = { setDesiredVolatilities }
      includeNewSmallCase = { includeNewSmallCase }
      setIncludeNewSmallCase = { setIncludeNewSmallCase }
      preferredInvestmentStrategy = { preferredInvestmentStrategy }
      setPreferredInvestmentStrategy = { setPreferredInvestmentStrategy }
      />

      { smallCaseData && <Smallcases  smallCaseData = { filteredData } />}

   </div>

   </div> 
  )
}

export default App
