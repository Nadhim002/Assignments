import React from "react"

import SortCase from "./TopNav"
import SubscriptionSelector from "./filter_components/SubscriptionSelector"
import InvestAmountSelector from "./filter_components/InvestAmountSelector"
import VolatilitySelector from "./filter_components/VolatilitySelector"
import LaunchDateSelector from "./filter_components/LaunchDateSelector"
import InvestmentStrategySelector from "./filter_components/InvestmentStrategySelector"

export default function Filters({
  subscriptionType,
  setSubscriptionType,
  investmentAmount,
  setInvestmentAmount,
  desiredVolatilities,
  setDesiredVolatilities,
  includeNewSmallCase,
  setIncludeNewSmallCase,
  preferredInvestmentStrategy,
  setPreferredInvestmentStrategy,
}) {
  return (
    <aside className="flex flex-col gap-2 ">
      

      <div>
        <h2 className="text-center p-4 text-2xl">Filters </h2>
      </div>



      <SubscriptionSelector
        setSubscriptionType={setSubscriptionType}
        subscriptionType={subscriptionType}
      />
      <InvestAmountSelector
        investmentAmount={investmentAmount}
        setInvestmentAmount={setInvestmentAmount}
      />
      <VolatilitySelector
        desiredVolatilities={desiredVolatilities}
        setDesiredVolatilities={setDesiredVolatilities}
      />
      <LaunchDateSelector
        includeNewSmallCase={includeNewSmallCase}
        setIncludeNewSmallCase={setIncludeNewSmallCase}
      />
      <InvestmentStrategySelector 
        preferredInvestmentStrategy = { preferredInvestmentStrategy }
        setPreferredInvestmentStrategy ={  setPreferredInvestmentStrategy }
         />
    </aside>
  )
}
