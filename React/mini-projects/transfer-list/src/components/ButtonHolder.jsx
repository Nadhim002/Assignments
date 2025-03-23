import React from 'react'

export default function ButtonHolder( { leftCount , rightCount  , onClickHandlers } ) {

  const buttonClassName = 'p-2 border border-black bg-gray-200'


  return (
    <div className='flex flex-col justify-center'>
        <button className = {buttonClassName + `${ (rightCount == 0 ) ?  "opacity-50" : "" }` } onClick=  { () => { onClickHandlers.toAllLeft() } } disabled = { rightCount == 0  } >&lt;&lt;</button>
        <button className = {buttonClassName} onClick=  { () => { onClickHandlers.toLeft() } } >&lt;</button>
        <button className = {buttonClassName} onClick=  { () => { onClickHandlers.toRight() } } >&gt;</button>
        <button className = {buttonClassName  + `${ (leftCount == 0 ) ?  "opacity-50" : "" }` } onClick=  { () => { onClickHandlers.toAllRight() } }  disabled = { leftCount == 0  }  >&gt;&gt;</button>
    </div>
  )
}
