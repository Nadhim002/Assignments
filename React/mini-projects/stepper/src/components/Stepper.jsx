import React from "react"
import Step from "./Step"

export default function Stepper({ currPage, pageData }) {
  const progressPercent = Math.min((currPage - 1) / 3, 1)

  return (
    <div className="flex justify-center h-20">
      <div className="w-4/5 h-0.5 bg-gray-400 absolute"></div>
      <div
        className={` progress-bar  h-0.5 bg-blue-400 absolute z-2 left-1/10`}
        style={{ width: `${progressPercent * 80}%` }}
      ></div>
      <div className="w-4/5 flex justify-between absolute  z-3 transform  translate-y-[-50%]">
        {pageData.map((eachPage, index) => {
          if (currPage - 1 == index) {
            return <Step eachPage={eachPage} key={index} isActive={true} />
          } else if (true && currPage - 1 > index) {
            return <Step eachPage={eachPage} key={index} isCompleted={true} />
          }

          return <Step eachPage={eachPage} key={index} />
        })}
      </div>
    </div>
  )
}
