import React from 'react'

export default function InvestAmountSelector( {  investmentAmount , setInvestmentAmount } ) {

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

      <h3 className="font-semibold text-gray-900 my-2">
      {"Investment Amount"}
      </h3>

      <ul className="items-center w-full text-sm font-medium  bg-white ">
        { Object.keys( InvestAmountLevelsMapper ).map(amount => (
          <li 
            key={amount} 
            className="w-full  border-gray-200 rounded-sm  hover:bg-gray-100  px-2 "
          >
            <div className="flex items-center gap-2">
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
                className="w-full py-3 text-sm font-medium  flex items-center "
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
