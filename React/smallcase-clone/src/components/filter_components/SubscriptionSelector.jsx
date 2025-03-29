import React from "react"
import {subscriptionsAvailableMapper} from "../../data/mappers.js"

export default function SubscriptionSelector({
  setSubscriptionType,
  subscriptionType,
}) {


  function onChangeHandler(subscription) {
    setSubscriptionType(subscriptionsAvailableMapper[subscription])
  }

  return (
    <div>
      <p className="font-semibold text-gray-900 my-2">Subscription Type</p>
      <ul className="flex border border-gray-200 justify-evenly text-center rounded-lg text-md mr-2">
        {Object.keys(subscriptionsAvailableMapper).map((subscription) => (
          <li  key={subscription} >
            <input
              id={subscription}
              type="radio"
              name="subscription-selector"
              className="hidden peer"
              onChange={() => onChangeHandler(subscription)}
              checked={
                subscriptionType === subscriptionsAvailableMapper[subscription]
              }
            />
            <label
              htmlFor={subscription}
              className="block w-full px-4 py-2 text-sm font-medium text-gray-900 text-center cursor-pointer 
                         bg-gray-50 hover:bg-gray-100 peer-checked:bg-[#ebf0fa] peer-checked:text-indigo-600"
            >
              {subscription}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
