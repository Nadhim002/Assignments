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

    return diffInYears >= 5
  }
}

export function dataSortHelper() {}

const a = {
  _id: "64955c65b1036992a90d878d",
  info: {
    profileVideo: { thumbnail: "", url: "", providerVideoId: "" },
    creator: "wright-research",
    owner: {
      userId: "5d319b96f6349c168c87c187",
      name: "Sonam Srivastava",
    },
    tags: [],
    tier: null,
    name: "Alpha Prime Momentum Model",
    shortDescription:
      "Concentrated Trend: High risk, high strategy aiming to generate alpha return with a few stocks",
    type: "Factor-Model",
    created: "2023-05-23T00:00:00.000Z",
    uploaded: "2023-06-23T00:00:00.000Z",
    updated: "2025-03-17T06:47:47.162Z",
    investmentStrategy: [
      { key: "momentum", displayName: "Momentum" },
      { key: "factorInvesting", displayName: "Factor Investing" },
      { key: "quantitative", displayName: "Quantitative" },
    ],
    publisher: "wright-research",
    publisherName: "Wright Research",
    rebalanceSchedule: "weekly",
    nextUpdate: "2025-03-23T16:00:00.000Z",
    pricing:
      "The advisory fees are applicable on this smallcase. See help for details.",
    slug: "concentrated-momentum-WRTMO_0018",
    micrositeUrl: "https://wrightresearch.smallcase.com/smallcase/WRTMO_0018",
    stateChange: {
      date: "2023-07-02T08:49:55.649Z",
      publisher: "wright-research",
      publisherName: "Wright Research",
    },
    blogURL:
      "https://www.wrightresearch.in/blog/alpha-prime-new-concentrated-momentum-portfolio/",
    lastRebalanced: "2025-03-02T00:00:00.000Z",
    publishedOnDate: "2023-06-23T00:00:00.000Z",
    constituentSharesAdjusted: false,
    legacy: {
      type: "Model-based",
      name: "Alpha Prime",
      createdAt: "2025-01-16T13:14:49.752Z",
      updatedAt: "2025-01-16T13:14:49.752Z",
    },
    investmentHorizon: "Long Term",
    nameAttributes: {
      baseName: "Alpha Prime",
      labelFactor: "Momentum",
      displayName: "Alpha Prime Momentum Model",
      createdAt: "2025-03-17T06:47:47.163Z",
      updatedAt: "2025-03-17T06:47:47.163Z",
    },
  },
  flags: {
    active: true,
    blocked: false,
    locked: false,
    private: true,
    preferredSipType: "WEIGHTS",
    historicalData: true,
    hasHighErrorRate: false,
  },
  stats: {
    returns: {
      daily: 0.0017134770485589534,
      weekly: 0.10859102951620891,
      monthly: 0.047716463202822634,
      quarterly: -0.15940999955339163,
      halfyearly: -0.1672659377148259,
      yearly: 0.11931685430036376,
      threeYear: 1.2881827258319678,
      fiveYear: 1.2881827258319678,
      sinceInception: 1.2881827258319678,
      sinceLaunch: 0,
    },
    ratios: {
      pe: 62.993780180179165,
      pb: 8.375313653086303,
      beta: null,
      volatility: null,
      valuation: null,
      peDiscount: 178.36526266122266,
      pbDiscount: 122.85132372322205,
      divYield: 0.10337371079006867,
      divYieldDifferential: -1.1789827481067852,
      "52wHigh": 282.19007785804604,
      "52wLow": 196.92493080926693,
      largeCapPercentage: 10.13691851,
      midCapPercentage: 12.754978389,
      smallCapPercentage: 67.27448067099999,
      marketCapCategory: "Small cap",
      momentum: -9.037631790030842,
      momentumRank: 982,
      ema: 229.05534274789161,
      lastCloseEma: 229.06067016732095,
      risk: 2.0293490279140163,
      riskLabel: "High Volatility",
      sharpe: -0.08678291008891137,
      sharpeRatio: 1.4659419699275795,
      cagr: 0.43129188802384566,
      cagrDuration: "2Y",
      cagr1y: 0.13293777214666624,
      cagr3y: null,
      cagr5y: null,
      cagrSinceLaunch: 0.43129188802384566,
      cagrSinceLaunchDuration: "2Y",
      oneYearLiveHistory: true,
      constituentCategoryDistribution: {
        Smallcap: 67.27,
        Midcap: 12.75,
        Largecap: 10.14,
        Debt: 9.83,
      },
      holdingAssetClass: "Multi-Asset",
      expenseRatio: null,
      standardDeviation: null,
      comparisonRatios: {
        expenseRatio: null,
        sharpeRatio: null,
        stdDeviation: null,
      },
    },
    indexValue: 229.5744891597879,
    unadjustedIndex: 229.5744891597879,
    launchDateIndex: 100,
    divReturns: 0.3907124278043325,
    minInvestAmountOverridden: false,
    lastCloseIndex: 228.42686838694158,
    minInvestAmount: 45876,
    minSipAmount: 5000,
    systemCalculatedMIA: 45876,
    investorCount: 12170,
    subscriberCount: 9366,
    lastIndexUpdatedDate: "2025-03-24T00:00:00.000Z",
  },
  benchmark: {
    id: ".NIFSMCP100",
    message: "Compare with 251st - 350th market cap stocks",
    index: ".NIFSMCP100",
    msg: "Compare with 251st - 350th market cap stocks",
  },
  assetUniverse: "IN",
  scid: "WRTMO_0018",
  brokerMeta: { flags: { popular: { rank: 8 } } },
  platformData: {
    ratios: { cagr: 0.43129188802384566, cagrDuration: "2Y CAGR" },
    flags: { isOlderThanThreeYears: false },
    defaultGraphDuration: "max",
  },
}
