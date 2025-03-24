import React from "react"
import moment from "moment"
import UserLogo from "./UserLogo"

export default function MailCard({ cardInfo, isfavorite , mailClickHandler }) {
  return (


    <div className="flex rounded-b-sm  bg-white gap-5 p-4" onClick = { () => {
      console.log(cardInfo["id"]  )
      mailClickHandler( cardInfo["id"] )
      } }>

      <UserLogo letter = { cardInfo["from"]["name"][0] } />

      <div className="flex flex-col">
        <div>{"From : " + cardInfo["from"]["email"]} </div>
        <div>{"Subject : " + cardInfo["subject"]}</div>
        <div>{"Subject : " + cardInfo["short_description"]}</div>
        <div>{moment(cardInfo["date"]).format("DD/MM/YYYY h:mma")}</div>
      </div>
    </div>
  )
}
