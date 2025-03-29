import React from "react"
import SmallCaseCard from "./SmallCaseCard"

export default function SmallCases( { smallCaseData , selectedTimePeriod  } ) {



  return (
    <div className="px-2">
      {smallCaseData.map((cardInfo) => (
        <SmallCaseCard cardInfo={cardInfo} key={cardInfo["_id"]  } selectedTimePeriod = {selectedTimePeriod} />
      ))}
    </div>
  )
}
