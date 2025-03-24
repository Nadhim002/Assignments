import React, { useState , useEffect } from 'react'
import {emailBodyFetcher} from "../backend/apiUrls.js"

export default function MailBody( { mailId  } ) {

    

   const [ mailBodyData , setMailBodyData ] = useState("")

   useEffect( () => {
  
     async function dataFetcher(mailId){
       try {
         const data = await emailBodyFetcher(mailId)
         console.log(data )
         setMailBodyData( data )
 
       } catch (err){
         console.log( err.message )
       }
 
     }
 
     dataFetcher( mailId )
 
   } , [  ] )

   console.log( mailBodyData )

  return (
    <div className='flex-grow-2'>{ mailBodyData["body"]  }</div>
  )
}
