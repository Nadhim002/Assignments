import React from "react"

export default function ListHolder({ listData , changeChecked , isLeft }) {
  return (
    <div className="flex flex-col gap-6 flex-grow items-center" >
      {listData.map((data) => (
        <div key={data.id}>
          <input type="checkbox" id={data.id} checked = {data.isSelected }  onChange={ () => { changeChecked( isLeft, data.id ) }  } />
          <label htmlFor={data.id}>{" " + data.content}</label>
        </div>
      ))}
    </div>
  )
}