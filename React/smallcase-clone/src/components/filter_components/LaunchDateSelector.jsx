import React from "react"

export default function LaunchDateSelector({
  includeNewSmallCase,
  setIncludeNewSmallCase,
}) {
  return (
    <>
      <h3 className="font-semibold text-gray-900 my-2 ">{"Launch Date"}</h3>

      <div className="flex gap-2 px-2 py-2 hover:bg-gray-200 rounded-sm mr-2 " >

        <input
          type="checkbox"
          id="launch-date"
          className="mb-2"
          checked={includeNewSmallCase}
          onChange={() => {
            setIncludeNewSmallCase((prevState) => !prevState)
          }}
        />
        < label htmlFor="launch-date">{"Include new smallcases"}</label>
      </div>
    </>
  )
}
