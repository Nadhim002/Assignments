import React from "react"

export default function FilterInfo({ clearAllHandler, filterCount }) {
  return (
    <div className="flex justify-between items-center px-4 mt-4">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        <span>Filters</span>
        <div className="bg-gray-200 w-6 h-6 rounded-sm flex justify-center items-center">
          <span className="text-sm font-medium">{filterCount ?? 0}</span>
        </div>
      </h2>

      <button
        onClick={ clearAllHandler }
        className={`rounded-sm font-semibold  ${
          filterCount > 0
            ? "text-blue-500 hover:text-blue-600"
            : "text-gray-400 cursor-not-allowed"
        }`}
        disabled={filterCount === 0}
      >
        Clear All
      </button>
    </div>
  )
}
