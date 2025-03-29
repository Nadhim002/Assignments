export const tailwindColorCodesForVolatileLevel = {
  "Low Volatility": "bg-green-50 text-green-700",
  "Medium Volatility": "bg-amber-50 text-amber-700",
  "High Volatility": "bg-red-50 text-red-700",
}

export const InvestAmountLevelsMapper = {
  Any: null,
  "Under ₹ 5,000": 5000,
  "Under ₹ 25,000": 25000,
  "Under ₹ 50,000": 50000,
}

export const investmentStrategies = [
  "Asset Allocation",
  "Corporate Governance",
  "Dividend",
  "ESG",
  "Factor Investing",
  "Fundamental",
  "Goal Based",
  "Growth",
  "Momentum",
  "Quality",
  "Quantamental",
  "Quantitative",
  "Sector Tracker",
  "Technical",
  "Thematic",
  "Value",
]

export const subscriptionsAvailableMapper = {
  "Show all": null,
  "Free Access": "free",
  "Fee Based": "fee",
}

export const volatalityOptionsMapping = {
  Low: "Low Volatility",
  Medium: "Medium Volatility",
  High: "High Volatility",
}


export const monthOptionsMapper = {
  "1M": "monthly",
  "6M": "halfyearly",
  "1Y": "yearly",
  "3Y": "threeYear",
  "5Y": "fiveYear",
}


export const cardCagrDisplayHelper = {
  "monthly" : { label : "1M" , number : 1/12 } ,
  "halfyearly" :    { label : "6M" , number : 1/2 },  
  "yearly" :  { label : "1Y" , number : 1 } , 
   "threeYear" : { label : "3Y" , number : 3 } , 
   "fiveYear" :   { label : "5Y" , number : 5 },
}

export   const sortByOptions = ["Popularity", "Minimum Amount", "Recently Rebalanced"]


export function calculateCAGR(returnDecimal, years) {
  return Math.pow(1 + returnDecimal, 1 / years) - 1;
}
