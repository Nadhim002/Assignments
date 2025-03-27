import React from "react"

export default function Filter({ filterSelected, setFilter, setMailSelected }) {

  function onChangeHandler(filter) {
    setFilter(filter)
    setMailSelected(null)
  }

  const filtersAvailable = ["All", "Unread", "Read", "Favorites"]

  return (
    <div className="flex items-center gap-4">
      <span>Filter By :</span>

      <div className="flex items-center gap-4">
        {filtersAvailable.map((filter) => (
          <div className="relative" key={filter}>
            <input
              type="radio"
              id={filter}
              name="filter"
              className="peer hidden"
              onChange={() => onChangeHandler(filter)}
              checked={filter == filterSelected}
            />
            <label
              htmlFor={filter}
              className="cursor-pointer px-3 py-1 rounded-md block peer-checked:bg-green-200"
            >
              {filter}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
