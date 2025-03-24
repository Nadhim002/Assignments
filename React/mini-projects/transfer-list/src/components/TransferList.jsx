import React, { useState } from "react"

import ButtonHolder from "./ButtonHolder"
import ListHolder from "./ListHolder"
import { leftLisData, rightLisData } from "../assets/data.js"

export default function TransferList() {
  const [leftList, setLeftList] = useState(leftLisData)
  const [rightList, setRightList] = useState(rightLisData)

  function changeChecked(isLeft, id) {
    if (isLeft) {
      const newStorage = leftList.map((each) => {
        if (each.id == id) {
          return { ...each, isSelected: !each.isSelected }
        }
        return each
      })
      setLeftList(newStorage)
    } else {
      const newStorage = rightList.map((each) => {
        if (each.id == id) {
          return {  ...each , isSelected: !each.isSelected }
        }
        return each
      })
      setRightList(newStorage)
    }
  }

  function toLeft() {

    const toMove = []
    const toRetain = []

    rightList.forEach((each) => {
      if (each.isSelected) {
        toMove.push({
          ...each ,
          isSelected: !each.isSelected,
        })
      } else{
        toRetain.push(each)
      }

    })

    setRightList( toRetain )
    setLeftList( [...leftList , ...toMove ] )

  }

  function toAllLeft() {
    setLeftList([...leftList, ...rightList])
    setRightList([])
  }

  function toRight(){

    const toMove = []
    const toRetain = []

    leftList.forEach((each) => {
      if (each.isSelected) {
        toMove.push({
          ...each ,
          isSelected: !each.isSelected,
        })
      } else{
        toRetain.push(each)
      }

    })

    setLeftList( toRetain )
    setRightList( [...rightList , ...toMove ] )

  }

  function toAllRight() {
    setRightList([...rightList, ...leftList])
    setLeftList([])
  }

  function noOfValuesSelected( list ){

    return list.reduce( ( count , curr ) => {

        if( curr["isSelected"] ){
            count += 1
        }

        return count

    } , 0 )

  }

  const onClickHandlers = { toLeft, toAllLeft, toRight, toAllRight }

  return (
    <div className="flex ">
      <ListHolder
        listData={leftList}
        changeChecked={changeChecked}
        isLeft={true}
      />
      <ButtonHolder
        leftCount={leftList.length}
        rightCount={rightList.length}
        onClickHandlers={onClickHandlers}
        leftSelectedCount = { noOfValuesSelected(leftList) }
        rigtSelectedCount = { noOfValuesSelected(rightList) }
      />
      <ListHolder
        listData={rightList}
        changeChecked={changeChecked}
        isLeft={false}
      />
    </div>
  )
}
