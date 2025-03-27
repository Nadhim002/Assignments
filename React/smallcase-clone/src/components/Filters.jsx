import React from 'react'

import SubscriptionSelector from "./filter_components/SubscriptionSelector"
import InvestAmountSelector from "./filter_components/InvestAmountSelector"
import VolatilitySelector from "./filter_components/VolatilitySelector"
import LaunchDateSelector from "./filter_components/LaunchDateSelector"
import InvestmentStrategySelector from "./filter_components/InvestmentStrategySelector"



export default function Filters() {
  return (

    <div className='flex flex-col gap-6 border' >

      <h2>Filters </h2>

      <SubscriptionSelector/>
      <InvestAmountSelector/>
      <VolatilitySelector />
      <LaunchDateSelector />
      <InvestmentStrategySelector/>
    </div>

  )
}
