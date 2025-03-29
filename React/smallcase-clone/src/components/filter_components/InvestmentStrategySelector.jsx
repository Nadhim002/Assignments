import React from 'react'

export default function InvestmentStrategySelector( {  preferredInvestmentStrategy,
  setPreferredInvestmentStrategy}) {


  const investmentStrategies = [
    "Asset Allocation",
    "Corporate Governance", 
    "Dividend",
    "ESG",
    "Factor Investing", 
    "Fundamental",
    "Goal Based", 
    "Growth",
    "Momentum", 
    "Quality",
    "Quantamental", 
    "Quantitative", 
    "Sector Tracker", 
    "Technical", 
    "Thematic", 
    "Value"
   ]

 function onChangeHandler( investmentStrategy ){

   const newPreferredInvestmentStrategy = new Set( preferredInvestmentStrategy )
   
   if( newPreferredInvestmentStrategy.has( investmentStrategy ) ){
    newPreferredInvestmentStrategy.delete( investmentStrategy )
   } else {
    newPreferredInvestmentStrategy.add( investmentStrategy )
   }

   setPreferredInvestmentStrategy( newPreferredInvestmentStrategy )

 }

  return (
    < div >

    <h3 className="font-semibold text-gray-900 my-2 " >
    {"Investment Strategy"}
    </h3>

    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white ">
      {investmentStrategies.map(investmentStrategy => (
        <li 
          key={investmentStrategy} 
          className="w-full border-b border-gray-200 sm:border-b-0  dark:border-gray-600 mr-2"
        >
          <div className="flex items-center gap-2 hover:bg-gray-100 rounded-sm px-2 w-4/5">
            <input
              id={investmentStrategy}
              type="checkbox"
              name="investmentStrategy"
              className="w-4 h-4 accent-blue-500 mb-2"
              checked = { preferredInvestmentStrategy.has( investmentStrategy  ) }
              onChange={ () => onChangeHandler(investmentStrategy) }
            />
            <label
              htmlFor={investmentStrategy}
              className="w-full py-1 flex items-center"
            >
              {investmentStrategy}
            </label>
          </div>
        </li>
      ))}
    </ul>
  </ div >
  )
}
