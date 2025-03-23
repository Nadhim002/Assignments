import React from 'react'


export default function ButtonHolder( { leftCount , rightCount  , onClickHandlers , leftSelectedCount ,  rigtSelectedCount } ) {

  const buttonClassName = 'p-2 border border-black bg-gray-200'

  const isAllLeftDisabled = leftCount == 0 
  const isAllRighttDisabled = rightCount == 0 

  const isLeftDisabled = leftSelectedCount == 0 
  const isRighttDisabled = rigtSelectedCount == 0 

  return (
    <div className='flex flex-col justify-center'>
        <button className = {buttonClassName + `${ isAllRighttDisabled ?  "opacity-50" : "" }` } onClick=  { () => { onClickHandlers.toAllLeft() } } disabled = { isAllRighttDisabled  } >&lt;&lt;</button>
        <button className = {buttonClassName + `${ isRighttDisabled ?  "opacity-50" : "" }` } onClick=  { () => { onClickHandlers.toLeft() } } disabled = { isRighttDisabled  }  >&lt;</button>
        <button className = {buttonClassName + `${ isLeftDisabled ?  "opacity-50" : "" }` } onClick=  { () => { onClickHandlers.toRight() } } disabled = {  isLeftDisabled }  >&gt;</button>
        <button className = {buttonClassName  + `${ isAllLeftDisabled ?  "opacity-50" : "" }` } onClick=  { () => { onClickHandlers.toAllRight() } }  disabled = { isAllLeftDisabled  }  >&gt;&gt;</button>
    </div>
  )
}
