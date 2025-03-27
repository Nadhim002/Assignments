import React from "react"
import SmallCaseCard from "./SmallCaseCard"

export default function SmallCases( { smallCaseData } ) {



  return (
    <div>
      {smallCaseData.map((cardInfo) => (
        <SmallCaseCard cardInfo={cardInfo} key={cardInfo["_id"]} />
      ))}
    </div>
  )
}
