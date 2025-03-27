import './index.css'
import Filters from "./components/Filters"
import Smallcases from './components/SmallCases'
import { useEffect, useState } from 'react'


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
  //       const data = await fsp.readFile( absolutePathToData , "utf-8")
  //       const parsedData = JSON.parse(  data )
  //       setSmallCaseData( parsedData["data"]  )
  //       console.log( parsedData["success"] )
  //     }catch (err){
  //       console.log(err)
  //     }
  //   }

  //   dataFetcher()

  // } , [] )

  const state = {
    subscriptionType,
    investmentAmount,
    desiredVolatilities,
    includeNewSmallCase,
    preferredInvestmentStrategy
  }

  // console.log( state  )
  


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

      { smallCaseData && <Smallcases  smallCaseData = { smallCaseData } />}


   </div>
  )
}

export default App
