// const filters = {
//     subscriptionType,
//     investmentAmount,
//     desiredVolatilities,
//     includeNewSmallCase,
//     preferredInvestmentStrategy
//   }

export function dataFilterHelper(filters, smallCaseData) {
  return [...smallCaseData].filter((caseData) => {
    return (
      filterByNameHelper(filters["filterByName"], caseData) &&
      filterBySubscriptionType(filters["subscriptionType"], caseData) &&
      filterByInvestmentAmount(filters["investmentAmount"], caseData) &&
      filterByDesiredVolatality(filters["desiredVolatilities"], caseData) &&
      filterByInvestmentStrategy(
        filters["preferredInvestmentStrategy"],
        caseData
      ) &&
      filterByIncludeNewSmallCase(filters["includeNewSmallCase"], caseData)
    )
  })
}

function filterByNameHelper(name, caseData) {
  return (
    name === "" || (caseData?.info?.name ?? "").toLowerCase().includes(name)
  )
}

//   { "Show all" : null , "Free Access" : "free" , "Fee Based" : "fee" }

function filterBySubscriptionType(subscriptionType, smallCaseData) {
  if (subscriptionType === null) {
    return true
  } else if (subscriptionType == "free") {
    return Boolean(smallCaseData?.info?.pricing)
  } else {
    return !Boolean(smallCaseData?.info?.pricing)
  }
}

// {
//     "Any" : null ,
//     "Under ₹ 5,000" : 5000 ,
//     "Under ₹ 25,000" : 25000 ,
//     "Under ₹ 50,000" : 50000
//    }

function filterByInvestmentAmount(investmentAmountToCheck, smallCaseData) {
  if (investmentAmountToCheck === null) {
    return true
  } else {
    const investAmountForGivenSmallCase =
      smallCaseData?.stats?.minInvestAmount || 0
    return investmentAmountToCheck > investAmountForGivenSmallCase
  }
}

// const volatalityOptionsMapping =  {
//     "Low" : "Low Volatility" ,
//     "Medium" : "Medium Volatility" ,
//     "High" : "High Volatility"
//  }

function filterByDesiredVolatality(desiredVolatilities, smallCaseData) {
  if (desiredVolatilities.size === 0) {
    return true
  } else {
    const volatilityOfGivenSmallCase = smallCaseData?.stats?.ratios?.riskLabel
    return desiredVolatilities.has(volatilityOfGivenSmallCase)
  }
}

// "info" , "investmentStrategy"

// "investmentStrategy": [
//     { "key": "momentum", "displayName": "Momentum" },
//     { "key": "factorInvesting", "displayName": "Factor Investing" },
//     { "key": "quantitative", "displayName": "Quantitative" }
//   ]

function filterByInvestmentStrategy(
  preferredInvestmentStrategy,
  smallCaseData
) {
  if (preferredInvestmentStrategy.size === 0) {
    return true
  } else {
    const investmentStrategiesOfGivenSmallCase =
      smallCaseData?.info?.investmentStrategy

    for (let investmentStrategy of investmentStrategiesOfGivenSmallCase) {
      if (preferredInvestmentStrategy.has(investmentStrategy?.displayName)) {
        return true
      }
    }
  }
  return false
}

//

function filterByIncludeNewSmallCase(includeNewSmallCase, caseData) {
  if (includeNewSmallCase) {
    return true
  } else {
    const created = caseData?.info?.created

    if (!created) {
      return true
    }

    const date1 = new Date(created)
    const date2 = new Date()

    const diffInMs = Math.abs(date2 - date1)
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365))

    return diffInYears >= 6
  }
}
