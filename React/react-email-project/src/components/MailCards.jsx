import React from 'react'
import MailCard from './MailCard'
import Loader from './Loader'

export default function MailCards( {filteredMailList  , readedMail ,  favoriteMail  ,mailClickHandler , mailSelected  } ) {
  return (
         <div className="mail-list flex flex-col gap-6 h-[90vh] overflow-y-auto ">
   
           {filteredMailList && filteredMailList.length > 0 ? (
   
             filteredMailList.map((eachMail, index) => { 
   
               let isAlreadyreaded = readedMail.has(String(eachMail.id))
               let isFavorite = favoriteMail.has(String(eachMail.id))
   
               return (
                 <MailCard
                   cardInfo={eachMail}
                   isfavorite={isFavorite}
                   key={index}
                   mailClickHandler={mailClickHandler}
                   isAlreadyreaded={isAlreadyreaded}
                   mailSelected= { mailSelected}
                 />
               )
             })
           ) : (
            <Loader message={"No Mails to Show"} />
           )}
         </div>
  )
}
