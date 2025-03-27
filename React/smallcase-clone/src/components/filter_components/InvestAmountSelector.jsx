import React from 'react'

export default function InvestAmountSelector( {  investmentAmount , setInvestmentAmount } ) {

  const InvestAmountLevels = [ "Any", "Under ₹ 5,000", "Under ₹ 25,000" , "Under ₹ 50,000" ]

  const InvestAmountLevelsMapper =
                       { 
                         "Any" : null , 
                         "Under ₹ 5,000" : 5000 ,
                         "Under ₹ 25,000" : 25000 ,
                         "Under ₹ 50,000" : 50000 
                        }

  function onChangeHandler( amount ){
    setInvestmentAmount( InvestAmountLevelsMapper[ amount ] )
  }

  return (
    < div >

      <h3 className="font-semibold text-gray-900 dark:text-white">
      {"Investment Amount"}
      </h3>

      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border">
        {InvestAmountLevels.map(amount => (
          <li 
            key={amount} 
            className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div className="flex items-center ps-3">
              <input
                id={amount}
                type="radio"
                name="InvestAmountLevels"
                className="w-4 h-4 accent-blue-500 mb-2"
                checked = { investmentAmount == InvestAmountLevelsMapper[amount] }
                onChange= { () => { onChangeHandler( amount ) } }
              />
              <label
                htmlFor={amount}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center"
              >
                {amount}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </ div >
  )

}
