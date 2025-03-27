import React from 'react'

export default function SmallCaseCard() {

  const cardInfo =
  {
    "_id": "5b520fc58e485457d0e82d1b",
    "info": {
      "creator": "smallcaseHQ",
      "owner": {
        "name": "Windmill Research",
        "userId": "669e3f7bbde17dfa697928e7"
      },
      "tags": [],
      "tier": null,
      "type": "All Weather Investing",
      "name": "Timeless Asset Allocation",
      "publisher": "smallcaseHQ",
      "shortDescription": "One investment for all market conditions. Works for everyone",
      "created": "2007-06-29T00:00:00.000Z",
      "updated": "2025-02-20T13:22:18.025Z",
      "nextUpdate": "2025-03-31T15:26:15.932Z",
      "blogURL": "https://www.smallcase.com/blog/introducing-timeless-asset-allocation-smallcase/",
      "uploaded": "2019-01-01T00:00:00.000Z",
      "rebalanceSchedule": "quarterly",
      "publisherName": "Windmill Capital",
      "lastRebalanced": "2024-12-31T00:00:00.000Z",
      "slug": "timeless-asset-allocation-SCAW_0001",
      "micrositeUrl": "https://smallcase.com/smallcase/timeless-asset-allocation-SCAW_0001",
      "investmentStrategy": [
        { "key": "assetAllocation", "displayName": "Asset Allocation" },
        { "key": "quantitative", "displayName": "Quantitative" }
      ],
      "profileVideo": { "providerVideoId": "", "thumbnail": "", "url": "" },
      "publishedOnDate": "2018-07-16T14:00:00.000Z",
      "legacy": {
        "type": "All Weather Investing",
        "name": "All Weather Investing",
        "createdAt": "2024-12-30T11:38:56.035Z",
        "updatedAt": "2024-12-30T11:38:56.035Z"
      },
      "nameAttributes": {
        "baseName": "Timeless",
        "displayName": "Timeless Asset Allocation",
        "createdAt": "2025-02-20T14:44:36.352Z",
        "updatedAt": "2025-02-20T14:44:36.352Z"
      },
      "constituentSharesAdjusted": false,
      "investmentHorizon": "Evergreen"
    },
    "flags": {
      "active": true,
      "locked": false,
      "private": false,
      "historicalData": true,
      "preferredSipType": "SHARES",
      "blocked": false,
      "hasHighErrorRate": false
    },
    "stats": {
      "returns": {
        "daily": 0.0003692940345645379,
        "weekly": 0.020173455897816828,
        "monthly": 0.023826863842643098,
        "quarterly": 0.03721441323657615,
        "halfyearly": 0.005757884895345899,
        "yearly": 0.15525871236075983,
        "threeYear": 0.4419862247590389,
        "fiveYear": 1.1673789149620761,
        "sinceInception": 5.996536261396483,
        "sinceLaunch": 0
      },
      "indexValue": 700.4134944939663,
      "unadjustedIndex": 700.4134944939663,
      "recommendedBuyAmount": 0,
      "divReturns": 0,
      "minInvestAmount": 2438,
      "lastCloseIndex": 699.3953436114504,
      "ratios": {
        "pe": null,
        "pb": null,
        "beta": null,
        "volatility": null,
        "valuation": null,
        "peDiscount": null,
        "pbDiscount": null,
        "divYield": 0,
        "divYieldDifferential": -1.34165596327707,
        "52wHigh": 701.0008300124068,
        "52wLow": 596.8866635356582,
        "largeCapPercentage": 38.898818950000006,
        "midCapPercentage": 0,
        "smallCapPercentage": 0,
        "momentum": -100,
        "momentumRank": 1,
        "ema": 681.732143854159,
        "lastCloseEma": 681.3294139153095,
        "risk": 0.48326004331156325,
        "riskLabel": "Low Volatility",
        "sharpe": 0.4246253707915699,
        "sharpeRatio": 2.2257938920449187,
        "cagr": 0.13399722057962427,
        "cagrDuration": "3Y",
        "cagr1y": 0.1601008061651985,
        "cagr3y": 0.13399722057962427,
        "cagr5y": 0.17466828177909033,
        "cagrSinceLaunch": 0.13347254418432764,
        "cagrSinceLaunchDuration": "6Y",
        "oneYearLiveHistory": true,
        "constituentCategoryDistribution": {
          "Largecap": 38.9,
          "Debt": 22.78,
          "Gold": 38.32
        },
        "holdingAssetClass": "Multi-Asset",
        "expenseRatio": null,
        "standardDeviation": null,
        "comparisonRatios": {
          "expenseRatio": null,
          "sharpeRatio": null,
          "stdDeviation": null
        }
      },
      "minSipAmount": 500,
      "minInvestAmountOverridden": false,
      "launchDateIndex": 100,
      "systemCalculatedMIA": 2438,
      "investorCount": 235791,
      "subscriberCount": 0,
      "lastIndexUpdatedDate": "2025-03-24T00:00:00.000Z"
    },
    "scid": "SCAW_0001",
    "benchmark": {
      "id": ".NIFTY100",
      "message": "As this smallcase mainly consists of large cap stocks",
      "index": ".NIFTY100",
      "msg": "As this smallcase mainly consists of large cap stocks"
    },
    "assetUniverse": "IN",
    "brokerMeta": { "flags": { "popular": { "rank": 1 } } },
    "platformData": {
      "ratios": { "cagr": 0.13399722057962427, "cagrDuration": "3Y CAGR" },
      "flags": { "isOlderThanThreeYears": true },
      "defaultGraphDuration": "3y"
    }
  }


  const {  info , stats , platformData , scid  } =  cardInfo

  const { shortDescription , publisherName , name } = info
  const { ratios , minInvestAmount } = stats
  const { riskLabel } = ratios
  const { ratios:  platFormRatio } =  platformData 
  const { cagrDuration , cagr  } = platFormRatio


  console.log(  riskLabel , minInvestAmount , publisherName , shortDescription , name , cagrDuration ,  (cagr*100).toFixed(2)  , scid  )


  return (
        <div className='card'>

          <img src={`https://assets.smallcase.com/images/smallcases/160/${scid}.png`} alt="" />
        </div>
      )
}
