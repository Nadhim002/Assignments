import React from "react"

export default function SubscriptionSelector() {

  const subscriptionsAvailable = ["Show all", "Free Access", "Fee Based"]

  return (
    <div className="px-5">

      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Identification
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">

      {subscriptionsAvailable.map( subscription =>  

        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r" 
        key={subscription} 
        >
          <div className="flex items-center justify-center">
            <input
              id={subscription}
              type="radio"
              name="subscription-selector"
              className="hidden peer"
            />
            <label
              htmlFor = {subscription}
              className ="block w-full py-3 text-sm font-medium text-gray-900 text-center 
              peer-checked:bg-yellow-300 hover:bg-gray-100 
              cursor-pointer "
            >
              {subscription}
            </label>
          </div>
        </li>

      ) }

      </ul>

    </div>
  )
}
