import React, { useState } from "react"

import ButtonHolder from "./ButtonHolder"
import ListHolder from "./ListHolder"
import { leftLisData, rightLisData } from "../assets/data.js"

export default function TransferList() {

  const [leftList, setLeftList] = useState(leftLisData)
  const [rightList, setRightList] = useState(rightLisData)

  function changeChecked( isLeft, id ) {

    if (isLeft) {
      const newStorage =leftList.map((each) => {
        if (each.id == id) {
          return { id: id, content: each.content, isSelected: !each.isSelected }
        }
        return each
      })
      setLeftList(newStorage)
    } else {
      const newStorage = rightList.map((each) => {
        if (each.id == id) {
          return { id: id, content: each.content, isSelected: !each.isSelected }
        }
        return each
      })
      setRightList(newStorage)
    }
  }

  function toLeft(){


  }

  function toAllLeft(){
    setLeftList([...leftList , ...rightList ])
    setRightList([])
  }

  function toRight() {}

  function toAllRight(){
    setRightList([...rightList , ...leftList ])
    setLeftList([])
  }

  const onClickHandlers = { toLeft , toAllLeft , toRight ,  toAllRight  }

  return (
    <div className="flex ">
      <ListHolder
        listData={leftList}
        changeChecked={changeChecked}
        isLeft={true}
      />
      <ButtonHolder leftCount = { leftList.length } rightCount = { rightList.length } onClickHandlers = {onClickHandlers} />
      <ListHolder
        listData={rightList}
        changeChecked={changeChecked}
        isLeft={false}
      />
    </div>
  )
}
