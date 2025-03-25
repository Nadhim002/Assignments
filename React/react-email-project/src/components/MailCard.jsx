import React from "react"
import moment from "moment"
import UserLogo from "./UserLogo"

export default function MailCard({ cardInfo, isfavorite , mailClickHandler  , isAlreadyreaded , mailSelected }) {

  const { id  , from , subject , short_description , date   } = cardInfo
  const {name  , email } =  from

  let squeezedShortDescription = (mailSelected) ? short_description.substring(0,30) + "..."    : short_description

  console.log( "id" , id , "selected id" , typeof mailSelected )

  return (
    <div className={"flex rounded-2xl h-32 gap-5 p-4 cursor-pointer  shadow-md " +   ( isAlreadyreaded ?  "bg-white " : " bg-gray-200 " ) + ( ( parseInt(mailSelected) == id ) ? ' border border-[#E54065] ' : "")  } onClick = { () => {
      mailClickHandler( id  )
      } }>

      <UserLogo letter = { name[0] } />

      <div className="flex flex-col">
        <div>{"From : " + email } </div>
        <div>{"Subject : " + subject }</div>
        <div>{"Subject : " + squeezedShortDescription }</div>
        <div className="flex gap-6">
          <div>{moment( date ).format("DD/MM/YYYY h:mma")}</div>
          { isfavorite && <span className="text-pink-400">favorite</span> }
        </div>
      </div>
    </div>
  )
}
