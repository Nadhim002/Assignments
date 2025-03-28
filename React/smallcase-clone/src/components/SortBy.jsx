import React from "react"
import { ArrowUp , ArrowDown } from "lucide-react"

export default function SortBy({ setSortBy, sortBy }) {

  const sortByOptions = ["Popularity", "Minimum Amount", "Recently Rebalanced"]

  const monthOptionsMapper = {
    "1M": "monthly",
    "6M": "halfyearly",
    "1Y": "yearly",
    "3Y": "threeYear",
    "5Y": "fiveYear",
  }


  function onChangeForRegularSorts(sort) {
    setSortBy({ ...sortBy, selectedFilter: sort, selectedTimePeriod: null })
  }

  function onMonthOptionChangeChange( monthOption ){
    setSortBy({ ...sortBy, selectedFilter: null, selectedTimePeriod: monthOptionsMapper[ monthOption ] })
  }

  function sortingOrderHandler(){
    setSortBy({ ...sortBy, sortAscending : !sortBy["sortAscending"] })
  }


  return (
    <div>
      <ul className="items-center ">
        {sortByOptions.map((sort) => (
          <li
            key={sort}
            className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div className="flex items-center ps-3 justify-between">
              <label htmlFor={sort} className="flex items-center">
                {sort}
              </label>

              <input
                id={sort}
                type="radio"
                name="regular-filter"
                className="w-4 h-4 accent-blue-500 mb-2"
                checked={sort == sortBy["selectedFilter"]}
                onChange={() => {
                  onChangeForRegularSorts(sort)
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <h3>Returns</h3>

      <div className="items-center w-full text-sm font-medium text-gray-900 bg-white border flex justify-between">
        {Object.keys(monthOptionsMapper).map((monthOption) =>(
          <div key={monthOption} className="grow ">
            <input
              type="radio"
              id={monthOption}
              name="volatality"
              className="sr-only peer"
              onChange= { () => onMonthOptionChangeChange(monthOption) }
              checked={ monthOptionsMapper[ monthOption ] ==  sortBy["selectedTimePeriod"]  }
            />
            <label
              htmlFor={monthOption}
              className=" border border-gray-400  peer-checked:bg-indigo-200 flex flex-col justify-center items-center py-2"
            >
                { monthOption }
            </label>
          </div>
        ))}
      </div>


      <h3>Order By</h3>

      <button onClick={ sortingOrderHandler } className="flex">  { sortBy["sortAscending"] ?   <> <ArrowUp/>   <span>{"Ascending"}</span> </>: 
       <>  <ArrowDown/>   <span>{"Descending"}</span> </>
      }</button>



    </div>
  )
}
