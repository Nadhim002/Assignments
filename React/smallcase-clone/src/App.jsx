import './index.css'
import Filters from "./components/Filters"
import Smallcases from './components/SmallCases'
import { useEffect, useState } from 'react'
import { dataFilterHelper } from './FilterHelper/filterHelper'

import smallCases from "./data/smallcases.json"

function App() {

  const [ subscriptionType , setSubscriptionType ] = useState( null )
  const [ investmentAmount , setInvestmentAmount ] = useState( null )
  const [ desiredVolatilities , setDesiredVolatilities ] = useState( new Set() )
  const [ includeNewSmallCase , setIncludeNewSmallCase ] = useState( false )
  const [ preferredInvestmentStrategy , setPreferredInvestmentStrategy ] = useState(  new Set() )

  const [ noOfSmallCaseToShow , setNoOfSmallCaseToShow ] = useState( 10 )
  const [ smallCaseData , setSmallCaseData ] = useState( smallCases["data"] )

  // useEffect( () => {

  //   async function dataFetcher() {

  //     const absolutePathToData = "./data/smallcases.json"
  //     try{
  //       const data = await fetch("./data/smallcases.json")
  //       const jsonData = await data.json()
  //       setSmallCaseData( jsonData["data"]  )
  //       console.log( jsonData["success"] )
  //     }catch (err){
  //       console.log(err)
  //     }
  //   }

  //   dataFetcher()

  // } , [] )

  const filters = {
    subscriptionType,
    investmentAmount,
    desiredVolatilities,
    includeNewSmallCase,
    preferredInvestmentStrategy
  }

  const filteredData = dataFilterHelper( filters , smallCaseData )

  return (

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
  )
}

export default App
