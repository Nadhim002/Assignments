import React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import {monthOptionsMapper , sortByOptions } from "../data/mappers.js"

export default function SortBy({ setSortBy, sortBy }) {

  function onChangeForRegularSorts(sort) {
    setSortBy({ ...sortBy, selectedFilter: sort, selectedTimePeriod: null })
  }

  function onMonthOptionChangeChange(monthOption) {
    setSortBy({
      ...sortBy,
      selectedFilter: null,
      selectedTimePeriod: monthOptionsMapper[monthOption],
    })
  }

  function sortingOrderHandler() {
    setSortBy({ ...sortBy, sortAscending: !sortBy["sortAscending"] })
  }

  return (
    <section className="bg-white rounded-lg">
      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-900 mb-2">Sort By</h3>
        <ul className="space-y-1">
          {sortByOptions.map((sort) => (
            <li
              key={sort}
              className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-50"
            >
              <label
                htmlFor={sort}
                className="text-gray-700 cursor-pointer w-full"
              >
                {sort}
              </label>
              <input
                id={sort}
                type="radio"
                name="regular-filter"
                className="w-4 h-4 accent-blue-500"
                checked={sort == sortBy["selectedFilter"]}
                onChange={() => onChangeForRegularSorts(sort)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-900 mb-2">Returns</h3>
        <div className="grid grid-cols-5 gap-0 rounded-md overflow-hidden border border-gray-200">
          {Object.keys(monthOptionsMapper).map((monthOption) => (
            <div key={monthOption} className="relative">
              <input
                type="radio"
                id={monthOption}
                name="volatality"
                className="sr-only peer"
                onChange={() => onMonthOptionChangeChange(monthOption)}
                checked={
                  monthOptionsMapper[monthOption] ==
                  sortBy["selectedTimePeriod"]
                }
              />
              <label
                htmlFor={monthOption}
                className="block text-center py-2 cursor-pointer border-r border-gray-200 last:border-r-0 peer-checked:bg-indigo-100 peer-checked:text-indigo-700 hover:bg-gray-50"
              >
                {monthOption}
              </label>
            </div>
          ))}
        </div>
      </div>

      {(sortBy["selectedFilter"] || sortBy["selectedTimePeriod"]) && (
        <div className="mb-2">
          <h3 className="text-base font-medium text-gray-900 mb-2">Order By</h3>
          <button
            onClick={sortingOrderHandler}
            className="flex items-center gap-1 py-1 px-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            {sortBy["sortAscending"] ? (
              <>
                <ArrowUp className="text-gray-700" size={16} />
                <span>Low to High</span>
              </>
            ) : (
              <>
                <ArrowDown className="text-gray-700" size={16} />
                <span>High to Low</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
