import React from "react"
import {
  tailwindColorCodesForVolatileLevel,
  monthOptionsMapper,
  cardCagrDisplayHelper,
  calculateCAGR,
} from "../data/mappers.js"

export default function SmallCaseCard({ cardInfo, selectedTimePeriod }) {
  const { info, stats, platformData, scid } = cardInfo
  const { shortDescription, publisherName, name, pricing } = info
  const { ratios, minInvestAmount, returns } = stats
  const { riskLabel } = ratios
  const { ratios: platFormRatio } = platformData
  const { cagrDuration, cagr } = platFormRatio
  const nameThreshold = 30

  let selectedCagrDuration = cagrDuration
  let selectedCagrValue = cagr
  if (selectedTimePeriod) {
    selectedCagrDuration = `${cardCagrDisplayHelper[selectedTimePeriod]["label"]} CAGR`
    selectedCagrValue = calculateCAGR(
      returns[selectedTimePeriod],
      cardCagrDisplayHelper[selectedTimePeriod]["number"]
    )
  }

  return (
    <article className="flex items-center border-b border-gray-200 py-6 hover:shadow-lg ">
      <div className="w-24 flex-shrink-0">
        <img
          src={`https://assets.smallcase.com/images/smallcases/160/${scid}.png`}
          alt={`${publisherName} logo`}
          className="h-20 w-20  rounded-md"
        />
      </div>

      <div className="w-1/2 pr-4">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-lg text-gray-900">
            {name.length < nameThreshold
              ? name
              : name.substring(0, nameThreshold) + "..."}
          </h3>
          {pricing && (
            <span className="text-xs font-semibold bg-purple-100 text-purple-600 px-2 py-0.5 rounded">
              Free Access
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-1 line-clamp-2">
          {shortDescription}
        </p>
        <p className="text-xs text-gray-500">by {publisherName}</p>
      </div>

      <div className="flex justify-between w-1/3">
        <div className="w-1/3 text-center">
          <p className="text-xs text-gray-500 mb-1">Min. Amount</p>
          <p className="text-md font-medium text-gray-800">
            ₹{minInvestAmount}
          </p>
        </div>

        <div className="w-1/3 text-center">
          <p className="text-xs text-gray-500 mb-1">{selectedCagrDuration}</p>
          <p
            className={`text-md font-semibold ${
              selectedCagrValue > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {(selectedCagrValue * 100).toFixed(2)}%
          </p>
        </div>

        <div
          className={
            "w-1/3 text-center flex items-center justify-center px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800 text-nowrap " +
            tailwindColorCodesForVolatileLevel[riskLabel]
          }
        >
          {riskLabel}
        </div>
      </div>
    </article>
  )
}
