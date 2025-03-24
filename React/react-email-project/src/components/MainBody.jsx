import React , {useState , useEffect } from 'react'
import MailCard from "./MailCard"
import MailBody from "./MailBody"
import { emailsFetcher , emailBodyFetcher } from "../backend/apiUrls.js"


export default function MainBody() {

  const [ pageNo , setPageNo ] = useState(1)
  const [ cachedData , setCachedData ] = useState({})
  const [ mailSelected , setMailSelected ] = useState(null)


  function mailClickHandler(id){ 
    console.log( id )
    setMailSelected(id) 
  }

  useEffect( () => {

    if( cachedData[pageNo] ) return

    async function dataFetcher(pageNo){
      try {
        const data = await emailsFetcher(pageNo)
        setCachedData((prevData) => ({ ...prevData , [pageNo] : data }))

      } catch (err){
        console.log( err.message )
      }

    }

    dataFetcher(pageNo)

  } , [ pageNo ] )


  
  return (


    <div className='flex' >

      <div className ='mail-list flex flex-col gap-6 flex-grow '>
        {cachedData[pageNo] && cachedData[pageNo].length > 0 ? (
          cachedData[pageNo].map((eachMail) => (
            <MailCard cardInfo={eachMail} isfavorite={false} key={eachMail.id} mailClickHandler = {mailClickHandler} />
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
      
      { mailSelected && <MailBody mailId  = { mailSelected } /> }

    </div>

  )
  
  
}
