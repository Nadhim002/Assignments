import React from "react"

export default function Step({ eachPage, isActive, isCompleted }) {
  let bgColor = "bg-gray-200"
  let pageNumber = eachPage.pageNo

  if (isActive) {
    bgColor = "bg-green-200"
  } else if (isCompleted) {
    bgColor = "bg-blue-400"
    pageNumber = "✔"
  }

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className={`w-8 h-8  rounded-full text-center p-2 ${bgColor}`}>
        {pageNumber}
      </div>
      <div className="absolute top-10 text-nowrap">{eachPage.content}</div>
    </div>
  )
}
