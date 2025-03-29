import React from "react"

import FilterInfo from "./filter_components/FilterInfo"
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
  
  function findNoOfFilterApplied() {
    let count = 0

    if (subscriptionType) {
      count++
    }

    if (investmentAmount) {
      count++
    }

    if (includeNewSmallCase) {
      count++
    }

    count += desiredVolatilities.size + preferredInvestmentStrategy.size

    return count
  }

  function clearAllHandler() {
    setSubscriptionType(null)
    setInvestmentAmount(null)
    setDesiredVolatilities(new Set())
    setIncludeNewSmallCase(false)
    setPreferredInvestmentStrategy(new Set())
  }

  const filterCount = findNoOfFilterApplied()

  return (
    <aside className="flex flex-col gap-2 ite">
      <FilterInfo clearAllHandler={clearAllHandler} filterCount={filterCount} />

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
        preferredInvestmentStrategy={preferredInvestmentStrategy}
        setPreferredInvestmentStrategy={setPreferredInvestmentStrategy}
      />
    </aside>
  )
}
