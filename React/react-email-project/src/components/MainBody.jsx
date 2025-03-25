import React, { useState, useEffect } from "react"
import MailCards from "./MailCards"
import MailBody from "./MailBody"
import Filter from "./Filter.jsx"
import { emailsFetcher } from "../backend/apiUrls.js"

export default function MainBody() {

  const [ filter , setFilter ] = useState("All")
  const [cachedData, setCachedData] = useState([])
  const [mailSelected, setMailSelected] = useState(null)

  const [favoriteMail, setFavoriteMail] = useState(new Set())
  const [readedMail, setReadedMail] = useState(new Set())

  const [loading, setLoading] = useState(true)


  function mailClickHandler( id ) {
    setReadedMail((prevSet) => new Set(prevSet).add(id))
    setMailSelected(id)
  }

  useEffect(() => {
    async function dataFetcher() {
      try {
        const data = await emailsFetcher()
        setCachedData(() => [...data])
        setLoading(false)
      } catch (err) {
        console.log(err.message)
      }
    }

    dataFetcher()
  }, [])


  let filteredMailList = []

  console.log( mailSelected )

  filteredMailList =   cachedData.filter((eachMail) => {

    if( mailSelected == eachMail.id ) {
      return true;
    }

    if(filter === 'Read') return readedMail.has(String(eachMail.id)) 
    if(filter === 'Unread') return !readedMail.has(String(eachMail.id)) 
    if(filter === 'Favorites') return favoriteMail.has(String(eachMail.id)) 

    return true;

  })



  return (
    <> 
   
    <Filter setFilter = { setFilter } filter = {filter} setMailSelected = {setMailSelected} />

    <div className={  "grid w-full py-6 " + ( mailSelected != null && " grid-cols-[1fr_2fr]" ) }>

    {  loading ? 
        <div>Please Wait Loading ... </div>      :
     <MailCards filteredMailList = {filteredMailList}  readedMail ={readedMail} favoriteMail ={favoriteMail} mailClickHandler = {mailClickHandler} mailSelected = {mailSelected} />}

      {mailSelected && (
        <MailBody
          mailInfo= { cachedData.find((each) => each.id == mailSelected) }
          setFavoriteMail={setFavoriteMail}
          favoriteMail = {favoriteMail}
        />
      )  }
      
    </div>

    </>
  )
}
