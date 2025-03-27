import React from "react"

export default function LaunchDateSelector({
  includeNewSmallCase,
  setIncludeNewSmallCase,
}) {
  return (
    <div className="flex gap-2 p-4 items-center">
      <input
        type="checkbox"
        id="launch-date"
        className="mb-2"
        checked={includeNewSmallCase}
        onChange={() => {
          setIncludeNewSmallCase((prevState) => !prevState)
        }}
      />
      <label htmlFor="launch-date">{"Include new smallcases"}</label>
    </div>
  )
}
