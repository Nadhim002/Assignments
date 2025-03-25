import React, { useState, useEffect } from "react"
import { emailBodyFetcher } from "../backend/apiUrls.js"
import UserLogo from "./UserLogo.jsx"
import moment from "moment"

export default function MailBody({ mailInfo , setFavoriteMail  , favoriteMail }) {

  const { id, from, subject, date } = mailInfo
  const { name } = from

  const [mailBodyData, setMailBodyData] = useState("")
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    async function dataFetcher(mailId) {

      const storedData = localStorage.getItem( String(mailId) )

      if (storedData) {
        setMailBodyData(JSON.parse(storedData))
        setLoading(false)
        return
      }

      try {
        const data = await emailBodyFetcher(mailId)
        setMailBodyData(data)
        setLoading(false)
      } catch (err) {
        console.log(err.message)
      }
    }

    dataFetcher(id)
  }, [ id ] )

  return (

    loading ?   ( <div  className=" flex bg-white mx-6 p-6 h-[90vh] justify-center items-center" > Mail is Loading ...  </div>) :

    <article className=" flex bg-white mx-6 p-6 h-[90vh] overflow-y-auto">

      <aside>
        <UserLogo letter={name[0]} />
      </aside>

      <section className="content flex-1 flex flex-col px-4 "> 

        <header className="flex justify-between" >

          <h2>{subject}</h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="hidden" 
              checked={favoriteMail.has(id)} 
              onChange={() => {
                setFavoriteMail((prevSet) => {
                  const newSet = new Set(prevSet);
                  if (newSet.has(id)) {
                    newSet.delete(id)
                    localStorage.removeItem( String(id) )
                  } else {
                    newSet.add(id)
                    localStorage.setItem(String(id), JSON.stringify(mailBodyData))
                  }
                  return newSet
                })
              }} 
            />
            <span className={"p-2 rounded bg-pink-500 text-white font-bold"}>
              {favoriteMail.has(id) ? "Unmark Favorite" : "Mark as Favorite"}
            </span>
          </label>

        </header>

        <div>{moment(date).format("DD/MM/YYYY h:mma")}</div>

        <div className="pt-4"
          dangerouslySetInnerHTML={{ __html: mailBodyData["body"] }}
        ></div>

      </section>


    </article>
        
  )
}
