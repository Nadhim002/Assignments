import React, { useState, useEffect } from "react"
import MailCards from "./MailCards"
import MailBody from "./MailBody"
import Filter from "./Filter.jsx"
import Loader from "./Loader.jsx"
import { emailsFetcher, emailBodyFetcher } from "../backend/apiUrls.js"

export default function MainBody() {

  const [filter, setFilter] = useState("All")

  const [cachedData, setCachedData] = useState([])
  const [loadingList, setLoadingList] = useState(false)
  const [errorList, setErrorList] = useState(false)

  const [mailSelected, setMailSelected] = useState(null)
  const [mailBodyData, setMailBodyData] = useState("")
  const [loadingBody, setLoadingBody] = useState(false)
  const [errorBody, setErrorBody] = useState(false)

  const [favoriteMail, setFavoriteMail] = useState(new Set())
  const [readedMail, setReadedMail] = useState(new Set())

  function mailClickHandler(id) {
    setReadedMail((prevSet) => new Set(prevSet).add(id))
    setMailSelected(id)
    bodyDataFetcher(id)
  }

  useEffect(() => {
    async function dataFetcher() {
      setLoadingList(true)

      try {
        const data = await emailsFetcher()
        setCachedData(() => [...data])
      } catch (err) {
        setErrorList(true)
      } finally {
        setLoadingList(false)
      }
    }

    dataFetcher()
  }, [])

  async function bodyDataFetcher(mailId) {

    setErrorBody(false)

    const storedData = localStorage.getItem(String(mailId))

    if (storedData) {
      setMailBodyData(JSON.parse(storedData))
      return
    }

    setLoadingBody(true)

    try {
      const data = await emailBodyFetcher(mailId)
      setMailBodyData(data)
    } catch (err) {
      setErrorBody(true)
      console.log(err.message)
    } finally {
      setLoadingBody(false)
    }
  }

  let filteredMailList = []

  filteredMailList = cachedData.filter((eachMail) => {
    if (mailSelected == eachMail.id) {
      return true
    }

    if (filter === "Read") return readedMail.has(String(eachMail.id))
    if (filter === "Unread") return !readedMail.has(String(eachMail.id))
    if (filter === "Favorites") return favoriteMail.has(String(eachMail.id))

    return true
  })

  return (
    <>
      <Filter
        setFilter={setFilter}
        filterSelected={filter}
        setMailSelected={setMailSelected}
      />

      <div
        className={
          "grid w-full py-6 " + (mailSelected != null && " grid-cols-[1fr_2fr]")
        }
      >
        {loadingList ? (
          <Loader message={"Please wait you mail list is laoding  ... "} />
        ) : errorList ? (
          <Loader message={"Something went Wrong while fecthing List "} isError = {true} />
        ) : (
          <MailCards
            filteredMailList={filteredMailList}
            readedMail={readedMail}
            favoriteMail={favoriteMail}
            mailClickHandler={mailClickHandler}
            mailSelected={mailSelected}
          />
        )}

        {mailSelected &&
          (loadingBody ? (
            <Loader message={"Your Mail Body is loading ... "} />
          ) : errorBody ? (
            <Loader message={"Something went Wrong "}  isError = {true}  />
          ) : (
            <MailBody
              mailInfo={cachedData.find((each) => each.id == mailSelected)}
              setFavoriteMail={setFavoriteMail}
              favoriteMail={favoriteMail}
              mailBodyData={mailBodyData}
            />
          ))}
      </div>
    </>
  )
}
